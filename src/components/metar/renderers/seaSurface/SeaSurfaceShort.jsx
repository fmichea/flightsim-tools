import React from 'react';

import { SeaSurfacePropTypes } from 'components/metar/renderers/seaSurface/propTypes';
import { renderTemperature } from 'components/metar/renderers/temperatures/TemperaturesShort';
import { SeaSurfaceInfoType, SeaSurfaceStateCode } from 'lib/metar/enums';

const seaStateCodeDescriptions = Object.freeze({
    [SeaSurfaceStateCode.CALM_GLASSY]: {
        short: <>calm (glassy)</>,
        long: <>no waves</>,
    },
    [SeaSurfaceStateCode.CALM_RIPPLED]: {
        short: <>calm (rippled)</>,
        long: <>waves of height 10 centimeters or below in height</>,
    },
    [SeaSurfaceStateCode.SMOOTH]: {
        short: <>smooth</>,
        long: <>waves between 10 and 50 centimeters in height</>,
    },
    [SeaSurfaceStateCode.SLIGHT]: {
        short: <>slight</>,
        long: <>waves between 50 centimeters and 1.25 meters in height</>,
    },
    [SeaSurfaceStateCode.MODERATE]: {
        short: <>moderate</>,
        long: <>waves between 1.25 and 2.5 meters in height</>,
    },
    [SeaSurfaceStateCode.ROUGH]: {
        short: <>rough</>,
        long: <>waves between 2.5 and 4 meters in height</>,
    },
    [SeaSurfaceStateCode.VERY_ROUGH]: {
        short: <>very rough</>,
        long: <>waves between 4 and 6 meters in height</>,
    },
    [SeaSurfaceStateCode.HIGH]: {
        short: <>high</>,
        long: <>waves between 6 and 9 meters in height</>,
    },
    [SeaSurfaceStateCode.VERY_HIGH]: {
        short: <>very high</>,
        long: <>waves between 9 and 14 meters in height</>,
    },
    [SeaSurfaceStateCode.PHENOMENAL]: {
        short: <>phenomenal</>,
        long: <>waves over 14 meters high</>,
    },
});

export const SeaSurfaceShort = ({
    data: {
        infoType, temperatureP, seaStateCodeP, waveHeightP,
    },
    prettyArgs: { temperature, seaStateCode, waveHeight },
}) => {
    let info = null;

    if (infoType === SeaSurfaceInfoType.WAVE_HEIGHT) {
        info = (
            <>
                Wave height is
                {' '}
                {waveHeightP > 100 ? (
                    <>
                        {waveHeightP / 100}
                        {' '}
                        meters
                    </>
                ) : (
                    <>
                        {waveHeightP}
                        {' '}
                        centimeters
                    </>
                )}
                {' '}
                (
                {waveHeight}
                ).
            </>
        );
    }

    if (infoType === SeaSurfaceInfoType.SURFACE_STATE) {
        const codeDesc = seaStateCodeDescriptions[seaStateCodeP];

        info = (
            <>
                Sea activity is described as
                {' '}
                {codeDesc.short}
                {' '}
                with
                {' '}
                {codeDesc.long}
                {' '}
                (
                {seaStateCode}
                ).
            </>
        );
    }

    return (
        <>
            Sea surface water temperature
            {' '}
            {renderTemperature({ tempP: temperatureP, temp: temperature })}
            .
            {' '}
            {info}
        </>
    );
};

SeaSurfaceShort.propTypes = SeaSurfacePropTypes;
