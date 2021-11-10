import React from 'react';

import { TemperaturesShort } from 'components/metar/renderers/temperatures/TemperaturesShort';
import { TemperaturesValue } from 'components/metar/renderers/temperatures/TemperaturesValue';

export const TemperaturesRenderers = {
    renderValue: TemperaturesValue,
    renderTitle: () => <>Temperatures</>,
    renderShort: TemperaturesShort,
};
