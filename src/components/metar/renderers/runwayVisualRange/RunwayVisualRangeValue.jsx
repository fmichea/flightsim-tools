import React from 'react';

import { ThinSpace } from 'components/lib/spaces';
import { RunwayVisualRangePropTypes } from 'components/metar/renderers/runwayVisualRange/propTypes';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';

export const RunwayVisualRangeValue = ({
    prettyArgs: { runway, qualifier, distance },
}) => (
    <>
        R
        <ThinSpace />
        {runway}
        <ThinSpace />
        /
        {isNullOrUndefined(qualifier) ? null : (
            <>
                <ThinSpace />
                {qualifier}
            </>
        )}
        <ThinSpace />
        {distance}
    </>
);

RunwayVisualRangeValue.propTypes = RunwayVisualRangePropTypes;
