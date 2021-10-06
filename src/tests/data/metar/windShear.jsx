import { TokenTypes, WindShearRunway } from 'lib/metar/enums';

const baseData = {
    tokenType: TokenTypes.WIND_SHEAR,
    args: ['runway'],
};

export const TestDataWindShear_WSALLRWY_Text = 'WS ALL RWY';
export const TestDataWindShear_WSALLRWY_Data = {
    ...baseData,

    runway: 'ALL RWY',
    runwayP: WindShearRunway.ALL_RUNWAYS,
};

export const TestDataWindShear_WSR24_Text = 'WS R24';
export const TestDataWindShear_WSR24_Data = {
    ...baseData,

    runway: 'R24',
    runwayP: '24',
};
