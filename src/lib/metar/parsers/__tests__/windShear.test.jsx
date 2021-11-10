import { parseWindShear } from 'lib/metar/parsers/windShear';
import { ParserState } from 'lib/metar/parserState';
import {
    TestDataWindShear_WSALLRWY_Data,
    TestDataWindShear_WSALLRWY_Text,
    TestDataWindShear_WSR24_Data,
    TestDataWindShear_WSR24_Text,
} from 'tests/data/metar/windShear';

describe('parseWindShear', () => {
    test('all runways', () => {
        const parser = new ParserState(TestDataWindShear_WSALLRWY_Text);
        expect(parseWindShear(parser)).toEqual(TestDataWindShear_WSALLRWY_Data);
    });

    test('specific runway', () => {
        const parser = new ParserState(TestDataWindShear_WSR24_Text);
        expect(parseWindShear(parser)).toEqual(TestDataWindShear_WSR24_Data);
    });
});
