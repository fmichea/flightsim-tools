import { AirportIdentifierShort } from 'components/metar/renderers/airportIdentifier/AirportIdentifierShort';
import { TestDataMetarPrefixes_LFMN_Data } from 'tests/data/metar/metarPrefixes';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(AirportIdentifierShort, {
    props: { data, prettyArgs: data },
});

describe('AirportIdentifierShort', () => {
    test('identifier is explained in simple sentense', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_LFMN_Data);
        expect(compWrapper().text()).toEqual(
            'LFMN is the ICAO code of the airport for which this METAR was generated.',
        );
    });
});
