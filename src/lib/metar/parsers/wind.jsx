import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';
import {
    TokenTypes, WindDirections, WindForce, WindSpeedUnit,
} from 'lib/metar/enums';
import { pick } from 'lib/pick';

const fixForce = (force) => {
    if (force === '//') {
        return WindForce.NOT_REPORTED;
    }
    return force[0] === 'P' ? 100 + 1 * force.substring(1) : 1 * force;
};

const windDirectionsMapping = {
    VRB: WindDirections.VRB,
    '///': WindDirections.NOT_REPORTED,
};

const createWindToken = (direction, force, unit, { gustsForce, fromDirection, toDirection } = {}) => ({
    tokenType: TokenTypes.WIND,

    args: ['direction', 'force', 'gustsForce', 'unit', 'fromDirection', 'toDirection'],

    direction,
    force,
    unit,
    gustsForce: pick(gustsForce),
    fromDirection: pick(fromDirection),
    toDirection: pick(toDirection),

    isCalm: direction === '000' && force === '00',

    directionP: pick(windDirectionsMapping[direction], 1 * direction),
    fromDirectionP: isNullOrUndefined(fromDirection) ? null : 1 * fromDirection,
    toDirectionP: isNullOrUndefined(toDirection) ? null : 1 * toDirection,

    forceP: fixForce(force),
    gustsForceP: isNullOrUndefined(gustsForce) ? null : fixForce(gustsForce),
    unitP: unit === 'KT' ? WindSpeedUnit.KNOTS : WindSpeedUnit.METERS_PER_SECOND,
});

const parseWindVariableDirection = (parser) => {
    const { groups } = parser.matchNextTokenAndForward(
        '(?<fromDirection>[0-9]{3})V(?<toDirection>[0-9]{3})',
    );

    if (isNotNullOrUndefined(groups)) {
        const { fromDirection, toDirection } = groups;
        return { fromDirection, toDirection };
    }
    return {};
};

export const parseWind = (parser) => {
    const { groups: simpleGroups } = parser.matchNextTokenAndForward(
        '(?<direction>(VRB|[0-9]{3}|///))(?<force>(P?[0-9]{2}|//))(?<unit>KT|MPS)',
    );
    if (isNotNullOrUndefined(simpleGroups)) {
        const { direction, force, unit } = simpleGroups;
        return createWindToken(
            direction,
            force,
            unit,
            parseWindVariableDirection(parser),
        );
    }

    const { groups: withGustsGroups } = parser.matchNextTokenAndForward(
        '(?<direction>(VRB|[0-9]{3}|///))(?<force>(P?[0-9]{2}|//))G(?<gustsForce>(P?[0-9]{2}|//))(?<unit>KT|MPS)',
    );
    if (isNotNullOrUndefined(withGustsGroups)) {
        const {
            direction, force, unit, gustsForce,
        } = withGustsGroups;

        return createWindToken(
            direction,
            force,
            unit,
            {
                gustsForce,
                ...parseWindVariableDirection(parser),
            },
        );
    }

    return null;
};
