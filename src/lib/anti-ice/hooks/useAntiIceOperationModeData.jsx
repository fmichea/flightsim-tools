import React, { useMemo } from 'react';
import { AntiIceOperationModesData } from 'lib/anti-ice/data/operationModesData';
import { styled } from 'styletron-react';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { pick } from 'lib/pick';

const SliderTempLabel = styled('span', {
    color: '#4d4d4d',
});

const temperatureMargin = 30;

export const useAntiIceOperationModeData = ({
    antiIceAircraftData,
    selectedOperationModeName,
    antiIceURLManager,
}) => useMemo(
    () => {
        const baseData = AntiIceOperationModesData[selectedOperationModeName];

        const aircraftOperationData = antiIceAircraftData.operationModes
            .filter((v) => v.modeName === selectedOperationModeName)[0];

        const temperatures = [];

        antiIceAircraftData.operationModes.forEach((operationalMode) => {
            pick(pick(operationalMode, {}).limits, [])
                .filter((value) => isNotNullOrUndefined(value.limit))
                .forEach((value) => { temperatures.push(value.limit); });
        });

        temperatures.sort();

        const marks = {};

        pick(pick(aircraftOperationData, {}).limits, [])
            .filter((value) => isNotNullOrUndefined(value.limit))
            .forEach((value) => {
                marks[value.limit] = {
                    label: (
                        <SliderTempLabel>
                            {value.limit}
                            &deg;C
                        </SliderTempLabel>
                    ),
                };
            });

        const hasTemperatures = temperatures.length !== 0;

        const sliderData = {
            marks,
            min: hasTemperatures ? temperatures[0] - temperatureMargin : 0,
            max: hasTemperatures ? temperatures[temperatures.length - 1] + temperatureMargin : 0,
            onChange: (value) => antiIceURLManager.changeTemperature(value),
        };

        return {
            ...baseData,
            ...aircraftOperationData,
            sliderData,
        };
    },
    [selectedOperationModeName, antiIceAircraftData, antiIceURLManager],
);
