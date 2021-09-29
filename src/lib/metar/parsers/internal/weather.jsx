import {
    WeatherDescriptor, WeatherIntensity, WeatherPhenomena, WeatherProximity,
} from 'lib/metar/enums';

export const WeatherIntensityPatterns = '\\+|-';
export const WeatherProximityPatterns = 'VC';
export const WeatherDescriptorPatterns = 'MI|BC|PR|DR|BL|SH|TS|FZ';
export const WeatherPhenomenaPatterns = 'DZ|RA|SN|SG|PL|GR|GS|UP|BR|FG|FU|VA|DU|SA|HZ|PO|SQ|FC|SS|DS';

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

const splitValuesIntoArgs = (name, valuesStr, parseValue, lengthOfValue) => {
    const parts = [];

    let currentValue = valuesStr;

    while (currentValue.length !== 0) {
        const x = currentValue.substring(0, lengthOfValue);

        parts.push({
            value: x,
            parsed: parseValue(x),
        });
        currentValue = currentValue.substring(lengthOfValue);
    }

    return buildWeatherArgs(name, parts);
};

export const SplitWeatherItensitiesIntoArgs = (valuesStr) => splitValuesIntoArgs(
    'intensity',
    valuesStr,
    (x) => {
        if (x === '-') return WeatherIntensity.LIGHT;
        if (x === '+') return WeatherIntensity.HEAVY;
        return null;
    },
    1,
);

export const SplitWeatherProximitiesIntoArgs = (valuesStr) => splitValuesIntoArgs(
    'proximity',
    valuesStr,
    (x) => {
        if (x === 'VC') return WeatherProximity.VINCINITY;
        return null;
    },
    2,
);

export const SplitWeatherDescriptorsIntoArgs = (valuesStr) => splitValuesIntoArgs(
    'descriptor',
    valuesStr,
    (x) => weatherDescriptorMapping[x],
    2,
);

export const SplitWeatherPhenomenonsIntoArgs = (valuesStr) => splitValuesIntoArgs(
    'phenomena',
    valuesStr,
    (x) => weatherPhenomenaMapping[x],
    2,
);
