import React from 'react';
import { TrendValue } from 'components/metar/renderers/trend/TrendValue';
import { TrendShort } from 'components/metar/renderers/trend/TrendShort';

export const TrendRenderers = {
    renderValue: TrendValue,
    renderTitle: () => <>Trend</>,
    renderShort: TrendShort,
};
