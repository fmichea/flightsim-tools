import { useMemo } from 'react';

import { AntiIceImagesData } from 'lib/anti-ice/data/imagesData';
import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';
import { pick } from 'lib/pick';

export const useAntiIceRecommendation = ({
    operationModeData,
    moisture,
    temperature,
}) => {
    const { states, image, optionalModes } = useMemo(
        () => {
            const { defaultMode, limits } = operationModeData;

            if (isNotNullOrUndefined(limits)) {
                for (let idx = 0; moisture && idx < limits.length; idx += 1) {
                    const omd = limits[idx];

                    if (temperature < omd.limit) {
                        return {
                            states: omd.defaultMode.states,
                            image: omd.defaultMode.image,
                            optionalModes: pick(omd.optionalModes, []),
                        };
                    }
                }
            }

            if (isNullOrUndefined(defaultMode)) {
                return {
                    states: {},
                    image: null,
                    optionalModes: [],
                };
            }

            return {
                states: defaultMode.states,
                image: defaultMode.image,
                optionalModes: [],
            };
        },
        [operationModeData, moisture, temperature],
    );

    return useMemo(
        () => {
            const optionalModesOrder = [];
            const optionalModesMapping = {};

            optionalModes.forEach((value) => {
                optionalModesOrder.push(value.uid);
                optionalModesMapping[value.uid] = {
                    ...value,
                    image: AntiIceImagesData[value.image],
                };
            });

            return ({
                states,
                image: pick(AntiIceImagesData[image], null),
                optionalModesOrder,
                optionalModesMapping,
            });
        },
        [states, image, optionalModes],
    );
};
