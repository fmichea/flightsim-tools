import {
    Directions, PrevailingVisibility, PrevailingVisibilityUnit, TokenTypes,
} from 'lib/metar/enums';

const baseData = {
    tokenType: TokenTypes.PREVAILING_VISIBILITY,
    args: ['value', 'direction'],
};

export const TestDataPrevailingVisibility_CAVOK_Text = 'CAVOK';
export const TestDataPrevailingVisibility_CAVOK_Data = {
    ...baseData,

    value: 'CAVOK',
    direction: null,

    valueP: PrevailingVisibility.CAVOK,
    directionP: null,
    unitP: null,
};

export const TestDataPrevailingVisibility_MISSING_Text = '////';
export const TestDataPrevailingVisibility_MISSING_Data = {
    ...baseData,

    value: '////',
    direction: null,

    valueP: PrevailingVisibility.MISSING,
    directionP: null,
    unitP: null,
};

export const TestDataPrevailingVisibility_4500_Text = '4500';
export const TestDataPrevailingVisibility_4500_Data = {
    ...baseData,

    value: '4500',
    direction: null,

    valueP: 4500,
    directionP: null,
    unitP: PrevailingVisibilityUnit.METERS,
};

export const TestDataPrevailingVisibility_4500NW_Text = '4500NW';
export const TestDataPrevailingVisibility_4500NW_Data = {
    ...baseData,

    value: '4500',
    direction: 'NW',

    valueP: 4500,
    directionP: Directions.NW,
    unitP: PrevailingVisibilityUnit.METERS,
};

export const TestDataPrevailingVisibility_9999_Text = '9999';
export const TestDataPrevailingVisibility_9999_Data = {
    ...baseData,

    value: '9999',
    direction: null,

    valueP: PrevailingVisibility.TEN_K,
    directionP: null,
    unitP: PrevailingVisibilityUnit.METERS,
};

export const TestDataPrevailingVisibility_10SM_Text = '10SM';
export const TestDataPrevailingVisibility_10SM_Data = {
    ...baseData,

    value: '10',
    direction: null,

    valueP: 10,
    directionP: null,
    unitP: PrevailingVisibilityUnit.MILES,
};

export const TestDataPrevailingVisibility_2HalfSM_Text = '2 1/2SM';
export const TestDataPrevailingVisibility_2HalfSM_Data = {
    ...baseData,

    value: '2 1/2',
    direction: null,

    valueP: 2.5,
    directionP: null,
    unitP: PrevailingVisibilityUnit.MILES,
};

export const TestDataPrevailingVisibility_1SixteenthSM_Text = '1/16SM';
export const TestDataPrevailingVisibility_1SixteenthSM_Data = {
    ...baseData,

    value: '1/16',
    direction: null,

    valueP: 0.0625,
    directionP: null,
    unitP: PrevailingVisibilityUnit.MILES,
};

export const TestDataPrevailingVisibility_M14THSM_Text = 'M1/4SM';
export const TestDataPrevailingVisibility_M14THSM_Data = {
    ...baseData,

    value: 'M1/4',
    direction: null,

    valueP: PrevailingVisibility.LESS_THAN_QUARTER_MILE,
    directionP: null,
    unitP: PrevailingVisibilityUnit.MILES,
};

export const TestDataPrevailingVisibility_10KM_Text = '10KM';
export const TestDataPrevailingVisibility_10KM_Data = {
    ...baseData,

    value: '10',
    direction: null,

    valueP: 10,
    directionP: null,
    unitP: PrevailingVisibilityUnit.KILOMETERS,
};

export const TestDataPrevailingVisibility_xxxxSM_Text = '////SM';
export const TestDataPrevailingVisibility_xxxxSM_Data = {
    ...baseData,

    value: '////',
    direction: null,

    valueP: PrevailingVisibility.MISSING,
    directionP: null,
    unitP: PrevailingVisibilityUnit.MILES,
};
