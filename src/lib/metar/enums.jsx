export const TokenTypes = Object.freeze({
    NOT_RECOGNIZED: 'not-recognized',

    ALTIMETER_SETTING: 'altimeter-setting',
    CLOUD_COVERAGE: 'cloud-coverage',
    PREVAILING_VISIBILITY: 'prevailing-visibility',
    REMARKS: 'remarks',
    TEMPERATURES: 'temperatures',
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

