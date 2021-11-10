import { WindValue } from 'components/metar/renderers/wind/WindValue';
import {
    TestDataWind_090P00GP10MPS_Data,
    TestDataWind_090P00GP10MPS_Text,
    TestDataWind_12010G15KT_Data,
    TestDataWind_12010G15KT_Text,
    TestDataWind_20005KT_Data,
    TestDataWind_20005KT_Text,
    TestDataWind_CALM_Data,
    TestDataWind_CALM_Text,
    TestDataWind_VRB04KT_200V240_Data,
    TestDataWind_VRB04KT_200V240_Text,
} from 'tests/data/metar/wind';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(WindValue, {
    props: { data, prettyArgs: data },
});

describe('WindValue', () => {
    test('simple value is displayed', () => {
        const { compWrapper } = setup(TestDataWind_20005KT_Data);
        expect(compWrapper().text()).toEqual(TestDataWind_20005KT_Text);
    });

    test('simple value with gusts is displayed', () => {
        const { compWrapper } = setup(TestDataWind_12010G15KT_Data);
        expect(compWrapper().text()).toEqual(TestDataWind_12010G15KT_Text);
    });

    test('high speed value with gusts is displayed', () => {
        const { compWrapper } = setup(TestDataWind_090P00GP10MPS_Data);
        expect(compWrapper().text()).toEqual(TestDataWind_090P00GP10MPS_Text);
    });

    test('with variable wind direction is displayed', () => {
        const { compWrapper } = setup(TestDataWind_VRB04KT_200V240_Data);
        expect(compWrapper().text()).toEqual(TestDataWind_VRB04KT_200V240_Text.replace(/ /g, ''));
    });

    test('calm wind is displayed clearly', () => {
        const { compWrapper } = setup(TestDataWind_CALM_Data);
        expect(compWrapper().text()).toEqual(TestDataWind_CALM_Text);
    });
});
