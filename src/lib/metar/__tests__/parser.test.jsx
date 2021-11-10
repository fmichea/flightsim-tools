import { TokenTypes } from 'lib/metar/enums';
import { parseMETAR } from 'lib/metar/parser';

describe('parseMETAR', () => {
    test('sample metar is parsed', () => {
        const result = parseMETAR(
            'RJNG 190819Z 13004KT 090V180 WHAT 9999 -SHRA FEW020 SCT035 BKN050 26/21 '
            + 'Q1012 RMK 1CU020 3CU035 6SC050 A2989',
        );

        expect(result.map((v) => v.tokenType)).toEqual([
            TokenTypes.AIRPORT_IDENTIFIER,
            TokenTypes.METAR_TIME,
            TokenTypes.WIND,
            TokenTypes.NOT_RECOGNIZED,
            TokenTypes.PREVAILING_VISIBILITY,
            TokenTypes.PRESENT_WEATHER,
            TokenTypes.CLOUD_COVERAGE,
            TokenTypes.CLOUD_COVERAGE,
            TokenTypes.CLOUD_COVERAGE,
            TokenTypes.TEMPERATURES,
            TokenTypes.ALTIMETER_SETTING,
            TokenTypes.REMARKS,
        ]);
    });
});
