import React from 'react';
import { AltimeterValue } from 'components/metar/renderers/altimeter/AltimeterValue';
import { AltimeterShort } from 'components/metar/renderers/altimeter/AltimeterShort';

export const AltimeterRenderers = {
    renderValue: AltimeterValue,
    renderTitle: () => <>Altimeter Setting</>,
    renderShort: AltimeterShort,
};
