import { mountWithStore } from 'tests/lib/mountWithStore';
import { AltimeterShort } from 'components/metar/renderers/altimeter/AltimeterShort';
import {
    TestDataAltimeter_A3011_Data, TestDataAltimeter_Axxxx_Data,
    TestDataAltimeter_Q1020_Data,
} from 'tests/data/metar/altimeter';

const setup = (data) => mountWithStore(AltimeterShort, {
    props: { data, prettyArgs: data },
});

describe('AltimeterShort', () => {
    test('eu altimeter is displayed properly', () => {
        const { compWrapper } = setup(TestDataAltimeter_Q1020_Data);

        expect(compWrapper().text()).toEqual(
            'Altimeter setting for airport is expressed in hectopascals (Q) and '
            + 'should be set to 1020 hPA (1020)',
        );
    });

    test('us altimeter is displayed properly', () => {
        const { compWrapper } = setup(TestDataAltimeter_A3011_Data);

        expect(compWrapper().text()).toEqual(
            'Altimeter setting for airport is expressed in inches of mercury (A) and '
            + 'should be set to 30.11 inHg (3011)',
        );
    });

    test('unknown altimeter value', () => {
        const { compWrapper } = setup(TestDataAltimeter_Axxxx_Data);

        expect(compWrapper().text()).toEqual(
            'Altimeter setting for airport is expressed in inches of mercury (A) but '
            + 'value could not be reported (////)',
        );
    });
});
