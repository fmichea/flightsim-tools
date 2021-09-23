import { ParserState } from 'lib/metar/parserState';
import { parsePresentWeather } from 'lib/metar/parsers/presentWeather';
import {
    TestDataPresentWeather_MVCBLGRFG_Data,
    TestDataPresentWeather_MVCBLGRFG_Text,
    TestDataPresentWeather_PSHRA_Data,
    TestDataPresentWeather_PSHRA_Text,
    TestDataPresentWeather_SN_Data,
    TestDataPresentWeather_SN_Text,
} from 'tests/data/metar/presentWeather';

describe('presentWeather', () => {
    test('heavy rain in showers', () => {
        const parser = new ParserState(TestDataPresentWeather_PSHRA_Text);
        expect(parsePresentWeather(parser)).toEqual(TestDataPresentWeather_PSHRA_Data);
    });

    test('optional intensity and descriptor', () => {
        const parser = new ParserState(TestDataPresentWeather_SN_Text);
        expect(parsePresentWeather(parser)).toEqual(TestDataPresentWeather_SN_Data);
    });

    test('other intensity also parsed, multiple phenomenons', () => {
        const parser = new ParserState(TestDataPresentWeather_MVCBLGRFG_Text);
        expect(parsePresentWeather(parser)).toEqual(TestDataPresentWeather_MVCBLGRFG_Data);
    });

    test('invalid value is ignored', () => {
        const parser = new ParserState('METAR');
        expect(parsePresentWeather(parser)).toEqual(null);
    });
});
