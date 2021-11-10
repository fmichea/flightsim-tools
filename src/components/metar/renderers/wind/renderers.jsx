import React from 'react';

import { WindShort } from 'components/metar/renderers/wind/WindShort';
import { WindValue } from 'components/metar/renderers/wind/WindValue';

export const WindRenderers = {
    renderValue: WindValue,
    renderTitle: () => <>Winds</>,
    renderShort: WindShort,
};
