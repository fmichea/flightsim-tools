import { SeaSurfaceValue } from 'components/metar/renderers/seaSurface/SeaSurfaceValue';
import {
    TestDataSeaSurface_W12S4_Data,
    TestDataSeaSurface_W12S4_Text,
    TestDataSeaSurface_WM01H014_Data,
    TestDataSeaSurface_WM01H014_Text,
} from 'tests/data/metar/seaSurface';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(SeaSurfaceValue, {
    props: { data, prettyArgs: data },
});

describe('SeaSurfaceValue', () => {
    test('sea surface code mode', () => {
        const { compWrapper } = setup(TestDataSeaSurface_W12S4_Data);
        expect(compWrapper().text()).toEqual(TestDataSeaSurface_W12S4_Text);
    });

    test('wave height mode', () => {
        const { compWrapper } = setup(TestDataSeaSurface_WM01H014_Data);
        expect(compWrapper().text()).toEqual(TestDataSeaSurface_WM01H014_Text);
    });
});
