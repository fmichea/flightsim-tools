import { parsePrevailingVisibility } from 'lib/metar/parsers/prevailingVisibility';
import { ParserState } from 'lib/metar/parserState';
import {
    TestDataPrevailingVisibility_1SixteenthSM_Data,
    TestDataPrevailingVisibility_1SixteenthSM_Text,
    TestDataPrevailingVisibility_2HalfSM_Data,
    TestDataPrevailingVisibility_2HalfSM_Text,
    TestDataPrevailingVisibility_10KM_Data,
    TestDataPrevailingVisibility_10KM_Text,
    TestDataPrevailingVisibility_10SM_Data,
    TestDataPrevailingVisibility_10SM_Text,
    TestDataPrevailingVisibility_4500_Data,
    TestDataPrevailingVisibility_4500_Text,
    TestDataPrevailingVisibility_4500NW_Data,
    TestDataPrevailingVisibility_4500NW_Text,
    TestDataPrevailingVisibility_9999_Data,
    TestDataPrevailingVisibility_9999_Text,
    TestDataPrevailingVisibility_CAVOK_Data,
    TestDataPrevailingVisibility_CAVOK_Text,
    TestDataPrevailingVisibility_M14THSM_Data,
    TestDataPrevailingVisibility_M14THSM_Text,
    TestDataPrevailingVisibility_MISSING_Data,
    TestDataPrevailingVisibility_MISSING_Text,
    TestDataPrevailingVisibility_xxxxSM_Data,
    TestDataPrevailingVisibility_xxxxSM_Text,
} from 'tests/data/metar/prevailingVisibility';

describe('prevailingVisibility', () => {
    test('cavok is parsed', () => {
        const parser = new ParserState(TestDataPrevailingVisibility_CAVOK_Text);
        expect(parsePrevailingVisibility(parser)).toEqual(TestDataPrevailingVisibility_CAVOK_Data);
    });

    test('visibility not provided', () => {
        const parser = new ParserState(TestDataPrevailingVisibility_MISSING_Text);
        expect(parsePrevailingVisibility(parser)).toEqual(TestDataPrevailingVisibility_MISSING_Data);
    });

    test('normal value with just 4 digits', () => {
        const parser = new ParserState(TestDataPrevailingVisibility_4500_Text);
        expect(parsePrevailingVisibility(parser)).toEqual(TestDataPrevailingVisibility_4500_Data);
    });

    test('normal value with just 4 digits and direction', () => {
        const parser = new ParserState(TestDataPrevailingVisibility_4500NW_Text);
        expect(parsePrevailingVisibility(parser)).toEqual(TestDataPrevailingVisibility_4500NW_Data);
    });

    test('special value 4 digits for 10km', () => {
        const parser = new ParserState(TestDataPrevailingVisibility_9999_Text);
        expect(parsePrevailingVisibility(parser)).toEqual(TestDataPrevailingVisibility_9999_Data);
    });

    test('us version simple', () => {
        const parser = new ParserState(TestDataPrevailingVisibility_10SM_Text);
        expect(parsePrevailingVisibility(parser)).toEqual(TestDataPrevailingVisibility_10SM_Data);
    });

    test('us version with fraction', () => {
        const parser = new ParserState(TestDataPrevailingVisibility_2HalfSM_Text);
        expect(parsePrevailingVisibility(parser)).toEqual(TestDataPrevailingVisibility_2HalfSM_Data);
    });

    test('us version with just fraction', () => {
        const parser = new ParserState(TestDataPrevailingVisibility_1SixteenthSM_Text);
        expect(parsePrevailingVisibility(parser)).toEqual(TestDataPrevailingVisibility_1SixteenthSM_Data);
    });

    test('nz version', () => {
        const parser = new ParserState(TestDataPrevailingVisibility_10KM_Text);
        expect(parsePrevailingVisibility(parser)).toEqual(TestDataPrevailingVisibility_10KM_Data);
    });

    test('less than quarter mile', () => {
        const parser = new ParserState(TestDataPrevailingVisibility_M14THSM_Text);
        expect(parsePrevailingVisibility(parser)).toEqual(TestDataPrevailingVisibility_M14THSM_Data);
    });

    test('no data for visibility', () => {
        const parser = new ParserState(TestDataPrevailingVisibility_xxxxSM_Text);
        expect(parsePrevailingVisibility(parser)).toEqual(TestDataPrevailingVisibility_xxxxSM_Data);
    });

    test('invalid value is ignored', () => {
        const parser = new ParserState('METAR');
        expect(parsePrevailingVisibility(parser)).toEqual(null);
    });
});
