import React from 'react';

import { AltimeterShort } from 'components/metar/renderers/altimeter/AltimeterShort';
import { AltimeterValue } from 'components/metar/renderers/altimeter/AltimeterValue';

export const AltimeterRenderers = {
    renderValue: AltimeterValue,
    renderTitle: () => <>Altimeter Setting</>,
    renderShort: AltimeterShort,
};
