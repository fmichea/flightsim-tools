import { PrevailingVisibilityValue } from 'components/metar/renderers/prevailingVisibility/PrevailingVisibilityValue';
import { PrevailingVisibilityShort } from 'components/metar/renderers/prevailingVisibility/PrevailingVisibilityShort';
import React from 'react';

export const PrevailingVisibilityRenderers = {
    renderValue: PrevailingVisibilityValue,
    renderTitle: () => <>Prevailing Visibility</>,
    renderShort: PrevailingVisibilityShort,
};
