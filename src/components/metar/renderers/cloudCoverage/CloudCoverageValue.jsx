import React from 'react';

import { ThinSpace } from 'components/lib/spaces';
import { CloudCoveragePropTypes } from 'components/metar/renderers/cloudCoverage/propTypes';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';

const renderAmountAltitude = ({ amount, altitude }) => {
    if (isNullOrUndefined(amount) && isNullOrUndefined(altitude)) {
        return (
            <>
                &#47;&#47;&#47;
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
