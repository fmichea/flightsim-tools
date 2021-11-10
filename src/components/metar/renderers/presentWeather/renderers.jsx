import React from 'react';

import { PresentWeatherShort } from 'components/metar/renderers/presentWeather/PresentWeatherShort';
import { PresentWeatherValue } from 'components/metar/renderers/presentWeather/PresentWeatherValue';

export const PresentWeatherRenderers = {
    renderValue: PresentWeatherValue,
    renderTitle: () => <>Present Weather</>,
    renderShort: PresentWeatherShort,
};
