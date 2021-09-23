import { ParserState } from 'lib/metar/parserState';
import { TestDataMissingData_Data, TestDataMissingData_Text } from 'tests/data/metar/missingData';
import { parseMissingData } from 'lib/metar/parsers/missingData';

describe('parseMissingData', () => {
    test('value is parsed correctly', () => {
        const parser = new ParserState(TestDataMissingData_Text);
        expect(parseMissingData(parser)).toEqual(TestDataMissingData_Data);
    });

    test('invalid value is ignored', () => {
        const parser = new ParserState('METAR');
        expect(parseMissingData(parser)).toEqual(null);
    });
});
