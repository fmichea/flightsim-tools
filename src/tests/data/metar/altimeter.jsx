import { AltimeterUnit, TokenTypes } from 'lib/metar/enums';

const baseData = {
    tokenType: TokenTypes.ALTIMETER_SETTING,
    args: ['altimeterUnit', 'value'],
};

export const TestDataAltimeter_Q1020_Text = 'Q1020';
export const TestDataAltimeter_Q1020_Data = {
    ...baseData,

    altimeterUnit: 'Q',
    value: '1020',

    altimeterUnitP: AltimeterUnit.HPA,
    valueP: 1020,
};

export const TestDataAltimeter_A3011_Text = 'A3011';
export const TestDataAltimeter_A3011_Data = {
    ...baseData,

    altimeterUnit: 'A',
    value: '3011',

    altimeterUnitP: AltimeterUnit.INHG,
    valueP: 30.11,
};
