import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';
import { AntiIceAircraftsData } from 'lib/anti-ice/data/aircraftsData';
import { useMemo } from 'react';
import { pick } from 'lib/pick';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';

export const useAntiIceCheck = ({
    aircraftName,
    operationModeName,
}) => {
    const knownLists = useMemo(
        () => {
            const operationModes = (
                pick(pick(AntiIceAircraftsData[aircraftName], {}).operationModes, [])
                    .map((v) => v.modeName)
            );

            return {
                aircraftNames: new Set(Object.values(AntiIceAircrafts)),
                operationModesSet: new Set(operationModes),
                operationModes,
            };
        },
        [aircraftName],
    );

    const selectedOperationModeName = useMemo(
        () => {
            if (isNotNullOrUndefined(operationModeName)) {
                return operationModeName;
            }
            return pick(knownLists.operationModes[0]);
        },
        [operationModeName],
    );

    return useMemo(
        () => ({
            aircraftFound: knownLists.aircraftNames.has(aircraftName),
            operationModeFound: knownLists.operationModesSet.has(selectedOperationModeName),
            selectedOperationModeName,
        }),
        [aircraftName, selectedOperationModeName, knownLists],
    );
};
