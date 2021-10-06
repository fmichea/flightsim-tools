import {
    buildPhenomenonsArgs,
    splitWeatherPhenomenonsIntoParts,
    WeatherPhenomenaPatterns,
} from 'lib/metar/parsers/internal/weather';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes } from 'lib/metar/enums';

export const parseRecentWeather = (parser) => {
    const { groups } = parser.matchNextTokenAndForward(`RE(?<phenomenons>(${WeatherPhenomenaPatterns}){1,5})`);
    if (isNotNullOrUndefined(groups)) {
        const phenomenonsData = buildPhenomenonsArgs(splitWeatherPhenomenonsIntoParts(groups.phenomenons));

        return {
            tokenType: TokenTypes.RECENT_WEATHER,
            args: [
                ...phenomenonsData.phenomenaArgs,
            ],

            ...phenomenonsData,
        };
    }

    return null;
};
