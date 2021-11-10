import React from 'react';

import { MissingDataShort } from 'components/metar/renderers/missingData/MissingDataShort';
import { MissingDataValue } from 'components/metar/renderers/missingData/MissingDataValue';

export const MissingDataRenderers = {
    renderValue: MissingDataValue,
    renderTitle: () => <>Missing Data</>,
    renderShort: MissingDataShort,
};
