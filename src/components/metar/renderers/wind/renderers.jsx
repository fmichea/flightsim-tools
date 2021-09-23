import React from 'react';
import { WindValue } from 'components/metar/renderers/wind/WindValue';
import { WindShort } from 'components/metar/renderers/wind/WindShort';

export const WindRenderers = {
    renderValue: WindValue,
    renderTitle: () => <>Winds</>,
    renderShort: WindShort,
};
