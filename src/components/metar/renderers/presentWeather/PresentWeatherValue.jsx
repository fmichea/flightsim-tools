import React from 'react';

import { ThinSpace } from 'components/lib/spaces';
import { PresentWeatherPropTypes } from 'components/metar/renderers/presentWeather/propTypes';

export const PresentWeatherValue = ({ data: { args }, prettyArgs }) => {
    const prettyArgsOrdered = args.map((value, idx) => (
        <span key={`arg-${value}`}>
            {idx === 0 ? null : <ThinSpace />}
            {prettyArgs[value]}
        </span>
    ));

    return <>{prettyArgsOrdered}</>;
};

PresentWeatherValue.propTypes = PresentWeatherPropTypes;
