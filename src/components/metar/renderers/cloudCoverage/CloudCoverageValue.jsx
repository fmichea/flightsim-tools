import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { ThinSpace } from 'components/lib/spaces';
import React from 'react';
import { CloudCoveragePropTypes } from 'components/metar/renderers/cloudCoverage/propTypes';

const renderAmountAltitude = ({ amount, altitude }) => {
    if (isNullOrUndefined(amount) && isNullOrUndefined(altitude)) {
        return (
            <>
                ///
                <ThinSpace />
            </>
        );
    }
    return (
        <>
            {amount}
            {isNullOrUndefined(altitude) ? null : (
                <>
                    <ThinSpace />
                    {altitude}
                </>
            )}
        </>
    );
};

export const CloudCoverageValue = ({
    prettyArgs: { amount, altitude, cloudType },
}) => (
    <>
        {renderAmountAltitude({ amount, altitude })}
        {isNullOrUndefined(cloudType) ? null : (
            <>
                <ThinSpace />
                {cloudType}
            </>
        )}
    </>
);

CloudCoverageValue.propTypes = CloudCoveragePropTypes;
