import { parseColorSystems } from 'lib/metar/parsers/colorSystems';
import { ParserState } from 'lib/metar/parserState';
import {
    TestDataColorSystems_BLUYLOREDBLACKBLUWHT_Data,
    TestDataColorSystems_BLUYLOREDBLACKBLUWHT_Text,
} from 'tests/data/metar/colorSystems';

describe('parseColorSystems', () => {
    test('all in one', () => {
        const parser = new ParserState(TestDataColorSystems_BLUYLOREDBLACKBLUWHT_Text);

        const result = parseColorSystems(parser);
        expect(result).toEqual(TestDataColorSystems_BLUYLOREDBLACKBLUWHT_Data);
    });
});
