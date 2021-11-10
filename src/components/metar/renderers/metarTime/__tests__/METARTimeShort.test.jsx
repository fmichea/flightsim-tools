import { METARTimeShort } from 'components/metar/renderers/metarTime/METARTimeShort';
import { TestDataMetarPrefixes_TIME_Data } from 'tests/data/metar/metarPrefixes';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(METARTimeShort, {
    props: { data, prettyArgs: data },
});

describe('METARTimeShort', () => {
    test('displayed correctly', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_TIME_Data);
        expect(compWrapper().text()).toEqual(
            'METAR was generated on the 4th day of the month (04) at 11:50 UTC time (11 50).',
        );
    });
});
