export const TokenTypes = Object.freeze({
    NOT_RECOGNIZED: 'not-recognized',

    ALTIMETER_SETTING: 'altimeter-setting',
    CLOUD_COVERAGE: 'cloud-coverage',
    REMARKS: 'remarks',
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

