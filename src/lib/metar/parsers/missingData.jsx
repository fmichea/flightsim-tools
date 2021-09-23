import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes } from 'lib/metar/enums';

export const parseMissingData = (parser) => {
    const { completeMatch } = parser.matchNextTokenAndForward('/+');

    if (isNotNullOrUndefined(completeMatch)) {
        return {
            tokenType: TokenTypes.MISSING_DATA,
            args: ['value'],
            value: completeMatch,
        };
    }
    return null;
};
