import { ParserState } from 'lib/metar/parserState';
import {
    TestDataSeaSurface_W12S4_Data,
    TestDataSeaSurface_W12S4_Text,
    TestDataSeaSurface_WM01H014_Data,
    TestDataSeaSurface_WM01H014_Text,
} from 'tests/data/metar/seaSurface';
import { parseSeaSurface } from 'lib/metar/parsers/seaSurface';

describe('parseSeaSurface', () => {
    test('value with sea state code', () => {
        const parser = new ParserState(TestDataSeaSurface_W12S4_Text);
        expect(parseSeaSurface(parser)).toEqual(TestDataSeaSurface_W12S4_Data);
    });

    test('value with negative temp and wave height', () => {
        const parser = new ParserState(TestDataSeaSurface_WM01H014_Text);
        expect(parseSeaSurface(parser)).toEqual(TestDataSeaSurface_WM01H014_Data);
    });
});
