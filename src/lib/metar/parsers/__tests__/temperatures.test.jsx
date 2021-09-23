import { ParserState } from 'lib/metar/parserState';
import { parseTemperatures } from 'lib/metar/parsers/temperatures';
import {
    TestDataTemperatures_2215_Data,
    TestDataTemperatures_2215_Text,
    TestDataTemperatures_M01M05_Data,
    TestDataTemperatures_M01M05_Text,
} from 'tests/data/metar/temperatures';

describe('parseTemperatures', () => {
    test('two positives', () => {
        const parser = new ParserState(TestDataTemperatures_2215_Text);
        expect(parseTemperatures(parser)).toEqual(TestDataTemperatures_2215_Data);
    });

    test('two negatives', () => {
        const parser = new ParserState(TestDataTemperatures_M01M05_Text);
        expect(parseTemperatures(parser)).toEqual(TestDataTemperatures_M01M05_Data);
    });

    test('invalid value is ignored', () => {
        const parser = new ParserState('METAR');
        expect(parseTemperatures(parser)).toEqual(null);
    });
});
