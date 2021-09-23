import { RunwayVisualRangeQualifier, TokenTypes } from 'lib/metar/enums';

const baseData = {
    tokenType: TokenTypes.RUNWAY_VISUAL_RANGE,
    args: ['runway', 'qualifier', 'distance'],
};

export const TestDataRunwayVisualRange_R042000_Text = 'R04/2000';
export const TestDataRunwayVisualRange_R042000_Data = {
    ...baseData,

    runway: '04',
    qualifier: null,
    distance: '2000',

    qualifierP: RunwayVisualRangeQualifier.NONE,
    distanceP: 2000,
};

export const TestDataRunwayVisualRange_R22M0500_Text = 'R22/M0500';
export const TestDataRunwayVisualRange_R22M0500_Data = {
    ...baseData,

    runway: '22',
    qualifier: 'M',
    distance: '0500',

    qualifierP: RunwayVisualRangeQualifier.AT_MOST,
    distanceP: 500,
};

export const TestDataRunwayVisualRange_R13P7000_Text = 'R13/P7000';
export const TestDataRunwayVisualRange_R13P7000_Data = {
    ...baseData,

    runway: '13',
    qualifier: 'P',
    distance: '7000',

    qualifierP: RunwayVisualRangeQualifier.AT_LEAST,
    distanceP: 7000,
};
