import { RunwayVisualRangeShort } from 'components/metar/renderers/runwayVisualRange/RunwayVisualRangeShort';
import {
    TestDataRunwayVisualRange_R042000_Data,
    TestDataRunwayVisualRange_R13P7000_Data,
    TestDataRunwayVisualRange_R22M0500_Data,
} from 'tests/data/metar/runwayVisualRange';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(RunwayVisualRangeShort, {
    props: { data, prettyArgs: data },
});

describe('RunwayVisualRangeShort', () => {
    test('basic value is explained', () => {
        const { compWrapper } = setup(TestDataRunwayVisualRange_R042000_Data);
        expect(compWrapper().text()).toEqual('Visual range for runway 04 (04) is 2000 meters (2000).');
    });

    test('another pretty basic value', () => {
        const { compWrapper } = setup(TestDataRunwayVisualRange_R22M0500_Data);
        expect(compWrapper().text()).toEqual('Visual range for runway 22 (22) is at most (M) 500 meters (0500).');
    });

    test('final basic value', () => {
        const { compWrapper } = setup(TestDataRunwayVisualRange_R13P7000_Data);
        expect(compWrapper().text()).toEqual('Visual range for runway 13 (13) is at least (P) 7000 meters (7000).');
    });
});
