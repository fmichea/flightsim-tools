import React from 'react';
import { VerticalVisibilityValue } from 'components/metar/renderers/verticalVisibility/VerticalVisibilityValue';
import { VerticalVisibilityShort } from 'components/metar/renderers/verticalVisibility/VerticalVisibilityShort';

export const VerticalVisibilityRenderers = {
    renderValue: VerticalVisibilityValue,
    renderTitle: () => <>Vertical Visibility</>,
    renderShort: VerticalVisibilityShort,
};
