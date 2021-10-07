import React from 'react';
import { ColorSystemsValue } from 'components/metar/renderers/colorSystems/ColorSystemsValue';
import { ColorSystemsShort } from 'components/metar/renderers/colorSystems/ColorSystemsShort';

export const ColorSystemsRenderers = {
    renderValue: ColorSystemsValue,
    renderTitle: () => <>Color Systems</>,
    renderShort: ColorSystemsShort,
};
