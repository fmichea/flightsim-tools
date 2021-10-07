import { mountWithStore } from 'tests/lib/mountWithStore';
import { ColorSystemsShort } from 'components/metar/renderers/colorSystems/ColorSystemsShort';
import {
    TestDataColorSystems_BLUYLOREDBLACKBLUWHT_Data,
} from 'tests/data/metar/colorSystems';

const setup = (data) => mountWithStore(ColorSystemsShort, {
    props: { data, prettyArgs: data },
});

describe('ColorSystemsShort', () => {
    test('test value is displayed in full', () => {
        const { compWrapper } = setup(TestDataColorSystems_BLUYLOREDBLACKBLUWHT_Data);
        expect(compWrapper().text()).toEqual(
            'Color codes defined at a local level. Refer to local METAR reference for '
            + 'explanation on the code\'s meaning.',
        );
    });
});
