import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes } from 'lib/metar/enums';
import { fixTemp, TemperaturePattern } from 'lib/metar/parsers/internal/temperatures';

export const parseTemperatures = (parser) => {
    const { groups } = parser.matchNextTokenAndForward(
        `(?<oat>${TemperaturePattern})/(?<dewPoint>${TemperaturePattern})`,
    );

    if (isNotNullOrUndefined(groups)) {
        const { oat, dewPoint } = groups;

        return {
            tokenType: TokenTypes.TEMPERATURES,
            args: ['oat', 'dewPoint'],

            oat,
            dewPoint,

            oatP: fixTemp(oat),
            dewPointP: fixTemp(dewPoint),
        };
    }
    return null;
};
