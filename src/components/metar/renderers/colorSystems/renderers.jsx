import React from 'react';

import { ColorSystemsShort } from 'components/metar/renderers/colorSystems/ColorSystemsShort';
import { ColorSystemsValue } from 'components/metar/renderers/colorSystems/ColorSystemsValue';

export const ColorSystemsRenderers = {
    renderValue: ColorSystemsValue,
    renderTitle: () => <>Color Systems</>,
    renderShort: ColorSystemsShort,
};
