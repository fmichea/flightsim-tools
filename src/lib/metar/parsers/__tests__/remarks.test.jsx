import { TokenTypes } from 'lib/metar/enums';
import { parseRemarks } from 'lib/metar/parsers/remarks';
import { ParserState } from 'lib/metar/parserState';
import { TestDataRemarks_Data, TestDataRemarks_Text } from 'tests/data/metar/remarks';

describe('remarks', () => {
    test('everything after the remark is grabbed', () => {
        const parser = new ParserState(TestDataRemarks_Text);
        expect(parseRemarks(parser)).toEqual(TestDataRemarks_Data);
    });

    test('invalid value is ignored', () => {
        const parser = new ParserState('METAR');
        expect(parseRemarks(parser)).toEqual(null);
    });
});
