import { ParserState } from 'lib/metar/parserState';
import { parseVerticalVisibility } from 'lib/metar/parsers/verticalVisibility';
import {
    TestDataVerticalVisibility_VV120_Data,
    TestDataVerticalVisibility_VV120_Text,
    TestDataVerticalVisibility_VVMISSING_Data,
    TestDataVerticalVisibility_VVMISSING_Text,
} from 'tests/data/metar/verticalVisibility';

describe('parseVerticalVisibility', () => {
    test('simple value', () => {
        const parser = new ParserState(TestDataVerticalVisibility_VV120_Text);
        expect(parseVerticalVisibility(parser)).toEqual(TestDataVerticalVisibility_VV120_Data);
    });

    test('value is not available', () => {
        const parser = new ParserState(TestDataVerticalVisibility_VVMISSING_Text);
        expect(parseVerticalVisibility(parser)).toEqual(TestDataVerticalVisibility_VVMISSING_Data);
    });

    test('invalid value is ignored', () => {
        const parser = new ParserState('METAR');
        expect(parseVerticalVisibility(parser)).toEqual(null);
    });
});
