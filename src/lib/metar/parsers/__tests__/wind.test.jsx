import { ParserState } from 'lib/metar/parserState';
import { TokenTypes, WindDirections, WindSpeedUnit } from 'lib/metar/enums';
import { parseWind } from 'lib/metar/parsers/wind';
import {
    TestDataWind_090P00GP10MPS_Data,
    TestDataWind_090P00GP10MPS_Text,
    TestDataWind_12010G15KT_Data,
    TestDataWind_12010G15KT_Text,
    TestDataWind_20005KT_Data,
    TestDataWind_20005KT_Text, TestDataWind_CALM_Data,
    TestDataWind_CALM_Text,
    TestDataWind_VRB04KT_200V240_Data,
    TestDataWind_VRB04KT_200V240_Text,
} from 'tests/data/metar/wind';

describe('parseWind', () => {
    test('normal wind is parsed knots', () => {
        const parser = new ParserState(TestDataWind_20005KT_Text);
        expect(parseWind(parser)).toEqual(TestDataWind_20005KT_Data);
    });

    test('wind with gusts included', () => {
        const parser = new ParserState(TestDataWind_12010G15KT_Text);
        expect(parseWind(parser)).toEqual(TestDataWind_12010G15KT_Data);
    });

    test('wind with values in hundreds and mps unit', () => {
        const parser = new ParserState(TestDataWind_090P00GP10MPS_Text);
        expect(parseWind(parser)).toEqual(TestDataWind_090P00GP10MPS_Data);
    });

    test('wind variable with variable info attached', () => {
        const parser = new ParserState(TestDataWind_VRB04KT_200V240_Text);
        expect(parseWind(parser)).toEqual(TestDataWind_VRB04KT_200V240_Data);
    });

    test('wind calm is detected', () => {
        const parser = new ParserState(TestDataWind_CALM_Text);
        expect(parseWind(parser)).toEqual(TestDataWind_CALM_Data);
    });

    test('invalid value is ignored', () => {
        const parser = new ParserState('METAR');
        expect(parseWind(parser)).toEqual(null);
    });
});
