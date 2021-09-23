import React from 'react';
import { RemarksValue } from 'components/metar/renderers/remarks/RemarksValue';
import { RemarksShort } from 'components/metar/renderers/remarks/RemarksShort';

export const RemarksRenderers = {
    renderValue: RemarksValue,
    renderTitle: () => <>Remarks</>,
    renderShort: RemarksShort,
};
