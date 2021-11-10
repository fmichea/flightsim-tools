import { useMemo } from 'react';

import { AntiIceAircraftsData } from 'lib/anti-ice/data/aircraftsData';
import { AntiIceSystemModesData } from 'lib/anti-ice/data/systemModesData';
import { useAntiIceMenuItems } from 'lib/anti-ice/hooks/useAntiIceMenuItems';
import { useAntiIceOperationModeData } from 'lib/anti-ice/hooks/useAntiIceOperationModeData';
import { useAntiIceRecommendation } from 'lib/anti-ice/hooks/useAntiIceRecommendation';

export const useAntiIce = ({
    aircraftName,
    selectedOperationModeName,
    moisture,
    temperature,
    antiIceURLManager,
}) => {
    const antiIceAircraftData = useMemo(
        () => {
            const baseData = AntiIceAircraftsData[aircraftName];

            return {
                ...baseData,
                modesOrderData: baseData.modesOrder.map((uid) => AntiIceSystemModesData[uid]),
            };
        },
        [aircraftName],
    );

    const menuItems = useAntiIceMenuItems({
        antiIceAircraftData,
        antiIceURLManager,
    });

    const operationModeData = useAntiIceOperationModeData({
        antiIceAircraftData,
        selectedOperationModeName,
        antiIceURLManager,
    });

    const [setMoisture] = useMemo(
        () => [
            (value) => antiIceURLManager.changeMoisture(value),
        ],
        [antiIceURLManager],
    );

    const recommendations = useAntiIceRecommendation({
        operationModeData,
        moisture,
        temperature,
    });

    return {
        antiIceAircraftData,
        operationModeData,
        menuItems,
        setMoisture,
        recommendations,
    };
};
