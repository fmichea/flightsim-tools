import React from 'react';
import { TemperaturesPropTypes } from 'components/metar/renderers/temperatures/propTypes';
import { Temperatures } from 'lib/metar/enums';

export const renderTemperature = ({ tempP, temp }) => {
    if (tempP === Temperatures.NOT_REPORTED) {
        return (
            <>
                could not be reported (
                {temp}
                )
            </>
        );
    }

    return (
        <>
            is
            {' '}
            {tempP}
            &deg;C (
            {temp}
            )
        </>
    );
};

export const TemperaturesShort = ({
    data: { oatP, dewPointP },
    prettyArgs: { oat, dewPoint },
}) => (
    <>
        Outside Air Temperature (OAT) at airport
        {' '}
        {renderTemperature({ tempP: oatP, temp: oat })}
        {' '}
        and Dew Point Temperature
        {' '}
        {renderTemperature({ tempP: dewPointP, temp: dewPoint })}
        .
    </>
);

TemperaturesShort.propTypes = TemperaturesPropTypes;
