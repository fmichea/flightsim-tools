import React from 'react';
import { MissingDataValue } from 'components/metar/renderers/missingData/MissingDataValue';
import { MissingDataShort } from 'components/metar/renderers/missingData/MissingDataShort';

export const MissingDataRenderers = {
    renderValue: MissingDataValue,
    renderTitle: () => <>Missing Data</>,
    renderShort: MissingDataShort,
};
