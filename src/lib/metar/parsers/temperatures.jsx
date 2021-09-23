import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes } from 'lib/metar/enums';

export const parseTemperatures = (parser) => {
    const { groups } = parser.matchNextTokenAndForward(
        '(?<oat>M?[0-9]{2})/(?<dewPoint>M?[0-9]{2})',
    );

    if (isNotNullOrUndefined(groups)) {
        const { oat, dewPoint } = groups;

        const fixTemp = (temp) => (temp[0] === 'M' ? -1 * temp.substring(1) : 1 * temp);

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
