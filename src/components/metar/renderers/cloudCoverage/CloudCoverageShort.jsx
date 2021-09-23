import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { CloudLayerAltitude, CloudLayerAmount, CloudTypes } from 'lib/metar/enums';
import React from 'react';
import { Monospaced } from 'components/lib/Monospaced';
import { CloudCoveragePropTypes } from 'components/metar/renderers/cloudCoverage/propTypes';

const renderAmount = ({ amountP, amount }) => {
    if (amountP === CloudLayerAmount.NSC) {
        return (
            <>
                No significant cloud coverage was reported (
                {amount}
                {' '}
                =
                {' '}
                <Monospaced>
                    <strong>N</strong>
                    il
                    {' '}
                    <strong>S</strong>
                    ignificant
                    {' '}
                    <strong>C</strong>
                    loud
                </Monospaced>
                )
            </>
        );
    }

    if (amountP === CloudLayerAmount.NCD) {
        return (
            <>
                Automatic observing station was unable to report cloud coverage
                {' '}
                (
                {amount}
                )
            </>
        );
    }

    if (amountP === CloudLayerAmount.CLR) {
        return (
            <>
                There are no visible clouds below 12000 ft (
                {amount}
                )
            </>
        );
    }

    switch (amountP) {
    case CloudLayerAmount.FEW:
        return (
            <>
                A few clouds covering up to 25% of the sky (
                {amount}
                ) was reported
            </>
        );

    case CloudLayerAmount.SCT:
        return (
            <>
                Scattered clouds covering 25 to 50% of the sky (
                {amount}
                ) was reported
            </>
        );

    case CloudLayerAmount.BKN:
        return (
            <>
                Broken clouds covering more than 50% of the sky (
                {amount}
                ) was reported
            </>
        );

    case CloudLayerAmount.OVC:
        return (
            <>
                Complete coverage of the sky by clouds (
                {amount}
                ) was reported
            </>
        );

    default:
        return <>FIXME</>;
    }
};

const renderAltitude = ({ altitudeP, altitude }) => {
    if (isNullOrUndefined(altitudeP)) {
        return null;
    }

    if (altitudeP === CloudLayerAltitude.BELOW) {
        return (
            <>
                {' '}
                below the reporting station (
                {altitude}
                )
            </>
        );
    }

    return (
        <>
            {' '}
            at altitude of
            {' '}
            {altitudeP}
            {' '}
            ft (
            {altitude}
            )
        </>
    );
};
const renderCloudType = ({ cloudTypeP, cloudType }) => {
    if (isNullOrUndefined(cloudTypeP)) {
        return null;
    }

    switch (cloudTypeP) {
    case CloudTypes.CB:
        return (
            <>
                {' '}
                Clouds are Cumulonimbuses (
                {cloudType}
                ).
            </>
        );

    case CloudTypes.TCU:
        return (
            <>
                {' '}
                Clouds are Towering Cumulonimbuses (
                {cloudType}
                ).
            </>
        );

    case CloudTypes.NOT_DESCRIBED:
        return (
            <>
                {' '}
                Cloud type could not be described by automated system (
                {cloudType}
                ).
            </>
        );

    default:
        return null;
    }
};

export const CloudCoverageShort = ({
    data: { altitudeP, amountP, cloudTypeP },
    prettyArgs: { amount, altitude, cloudType },
}) => (
    <>
        {renderAmount({ amountP, amount })}
        {renderAltitude({ altitudeP, altitude })}
        .
        {renderCloudType({ cloudTypeP, cloudType })}
    </>
);

CloudCoverageShort.propTypes = CloudCoveragePropTypes;
