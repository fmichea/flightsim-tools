import React from 'react';
import { Alert } from 'antd';
import { styled, useStyletron } from 'styletron-react';
import { useAntiIceURLConfig } from 'lib/anti-ice/hooks/useAntiIceURLConfig';
import { useAntiIceCheck } from 'lib/anti-ice/hooks/useAntiIceCheck';
import { AntiIceAircraftNotFound } from 'components/anti-ice/AntiIceAircraftNotFound';
import { AntiIceDisplay } from 'components/anti-ice/AntiIceDisplay';
import { ExternalLink } from 'components/lib/ExternalLink';

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
    const [css] = useStyletron();

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
                <Alert
                    type="error"
                    className={css({ marginBottom: '20px' })}
                    message={(
                        <>
                            <strong>ALPHA:</strong>
                            {' '}
                            Code fragile, isn&apos;t released yet, but if you play with this please feel free to
                            leave me feedback using a github issue
                            {' '}
                            <ExternalLink href="https://github.com/fmichea/flightsim-tools/issues">here</ExternalLink>
                            .
                        </>
                    )}
                />

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
