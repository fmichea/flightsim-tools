import { mountWithStore } from 'tests/lib/mountWithStore';
import { TrendShort } from 'components/metar/renderers/trend/TrendShort';
import { TestDataTrend_BECMG_Data, TestDataTrend_NOSIG_Data, TestDataTrend_TEMPO_Data } from 'tests/data/metar/trend';

const setup = (data) => mountWithStore(TrendShort, {
    props: { data, prettyArgs: data },
});

describe('TrendShort', () => {
    test('no change expected', () => {
        const { compWrapper } = setup(TestDataTrend_NOSIG_Data);
        expect(compWrapper().text()).toEqual('No Significant Change is expected to occur. (NOSIG)');
    });

    test('becoming between two times', () => {
        const { compWrapper } = setup(TestDataTrend_BECMG_Data);
        expect(compWrapper().text()).toEqual(
            'Weather conditions are expected to change (BECMG). Change is expected from 11:00 '
            + '(FM1100), until 12:00 (TL1200). All the following items with the same background are part '
            + 'of this trend change.',
        );
    });

    test('temporary at time', () => {
        const { compWrapper } = setup(TestDataTrend_TEMPO_Data);
        expect(compWrapper().text()).toEqual(
            'Weather conditions are expected to temporarily change (TEMPO). Change is expected at '
            + '14:32 (AT1432). All the following items with the same background are part of this trend change.',
        );
    });
});
