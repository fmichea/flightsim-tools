import React from 'react';
import { SeaSurfaceShort } from 'components/metar/renderers/seaSurface/SeaSurfaceShort';
import { SeaSurfaceValue } from 'components/metar/renderers/seaSurface/SeaSurfaceValue';

export const SeaSurfaceRenderers = {
    renderValue: SeaSurfaceValue,
    renderTitle: () => <>Sea Surface Information</>,
    renderShort: SeaSurfaceShort,
};
