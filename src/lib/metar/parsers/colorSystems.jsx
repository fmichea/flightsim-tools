import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes } from 'lib/metar/enums';
import { buildVariableArgs } from 'lib/metar/parsers/internal/varargs';

const splitValues = (completeMatch) => completeMatch.trim().split(/\s+/).map((value) => ({ value, parsed: value }));

export const parseColorSystems = (parser) => {
    const { completeMatch } = parser.matchNextTokenAndForward('(((WHT|GRN|BLU|YLO|RED|BLACK)(\\+|-)?)\\s*)+');
    if (isNotNullOrUndefined(completeMatch)) {
        const colorData = buildVariableArgs('color', splitValues(completeMatch));
        return {
            tokenType: TokenTypes.COLOR_SYSTEMS,
            args: [...colorData.colorArgs],

            ...colorData,
        };
    }

    return null;
};
