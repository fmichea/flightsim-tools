import { WindShort } from 'components/metar/renderers/wind/WindShort';
import {
    TestDataWind_090P00GP10MPS_Data,
    TestDataWind_12010G15KT_Data,
    TestDataWind_20005KT_Data,
    TestDataWind_CALM_Data,
    TestDataWind_VRB04KT_200V240_Data,
} from 'tests/data/metar/wind';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(WindShort, {
    props: { data, prettyArgs: data },
});

describe('WindShort', () => {
    test('simple value is displayed', () => {
        const { compWrapper } = setup(TestDataWind_20005KT_Data);
        expect(compWrapper().text()).toEqual(
            'Wind is mainly coming from 200° (200). It has an average speed of 5 knots (05 KT).',
        );
    });

    test('simple value with gusts is displayed', () => {
        const { compWrapper } = setup(TestDataWind_12010G15KT_Data);
        expect(compWrapper().text()).toEqual(
            'Wind is mainly coming from 120° (120). It has an average speed of 10 knots (10 KT),'
            + ' with gusts of 15 knots (15 KT).',
        );
    });

    test('high speed value with gusts is displayed', () => {
        const { compWrapper } = setup(TestDataWind_090P00GP10MPS_Data);
        expect(compWrapper().text()).toEqual(
            'Wind is mainly coming from 90° (090). It has an average speed of 100 m/s (P00 MPS),'
            + ' with gusts of 110 m/s (P10 MPS).',
        );
    });

    test('with variable wind direction is displayed', () => {
        const { compWrapper } = setup(TestDataWind_VRB04KT_200V240_Data);
        expect(compWrapper().text()).toEqual(
            'Wind is not coming from any particular direction (VRB), with variations from 200° to 240°'
            + ' (200 and 240). It has an average speed of 4 knots (04 KT).',
        );
    });

    test('calm wind is displayed clearly', () => {
        const { compWrapper } = setup(TestDataWind_CALM_Data);
        expect(compWrapper().text()).toEqual(
            'Wind is noted as calm, with no particular direction or speed. (00000KT)',
        );
    });
});
