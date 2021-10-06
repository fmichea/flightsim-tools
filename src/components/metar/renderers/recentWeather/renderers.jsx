import React from 'react';
import { RecentWeatherValue } from 'components/metar/renderers/recentWeather/RecentWeatherValue';
import { RecentWeatherShort } from 'components/metar/renderers/recentWeather/RecentWeatherShort';

export const RecentWeatherRenderers = {
    renderValue: RecentWeatherValue,
    renderTitle: () => <>Recent Weather</>,
    renderShort: RecentWeatherShort,
};
