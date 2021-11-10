import { parseRunwayState } from 'lib/metar/parsers/runwayState';
import { ParserState } from 'lib/metar/parserState';
import {
    TestDataRunwayState_R24451293_Data,
    TestDataRunwayState_R24451293_Text,
    TestDataRunwayState_R31XXXXXX_Data,
    TestDataRunwayState_R31XXXXXX_Text,
} from 'tests/data/metar/runwayState';

describe('parseRunwayState', () => {
    test('sample runway state', () => {
        const parser = new ParserState(TestDataRunwayState_R24451293_Text);
        expect(parseRunwayState(parser)).toEqual(TestDataRunwayState_R24451293_Data);
    });

    test('sample runway state with no data', () => {
        const parser = new ParserState(TestDataRunwayState_R31XXXXXX_Text);
        expect(parseRunwayState(parser)).toEqual(TestDataRunwayState_R31XXXXXX_Data);
    });
});
