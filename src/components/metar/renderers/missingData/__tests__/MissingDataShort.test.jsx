import { mountWithStore } from 'tests/lib/mountWithStore';
import { MissingDataShort } from 'components/metar/renderers/missingData/MissingDataShort';
import { TestDataMissingData_Data } from 'tests/data/metar/missingData';

const setup = (data) => mountWithStore(MissingDataShort, {
    props: { data, prettyArgs: data },
});

describe('MissingDataShort', () => {
    test('a simple message is displayed', () => {
        const { compWrapper } = setup(TestDataMissingData_Data);
        expect(compWrapper().text()).toEqual(
            'Information was missing or could not be reported by automated system. (//////).',
        );
    });
});
