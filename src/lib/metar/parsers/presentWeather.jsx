import { TokenTypes } from 'lib/metar/enums';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import {
    SplitWeatherDescriptorsIntoArgs,
    SplitWeatherItensitiesIntoArgs,
    SplitWeatherPhenomenonsIntoArgs,
    SplitWeatherProximitiesIntoArgs,
    WeatherDescriptorPatterns,
    WeatherIntensityPatterns,
    WeatherPhenomenaPatterns,
    WeatherProximityPatterns,
} from 'lib/metar/parsers/internal/weather';

export const parsePresentWeather = (parser) => {
    const { groups } = parser.matchNextTokenAndForward(
        `(?<intensities>(${WeatherIntensityPatterns})*)`
        + `(?<proximities>(${WeatherProximityPatterns})*)`
        + `(?<descriptors>(${WeatherDescriptorPatterns})*)`
        + `(?<phenomenons>(${WeatherPhenomenaPatterns})+)`,
    );

    if (isNotNullOrUndefined(groups)) {
        const {
            intensities, proximities, descriptors, phenomenons,
        } = groups;

        const intensitiesData = SplitWeatherItensitiesIntoArgs(intensities);
        const proximityData = SplitWeatherProximitiesIntoArgs(proximities);
        const descriptorsData = SplitWeatherDescriptorsIntoArgs(descriptors);
        const phenomenonsData = SplitWeatherPhenomenonsIntoArgs(phenomenons);

        return {
            tokenType: TokenTypes.PRESENT_WEATHER,
            args: [
                ...intensitiesData.intensityArgs,
                ...proximityData.proximityArgs,
                ...descriptorsData.descriptorArgs,
                ...phenomenonsData.phenomenaArgs,
            ],

            ...intensitiesData,
            ...proximityData,
            ...descriptorsData,
            ...phenomenonsData,
        };
    }
    return null;
};
