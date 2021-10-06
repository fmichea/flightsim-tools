import { SeaSurfaceInfoType, SeaSurfaceStateCode, TokenTypes } from 'lib/metar/enums';

const baseData = {
    tokenType: TokenTypes.SEA_SURFACE,
    args: ['temperature', 'seaStateCode', 'waveHeight'],
};

export const TestDataSeaSurface_W12S4_Text = 'W12/S4';
export const TestDataSeaSurface_W12S4_Data = {
    ...baseData,

    infoType: SeaSurfaceInfoType.SURFACE_STATE,

    temperature: '12',
    seaStateCode: '4',
    waveHeight: null,

    temperatureP: 12,
    seaStateCodeP: SeaSurfaceStateCode.MODERATE,
    waveHeightP: null,
};

export const TestDataSeaSurface_WM01H014_Text = 'WM01/H014';
export const TestDataSeaSurface_WM01H014_Data = {
    ...baseData,

    infoType: SeaSurfaceInfoType.WAVE_HEIGHT,

    temperature: 'M01',
    seaStateCode: null,
    waveHeight: '014',

    temperatureP: -1,
    seaStateCodeP: null,
    waveHeightP: 140,
};
