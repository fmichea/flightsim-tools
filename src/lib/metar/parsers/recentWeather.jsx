import {
    buildDescriptorsArgs,
    buildPhenomenonsArgs, splitWeatherDescriptorsIntoParts,
    splitWeatherPhenomenonsIntoParts, WeatherDescriptorPatterns,
    WeatherPhenomenaPatterns,
} from 'lib/metar/parsers/internal/weather';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes } from 'lib/metar/enums';

const parseRecentWeatherCombination = (parser, descriptorCount, phenomenaCount) => {
    const { groups } = parser.matchNextTokenAndForward(
        'RE'
        + `(?<descriptors>(${WeatherDescriptorPatterns})${descriptorCount})`
        + `(?<phenomenons>(${WeatherPhenomenaPatterns})${phenomenaCount})`,
    );
    if (isNotNullOrUndefined(groups)) {
        const { descriptors, phenomenons } = groups;

        const descriptorsData = buildDescriptorsArgs(splitWeatherDescriptorsIntoParts(descriptors));
        const phenomenonsData = buildPhenomenonsArgs(splitWeatherPhenomenonsIntoParts(phenomenons));

        return {
            tokenType: TokenTypes.RECENT_WEATHER,
            args: [
                ...descriptorsData.descriptorArgs,
                ...phenomenonsData.phenomenaArgs,
            ],

            ...descriptorsData,
            ...phenomenonsData,
        };
    }

    return null;
};

export const parseRecentWeather = (parser) => {
    const combinations = [['+', '+'], ['*', '+'], ['+', '*']];

    for (let idx = 0; idx < combinations.length; idx += 1) {
        const combination = combinations[idx];
        const result = parseRecentWeatherCombination(parser, combination[0], combination[1]);

        if (isNotNullOrUndefined(result)) {
            return result;
        }
    }

    return null;
};
