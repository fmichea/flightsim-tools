import React from 'react';

import { RecentWeatherShort } from 'components/metar/renderers/recentWeather/RecentWeatherShort';
import { RecentWeatherValue } from 'components/metar/renderers/recentWeather/RecentWeatherValue';

export const RecentWeatherRenderers = {
    renderValue: RecentWeatherValue,
    renderTitle: () => <>Recent Weather</>,
    renderShort: RecentWeatherShort,
};
