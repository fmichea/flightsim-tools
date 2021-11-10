import React from 'react';

import { Col, Row, Typography } from 'antd';

import { List, ListItem } from 'components/lib/List';

const { Title } = Typography;

export const MainPage = () => (
    <>
        <Title>FlightSim Tools</Title>

        <p>
            This is just a set of tools that help me fly. Currently you will find checklists for aircrafts that I like,
            and information for anti-ice for the CJ4. Here is a list of features that can be found for each.
        </p>

        <Row>
            <Col span={12}>
                <Title level={3}>Checklists</Title>

                <List>
                    <ListItem>
                        <strong>Official Items:</strong>
                        {' '}
                        for each aircraft, by default, all the official items are included.
                    </ListItem>

                    <ListItem>
                        <strong>Aircraft Extension Items:</strong>
                        {' '}
                        For some lists, extension items adding to the official checklist can be included within, using
                        the Configure menu.
                    </ListItem>

                    <ListItem>
                        <strong>VATSIM Items:</strong>
                        {' '}
                        For some lists, VATSIM items can be included within the checklists using the Configure menu.
                    </ListItem>

                    <ListItem>
                        <strong>Easy Access to Next List:</strong>
                        {' '}
                        At the bottom of each list, access the next list that makes the most sense, even when two or
                        more do.
                    </ListItem>

                    <ListItem>
                        <strong>Small Screen Support:</strong>
                        {' '}
                        checklists layout changes as the screen gets smaller. Currently screens are supported down
                        to iPad size.
                    </ListItem>

                    <ListItem>
                        <strong>Left Handed Mode:</strong>
                        {' '}
                        Within configure, left handed mode can be enabled to move the switches to the left side of the
                        screen, making it easier to manipulate item states left handed.
                    </ListItem>
                </List>
            </Col>

            <Col span={12}>
                <Title level={3}>Anti-Ice</Title>

                <List>
                    <ListItem>
                        <strong>Get Configuration:</strong>
                        {' '}
                        input current current moisture conditions, and temperature: get the right configuration to use
                        and an explanation of why it may be configured as such.
                    </ListItem>
                </List>
            </Col>
        </Row>
    </>
);
