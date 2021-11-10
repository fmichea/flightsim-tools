import { PresentWeatherValue } from 'components/metar/renderers/presentWeather/PresentWeatherValue';
import {
    TestDataPresentWeather_MVCBLGRFG_Data,
    TestDataPresentWeather_MVCBLGRFG_Text,
    TestDataPresentWeather_PSHRA_Data,
    TestDataPresentWeather_PSHRA_Text,
    TestDataPresentWeather_SN_Data,
    TestDataPresentWeather_SN_Text,
} from 'tests/data/metar/presentWeather';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(PresentWeatherValue, {
    props: { data, prettyArgs: data },
});

describe('PresentWeatherValue', () => {
    test('heavy rain showers', () => {
        const { compWrapper } = setup(TestDataPresentWeather_PSHRA_Data);
        expect(compWrapper().text()).toEqual(TestDataPresentWeather_PSHRA_Text);
    });

    test('simple snow', () => {
        const { compWrapper } = setup(TestDataPresentWeather_SN_Data);
        expect(compWrapper().text()).toEqual(TestDataPresentWeather_SN_Text);
    });

    test('complex case', () => {
        const { compWrapper } = setup(TestDataPresentWeather_MVCBLGRFG_Data);
        expect(compWrapper().text()).toEqual(TestDataPresentWeather_MVCBLGRFG_Text);
    });
});
