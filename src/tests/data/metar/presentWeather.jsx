import {
    TokenTypes, WeatherDescriptor, WeatherIntensity, WeatherPhenomena,
} from 'lib/metar/enums';

export const TestDataPresentWeather_PSHRA_Text = '+SHRA';
export const TestDataPresentWeather_PSHRA_Data = {
    tokenType: TokenTypes.PRESENT_WEATHER,
    args: ['intensity0', 'descriptor0', 'phenomena0'],

    intensity0: '+',
    intensity0P: WeatherIntensity.HEAVY,
    intensityArgs: ['intensity0'],
    intensityCount: 1,
    intensityParts: [
        {
            argID: 'intensity0',
            intensity: '+',
            intensityP: WeatherIntensity.HEAVY,
        },
    ],

    descriptor0: 'SH',
    descriptor0P: WeatherDescriptor.SHOWER,
    descriptorArgs: ['descriptor0'],
    descriptorCount: 1,
    descriptorParts: [
        {
            argID: 'descriptor0',
            descriptor: 'SH',
            descriptorP: WeatherDescriptor.SHOWER,
        },
    ],

    phenomena0: 'RA',
    phenomena0P: WeatherPhenomena.RAIN,
    phenomenaArgs: ['phenomena0'],
    phenomenaCount: 1,
    phenomenaParts: [
        {
            argID: 'phenomena0',
            phenomena: 'RA',
            phenomenaP: WeatherPhenomena.RAIN,
        },
    ],
};

export const TestDataPresentWeather_SN_Text = 'SN';
export const TestDataPresentWeather_SN_Data = {
    tokenType: TokenTypes.PRESENT_WEATHER,
    args: ['phenomena0'],

    intensityArgs: [],
    intensityCount: 0,
    intensityParts: [],

    descriptorArgs: [],
    descriptorCount: 0,
    descriptorParts: [],

    phenomena0: 'SN',
    phenomena0P: WeatherPhenomena.SNOW,
    phenomenaArgs: ['phenomena0'],
    phenomenaCount: 1,
    phenomenaParts: [
        {
            argID: 'phenomena0',
            phenomena: 'SN',
            phenomenaP: WeatherPhenomena.SNOW,
        },
    ],
};

export const TestDataPresentWeather_MVCBLGRFG_Text = '-VCBLGRFG';
export const TestDataPresentWeather_MVCBLGRFG_Data = {
    tokenType: TokenTypes.PRESENT_WEATHER,
    args: ['intensity0', 'intensity1', 'descriptor0', 'phenomena0', 'phenomena1'],

    intensity0: '-',
    intensity0P: WeatherIntensity.LIGHT,
    intensity1: 'VC',
    intensity1P: WeatherIntensity.VINCINITY,
    intensityArgs: ['intensity0', 'intensity1'],
    intensityCount: 2,
    intensityParts: [
        {
            argID: 'intensity0',
            intensity: '-',
            intensityP: WeatherIntensity.LIGHT,
        },
        {
            argID: 'intensity1',
            intensity: 'VC',
            intensityP: WeatherIntensity.VINCINITY,
        },
    ],

    descriptor0: 'BL',
    descriptor0P: WeatherDescriptor.BLOWING,
    descriptorArgs: ['descriptor0'],
    descriptorCount: 1,
    descriptorParts: [
        {
            argID: 'descriptor0',
            descriptor: 'BL',
            descriptorP: WeatherDescriptor.BLOWING,
        },
    ],

    phenomena0: 'GR',
    phenomena0P: WeatherPhenomena.HAIL,
    phenomena1: 'FG',
    phenomena1P: WeatherPhenomena.FOG,
    phenomenaArgs: ['phenomena0', 'phenomena1'],
    phenomenaCount: 2,
    phenomenaParts: [
        {
            argID: 'phenomena0',
            phenomena: 'GR',
            phenomenaP: WeatherPhenomena.HAIL,
        },
        {
            argID: 'phenomena1',
            phenomena: 'FG',
            phenomenaP: WeatherPhenomena.FOG,
        },
    ],
};
