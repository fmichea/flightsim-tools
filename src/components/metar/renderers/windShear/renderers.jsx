import React from 'react';
import { WindShearValue } from 'components/metar/renderers/windShear/WindShearValue';
import { WindShearShort } from 'components/metar/renderers/windShear/WindShearShort';

export const WindShearRenderers = {
    renderValue: WindShearValue,
    renderTitle: () => <>Wind Shear</>,
    renderShort: WindShearShort,
};
