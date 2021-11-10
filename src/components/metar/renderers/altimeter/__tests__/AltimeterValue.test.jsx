import { AltimeterValue } from 'components/metar/renderers/altimeter/AltimeterValue';
import {
    TestDataAltimeter_A3011_Data,
    TestDataAltimeter_A3011_Text,
    TestDataAltimeter_Q1020_Data,
    TestDataAltimeter_Q1020_Text,
} from 'tests/data/metar/altimeter';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(AltimeterValue, {
    props: { data, prettyArgs: data },
});

describe('AltimeterValue', () => {
    test('eu altimeter is displayed properly', () => {
        const { compWrapper } = setup(TestDataAltimeter_Q1020_Data);
        expect(compWrapper().text()).toEqual(TestDataAltimeter_Q1020_Text);
    });

    test('us altimeter is displayed properly', () => {
        const { compWrapper } = setup(TestDataAltimeter_A3011_Data);
        expect(compWrapper().text()).toEqual(TestDataAltimeter_A3011_Text);
    });
});
