import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';
import { AntiIceAircraftsData } from 'lib/anti-ice/data/aircraftsData';
import { useMemo } from 'react';
import { pick } from 'lib/pick';
import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';

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

    const [aircraftFound, operationModeFound] = useMemo(
        () => {
            // eslint-disable-next-line no-shadow
            const aircraftFound = knownLists.aircraftNames.has(aircraftName);

            // eslint-disable-next-line no-shadow
            const operationModeFound = (
                isNullOrUndefined(operationModeName)
                || knownLists.operationModesSet.has(operationModeName)
            );

            return [
                aircraftFound,
                aircraftFound && operationModeFound,
            ];
        },
        [knownLists, aircraftName, operationModeName],
    );

    const selectedOperationModeName = useMemo(
        () => {
            if (!operationModeFound) {
                return null;
            }
            if (isNotNullOrUndefined(operationModeName)) {
                return operationModeName;
            }
            return pick(knownLists.operationModes[0]);
        },
        [operationModeFound, operationModeName],
    );

    return {
        aircraftFound,
        operationModeFound,
        selectedOperationModeName,
    };
};
