import React from 'react';
import { TemperaturesValue } from 'components/metar/renderers/temperatures/TemperaturesValue';
import { TemperaturesShort } from 'components/metar/renderers/temperatures/TemperaturesShort';

export const TemperaturesRenderers = {
    renderValue: TemperaturesValue,
    renderTitle: () => <>Temperatures</>,
    renderShort: TemperaturesShort,
};
