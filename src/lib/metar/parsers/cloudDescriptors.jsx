import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';
import {
    CloudLayerAltitude, CloudLayerAmount, CloudTypes, TokenTypes,
} from 'lib/metar/enums';
import { pick } from 'lib/pick';

const fixCloudAltitude = (altitude) => {
    if (isNullOrUndefined(altitude)) {
        return null;
    }

    if (altitude === '///') {
        return CloudLayerAltitude.BELOW;
    }

    return altitude * 100; // feet
};

const createCloudDescriptorsToken = (amount, { altitude, cloudType } = {}) => ({
    tokenType: TokenTypes.CLOUD_COVERAGE,
    args: ['amount', 'altitude', 'cloudType'],

    amount,
    altitude: pick(altitude),
    cloudType: pick(cloudType === '' ? null : cloudType),

    amountP: pick(CloudLayerAmount[amount]),
    altitudeP: fixCloudAltitude(altitude),
    cloudTypeP: pick(cloudType === '///' ? CloudTypes.NOT_DESCRIBED : null, CloudTypes[cloudType]),
});

export const parseCloudDescriptors = (parser) => {
    const { completeMatch: nscCompleteMatch } = parser.matchNextTokenAndForward('NSC');
    if (isNotNullOrUndefined(nscCompleteMatch)) {
        return createCloudDescriptorsToken(nscCompleteMatch);
    }

    const { completeMatch: ncdCompleteMatch } = parser.matchNextTokenAndForward('NCD');
    if (isNotNullOrUndefined(ncdCompleteMatch)) {
        return createCloudDescriptorsToken(ncdCompleteMatch);
    }

    const { completeMatch: clrCompleteMatch } = parser.matchNextTokenAndForward('CLR');
    if (isNotNullOrUndefined(clrCompleteMatch)) {
        return createCloudDescriptorsToken(clrCompleteMatch);
    }

    const { completeMatch: skcCompleteMatch } = parser.matchNextTokenAndForward('SKC');
    if (isNotNullOrUndefined(skcCompleteMatch)) {
        return createCloudDescriptorsToken(skcCompleteMatch);
    }

    const { groups: simpleGroups } = parser.matchNextTokenAndForward(
        '(?<amount>FEW|SCT|BKN|OVC)(?<altitude>[0-9]{3})(?<cloudType>CB|TCU|///|)',
    );
    if (isNotNullOrUndefined(simpleGroups)) {
        const { amount, altitude, cloudType } = simpleGroups;

        return createCloudDescriptorsToken(
            amount,
            {
                altitude,
                cloudType,
            },
        );
    }

    const { groups: belowGroups } = parser.matchNextTokenAndForward(
        '(?<amount>FEW|SCT|BKN|OVC)///(?<cloudType>CB|TCU|)',
    );
    if (isNotNullOrUndefined(belowGroups)) {
        const { amount, cloudType } = belowGroups;

        return createCloudDescriptorsToken(
            amount,
            {
                altitude: '///',
                cloudType,
            },
        );
    }

    const { groups: cloudTypeOnlyGroups } = parser.matchNextTokenAndForward(
        '///(?<cloudType>CB|TCU)',
    );
    if (isNotNullOrUndefined(cloudTypeOnlyGroups)) {
        const { cloudType } = cloudTypeOnlyGroups;

        return createCloudDescriptorsToken(
            null,
            { cloudType },
        );
    }
    return null;
};
