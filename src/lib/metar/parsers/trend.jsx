import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes } from 'lib/metar/enums';

export const parseTrend = (parser) => {
    const { completeMatch } = parser.matchNextTokenAndForward('NOSIG');
    if (isNotNullOrUndefined(completeMatch)) {
        return {
            tokenType: TokenTypes.TREND,
            args: ['value'],

            value: completeMatch,
        };
    }

    return null;
};
