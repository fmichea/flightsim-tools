import { parseAltimeter } from 'lib/metar/parsers/altimeter';
import { ParserState } from 'lib/metar/parserState';
import {
    TestDataAltimeter_A3011_Data,
    TestDataAltimeter_A3011_Text,
    TestDataAltimeter_Axxxx_Data,
    TestDataAltimeter_Axxxx_Text,
    TestDataAltimeter_Q1020_Data,
    TestDataAltimeter_Q1020_Text,
} from 'tests/data/metar/altimeter';

describe('parseAltimeter', () => {
    test('altimeter value using the Q notation', () => {
        const parser = new ParserState(TestDataAltimeter_Q1020_Text);

        const result = parseAltimeter(parser);
        expect(result).toEqual(TestDataAltimeter_Q1020_Data);
    });

    test('altimeter value using the A notation', () => {
        const parser = new ParserState(TestDataAltimeter_A3011_Text);

        const result = parseAltimeter(parser);
        expect(result).toEqual(TestDataAltimeter_A3011_Data);
    });

    test('altimeter not reported', () => {
        const parser = new ParserState(TestDataAltimeter_Axxxx_Text);
        expect(parseAltimeter(parser)).toEqual(TestDataAltimeter_Axxxx_Data);
    });

    test('not an altimeter setting is ignored', () => {
        const parser = new ParserState('METAR');

        const result = parseAltimeter(parser);
        expect(result).toEqual(null);
    });
});
