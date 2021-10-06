import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes, WindShearRunway } from 'lib/metar/enums';

const allRwyValue = 'ALL RWY';

const createWindShearTokens = (runway) => ({
    tokenType: TokenTypes.WIND_SHEAR,
    args: ['runway'],

    runway,

    runwayP: runway === allRwyValue ? WindShearRunway.ALL_RUNWAYS : runway.substring(1),
});

export const parseWindShear = (parser) => {
    const { completeMatch: completeMatchAllRwy } = parser.matchNextTokenAndForward('WS\\s+ALL\\s+RWY');
    if (isNotNullOrUndefined(completeMatchAllRwy)) {
        return createWindShearTokens(allRwyValue);
    }

    const { groups: rwyGroups } = parser.matchNextTokenAndForward('WS\\s+(?<runway>R[0-9]{2})');
    if (isNotNullOrUndefined(rwyGroups)) {
        return createWindShearTokens(rwyGroups.runway);
    }

    return null;
};
