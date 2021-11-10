import React from 'react';

import { ThickSpace, ThinSpace } from 'components/lib/spaces';
import { WindPropTypes } from 'components/metar/renderers/wind/propTypes';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';

export const WindValue = ({
    prettyArgs: {
        direction, force, gustsForce, unit, fromDirection, toDirection,
    },
}) => (
    <>
        {direction}
        <ThinSpace />
        {force}
        <ThinSpace />
        {isNullOrUndefined(gustsForce) ? null : (
            <>
                G
                <ThinSpace />
                {gustsForce}
                <ThinSpace />
            </>
        )}
        {unit}
        {isNullOrUndefined(fromDirection) ? null : (
            <>
                <ThickSpace />
                {fromDirection}
                <ThinSpace />
                V
                <ThinSpace />
                {toDirection}
            </>
        )}
    </>
);

WindValue.propTypes = WindPropTypes;
