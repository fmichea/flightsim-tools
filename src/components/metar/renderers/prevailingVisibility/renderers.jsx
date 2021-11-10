import React from 'react';

import { PrevailingVisibilityShort } from 'components/metar/renderers/prevailingVisibility/PrevailingVisibilityShort';
import { PrevailingVisibilityValue } from 'components/metar/renderers/prevailingVisibility/PrevailingVisibilityValue';

export const PrevailingVisibilityRenderers = {
    renderValue: PrevailingVisibilityValue,
    renderTitle: () => <>Prevailing Visibility</>,
    renderShort: PrevailingVisibilityShort,
};
