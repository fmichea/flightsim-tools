import { mountWithStore } from 'tests/lib/mountWithStore';
import {
    TestDataRunwayVisualRange_R042000_Data,
    TestDataRunwayVisualRange_R042000_Text,
    TestDataRunwayVisualRange_R13P7000_Data,
    TestDataRunwayVisualRange_R13P7000_Text,
    TestDataRunwayVisualRange_R22M0500_Data,
    TestDataRunwayVisualRange_R22M0500_Text,
} from 'tests/data/metar/runwayVisualRange';
import { RunwayVisualRangeValue } from 'components/metar/renderers/runwayVisualRange/RunwayVisualRangeValue';

const setup = (data) => mountWithStore(RunwayVisualRangeValue, {
    props: { data, prettyArgs: data },
});

describe('RunwayVisualRangeValue', () => {
    test('basic value is explained', () => {
        const { compWrapper } = setup(TestDataRunwayVisualRange_R042000_Data);
        expect(compWrapper().text()).toEqual(TestDataRunwayVisualRange_R042000_Text);
    });

    test('another pretty basic value', () => {
        const { compWrapper } = setup(TestDataRunwayVisualRange_R22M0500_Data);
        expect(compWrapper().text()).toEqual(TestDataRunwayVisualRange_R22M0500_Text);
    });

    test('final basic value', () => {
        const { compWrapper } = setup(TestDataRunwayVisualRange_R13P7000_Data);
        expect(compWrapper().text()).toEqual(TestDataRunwayVisualRange_R13P7000_Text);
    });
});
