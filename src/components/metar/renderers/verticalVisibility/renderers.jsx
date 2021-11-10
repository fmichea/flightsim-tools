import React from 'react';

import { VerticalVisibilityShort } from 'components/metar/renderers/verticalVisibility/VerticalVisibilityShort';
import { VerticalVisibilityValue } from 'components/metar/renderers/verticalVisibility/VerticalVisibilityValue';

export const VerticalVisibilityRenderers = {
    renderValue: VerticalVisibilityValue,
    renderTitle: () => <>Vertical Visibility</>,
    renderShort: VerticalVisibilityShort,
};
