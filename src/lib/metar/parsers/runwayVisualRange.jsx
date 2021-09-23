import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { RunwayVisualRangeQualifier, TokenTypes } from 'lib/metar/enums';

export const parseRunwayVisualRange = (parser) => {
    const { groups } = parser.matchNextTokenAndForward(
        'R(?<runway>[0-9]{2})/(?<qualifier>M|P|)(?<distance>[0-9]{4})',
    );
    if (isNotNullOrUndefined(groups)) {
        const { runway, qualifier, distance } = groups;

        let qualifierP = RunwayVisualRangeQualifier.NONE;
        if (qualifier === 'M') {
            qualifierP = RunwayVisualRangeQualifier.AT_MOST;
        } else if (qualifier === 'P') {
            qualifierP = RunwayVisualRangeQualifier.AT_LEAST;
        }

        return {
            tokenType: TokenTypes.RUNWAY_VISUAL_RANGE,
            args: ['runway', 'qualifier', 'distance'],

            runway,
            qualifier: qualifier === '' ? null : qualifier,
            distance,

            qualifierP,
            distanceP: 1 * distance,
        };
    }

    return null;
};
