import {
    CloudLayerAltitude, CloudLayerAmount, CloudTypes, TokenTypes,
} from 'lib/metar/enums';

const baseData = {
    tokenType: TokenTypes.CLOUD_COVERAGE,
    args: ['amount', 'altitude', 'cloudType'],
};

export const TestDataCloudDescriptor_NSC_Text = 'NSC';
export const TestDataCloudDescriptor_NSC_Data = {
    ...baseData,

    amount: 'NSC',
    altitude: null,
    cloudType: null,

    amountP: CloudLayerAmount.NSC,
    altitudeP: null,
    cloudTypeP: null,
};

export const TestDataCloudDescriptor_NCD_Text = 'NCD';
export const TestDataCloudDescriptor_NCD_Data = {
    ...baseData,

    amount: 'NCD',
    altitude: null,
    cloudType: null,

    amountP: CloudLayerAmount.NCD,
    altitudeP: null,
    cloudTypeP: null,
};

export const TestDataCloudDescriptor_FEW040_Text = 'FEW040';
export const TestDataCloudDescriptor_FEW040_Data = {
    ...baseData,

    amount: 'FEW',
    altitude: '040',
    cloudType: null,

    amountP: CloudLayerAmount.FEW,
    altitudeP: 4000,
    cloudTypeP: null,
};

export const TestDataCloudDescriptor_SCT120_Text = 'SCT120///';
export const TestDataCloudDescriptor_SCT120_Data = {
    ...baseData,

    amount: 'SCT',
    altitude: '120',
    cloudType: '///',

    amountP: CloudLayerAmount.SCT,
    altitudeP: 12000,
    cloudTypeP: CloudTypes.NOT_DESCRIBED,
};

export const TestDataCloudDescriptor_BKN070CB_Text = 'BKN070CB';
export const TestDataCloudDescriptor_BKN070CB_Data = {
    ...baseData,

    amount: 'BKN',
    altitude: '070',
    cloudType: 'CB',

    amountP: CloudLayerAmount.BKN,
    altitudeP: 7000,
    cloudTypeP: CloudTypes.CB,
};

export const TestDataCloudDescriptor_OVC230TCU_Text = 'OVC230TCU';
export const TestDataCloudDescriptor_OVC230TCU_Data = {
    ...baseData,

    amount: 'OVC',
    altitude: '230',
    cloudType: 'TCU',

    amountP: CloudLayerAmount.OVC,
    altitudeP: 23000,
    cloudTypeP: CloudTypes.TCU,
};

export const TestDataCloudDescriptor_OVCBelow_Text = 'OVC///';
export const TestDataCloudDescriptor_OVCBelow_Data = {
    ...baseData,

    amount: 'OVC',
    altitude: '///',
    cloudType: null,

    amountP: CloudLayerAmount.OVC,
    altitudeP: CloudLayerAltitude.BELOW,
    cloudTypeP: null,
};

export const TestDataCloudDescriptor_FEWTCU_Text = 'FEW///TCU';
export const TestDataCloudDescriptor_FEWTCU_Data = {
    ...baseData,

    amount: 'FEW',
    altitude: '///',
    cloudType: 'TCU',

    amountP: CloudLayerAmount.FEW,
    altitudeP: CloudLayerAltitude.BELOW,
    cloudTypeP: CloudTypes.TCU,
};

export const TestDataCloudDescriptor_CLR_Text = 'CLR';
export const TestDataCloudDescriptor_CLR_Data = {

};
