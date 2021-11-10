import React from 'react';

import { renderWeatherPhenomenons } from 'components/metar/renderers/presentWeather/PresentWeatherShort';
import { RecentWeatherPropTypes } from 'components/metar/renderers/recentWeather/propTypes';

export const RecentWeatherShort = ({ data: { phenomenaParts }, prettyArgs }) => (
    <>
        Weather observed recently includes
        {' '}
        {renderWeatherPhenomenons({ phenomenaParts, prettyArgs })}
        . This weather was not present at the time of observation, but is still relevant operationally (eg. potential
        for wet runway).
    </>
);

RecentWeatherShort.propTypes = RecentWeatherPropTypes;
