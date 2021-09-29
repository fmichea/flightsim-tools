import { mountWithStore } from 'tests/lib/mountWithStore';
import { PresentWeatherShort } from 'components/metar/renderers/presentWeather/PresentWeatherShort';
import {
    TestDataPresentWeather_MVCBLGRFG_Data,
    TestDataPresentWeather_PSHRA_Data,
    TestDataPresentWeather_SN_Data,
} from 'tests/data/metar/presentWeather';

const setup = (data) => mountWithStore(PresentWeatherShort, {
    props: { data, prettyArgs: data },
});

describe('PresentWeatherShort', () => {
    test('heavy rain showers', () => {
        const { compWrapper } = setup(TestDataPresentWeather_PSHRA_Data);
        expect(compWrapper().text()).toEqual(
            'Weather report suggests heavy (+) rain (RA). Weather is '
            + 'described as coming in showers (SH).',
        );
    });

    test('simple snow', () => {
        const { compWrapper } = setup(TestDataPresentWeather_SN_Data);
        expect(compWrapper().text()).toEqual('Weather report suggests snow (SN).');
    });

    test('complex case', () => {
        const { compWrapper } = setup(TestDataPresentWeather_MVCBLGRFG_Data);

        // Extra space after fog is coming from the external link.
        expect(compWrapper().text()).toEqual(
            'Weather report suggests light (-) hail (GR) mainly, with bouts of fog  (FG)'
            + ' in the vincinity of the airport (VC). Weather is described as blowing (BL).',
        );
    });
});
