import { ParserState } from 'lib/metar/parserState';
import {
    parseAirportICAOCode, parseAuto, parseCOR, parseMETARTime, parseNIL, skipMETARPrefix,
} from 'lib/metar/parsers/metarPrefixes';
import { TokenTypes } from 'lib/metar/enums';
import {
    TestDataMetarPrefixes_AUTO_Data,
    TestDataMetarPrefixes_AUTO_Text,
    TestDataMetarPrefixes_COR_Data,
    TestDataMetarPrefixes_COR_Text,
    TestDataMetarPrefixes_K0J4_Data,
    TestDataMetarPrefixes_K0J4_Text,
    TestDataMetarPrefixes_LFMN_Data,
    TestDataMetarPrefixes_LFMN_Text,
    TestDataMetarPrefixes_METAR_Data,
    TestDataMetarPrefixes_METAR_Text,
    TestDataMetarPrefixes_NIL_Data,
    TestDataMetarPrefixes_NIL_Text,
    TestDataMetarPrefixes_SPECI_Data,
    TestDataMetarPrefixes_SPECI_Text,
    TestDataMetarPrefixes_TIME_Data,
    TestDataMetarPrefixes_TIME_Text,
} from 'tests/data/metar/metarPrefixes';

describe('metarPrefixes', () => {
    describe('skipMETARPrefix', () => {
        test('standard metar prefix 1 is parsed', () => {
            const parser = new ParserState(TestDataMetarPrefixes_METAR_Text);
            expect(skipMETARPrefix(parser)).toEqual(TestDataMetarPrefixes_METAR_Data);
        });

        test('standard metar prefix 2 is parsed', () => {
            const parser = new ParserState(TestDataMetarPrefixes_SPECI_Text);
            expect(skipMETARPrefix(parser)).toEqual(TestDataMetarPrefixes_SPECI_Data);
        });

        test('not recognized is ignored', () => {
            const parser = new ParserState('LFMN');
            expect(skipMETARPrefix(parser)).toEqual(null);
        });
    });

    describe('parseAirportICAOCode', () => {
        test('airport code is parsed correctly', () => {
            const parser = new ParserState(TestDataMetarPrefixes_LFMN_Text);
            expect(parseAirportICAOCode(parser)).toEqual(TestDataMetarPrefixes_LFMN_Data);
        });

        test('airport code with numbers can also be parsed', () => {
            const parser = new ParserState(TestDataMetarPrefixes_K0J4_Text);
            expect(parseAirportICAOCode(parser)).toEqual(TestDataMetarPrefixes_K0J4_Data);
        });

        test('airport code invalid adds a token to mention it', () => {
            const parser = new ParserState('METAR');

            const result = parseAirportICAOCode(parser);
            expect(result).toEqual({
                tokenType: TokenTypes.NOT_RECOGNIZED,
                message: 'No airport ICAO code was found/recognized.',
            });
        });
    });

    describe('parseMETARTime', () => {
        test('metar time is parsed out correctly', () => {
            const parser = new ParserState(TestDataMetarPrefixes_TIME_Text);
            expect(parseMETARTime(parser)).toEqual(TestDataMetarPrefixes_TIME_Data);
        });

        test('invalid metar time adds a token absent', () => {
            const parser = new ParserState('METAR');
            expect(parseMETARTime(parser)).toEqual({
                tokenType: TokenTypes.NOT_RECOGNIZED,
                message: 'No METAR time was found/recognized.',
            });
        });
    });

    describe('parseAuto', () => {
        test('auto is parsed out', () => {
            const parser = new ParserState(TestDataMetarPrefixes_AUTO_Text);
            expect(parseAuto(parser)).toEqual(TestDataMetarPrefixes_AUTO_Data);
        });

        test('invalid value is ignored', () => {
            const parser = new ParserState('METAR');
            expect(parseAuto(parser)).toEqual(null);
        });
    });

    describe('parseNIL', () => {
        test('auto is parsed out', () => {
            const parser = new ParserState(TestDataMetarPrefixes_NIL_Text);
            expect(parseNIL(parser)).toEqual(TestDataMetarPrefixes_NIL_Data);
        });

        test('invalid value is ignored', () => {
            const parser = new ParserState('METAR');
            expect(parseNIL(parser)).toEqual(null);
        });
    });

    describe('parseCOR', () => {
        test('auto is parsed out', () => {
            const parser = new ParserState(TestDataMetarPrefixes_COR_Text);
            expect(parseCOR(parser)).toEqual(TestDataMetarPrefixes_COR_Data);
        });

        test('invalid value is ignored', () => {
            const parser = new ParserState('METAR');
            expect(parseCOR(parser)).toEqual(null);
        });
    });
});
