import React from 'react';
import { RunwayStateValue } from 'components/metar/renderers/runwayState/RunwayStateValue';
import { RunwayStateShort } from 'components/metar/renderers/runwayState/RunwayStateShort';

export const RunwayStateRenderers = {
    renderValue: RunwayStateValue,
    renderTitle: () => <>State of Runway</>,
    renderShort: RunwayStateShort,
};
