import { RunwayVisualRangeValue } from 'components/metar/renderers/runwayVisualRange/RunwayVisualRangeValue';
import { RunwayVisualRangeShort } from 'components/metar/renderers/runwayVisualRange/RunwayVisualRangeShort';

export const RunwayVisualRangeRenderers = {
    renderValue: RunwayVisualRangeValue,
    renderTitle: () => <>Runway Visual Range</>,
    renderShort: RunwayVisualRangeShort,
};
