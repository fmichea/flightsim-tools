import React from 'react';

import { ThinSpace } from 'components/lib/spaces';
import { RunwayStatePropTypes } from 'components/metar/renderers/runwayState/propTypes';

export const RunwayStateValue = ({
    prettyArgs: {
        runway, deposit, extent, depth, friction,
    },
}) => (
    <>
        R
        <ThinSpace />
        {runway}
        <ThinSpace />
        /
        <ThinSpace />
        {deposit}
        <ThinSpace />
        {extent}
        <ThinSpace />
        {depth}
        <ThinSpace />
        {friction}
    </>
);

RunwayStateValue.propTypes = RunwayStatePropTypes;
