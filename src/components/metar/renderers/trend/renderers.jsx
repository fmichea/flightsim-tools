import React from 'react';

import { TrendShort } from 'components/metar/renderers/trend/TrendShort';
import { TrendValue } from 'components/metar/renderers/trend/TrendValue';

export const TrendRenderers = {
    renderValue: TrendValue,
    renderTitle: () => <>Trend</>,
    renderShort: TrendShort,
};
