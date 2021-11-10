import React from 'react';

import { METARTimeShort } from 'components/metar/renderers/metarTime/METARTimeShort';
import { METARTimeValue } from 'components/metar/renderers/metarTime/METARTimeValue';

export const METARTimeRenderers = {
    renderValue: METARTimeValue,
    renderTitle: () => <>METAR Time</>,
    renderShort: METARTimeShort,
};
