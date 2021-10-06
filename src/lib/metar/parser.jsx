import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { parseWind } from 'lib/metar/parsers/wind';
import { parsePrevailingVisibility } from 'lib/metar/parsers/prevailingVisibility';
import {
    parseAirportICAOCode,
    parseAuto,
    parseMETARTime,
    parseNIL,
    parseCOR,
    skipMETARPrefix,
} from 'lib/metar/parsers/metarPrefixes';
import { parseRunwayVisualRange } from 'lib/metar/parsers/runwayVisualRange';
import { parseAltimeter } from 'lib/metar/parsers/altimeter';
import { parseCloudDescriptors } from 'lib/metar/parsers/cloudDescriptors';
import { parseVerticalVisibility } from 'lib/metar/parsers/verticalVisibility';
import { parseTemperatures } from 'lib/metar/parsers/temperatures';
import { parseTrend } from 'lib/metar/parsers/trend';
import { parsePresentWeather } from 'lib/metar/parsers/presentWeather';
import { parseRemarks } from 'lib/metar/parsers/remarks';
import { ParserState } from 'lib/metar/parserState';
import { pick } from 'lib/pick';
import { parseMissingData } from 'lib/metar/parsers/missingData';
import { parseRecentWeather } from 'lib/metar/parsers/recentWeather';
import { parseWindShear } from 'lib/metar/parsers/windShear';

const prefixFunctions = [
    skipMETARPrefix,
    parseCOR,
    parseAirportICAOCode,
    parseMETARTime,
];

const parsersFunctions = [
    parseCOR,
    parseNIL,
    parseAuto,

    parseAltimeter,
    parseCloudDescriptors,
    parsePresentWeather,
    parsePrevailingVisibility,
    parseRemarks,
    parseRunwayVisualRange,
    parseTemperatures,
    parseTrend,
    parseVerticalVisibility,
    parseWind,
    parseRecentWeather,
    parseWindShear,

    parseMissingData,
];

const parseToken = (parser) => {
    for (let idx = 0; idx < parsersFunctions.length; idx += 1) {
        const result = parsersFunctions[idx](parser);

        if (isNotNullOrUndefined(result)) {
            parser.pushToken(result);
            return true;
        }
    }
    return false;
};

const parseNextToken = (parser) => {
    if (parseToken(parser)) {
        return;
    }

    parser.skipToken();
};

export const parseMETAR = (value) => {
    const parser = new ParserState(pick(value, ''));

    prefixFunctions.forEach((fn) => {
        if (!parser.hasMoreToMatch()) {
            return;
        }

        const result = fn(parser);
        if (isNotNullOrUndefined(result)) {
            parser.pushToken(result);
        }
    });

    while (parser.hasMoreToMatch()) {
        parseNextToken(parser);
    }
    return parser.tokens;
};
