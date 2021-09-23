import { TokenTypes } from 'lib/metar/enums';

const baseData1 = {
    tokenType: TokenTypes.METAR_PREFIX,
    args: ['value'],
};

export const TestDataMetarPrefixes_METAR_Text = 'METAR';
export const TestDataMetarPrefixes_METAR_Data = { ...baseData1, value: 'METAR' };

export const TestDataMetarPrefixes_SPECI_Text = 'SPECI';
export const TestDataMetarPrefixes_SPECI_Data = { ...baseData1, value: 'SPECI' };

const baseData2 = {
    tokenType: TokenTypes.AIRPORT_IDENTIFIER,
    args: ['airportCode'],
};

export const TestDataMetarPrefixes_LFMN_Text = 'LFMN';
export const TestDataMetarPrefixes_LFMN_Data = { ...baseData2, airportCode: 'LFMN' };

export const TestDataMetarPrefixes_K0J4_Text = 'K0J4';
export const TestDataMetarPrefixes_K0J4_Data = { ...baseData2, airportCode: 'K0J4' };

export const TestDataMetarPrefixes_TIME_Text = '041150Z';
export const TestDataMetarPrefixes_TIME_Data = {
    tokenType: TokenTypes.METAR_TIME,
    args: ['dayOfMonth', 'hour', 'minutes'],

    dayOfMonth: '04',
    hour: '11',
    minutes: '50',

    dayOfMonthP: 4,
};

export const TestDataMetarPrefixes_AUTO_Text = 'AUTO';
export const TestDataMetarPrefixes_AUTO_Data = {
    tokenType: TokenTypes.METAR_PREFIX_OTHER,
    args: ['value'],

    value: 'AUTO',
};

export const TestDataMetarPrefixes_NIL_Text = 'NIL';
export const TestDataMetarPrefixes_NIL_Data = {
    tokenType: TokenTypes.METAR_PREFIX_OTHER,
    args: ['value'],

    value: 'NIL',
};

export const TestDataMetarPrefixes_COR_Text = 'COR';
export const TestDataMetarPrefixes_COR_Data = {
    tokenType: TokenTypes.METAR_PREFIX_OTHER,
    args: ['value'],

    value: 'COR',
};
