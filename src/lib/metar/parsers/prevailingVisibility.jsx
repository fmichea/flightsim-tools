import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import {
    Directions, PrevailingVisibility, PrevailingVisibilityUnit, TokenTypes,
} from 'lib/metar/enums';
import { pick } from 'lib/pick';

const fixPVValue = (value) => {
    if (value === '////') {
        return PrevailingVisibility.MISSING;
    }
    if (value === 'CAVOK') {
        return PrevailingVisibility.CAVOK;
    }
    if (value === '9999') {
        return PrevailingVisibility.TEN_K;
    }

    const matchResult1 = value.match(new RegExp('(?<whole>[0-9]+)\\s(?<numerator>[0-9]+)/(?<denominator>[0-9]+)'));
    if (isNotNullOrUndefined(matchResult1)) {
        const { whole, numerator, denominator } = matchResult1.groups;
        return 1 * whole + numerator / denominator;
    }

    const matchResult2 = value.match(new RegExp('(?<numerator>[0-9]+)/(?<denominator>[0-9]+)'));
    if (isNotNullOrUndefined(matchResult2)) {
        const { numerator, denominator } = matchResult2.groups;
        return numerator / denominator;
    }

    return 1 * value;
};

const isWithoutUnit = (valueP) => valueP === PrevailingVisibility.MISSING || valueP === PrevailingVisibility.CAVOK;

const createPrevailingVisibility = (value, { direction, unit } = {}) => {
    const valueP = fixPVValue(value);

    return {
        tokenType: TokenTypes.PREVAILING_VISIBILITY,
        args: ['value', 'direction'],

        value,
        direction: direction === '' ? null : pick(direction),

        valueP,
        directionP: pick(Directions[direction]),
        unitP: isWithoutUnit(valueP) ? null : pick(unit, PrevailingVisibilityUnit.METERS),
    };
};

export const parsePrevailingVisibility = (parser) => {
    const { completeMatch: cavokCompleteMatch } = parser.matchNextTokenAndForward('CAVOK');
    if (isNotNullOrUndefined(cavokCompleteMatch)) {
        return createPrevailingVisibility(cavokCompleteMatch);
    }

    const { groups: groups1 } = parser.matchNextTokenAndForward('(?<distance>[0-9]{4})(?<direction>[A-Z]*)');
    if (isNotNullOrUndefined(groups1)) {
        const { distance, direction } = groups1;
        return createPrevailingVisibility(distance, { direction });
    }

    const { groups: groups2 } = parser.matchNextTokenAndForward('(?<distance>[0-9]+(\\s[0-9]+)?(/[0-9]+)?)SM');
    if (isNotNullOrUndefined(groups2)) {
        const { distance } = groups2;
        return createPrevailingVisibility(
            distance,
            { unit: PrevailingVisibilityUnit.MILES },
        );
    }

    const { groups: groups3 } = parser.matchNextTokenAndForward('(?<distance>[0-9]+(\\s[0-9]+)?(/[0-9]+)?)KM');
    if (isNotNullOrUndefined(groups3)) {
        const { distance } = groups3;
        return createPrevailingVisibility(
            distance,
            { unit: PrevailingVisibilityUnit.KILOMETERS },
        );
    }

    const { completeMatch: completeMatch2 } = parser.matchNextTokenAndForward('////');
    if (isNotNullOrUndefined(completeMatch2)) {
        return createPrevailingVisibility(completeMatch2);
    }
    return null;
};
