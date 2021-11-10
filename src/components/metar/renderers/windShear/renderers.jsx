import React from 'react';

import { WindShearShort } from 'components/metar/renderers/windShear/WindShearShort';
import { WindShearValue } from 'components/metar/renderers/windShear/WindShearValue';

export const WindShearRenderers = {
    renderValue: WindShearValue,
    renderTitle: () => <>Wind Shear</>,
    renderShort: WindShearShort,
};
