import { AirportIdentifierValue } from 'components/metar/renderers/airportIdentifier/AirportIdenfitierValue';
import {
    TestDataMetarPrefixes_K0J4_Data,
    TestDataMetarPrefixes_K0J4_Text,
    TestDataMetarPrefixes_LFMN_Data,
    TestDataMetarPrefixes_LFMN_Text,
} from 'tests/data/metar/metarPrefixes';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(AirportIdentifierValue, {
    props: { data, prettyArgs: data },
});

describe('AirportIdentifierValue', () => {
    test('all letters value', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_LFMN_Data);
        expect(compWrapper().text()).toEqual(TestDataMetarPrefixes_LFMN_Text);
    });

    test('smaller airport', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_K0J4_Data);
        expect(compWrapper().text()).toEqual(TestDataMetarPrefixes_K0J4_Text);
    });
});
