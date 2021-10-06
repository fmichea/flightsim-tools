import React from 'react';
import { ThinSpace } from 'components/lib/spaces';
import { RecentWeatherPropTypes } from 'components/metar/renderers/recentWeather/propTypes';

export const RecentWeatherValue = ({
    data: { args },
    prettyArgs,
}) => {
    const prettyArgsOrdered = args.map((value) => (
        <React.Fragment key={value}>
            <ThinSpace />
            {prettyArgs[value]}
        </React.Fragment>
    ));

    return (
        <>
            RE
            {prettyArgsOrdered}
        </>
    );
};

RecentWeatherValue.propTypes = RecentWeatherPropTypes;
