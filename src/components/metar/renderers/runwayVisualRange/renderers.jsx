import React from 'react';

import { RunwayVisualRangeShort } from 'components/metar/renderers/runwayVisualRange/RunwayVisualRangeShort';
import { RunwayVisualRangeValue } from 'components/metar/renderers/runwayVisualRange/RunwayVisualRangeValue';

export const RunwayVisualRangeRenderers = {
    renderValue: RunwayVisualRangeValue,
    renderTitle: () => <>Runway Visual Range</>,
    renderShort: RunwayVisualRangeShort,
};
