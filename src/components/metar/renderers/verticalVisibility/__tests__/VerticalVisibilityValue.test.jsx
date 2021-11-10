import { VerticalVisibilityValue } from 'components/metar/renderers/verticalVisibility/VerticalVisibilityValue';
import {
    TestDataVerticalVisibility_VV120_Data,
    TestDataVerticalVisibility_VV120_Text,
    TestDataVerticalVisibility_VVMISSING_Data,
    TestDataVerticalVisibility_VVMISSING_Text,
} from 'tests/data/metar/verticalVisibility';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(VerticalVisibilityValue, {
    props: { data, prettyArgs: data },
});

describe('VerticalVisibilityValue', () => {
    test('simple value', () => {
        const { compWrapper } = setup(TestDataVerticalVisibility_VV120_Data);
        expect(compWrapper().text()).toEqual(TestDataVerticalVisibility_VV120_Text);
    });

    test('missing data', () => {
        const { compWrapper } = setup(TestDataVerticalVisibility_VVMISSING_Data);
        expect(compWrapper().text()).toEqual(TestDataVerticalVisibility_VVMISSING_Text);
    });
});
