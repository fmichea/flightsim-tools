import { WeatherDescriptor, WeatherIntensity, WeatherPhenomena } from 'lib/metar/enums';
import React from 'react';
import { pick } from 'lib/pick';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { ExternalLink } from 'components/lib/ExternalLink';
import { PresentWeatherPropTypes } from 'components/metar/renderers/presentWeather/propTypes';

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

const renderProximity = ({ intensityP, argID, prettyArgs }) => {
    if (intensityP === WeatherIntensity.VINCINITY) {
        return (
            <>
                , in the vincinity of the airport (
                {prettyArgs[argID]}
                )
            </>
        );
    }
    return null;
};

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
});

const renderWeatherPhenomena = ({
    phenomenaP, argID, prettyArgs,
}) => {
    const info = pick(weatherPhenomenaInfo[phenomenaP], {
        title: phenomenaP,
        link: null,
    });

    return (
        <React.Fragment key={argID}>
            {isNullOrUndefined(info.link) ? info.title : (
                <ExternalLink href={info.link}>{info.title}</ExternalLink>
            )}
            {' '}
            (
            {prettyArgs[argID]}
            )
        </React.Fragment>
    );
};

const renderWeatherPhenomenons = ({ phenomenaParts, prettyArgs }) => {
    if (phenomenaParts.length === 0) {
        return null;
    }

    const result = [];

    const mainPhenomena = phenomenaParts[0];

    result.push(
        renderWeatherPhenomena({
            ...mainPhenomena,
            prettyArgs,
        }),
    );

    if (phenomenaParts.length > 1) {
        result.push(
            <>
                {' '}
                mainly, with bouts of
                {' '}
            </>,
        );

        result.push(phenomenaParts.slice(1).map((part, idx) => {
            const d = renderWeatherPhenomena({ ...part, prettyArgs });

            return (
                <>
                    {idx === 0 ? null : ', '}
                    {d}
                </>
            );
        }));
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

const renderDescriptor = ({
    descriptor, descriptorP, argID, prettyArgs,
}) => {
    const info = pick(weatherDescriptorInfo[descriptorP], {
        title: descriptorP,
    });

    return (
        <span key={`descriptor-${descriptor}`}>
            {info.title}
            {' '}
            (
            {prettyArgs[argID]}
            )
        </span>
    );
};

const renderDescriptors = ({ descriptorParts, prettyArgs }) => descriptorParts.map((part, idx) => {
    const d = renderDescriptor({ ...part, prettyArgs });
    return (
        <React.Fragment key={part.argID}>
            {idx === 0 ? null : ', '}
            {d}
        </React.Fragment>
    );
});

export const PresentWeatherShort = ({
    data,
    prettyArgs,
}) => {
    const {
        intensityParts, descriptorParts, phenomenaParts,
    } = data;

    return (
        <>
            Weather report suggests
            {intensityParts.length === 0 ? null : (
                <>
                    {' '}
                    {intensityParts.map((value) => renderIntensity({ ...value, prettyArgs }))}
                </>
            )}
            {' '}
            {renderWeatherPhenomenons({ phenomenaParts, prettyArgs })}
            {intensityParts.map((value) => renderProximity({ ...value, prettyArgs }))}
            .
            {descriptorParts.length === 0 ? null : (
                <>
                    {' '}
                    Weather is described as
                    {' '}
                    {renderDescriptors({ descriptorParts, prettyArgs })}
                    .
                </>
            )}
        </>
    );
};

PresentWeatherShort.propTypes = PresentWeatherPropTypes;
