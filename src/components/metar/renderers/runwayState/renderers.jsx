import React from 'react';

import { RunwayStateShort } from 'components/metar/renderers/runwayState/RunwayStateShort';
import { RunwayStateValue } from 'components/metar/renderers/runwayState/RunwayStateValue';

export const RunwayStateRenderers = {
    renderValue: RunwayStateValue,
    renderTitle: () => <>State of Runway</>,
    renderShort: RunwayStateShort,
};
