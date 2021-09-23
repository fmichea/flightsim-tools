import { TokenTypes } from 'lib/metar/enums';

const baseData = {
    tokenType: TokenTypes.VERTICAL_VISIBILITY,
    args: ['altitude'],
};

export const TestDataVerticalVisibility_VV120_Text = 'VV120';
export const TestDataVerticalVisibility_VV120_Data = {
    ...baseData,

    altitude: '120',
    altitudeP: 12000,
};

export const TestDataVerticalVisibility_VVMISSING_Text = 'VV///';
export const TestDataVerticalVisibility_VVMISSING_Data = {
    ...baseData,

    altitude: '///',
    altitudeP: null,
};
