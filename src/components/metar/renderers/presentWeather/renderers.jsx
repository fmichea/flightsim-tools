import { PresentWeatherValue } from 'components/metar/renderers/presentWeather/PresentWeatherValue';
import { PresentWeatherShort } from 'components/metar/renderers/presentWeather/PresentWeatherShort';
import React from 'react';

export const PresentWeatherRenderers = {
    renderValue: PresentWeatherValue,
    renderTitle: () => <>Present Weather</>,
    renderShort: PresentWeatherShort,
};
