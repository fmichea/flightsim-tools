import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { ThinSpace } from 'components/lib/spaces';
import React from 'react';
import { CloudCoveragePropTypes } from 'components/metar/renderers/cloudCoverage/propTypes';

export const CloudCoverageValue = ({
    prettyArgs: { amount, altitude, cloudType },
}) => (
    <>
        {amount}
        {isNullOrUndefined(altitude) ? null : (
            <>
                <ThinSpace />
                {altitude}
            </>
        )}
        {isNullOrUndefined(cloudType) ? null : (
            <>
                <ThinSpace />
                {cloudType}
            </>
        )}
    </>
);

CloudCoverageValue.propTypes = CloudCoveragePropTypes;
