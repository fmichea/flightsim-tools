import { VerticalVisibilityShort } from 'components/metar/renderers/verticalVisibility/VerticalVisibilityShort';
import {
    TestDataVerticalVisibility_VV120_Data,
    TestDataVerticalVisibility_VVMISSING_Data,
} from 'tests/data/metar/verticalVisibility';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(VerticalVisibilityShort, {
    props: { data, prettyArgs: data },
});

describe('VerticalVisibilityShort', () => {
    test('simple value', () => {
        const { compWrapper } = setup(TestDataVerticalVisibility_VV120_Data);
        expect(compWrapper().text()).toEqual('Vertical visibility is estimated to be 12000 ft (120).');
    });

    test('missing data', () => {
        const { compWrapper } = setup(TestDataVerticalVisibility_VVMISSING_Data);
        expect(compWrapper().text()).toEqual('Vertical visibility could not be assessed (///).');
    });
});
