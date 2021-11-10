import { parseRecentWeather } from 'lib/metar/parsers/recentWeather';
import { ParserState } from 'lib/metar/parserState';
import {
    TestDataRecentWeather_RERASN_Data,
    TestDataRecentWeather_RERASN_Text,
} from 'tests/data/metar/recentWeather';

describe('recentWeather', () => {
    test('previous rain and snow reported', () => {
        const parser = new ParserState(TestDataRecentWeather_RERASN_Text);
        expect(parseRecentWeather(parser)).toEqual(TestDataRecentWeather_RERASN_Data);
    });
});
