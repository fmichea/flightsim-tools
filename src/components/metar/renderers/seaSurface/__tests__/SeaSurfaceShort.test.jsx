import { SeaSurfaceShort } from 'components/metar/renderers/seaSurface/SeaSurfaceShort';
import {
    TestDataSeaSurface_W12S4_Data,
    TestDataSeaSurface_WM01H014_Data,
} from 'tests/data/metar/seaSurface';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(SeaSurfaceShort, {
    props: { data, prettyArgs: data },
});

describe('SeaSurfaceShort', () => {
    test('sea surface code mode', () => {
        const { compWrapper } = setup(TestDataSeaSurface_W12S4_Data);
        expect(compWrapper().text()).toEqual(
            'Sea surface water temperature is 12°C (12). Sea activity is described as '
            + 'moderate with waves between 1.25 and 2.5 meters in height (4).',
        );
    });

    test('wave height mode', () => {
        const { compWrapper } = setup(TestDataSeaSurface_WM01H014_Data);
        expect(compWrapper().text()).toEqual(
            'Sea surface water temperature is -1°C (M01). Wave height is 1.4 meters (014).',
        );
    });
});
