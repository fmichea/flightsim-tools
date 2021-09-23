import { ThinSpace } from 'components/lib/spaces';
import React from 'react';
import { TemperaturesPropTypes } from 'components/metar/renderers/temperatures/propTypes';

export const TemperaturesValue = ({ prettyArgs: { oat, dewPoint } }) => (
    <>
        {oat}
        <ThinSpace />
        /
        <ThinSpace />
        {dewPoint}
    </>
);

TemperaturesValue.propTypes = TemperaturesPropTypes;
