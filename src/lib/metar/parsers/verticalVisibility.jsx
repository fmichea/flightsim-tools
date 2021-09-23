import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes } from 'lib/metar/enums';

const createVerticalVisibilityToken = (altitude) => ({
    tokenType: TokenTypes.VERTICAL_VISIBILITY,
    args: ['altitude'],

    altitude,
    altitudeP: altitude === '///' ? null : altitude * 100,
});

export const parseVerticalVisibility = (parser) => {
    const { groups: vvAltGroups } = parser.matchNextTokenAndForward(
        /VV(?<altitude>[0-9]{3})/,
    );
    if (isNotNullOrUndefined(vvAltGroups)) {
        return createVerticalVisibilityToken(vvAltGroups.altitude);
    }

    const { completeMatch: noDataCompleteMatch } = parser.matchNextTokenAndForward(
        /VV\/\/\//,
    );
    if (isNotNullOrUndefined(noDataCompleteMatch)) {
        return createVerticalVisibilityToken('///');
    }

    return null;
};
