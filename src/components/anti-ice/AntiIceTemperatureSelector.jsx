import { Slider } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

export const AntiIceTemperatureSelector = ({
    temperature,
    moisture,
    sliderData: {
        marks,
        min,
        max,
        onChange,
    },
}) => (
    <Slider
        marks={marks}
        included={false}
        value={temperature}
        min={min}
        max={max}
        onChange={onChange}
        disabled={!moisture}
        handleStyle={moisture ? undefined : { display: 'none' }}
        tipFormatter={(value) => (
            <>
                {value}
                &deg;C
            </>
        )}
    />
);

AntiIceTemperatureSelector.propTypes = {
    temperature: PropTypes.number.isRequired,
    moisture: PropTypes.bool.isRequired,
    sliderData: PropTypes.shape({
        // eslint-disable-next-line react/forbid-prop-types
        marks: PropTypes.any.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
    }).isRequired,
};
