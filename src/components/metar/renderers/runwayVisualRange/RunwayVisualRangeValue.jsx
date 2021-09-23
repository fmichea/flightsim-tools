import React from 'react';
import { ThinSpace } from 'components/lib/spaces';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { RunwayVisualRangePropTypes } from 'components/metar/renderers/runwayVisualRange/propTypes';

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
