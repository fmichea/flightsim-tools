import React from 'react';
import { styled } from 'styletron-react';
import { useAntiIceURLConfig } from 'lib/anti-ice/hooks/useAntiIceURLConfig';
import { useAntiIceCheck } from 'lib/anti-ice/hooks/useAntiIceCheck';
import { AntiIceAircraftNotFound } from 'components/anti-ice/AntiIceAircraftNotFound';
import { AntiIceDisplay } from 'components/anti-ice/AntiIceDisplay';

const MainContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
});

const ContentContainer = styled('div', {
    padding: '0px 20px',
    width: '100%',
    maxWidth: '1200px',
});

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
        <MainContainer>
            <ContentContainer>
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
            </ContentContainer>
        </MainContainer>
    );
};
