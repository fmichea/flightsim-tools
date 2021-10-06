import { TokenTypes, WeatherPhenomena } from 'lib/metar/enums';

export const TestDataRecentWeather_RERASN_Text = 'RERASN';
export const TestDataRecentWeather_RERASN_Data = {
    tokenType: TokenTypes.RECENT_WEATHER,
    args: ['phenomena0', 'phenomena1'],

    phenomenaCount: 2,
    phenomena0: 'RA',
    phenomena0P: WeatherPhenomena.RAIN,
    phenomena1: 'SN',
    phenomena1P: WeatherPhenomena.SNOW,
    phenomenaArgs: ['phenomena0', 'phenomena1'],
    phenomenaParts: [
        {
            argID: 'phenomena0',
            phenomena: 'RA',
            phenomenaP: WeatherPhenomena.RAIN,
        },
        {
            argID: 'phenomena1',
            phenomena: 'SN',
            phenomenaP: WeatherPhenomena.SNOW,
        },
    ],
};
