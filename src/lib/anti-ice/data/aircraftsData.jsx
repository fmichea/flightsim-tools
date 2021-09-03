import { createMappingFunction } from 'lib/checklist/data/transforms';
import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';
import { AntiIceSystemModes } from 'lib/anti-ice/data/systemModes';
import { AntiIceOperationModes } from 'lib/anti-ice/data/operationModes';
import { AntiIceModeStates } from 'lib/anti-ice/data/modeStates';
import React from 'react';
import { styled } from 'styletron-react';
import { AntiIceImages } from 'lib/anti-ice/data/images';

const Strongish = styled('strong', { color: '#606060' });

export const AntiIceAircraftsData = createMappingFunction()([
    {
        uid: AntiIceAircrafts.WORKINGTITLE_CJ4,
        title: 'WorkingTitle CJ4',
        modesOrder: [
            AntiIceSystemModes.CJ4_PITOT_STATIC_HEAT_ANTI_ICE_MODE,
            AntiIceSystemModes.CJ4_WING_ENG_ANTI_ICE_MODE,
            AntiIceSystemModes.CJ4_ENG_ONLY_ANTI_ICE_MODE,
            AntiIceSystemModes.CJ4_TAIL_DEICE_ANTI_ICE_MODE,
        ],
        operationModes: [
            {
                modeName: AntiIceOperationModes.GROUND_OPERATION,
                defaultMode: {
                    states: {},
                    image: AntiIceImages.CJ4_ALL_OFF,
                },
                moistureHelp: (
                    <>
                        <Strongish>On the ground:</Strongish>
                        {' '}
                        Is there surface snow, slush, ice or standing water which may be ingested by engines or
                        freeze sensors?
                    </>
                ),
                temperature: {
                    name: 'OAT',
                    fullName: 'Outside Air Temperature',
                    description: (
                        <>
                            The temperature of air around the aircraft. Can be found in METAR, ATIS, or should equal
                            SAT as displayed on MFD on the ground.
                        </>
                    ),
                },
                limits: [
                    {
                        limit: 5,
                        defaultMode: {
                            states: {
                                [AntiIceSystemModes.CJ4_ENG_ONLY_ANTI_ICE_MODE]: AntiIceModeStates.ON,
                            },
                            image: AntiIceImages.CJ4_ENG_ONLY_ON,
                        },
                    },
                ],
            },
            {
                modeName: AntiIceOperationModes.IN_FLIGHT_OPERATION,
                moistureHelp: (
                    <>
                        <Strongish>In flight:</Strongish>
                        {' '}
                        Is there visible air moisture? Examples include clouds, fog with visibility of one mile or
                        less, rain, snow, sleet, or ice crystals.
                    </>
                ),
                temperature: {
                    name: 'SAT',
                    fullName: 'Static Air Temperature',
                    description: (
                        <>
                            The temperature of undisturbed air around the aircraft, in other words, the temperature
                            of air not affected by the aircraft moving through it. (friction, ...)
                        </>
                    ),
                },
                defaultMode: {
                    states: {
                        [AntiIceSystemModes.CJ4_PITOT_STATIC_HEAT_ANTI_ICE_MODE]: AntiIceModeStates.ON,
                    },
                    image: AntiIceImages.CJ4_PITOT_ON,
                },
                limits: [
                    {
                        limit: -40,
                        description: (
                            <>
                                Below -40&deg;C, by default wing and engine anti-ice should be used. If it can be
                                confirmed that there is no ice forming on the wings, wing anti-ice may be turned off
                                and engine only anti-ice may be used instead.
                            </>
                        ),
                        defaultMode: {
                            states: {
                                [AntiIceSystemModes.CJ4_WING_ENG_ANTI_ICE_MODE]: AntiIceModeStates.OPTIONALLY_OFF,
                                [AntiIceSystemModes.CJ4_ENG_ONLY_ANTI_ICE_MODE]: AntiIceModeStates.OPTIONALLY_ON,
                                [AntiIceSystemModes.CJ4_PITOT_STATIC_HEAT_ANTI_ICE_MODE]: AntiIceModeStates.ON,
                            },
                            image: AntiIceImages.CJ4_PITOT_WING_ENG_ON,
                        },
                        optionalModes: [
                            {
                                uid: 'no-ice-on-wings',
                                title: 'no ice on wings',
                                description: (
                                    <>
                                        <strong>Requirement:</strong>
                                        {' '}
                                        confirm that no ice is forming on wings. (visual check)
                                    </>
                                ),
                                states: {
                                    [AntiIceSystemModes.CJ4_ENG_ONLY_ANTI_ICE_MODE]: AntiIceModeStates.ON,
                                    [AntiIceSystemModes.CJ4_PITOT_STATIC_HEAT_ANTI_ICE_MODE]: AntiIceModeStates.ON,
                                },
                                image: AntiIceImages.CJ4_PITOT_HEAT_ENG_ONLY_ON,
                            },
                        ],
                    },
                    {
                        limit: -30,
                        defaultMode: {
                            states: {
                                [AntiIceSystemModes.CJ4_WING_ENG_ANTI_ICE_MODE]: AntiIceModeStates.ON,
                                [AntiIceSystemModes.CJ4_PITOT_STATIC_HEAT_ANTI_ICE_MODE]: AntiIceModeStates.ON,
                            },
                            image: AntiIceImages.CJ4_PITOT_WING_ENG_ON,
                        },
                    },
                    {
                        limit: 10,
                        defaultMode: {
                            states: {
                                [AntiIceSystemModes.CJ4_WING_ENG_ANTI_ICE_MODE]: AntiIceModeStates.ON,
                                [AntiIceSystemModes.CJ4_TAIL_DEICE_ANTI_ICE_MODE]: AntiIceModeStates.ON,
                                [AntiIceSystemModes.CJ4_PITOT_STATIC_HEAT_ANTI_ICE_MODE]: AntiIceModeStates.ON,
                            },
                            image: AntiIceImages.CJ4_PITOT_WING_ENG_ON,
                        },
                    },
                ],
            },
        ],
    },
]);
