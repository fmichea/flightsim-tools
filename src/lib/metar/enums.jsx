export const TokenTypes = Object.freeze({
    NOT_RECOGNIZED: 'not-recognized',

    ALTIMETER_SETTING: 'altimeter-setting',
    CLOUD_COVERAGE: 'cloud-coverage',
    PRESENT_WEATHER: 'present-weather',
    PREVAILING_VISIBILITY: 'prevailing-visibility',
    REMARKS: 'remarks',
    RUNWAY_VISUAL_RANGE: 'runway-visual-range',
    TEMPERATURES: 'temperatures',
    TREND: 'trend',
    VERTICAL_VISIBILITY: 'vertical-visibility',
    WIND: 'wind',
});

export const WindSpeedUnit = Object.freeze({
    KNOTS: 'knots',
    METERS_PER_SECOND: 'm/s',
});

export const CloudLayerAmount = Object.freeze({
    NSC: 'nil-significant-cloud',
    NCD: 'no-cloud-description',
    FEW: 'few',
    SCT: 'scattered',
    BKN: 'broken',
    OVC: 'overcast',
});

export const CloudTypes = Object.freeze({
    CB: 'cumulonimbus',
    TCU: 'towering-cumulonimbus',
    NOT_DESCRIBED: 'not-described',
});

export const CloudLayerAltitude = Object.freeze({
    BELOW: 'below',
});

export const AltimeterUnit = Object.freeze({
    INHG: 'inHg',
    HPA: 'hPA',
});

export const WindDirections = Object.freeze({
    VRB: 'variable',
});

export const Directions = Object.freeze({
    N: 'north',
    NE: 'north-east',
    E: 'east',
    SE: 'south-east',
    S: 'south',
    SW: 'south-west',
    W: 'west',
    NW: 'north-west',

    NDV: 'no-directional-variation',
});

export const PrevailingVisibility = Object.freeze({
    CAVOK: 'cavok',
    TEN_K: '10k-or-better',
    MISSING: 'missing',
});

export const PrevailingVisibilityUnit = Object.freeze({
    METERS: 'meters',
    KILOMETERS: 'kilometers',
    MILES: 'miles',
});

export const WeatherIntensity = Object.freeze({
    LIGHT: 'light',
    HEAVY: 'heavy',
    VINCINITY: 'vincinity',
});

export const WeatherDescriptor = Object.freeze({
    SHALLOW: 'shallow',
    PATCHES: 'patches',
    PARTIAL: 'partial',
    LOW_DRIFTING: 'low-drifting',
    BLOWING: 'blowing',
    SHOWER: 'shower',
    THUNDERSTORM: 'thunderstorm',
    FREEZING: 'freezing',
});

export const WeatherPhenomena = Object.freeze({
    // Precipitation
    DRIZZLE: 'drizzle',
    RAIN: 'rain',
    SNOW: 'snow',
    SNOW_GRAINS: 'snow-grains',
    ICE_PELLETS: 'ice-pellets',
    HAIL: 'hail',
    SMALL_HAIL_SNOW: 'small-hail-snow',
    UNKNOWN_PRECIPITATION: 'unknown-precipitation',

    // Obscuration
    MIST: 'mist',
    FOG: 'fog',
    SMOKE: 'smoke',
    VOLCANIC_HASH: 'volcanic-hash',
    DUST: 'widespread-dust',
    SAND: 'sand',
    HAZE: 'haze',

    // Other
    DUST_DEVILS: 'dust-devils',
    SQUALLS: 'squalls',
    FUNNEL_CLOUD: 'funnel-cloud',
    SANDSTORM: 'sandstorm',
    DUSTSTORM: 'duststorm',
});

export const RunwayVisualRangeQualifier = Object.freeze({
    NONE: 'none',
    AT_LEAST: 'at-least',
    AT_MOST: 'at-most',
});
