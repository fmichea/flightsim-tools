import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes, TrendTimeType, TrendType } from 'lib/metar/enums';
import { v4 as uuidv4 } from 'uuid';
import { buildVariableArgs } from 'lib/metar/parsers/internal/varargs';
import { pick } from 'lib/pick';

const trendTypesMapping = {
    NOSIG: TrendType.NOSIG,
    BECMG: TrendType.BECOMING,
    TEMPO: TrendType.TEMPORARY,
};

const createTrendToken = (trendType, { timeParts } = {}) => {
    const timeData = buildVariableArgs('time', pick(timeParts, []));

    return ({
        tokenType: TokenTypes.TREND,
        args: ['trendType', ...timeData.timeArgs],
        context: uuidv4(),

        trendType,
        ...timeData,

        trendTypeP: trendTypesMapping[trendType],
    });
};

const createHourMinutePart = (value, { trendTimeType, hour, minutes }) => {
    const result = { trendTimeType, hour, minutes };
    return { value, parsed: result };
};

const parseTimeToken = (parser, prefix, trendTimeType) => {
    const { completeMatch, groups } = parser.matchNextTokenAndForward(`${prefix}(?<hour>[0-9]{2})(?<minutes>[0-9]{2})`);
    if (isNotNullOrUndefined(groups)) {
        return createHourMinutePart(completeMatch, { trendTimeType, ...groups });
    }

    return null;
};

const parseFrom = (parser) => parseTimeToken(parser, 'FM', TrendTimeType.FROM);
const parseUntil = (parser) => parseTimeToken(parser, 'TL', TrendTimeType.UNTIL);
const parseAt = (parser) => parseTimeToken(parser, 'AT', TrendTimeType.AT);

const parseTimeInfo = (parser) => {
    const groups = [];

    const timeParserFuncs = [
        parseFrom,
        parseUntil,
        parseAt,
    ];

    // We expect potentially as many groups as there are functions.
    for (let i = 0; i < timeParserFuncs.length; i += 1) {
        let finished = false;

        // We find the type of group by executing each function in order and take the first non-null result.
        for (let j = 0; j < timeParserFuncs.length; j += 1) {
            const fnResult = timeParserFuncs[j](parser);

            if (isNotNullOrUndefined(fnResult)) {
                groups.push(fnResult);
                break;
            }

            finished = true;
        }

        if (finished) {
            break;
        }
    }

    return groups;
};

export const parseTrend = (parser) => {
    const { completeMatch: completeMatchNOSIG } = parser.matchNextTokenAndForward('NOSIG');
    if (isNotNullOrUndefined(completeMatchNOSIG)) {
        return createTrendToken(completeMatchNOSIG);
    }

    const { completeMatch: completeMatchBecoming } = parser.matchNextTokenAndForward('BECMG');
    if (isNotNullOrUndefined(completeMatchBecoming)) {
        return createTrendToken(completeMatchBecoming, {
            timeParts: parseTimeInfo(parser),
        });
    }

    const { completeMatch: completeMatchTemporary } = parser.matchNextTokenAndForward('TEMPO');
    if (isNotNullOrUndefined(completeMatchTemporary)) {
        return createTrendToken(completeMatchTemporary, {
            timeParts: parseTimeInfo(parser),
        });
    }

    return null;
};
