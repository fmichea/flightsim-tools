import {
    WeatherDescriptor, WeatherIntensity, WeatherPhenomena, WeatherProximity,
} from 'lib/metar/enums';
import React from 'react';
import { pick } from 'lib/pick';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { ExternalLink } from 'components/lib/ExternalLink';
import { PresentWeatherPropTypes } from 'components/metar/renderers/presentWeather/propTypes';

const renderValues = ({ parts, renderFN, prettyArgs }) => {
    if (parts.length === 0) {
        return null;
    }

    const contents = parts.map((partData, idx) => (
        <React.Fragment key={partData.argID}>
            {idx === 0 ? null : ', '}
            {renderFN({ prettyArgs, ...partData })}
        </React.Fragment>
    ));

    return (
        <>
            {' '}
            {contents}
        </>
    );
};

const renderIntensity = ({ intensityP, argID, prettyArgs }) => {
    if (intensityP !== WeatherIntensity.VINCINITY) {
        return (
            <React.Fragment key={argID}>
                {intensityP}
                {' '}
                (
                {prettyArgs[argID]}
                )
            </React.Fragment>
        );
    }
    return null;
};

const renderIntensities = ({ intensityParts, prettyArgs }) => renderValues({
    parts: intensityParts,
    renderFN: renderIntensity,
    prettyArgs,
});

const renderProximity = ({ proximityP, argID, prettyArgs }) => {
    if (proximityP === WeatherProximity.VINCINITY) {
        return (
            <>
                in the vincinity of the airport (
                {prettyArgs[argID]}
                )
            </>
        );
    }
    return null;
};

const renderProximities = ({ proximityParts, prettyArgs }) => renderValues({
    parts: proximityParts,
    renderFN: renderProximity,
    prettyArgs,
});

const weatherPhenomenaInfo = Object.freeze({
    [WeatherPhenomena.SNOW_GRAINS]: {
        title: 'snow grains',
        link: 'https://en.wikipedia.org/wiki/Snow_grains',
    },
    [WeatherPhenomena.ICE_PELLETS]: {
        title: 'ice pellets',
        link: 'https://en.wikipedia.org/wiki/Ice_pellets',
    },
    [WeatherPhenomena.SMALL_HAIL_SNOW]: {
        title: 'small hail and/or snow pellets',
    },
    [WeatherPhenomena.UNKNOWN_PRECIPITATION]: {
        title: 'unknown precipitation',
    },
    [WeatherPhenomena.MIST]: {
        title: 'mist',
        link: 'https://en.wikipedia.org/wiki/Mist',
    },
    [WeatherPhenomena.FOG]: {
        title: 'fog',
        link: 'https://en.wikipedia.org/wiki/Fog',
    },
    [WeatherPhenomena.DUST]: {
        title: 'widespread dust',
    },
    [WeatherPhenomena.VOLCANIC_HASH]: {
        title: 'volcanic hash',
    },
    [WeatherPhenomena.HAZE]: {
        title: 'haze',
        link: 'https://en.wikipedia.org/wiki/Haze',
    },
    [WeatherPhenomena.DUST_DEVILS]: {
        title: 'dust/sand whirls (dust devils)',
        link: 'https://en.wikipedia.org/wiki/Dust_devil',
    },
    [WeatherPhenomena.SQUALLS]: {
        title: 'squalls',
        link: 'https://en.wikipedia.org/wiki/Squall',
    },
    [WeatherPhenomena.FUNNEL_CLOUD]: {
        title: 'funnel clouds (tornado or watersprout)',
        link: 'https://en.wikipedia.org/wiki/Funnel_cloud',
    },
    [WeatherPhenomena.DRIZZLE]: {
        title: 'drizzle',
        link: 'https://en.wikipedia.org/wiki/Drizzle',
    },
    [WeatherPhenomena.NSW]: {
        title: 'no significant weather',
    },
});

const renderWeatherPhenomena = ({ phenomenaP, argID, prettyArgs }) => {
    const info = pick(weatherPhenomenaInfo[phenomenaP], {
        title: phenomenaP,
        link: null,
    });

    return (
        <>
            {isNullOrUndefined(info.link) ? info.title : (
                <ExternalLink href={info.link}>{info.title}</ExternalLink>
            )}
            {' '}
            (
            {prettyArgs[argID]}
            )
        </>
    );
};

export const renderWeatherPhenomenons = ({ phenomenaParts, prettyArgs }) => {
    if (phenomenaParts.length === 0) {
        return null;
    }

    const result = [];

    const mainPhenomena = phenomenaParts[0];

    result.push(
        <React.Fragment key="first-value">
            {renderWeatherPhenomena({
                ...mainPhenomena,
                prettyArgs,
            })}
        </React.Fragment>,
    );

    if (phenomenaParts.length > 1) {
        result.push(
            <React.Fragment key="bouts">
                {' '}
                mainly, with bouts of
            </React.Fragment>,
        );

        result.push(
            <React.Fragment key="values">
                {renderValues({
                    parts: phenomenaParts.slice(1),
                    renderFN: renderWeatherPhenomena,
                    prettyArgs,
                })}
            </React.Fragment>,
        );
    }

    return result;
};

const weatherDescriptorInfo = Object.freeze({
    [WeatherDescriptor.PATCHES]: {
        title: 'patchy',
    },
    [WeatherDescriptor.PARTIAL]: {
        title: 'partially covering airport',
    },
    [WeatherDescriptor.SHOWER]: {
        title: 'coming in showers',
    },
    [WeatherDescriptor.THUNDERSTORM]: {
        title: 'with thunderstorms',
    },
});

const renderDescriptor = ({ descriptorP, argID, prettyArgs }) => {
    const info = pick(weatherDescriptorInfo[descriptorP], {
        title: descriptorP,
    });

    return (
        <>
            {info.title}
            {' '}
            (
            {prettyArgs[argID]}
            )
        </>
    );
};

const renderDescriptors = ({ descriptorParts, prettyArgs }) => renderValues({
    parts: descriptorParts,
    renderFN: renderDescriptor,
    prettyArgs,
});

export const PresentWeatherShort = ({
    data,
    prettyArgs,
}) => {
    const {
        intensityParts,
        proximityParts,
        descriptorParts,
        phenomenaParts,
    } = data;

    return (
        <>
            Weather report suggests
            {renderIntensities({ intensityParts, prettyArgs })}
            {' '}
            {renderWeatherPhenomenons({ phenomenaParts, prettyArgs })}
            {renderProximities({ proximityParts, prettyArgs })}
            .
            {descriptorParts.length === 0 ? null : (
                <>
                    {' '}
                    Weather is described as
                    {renderDescriptors({ descriptorParts, prettyArgs })}
                    .
                </>
            )}
        </>
    );
};

PresentWeatherShort.propTypes = PresentWeatherPropTypes;
