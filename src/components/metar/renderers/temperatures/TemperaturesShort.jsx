import React from 'react';
import { TemperaturesPropTypes } from 'components/metar/renderers/temperatures/propTypes';

export const TemperaturesShort = ({
    data: { oatP, dewPointP },
    prettyArgs: { oat, dewPoint },
}) => (
    <>
        Outside Air Temperature (OAT) at airport is
        {' '}
        {oatP}
        &deg;C (
        {oat}
        ) and Dew Point Temperature is
        {' '}
        {dewPointP}
        &deg;C (
        {dewPoint}
        ).
    </>
);

TemperaturesShort.propTypes = TemperaturesPropTypes;
