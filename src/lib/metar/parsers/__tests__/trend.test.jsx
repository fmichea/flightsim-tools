import { ParserState } from 'lib/metar/parserState';
import { parseTrend } from 'lib/metar/parsers/trend';
import { TestDataTrend_NOSIG_Data, TestDataTrend_NOSIG_Text } from 'tests/data/metar/trend';

describe('parseTrend', () => {
    test('nosig is parsed properly', () => {
        const parser = new ParserState(TestDataTrend_NOSIG_Text);
        expect(parseTrend(parser)).toEqual(TestDataTrend_NOSIG_Data);
    });

    test('invalid value is ignored', () => {
        const parser = new ParserState('METAR');
        expect(parseTrend(parser)).toEqual(null);
    });
});
