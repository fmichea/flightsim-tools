import {
    TokenTypes, WeatherDescriptor, WeatherIntensity, WeatherPhenomena,
} from 'lib/metar/enums';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';

const weatherDescriptorMapping = Object.freeze({
    MI: WeatherDescriptor.SHALLOW,
    BC: WeatherDescriptor.PATCHES,
    PR: WeatherDescriptor.PARTIAL,
    DR: WeatherDescriptor.LOW_DRIFTING,
    BL: WeatherDescriptor.BLOWING,
    SH: WeatherDescriptor.SHOWER,
    TS: WeatherDescriptor.THUNDERSTORM,
    FZ: WeatherDescriptor.FREEZING,
});

const weatherPhenomenaMapping = Object.freeze({
    DZ: WeatherPhenomena.DRIZZLE,
    RA: WeatherPhenomena.RAIN,
    SN: WeatherPhenomena.SNOW,
    SG: WeatherPhenomena.SNOW_GRAINS,
    PL: WeatherPhenomena.ICE_PELLETS,
    GR: WeatherPhenomena.HAIL,
    GS: WeatherPhenomena.SMALL_HAIL_SNOW,
    UP: WeatherPhenomena.UNKNOWN_PRECIPITATION,
    BR: WeatherPhenomena.MIST,
    FG: WeatherPhenomena.FOG,
    FU: WeatherPhenomena.SMOKE,
    VA: WeatherPhenomena.VOLCANIC_HASH,
    DU: WeatherPhenomena.DUST,
    SA: WeatherPhenomena.SAND,
    HZ: WeatherPhenomena.HAZE,
    PO: WeatherPhenomena.DUST_DEVILS,
    SQ: WeatherPhenomena.SQUALLS,
    FC: WeatherPhenomena.FUNNEL_CLOUD,
    SS: WeatherPhenomena.SANDSTORM,
    DS: WeatherPhenomena.DUSTSTORM,
});

const buildWeatherArgs = (prefix, parts) => {
    const argsKey = `${prefix}Args`;
    const countKey = `${prefix}Count`;
    const partsKey = `${prefix}Parts`;

    const result = {
        [argsKey]: [],
        [countKey]: parts.length,
        [partsKey]: [],
    };

    parts.forEach((part, idx) => {
        const valueIdxKey = `${prefix}${idx}`;
        const valueIdxKeyP = `${valueIdxKey}P`;

        result[argsKey].push(valueIdxKey);
        result[valueIdxKey] = part.value;
        result[valueIdxKeyP] = part.parsed;

        const valueKey = prefix;
        const valueKeyP = `${valueKey}P`;

        result[partsKey].push({
            [valueKey]: part.value,
            [valueKeyP]: part.parsed,
            argID: valueIdxKey,
        });
    });
    return result;
};

const splitItensity = (value) => {
    const parts = [];
    let currentValue = value;

    while (currentValue.length !== 0) {
        if (currentValue[0] === '+') {
            parts.push({
                value: '+',
                parsed: WeatherIntensity.HEAVY,
            });
            currentValue = currentValue.substring(1);
        } else if (currentValue[0] === '-') {
            parts.push({
                value: '-',
                parsed: WeatherIntensity.LIGHT,
            });
            currentValue = currentValue.substring(1);
        } else {
            parts.push({
                value: 'VC',
                parsed: WeatherIntensity.VINCINITY,
            });
            currentValue = currentValue.substring(2);
        }
    }
    return buildWeatherArgs('intensity', parts);
};

const splitDescriptors = (value) => {
    const parts = [];
    let currentValue = value;

    while (currentValue.length !== 0) {
        const x = currentValue.substring(0, 2);

        parts.push({
            value: x,
            parsed: weatherDescriptorMapping[x],
        });
        currentValue = currentValue.substring(2);
    }
    return buildWeatherArgs('descriptor', parts);
};

const splitPhenomenons = (value) => {
    const parts = [];
    let currentValue = value;

    while (currentValue.length !== 0) {
        const x = currentValue.substring(0, 2);

        parts.push({
            value: x,
            parsed: weatherPhenomenaMapping[x],
        });
        currentValue = currentValue.substring(2);
    }
    return buildWeatherArgs('phenomena', parts);
};

export const parsePresentWeather = (parser) => {
    const { groups } = parser.matchNextTokenAndForward(
        '(?<intensities>(\\+|-|VC)*)'
        + '(?<descriptors>(MI|BC|PR|DR|BL|SH|TS|FZ)*)'
        + '(?<phenomenons>(DZ|RA|SN|SG|PL|GR|GS|UP|BR|FG|FU|VA|DU|SA|HZ|PO|SQ|FC|SS|DS)+)',
    );

    if (isNotNullOrUndefined(groups)) {
        const { intensities, descriptors, phenomenons } = groups;

        const intensitiesData = splitItensity(intensities);
        const descriptorsData = splitDescriptors(descriptors);
        const phenomenonsData = splitPhenomenons(phenomenons);

        return {
            tokenType: TokenTypes.PRESENT_WEATHER,
            args: [
                ...intensitiesData.intensityArgs,
                ...descriptorsData.descriptorArgs,
                ...phenomenonsData.phenomenaArgs,
            ],

            ...intensitiesData,
            ...descriptorsData,
            ...phenomenonsData,
        };
    }
    return null;
};
