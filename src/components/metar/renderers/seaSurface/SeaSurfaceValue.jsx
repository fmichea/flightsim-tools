import React from 'react';

import { ThinSpace } from 'components/lib/spaces';
import { SeaSurfacePropTypes } from 'components/metar/renderers/seaSurface/propTypes';
import { SeaSurfaceInfoType } from 'lib/metar/enums';

export const SeaSurfaceValue = ({
    data: { infoType },
    prettyArgs: { temperature, seaStateCode, waveHeight },
}) => {
    let info = null;

    if (infoType === SeaSurfaceInfoType.SURFACE_STATE) {
        info = (
            <>
                S
                <ThinSpace />
                {seaStateCode}
            </>
        );
    }

    if (infoType === SeaSurfaceInfoType.WAVE_HEIGHT) {
        info = (
            <>
                H
                <ThinSpace />
                {waveHeight}
            </>
        );
    }

    return (
        <>
            W
            <ThinSpace />
            {temperature}
            <ThinSpace />
            /
            <ThinSpace />
            {info}
        </>
    );
};

SeaSurfaceValue.propTypes = SeaSurfacePropTypes;
