import { useMemo } from 'react';

import { AntiIceOperationModesData } from 'lib/anti-ice/data/operationModesData';

export const useAntiIceMenuItems = ({
    antiIceURLManager,
    antiIceAircraftData,
}) => useMemo(
    () => antiIceAircraftData.operationModes.map((v) => v.modeName).map((operationModeName) => {
        const baseData = AntiIceOperationModesData[operationModeName];

        return {
            ...baseData,
            key: baseData.uid,
            selectMenu: () => {
                antiIceURLManager.changeOperationMode(operationModeName);
            },
        };
    }),
    [antiIceAircraftData.operationModes, antiIceURLManager],
);
