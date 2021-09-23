import { TokenTypes } from 'lib/metar/enums';

const baseData = {
    tokenType: TokenTypes.TEMPERATURES,
    args: ['oat', 'dewPoint'],
};

export const TestDataTemperatures_2215_Text = '22/15';
export const TestDataTemperatures_2215_Data = {
    ...baseData,

    oat: '22',
    dewPoint: '15',

    oatP: 22,
    dewPointP: 15,
};

export const TestDataTemperatures_M01M05_Text = 'M01/M05';
export const TestDataTemperatures_M01M05_Data = {
    ...baseData,

    oat: 'M01',
    dewPoint: 'M05',

    oatP: -1,
    dewPointP: -5,
};
