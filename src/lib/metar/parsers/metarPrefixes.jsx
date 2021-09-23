import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes } from 'lib/metar/enums';
import { pick } from 'lib/pick';

const createPrefixToken = (value, { tokenType } = {}) => ({
    tokenType: pick(tokenType, TokenTypes.METAR_PREFIX),
    args: ['value'],
    value,
});

export const skipMETARPrefix = (parser) => {
    const { completeMatch: completeMatch1 } = parser.matchNextTokenAndForward(/METAR/);
    if (isNotNullOrUndefined(completeMatch1)) {
        return createPrefixToken(completeMatch1);
    }

    const { completeMatch: completeMatch2 } = parser.matchNextTokenAndForward(/SPECI/);
    if (isNotNullOrUndefined(completeMatch2)) {
        return createPrefixToken(completeMatch2);
    }
    return null;
};

export const parseAirportICAOCode = (parser) => {
    const { groups } = parser.matchNextTokenAndForward(/(?<airportCode>[A-Z][A-Z0-9]{3})/);

    if (isNotNullOrUndefined(groups)) {
        const { airportCode } = groups;

        return {
            tokenType: TokenTypes.AIRPORT_IDENTIFIER,
            args: ['airportCode'],
            airportCode,
        };
    }

    return {
        tokenType: TokenTypes.NOT_RECOGNIZED,
        message: 'No airport ICAO code was found/recognized.',
    };
};

export const parseMETARTime = (parser) => {
    const { groups } = parser.matchNextTokenAndForward(
        /(?<dayOfMonth>[0-9]{2})(?<hour>[0-9]{2})(?<minutes>[0-9]{2})Z/,
    );

    if (isNotNullOrUndefined(groups)) {
        const { dayOfMonth, hour, minutes } = groups;

        return {
            tokenType: TokenTypes.METAR_TIME,
            args: ['dayOfMonth', 'hour', 'minutes'],

            dayOfMonth,
            hour,
            minutes,

            dayOfMonthP: 1 * dayOfMonth,
        };
    }
    return {
        tokenType: TokenTypes.NOT_RECOGNIZED,
        message: 'No METAR time was found/recognized.',
    };
};

export const parseAuto = (parser) => {
    const { completeMatch } = parser.matchNextTokenAndForward(/AUTO/);

    if (isNotNullOrUndefined(completeMatch)) {
        return createPrefixToken(completeMatch, {
            tokenType: TokenTypes.METAR_PREFIX_OTHER,
        });
    }
    return null;
};

export const parseNIL = (parser) => {
    const { completeMatch } = parser.matchNextTokenAndForward(/NIL/);

    if (isNotNullOrUndefined(completeMatch)) {
        return createPrefixToken(completeMatch, {
            tokenType: TokenTypes.METAR_PREFIX_OTHER,
        });
    }
    return null;
};

export const parseCOR = (parser) => {
    const { completeMatch: completeMatch1 } = parser.matchNextTokenAndForward(/COR/);

    if (isNotNullOrUndefined(completeMatch1)) {
        return createPrefixToken(completeMatch1, {
            tokenType: TokenTypes.METAR_PREFIX_OTHER,
        });
    }
    return null;
};
