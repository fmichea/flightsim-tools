import { TrendValue } from 'components/metar/renderers/trend/TrendValue';
import {
    TestDataTrend_BECMG_Data,
    TestDataTrend_NOSIG_Data,
    TestDataTrend_NOSIG_Text,
    TestDataTrend_TEMPO_Data,
} from 'tests/data/metar/trend';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(TrendValue, {
    props: { data, prettyArgs: data },
});

describe('TrendValue', () => {
    test('no change expected', () => {
        const { compWrapper } = setup(TestDataTrend_NOSIG_Data);
        expect(compWrapper().text()).toEqual(TestDataTrend_NOSIG_Text);
    });

    test('becoming between two times', () => {
        const { compWrapper } = setup(TestDataTrend_BECMG_Data);
        expect(compWrapper().text()).toEqual('BECMGFM1100TL1200');
    });

    test('temporary at time', () => {
        const { compWrapper } = setup(TestDataTrend_TEMPO_Data);
        expect(compWrapper().text()).toEqual('TEMPOAT1432');
    });
});
