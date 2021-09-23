import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes } from 'lib/metar/enums';

export const parseRemarks = (parser) => {
    const { groups } = parser.matchAndForward(/^RMK\s+(?<remarks>[^]+)$/);

    if (isNotNullOrUndefined(groups)) {
        const { remarks } = groups;

        return {
            tokenType: TokenTypes.REMARKS,
            args: ['rmk', 'remarks'],

            rmk: 'RMK',
            remarks,
        };
    }
    return null;
};
