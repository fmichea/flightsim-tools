import { ParserState } from 'lib/metar/parserState';
import { parseTrend } from 'lib/metar/parsers/trend';
import {
    TestDataTrend_BECMG_Data,
    TestDataTrend_BECMG_Text,
    TestDataTrend_NOSIG_Data,
    TestDataTrend_NOSIG_Text,
    TestDataTrend_TEMPO_Data,
    TestDataTrend_TEMPO_Text,
} from 'tests/data/metar/trend';

describe('parseTrend', () => {
    test('nosig is parsed properly', () => {
        const parser = new ParserState(TestDataTrend_NOSIG_Text);
        expect(parseTrend(parser)).toEqual(TestDataTrend_NOSIG_Data);
    });

    test('becoming with two time info', () => {
        const parser = new ParserState(TestDataTrend_BECMG_Text);
        expect(parseTrend(parser)).toEqual(TestDataTrend_BECMG_Data);
    });

    test('temporary with one time info', () => {
        const parser = new ParserState(TestDataTrend_TEMPO_Text);
        expect(parseTrend(parser)).toEqual(TestDataTrend_TEMPO_Data);
    });

    test('invalid value is ignored', () => {
        const parser = new ParserState('METAR');
        expect(parseTrend(parser)).toEqual(null);
    });
});
