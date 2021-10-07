import { mountWithStore } from 'tests/lib/mountWithStore';
import { ColorSystemsValue } from 'components/metar/renderers/colorSystems/ColorSystemsValue';
import {
    TestDataColorSystems_BLUYLOREDBLACKBLUWHT_Data,
    TestDataColorSystems_BLUYLOREDBLACKBLUWHT_Text,
} from 'tests/data/metar/colorSystems';

const setup = (data) => mountWithStore(ColorSystemsValue, {
    props: { data, prettyArgs: data },
});

describe('ColorSystemsValue', () => {
    test('test value is displayed in full', () => {
        const { compWrapper } = setup(TestDataColorSystems_BLUYLOREDBLACKBLUWHT_Data);
        expect(compWrapper().text()).toEqual(
            TestDataColorSystems_BLUYLOREDBLACKBLUWHT_Text.replace(/\s/g, ''),
        );
    });
});
