import { TokenTypes, WeatherPhenomena } from 'lib/metar/enums';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import {
    buildDescriptorsArgs,
    buildIntensitiesArgs,
    buildPhenomenonsArgs,
    buildProximitiessArgs,
    splitWeatherDescriptorsIntoParts,
    splitWeatherItensitiesIntoParts,
    splitWeatherPhenomenonsIntoParts,
    splitWeatherProximitiesIntoParts,
    WeatherDescriptorPatterns,
    WeatherIntensityPatterns,
    WeatherPhenomenaPatterns,
    WeatherProximityPatterns,
} from 'lib/metar/parsers/internal/weather';
import { pick } from 'lib/pick';

const createPresentWeatherToken = ({
    intensityParts, proximityParts, descriptorParts, phenomenaParts,
}) => {
    const intensitiesData = buildIntensitiesArgs(pick(intensityParts, []));
    const proximityData = buildProximitiessArgs(pick(proximityParts, []));
    const descriptorsData = buildDescriptorsArgs(pick(descriptorParts, []));
    const phenomenonsData = buildPhenomenonsArgs(pick(phenomenaParts, []));

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
};

export const parsePresentWeather = (parser) => {
    const { completeMatch } = parser.matchNextTokenAndForward('NSW');
    if (isNotNullOrUndefined(completeMatch)) {
        return createPresentWeatherToken({
            phenomenaParts: [
                {
                    value: completeMatch,
                    parsed: WeatherPhenomena.NSW,
                },
            ],
        });
    }

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

        return createPresentWeatherToken({
            intensityParts: splitWeatherItensitiesIntoParts(intensities),
            proximityParts: splitWeatherProximitiesIntoParts(proximities),
            descriptorParts: splitWeatherDescriptorsIntoParts(descriptors),
            phenomenaParts: splitWeatherPhenomenonsIntoParts(phenomenons),
        });
    }
    return null;
};
