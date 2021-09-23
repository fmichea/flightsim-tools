import { ParserState } from 'lib/metar/parserState';
import { parseRunwayVisualRange } from 'lib/metar/parsers/runwayVisualRange';
import {
    TestDataRunwayVisualRange_R042000_Data,
    TestDataRunwayVisualRange_R042000_Text,
    TestDataRunwayVisualRange_R13P7000_Data,
    TestDataRunwayVisualRange_R13P7000_Text,
    TestDataRunwayVisualRange_R22M0500_Data,
    TestDataRunwayVisualRange_R22M0500_Text,
} from 'tests/data/metar/runwayVisualRange';

describe('parseRunwayVisualRange', () => {
    test('simple case', () => {
        const parser = new ParserState(TestDataRunwayVisualRange_R042000_Text);
        expect(parseRunwayVisualRange(parser)).toEqual(TestDataRunwayVisualRange_R042000_Data);
    });

    test('with at most qualifier', () => {
        const parser = new ParserState(TestDataRunwayVisualRange_R22M0500_Text);
        expect(parseRunwayVisualRange(parser)).toEqual(TestDataRunwayVisualRange_R22M0500_Data);
    });

    test('with at least qualifier', () => {
        const parser = new ParserState(TestDataRunwayVisualRange_R13P7000_Text);
        expect(parseRunwayVisualRange(parser)).toEqual(TestDataRunwayVisualRange_R13P7000_Data);
    });

    test('invalid data is ignored', () => {
        const parser = new ParserState('METAR');
        expect(parseRunwayVisualRange(parser)).toEqual(null);
    });
});
