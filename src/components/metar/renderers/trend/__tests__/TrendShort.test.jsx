import { mountWithStore } from 'tests/lib/mountWithStore';
import { TrendShort } from 'components/metar/renderers/trend/TrendShort';
import { TestDataTrend_NOSIG_Data } from 'tests/data/metar/trend';

const setup = (data) => mountWithStore(TrendShort, {
    props: { data, prettyArgs: data },
});

describe('TrendShort', () => {
    test('no change expected', () => {
        const { compWrapper } = setup(TestDataTrend_NOSIG_Data);
        expect(compWrapper().text()).toEqual('No Significant Change is expected to occur. (NOSIG)');
    });
});
