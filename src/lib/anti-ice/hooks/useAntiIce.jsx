import { AntiIceAircraftsData } from 'lib/anti-ice/data/aircraftsData';
import { useAntiIceMenuItems } from 'lib/anti-ice/hooks/useAntiIceMenuItems';
import { useMemo } from 'react';
import { useAntiIceOperationModeData } from 'lib/anti-ice/hooks/useAntiIceOperationModeData';
import { useAntiIceRecommendation } from 'lib/anti-ice/hooks/useAntiIceRecommendation';
import { AntiIceSystemModesData } from 'lib/anti-ice/data/systemModesData';

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
