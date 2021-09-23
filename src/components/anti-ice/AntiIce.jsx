import React from 'react';
import { useAntiIceURLConfig } from 'lib/anti-ice/hooks/useAntiIceURLConfig';
import { useAntiIceCheck } from 'lib/anti-ice/hooks/useAntiIceCheck';
import { AntiIceAircraftNotFound } from 'components/anti-ice/AntiIceAircraftNotFound';
import { AntiIceDisplay } from 'components/anti-ice/AntiIceDisplay';
import { CenteredContentContainer } from 'components/lib/CenteredContentContainer';

export const AntiIce = () => {
    const {
        aircraftName,
        operationModeName,
        moisture,
        temperature,
        antiIceURLManager,
    } = useAntiIceURLConfig();

    const {
        aircraftFound,
        operationModeFound,
        selectedOperationModeName,
    } = useAntiIceCheck({
        aircraftName,
        operationModeName,
    });

    return (
        <CenteredContentContainer>
            {!aircraftFound
                ? <AntiIceAircraftNotFound aircraftName={aircraftName} />
                : (
                    <AntiIceDisplay
                        aircraftName={aircraftName}
                        selectedOperationModeName={selectedOperationModeName}
                        moisture={moisture}
                        temperature={temperature}
                        antiIceURLManager={antiIceURLManager}
                        operationModeFound={operationModeFound}
                    />
                )}
        </CenteredContentContainer>
    );
};
