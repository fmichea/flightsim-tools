import React, { useEffect, useState } from 'react';

import {
    Col, Empty, Menu, Row, Typography,
} from 'antd';
import PropTypes from 'prop-types';
import { useStyletron } from 'styletron-react';

import { AntiIceConfigurationSelector } from 'components/anti-ice/AntiIceConfigurationSelector';
import { AntiIceMoistureSelector } from 'components/anti-ice/AntiIceMoistureSelector';
import { AntiIceRecommendationDisplay } from 'components/anti-ice/AntiIceRecommendationDisplay';
import { AntiIceTemperatureSelector } from 'components/anti-ice/AntiIceTemperatureSelector';
import { AntiIceTemperatureTitle } from 'components/anti-ice/AntiIceTemperatureTitle';
import { useAntiIce } from 'lib/anti-ice/hooks/useAntiIce';

const { Title } = Typography;

export const AntiIceDisplay = ({
    aircraftName,
    selectedOperationModeName,
    moisture,
    temperature,
    antiIceURLManager,
    operationModeFound,
}) => {
    const [css] = useStyletron();

    const {
        antiIceAircraftData,
        menuItems,
        operationModeData,
        setMoisture,
        recommendations,
    } = useAntiIce({
        aircraftName,
        selectedOperationModeName,
        moisture,
        temperature,
        antiIceURLManager,
    });

    const [currentConfiguration, setCurrentConfiguration] = useState('default');
    const { optionalModesOrder, optionalModesMapping } = recommendations;

    useEffect(
        () => { setCurrentConfiguration('default'); },
        [selectedOperationModeName, optionalModesOrder],
    );

    const menu = (
        <Menu
            selectedKeys={[selectedOperationModeName]}
            className={css({ marginBottom: '20px' })}
            mode="horizontal"
        >
            {menuItems.map((v) => (
                <Menu.Item key={v.key} onClick={v.selectMenu}>
                    {v.title}
                </Menu.Item>
            ))}
        </Menu>
    );

    if (!operationModeFound) {
        return (
            <>
                <Title>{antiIceAircraftData.title}</Title>
                {menu}
                <Empty />
            </>
        );
    }

    return (
        <>
            <Title>{antiIceAircraftData.title}</Title>

            {menu}

            <Row className={css({ marginBottom: '20px' })}>
                <Col span={21}>
                    <strong>Is there water on the ground or in the air?</strong>
                    <br />
                    {operationModeData.moistureHelp}
                </Col>
                <Col span={3}>
                    <AntiIceMoistureSelector moisture={moisture} setMoisture={setMoisture} />
                </Col>
            </Row>

            <Row className={css({ marginBottom: '20px' })}>
                <Col span={5}>
                    <AntiIceTemperatureTitle temperature={operationModeData.temperature} />
                </Col>
                <Col span={19}>
                    <AntiIceTemperatureSelector
                        temperature={temperature}
                        moisture={moisture}
                        sliderData={operationModeData.sliderData}
                    />
                </Col>
            </Row>

            <Title level={5}>
                Recommendation at
                {' '}
                {moisture ? (
                    <>
                        {temperature}
                        &deg;C with moisture
                    </>
                ) : (
                    <>
                        any temperature without moisture
                    </>
                )}
                {' '}
                and
                {' '}
                <AntiIceConfigurationSelector
                    currentConfiguration={currentConfiguration}
                    setCurrentConfiguration={setCurrentConfiguration}
                    optionalModesOrder={optionalModesOrder}
                    optionalModesMapping={optionalModesMapping}
                />
                {' '}
                configuration:
            </Title>

            <AntiIceRecommendationDisplay
                currentConfiguration={currentConfiguration}
                antiIceAircraftData={antiIceAircraftData}
                recommendations={recommendations}
            />
        </>
    );
};

AntiIceDisplay.propTypes = {
    aircraftName: PropTypes.string.isRequired,
    selectedOperationModeName: PropTypes.string.isRequired,
    moisture: PropTypes.bool.isRequired,
    temperature: PropTypes.number.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    antiIceURLManager: PropTypes.any.isRequired,
    operationModeFound: PropTypes.bool.isRequired,
};
