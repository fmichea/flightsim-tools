import { mountWithStore } from 'tests/lib/mountWithStore';
import { TestDataMissingData_Data, TestDataMissingData_Text } from 'tests/data/metar/missingData';
import { MissingDataValue } from 'components/metar/renderers/missingData/MissingDataValue';

const setup = (data) => mountWithStore(MissingDataValue, {
    props: { data, prettyArgs: data },
});

describe('MissingDataValue', () => {
    test('a simple message is displayed', () => {
        const { compWrapper } = setup(TestDataMissingData_Data);
        expect(compWrapper().text()).toEqual(TestDataMissingData_Text);
    });
});
