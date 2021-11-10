import React from 'react';

import { RemarksShort } from 'components/metar/renderers/remarks/RemarksShort';
import { RemarksValue } from 'components/metar/renderers/remarks/RemarksValue';

export const RemarksRenderers = {
    renderValue: RemarksValue,
    renderTitle: () => <>Remarks</>,
    renderShort: RemarksShort,
};
