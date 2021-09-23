import { mountWithStore } from 'tests/lib/mountWithStore';
import { TestDataTrend_NOSIG_Data, TestDataTrend_NOSIG_Text } from 'tests/data/metar/trend';
import { TrendValue } from 'components/metar/renderers/trend/TrendValue';

const setup = (data) => mountWithStore(TrendValue, {
    props: { data, prettyArgs: data },
});

describe('TrendValue', () => {
    test('no change expected', () => {
        const { compWrapper } = setup(TestDataTrend_NOSIG_Data);
        expect(compWrapper().text()).toEqual(TestDataTrend_NOSIG_Text);
    });
});
