export const TokenTypes = Object.freeze({
    NOT_RECOGNIZED: 'not-recognized',

    AIRPORT_IDENTIFIER: 'airport-identifier',
    ALTIMETER_SETTING: 'altimeter-setting',
    CLOUD_COVERAGE: 'cloud-coverage',
    METAR_PREFIX: 'metar-prefix',
    METAR_PREFIX_OTHER: 'metar-prefix-other',
    METAR_TIME: 'metar-time',
    MISSING_DATA: 'missing-data',
    PRESENT_WEATHER: 'present-weather',
    PREVAILING_VISIBILITY: 'prevailing-visibility',
    REMARKS: 'remarks',
    RUNWAY_VISUAL_RANGE: 'runway-visual-range',
    TEMPERATURES: 'temperatures',
    TREND: 'trend',
    VERTICAL_VISIBILITY: 'vertical-visibility',
    WIND: 'wind',
    WIND_SHEAR: 'wind-shear',
    RECENT_WEATHER: 'recent-weather',
    SEA_SURFACE: 'sea-surface',
    RUNWAY_STATE: 'runway-state',
});

export const WindSpeedUnit = Object.freeze({
    KNOTS: 'knots',
    METERS_PER_SECOND: 'm/s',
});

export const CloudLayerAmount = Object.freeze({
    NSC: 'nil-significant-cloud',
    NCD: 'no-cloud-description',
    CLR: 'clear-12000',

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
    LESS_THAN_QUARTER_MILE: 'less-than-quarter-mile',
});

export const PrevailingVisibilityUnit = Object.freeze({
    METERS: 'meters',
    KILOMETERS: 'kilometers',
    MILES: 'miles',
});

export const WeatherIntensity = Object.freeze({
    LIGHT: 'light',
    HEAVY: 'heavy',
});

export const WeatherProximity = Object.freeze({
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

    NSW: 'no-significant-weather',
});

export const RunwayVisualRangeQualifier = Object.freeze({
    NONE: 'none',
    AT_LEAST: 'at-least',
    AT_MOST: 'at-most',
});

export const WindShearRunway = Object.freeze({
    ALL_RUNWAYS: 'all-runways',
});

export const SeaSurfaceInfoType = Object.freeze({
    SURFACE_STATE: 'surface-state',
    WAVE_HEIGHT: 'wave-height',
});

export const SeaSurfaceStateCode = Object.freeze({
    CALM_GLASSY: 'calm-glassy', // 0
    CALM_RIPPLED: 'calm-rippled', // 1
    SMOOTH: 'smooth', // 2
    SLIGHT: 'slight', // 3
    MODERATE: 'moderate', // 4
    ROUGH: 'rough', // 5
    VERY_ROUGH: 'very-rough', // 6
    HIGH: 'high', // 7
    VERY_HIGH: 'very-high', // 8
    PHENOMENAL: 'phenomenal', // 9
});

export const RunwayDeposit = Object.freeze({
    CLEAR_AND_DRY: 'clear-and-dry', // 0
    DAMP: 'damp', // 1
    WET: 'wet', // 2
    RIME_AND_FROST: 'rime-and-frost', // 3
    DRY_SNOW: 'dry-snow', // 4
    WET_SNOW: 'wet-snow', // 5
    SLUSH: 'slush', // 6
    ICE: 'ice', // 7
    COMPACTED_SNOW: 'compacted-snow', // 8
    FROZEN_RUTS: 'frozen-ruts', // 9

    NOT_REPORTED: 'not-reported', // /
});

export const RunwayContaminationExtent = Object.freeze({
    BELOW_TEN: 'below-ten', // 1
    TEN_TO_TWENTY_FIVE: 'ten-to-twenty-five', // 2
    TWENTY_FIVE_TO_FIFTY: 'twenty-five-to-fifty', // 5
    ABOVE_FIFTY: 'above-fifty', // 9

    NOT_REPORTED: 'not-reported', // /
    UNKNOWN_RESERVED: 'unknown-reserved',
});

export const RunwayContaminationDepth = Object.freeze({
    TEN_CM: 'ten-cm', // 92
    FIFTEEN_CM: 'fifteen-cm', // 93
    TWENTY_CM: 'twenty-cm', // 94
    TWENTY_FIVE_CM: 'twenty-five-cm', // 95
    THIRTY_CM: 'thirty-cm', // 96
    THIRTY_FIVE_CM: 'thirty-five-cm', // 97
    FORTY_CM: 'forty-cm', // 98

    NOT_OPERATIONAL: 'not-operational', // 99
    NOT_REPORTED: 'not-reported', // //
});

export const RunwaySurfaceFriction = Object.freeze({
    BRAKING_ACTION_POOR: 'braking-action-poor', // 91
    BRAKING_ACTION_MEDIUM_POOR: 'braking-action-medium-poor', // 92
    BRAKING_ACTION_MEDIUM: 'braking-action-medium', // 93
    BRAKING_ACTION_MEDIUM_GOOD: 'braking-action-medium-good', // 94
    BRAKING_ACTION_GOOD: 'braking-action-good', // 95

    UNRELIABLE: 'unreliable', // 99
    UNKNOWN_RESERVED: 'unknown-reserved', // 96-98
    NOT_REPORTED: 'not-reported', // //
});

export const TrendType = Object.freeze({
    NOSIG: 'no-significant-change',
    BECOMING: 'becoming',
    TEMPORARY: 'temporary',
});

export const TrendTimeType = Object.freeze({
    FROM: 'from',
    UNTIL: 'until',
    AT: 'at',
});
