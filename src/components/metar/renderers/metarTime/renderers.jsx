import React from 'react';
import { METARTimeValue } from 'components/metar/renderers/metarTime/METARTimeValue';
import { METARTimeShort } from 'components/metar/renderers/metarTime/METARTimeShort';

export const METARTimeRenderers = {
    renderValue: METARTimeValue,
    renderTitle: () => <>METAR Time</>,
    renderShort: METARTimeShort,
};
