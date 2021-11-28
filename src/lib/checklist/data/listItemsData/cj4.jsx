import React from 'react';

import { Alert } from 'antd';
import { generatePath } from 'react-router';
import { Link } from 'react-router-dom';

import { CASMessage } from 'components/lib/CASMessage';
import { ExternalLink } from 'components/lib/ExternalLink';
import { KeyboardInputs } from 'components/lib/KeyboardInputs';
import { Monospaced } from 'components/lib/Monospaced';
import {
    CCP_CJ4, DCP_CJ4, EICAS_CJ4, EP_CJ4, MFD_CJ4, PFD_CJ4, SFD_CJ4, TP_CJ4,
} from 'components/lib/vernacular/cj4';
import {
    AGL,
    FADEC,
    FMS, ITT, KIAS, N1, N2, OAT, QNH, SAT, VR,
} from 'components/lib/vernacular/common';
import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { createTransformedList, createTransformedMapping } from 'lib/checklist/data/transforms';
import { AntiIceWithNameRoute } from 'lib/routes';

const addCJ4Tags = (value) => ({
    ...value,
    tags: [ChecklistTags.OFFICIAL, ChecklistTags.CJ4, ...value.tags],
});

const cj4AntiIceRules = (
    <>
        Anti-ice rules explained
        {' '}
        <Link
            to={generatePath(AntiIceWithNameRoute, { aircraftName: AntiIceAircrafts.WORKINGTITLE_CJ4 })}
            target="_blank"
            rel="noopener noreferrer"
        >
            here
        </Link>
        .
    </>
);

export const CJ4ChecklistItemsData = createTransformedMapping(addCJ4Tags)([
    {
        uid: ChecklistItems.CJ4_BEFORE_START_BATTERY_SWITCH,
        title: 'Battery Switch',
        state: 'ON',
        moreInfoLong: (
            <>
                Battery switch is the red switch located in the
                {' '}
                {EP_CJ4}
                ,
                and can be turned on by moving it in up position.
                <br />
                <br />
                {MFD_CJ4}
                {' '}
                should turn on and show a few errors and warnings once battery is ON. Battery life is limited at 10
                to 15 minutes so either engines must be started or ground power used pretty quickly.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_EMERGENCY_LIGHTS_SWITCH,
        title: 'Emergency Lights Switch',
        state: 'ARMED',
        moreInfoLong: (
            <>
                Emergency Lights switch is in the
                {' '}
                {EP_CJ4}
                {' '}
                along with battery switch, on the second row
                on the left. It can be armed by moving it in the up position. Warning
                {' '}
                <CASMessage level="warning">EMER LIGHTS NOT ARMED</CASMessage>
                {' '}
                should disappear from
                {' '}
                {MFD_CJ4}
                {' '}
                after completing this step.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_STANDBY_FLIGHT_DISPLAY_SWITCH,
        title: 'Standby Flight Display Switch',
        state: 'ON',
        moreInfoLong: (
            <>
                {SFD_CJ4}
                {' '}
                Switch is also in the
                {' '}
                {EP_CJ4}
                , on the second row in the middle. It can be turned on by moving it in the up position.
                {' '}
                {SFD_CJ4}
                {' '}
                right of
                {' '}
                {MFD_CJ4}
                , above landing gear state display, should turn ON.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_AVIONICS_SWITCH,
        title: 'Avionics Switch',
        state: 'DISPATCH',
        moreInfoLong: (
            <>
                Avionics Switch is located in the electrical panel, on the second row on the right. It can be turned
                into dispatch mode by moving it in the down position.
                {' '}
                {FMS}
                {' '}
                will start and
                {' '}
                <CASMessage level="warning">BAT AMP</CASMessage>
                {' '}
                warning should flash on
                {' '}
                {MFD_CJ4}
                {' '}
                after this step.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
        title: 'Parking Brake',
        state: 'SET',
        moreInfoShort: (
            <>
                Parking Brake is located below the
                {' '}
                {TP_CJ4}
                , as a black and round pull handle. Parking brakes are set when the handle is fully extended.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_WHEEL_CHOCKS,
        title: 'Wheel Chocks',
        state: 'REMOVE',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_CABIN_DOOR,
        title: 'Cabin Door',
        state: 'CLOSED',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_PASSENGER_BRIEFING,
        title: 'Passenger Briefing',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Passenger briefing can be started using the
                {' '}
                {CCP_CJ4}
                {' '}
                below the
                {' '}
                {MFD_CJ4}
                {' '}
                with the
                {' '}
                <KeyboardInputs inputs={['PASS BRIEF']} />
                {' '}
                button (bottom right). Use one of the two available
                {' '}
                <CASMessage>TAKEOFF (LONG)</CASMessage>
                {' '}
                or
                {' '}
                <CASMessage>TAKEOFF (SHORT)</CASMessage>
                {' '}
                briefings depending on how familiar
                your passengers are with flying.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_PILOTS_SEATS_ADJUSTED,
        title: 'Seats / Belts / Pedals',
        state: 'ADJUST / SECURE',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'BEACON',
                state: 'ON',
            },
            {
                title: 'NAV',
                state: 'ON',
            },
            {
                title: 'LOGO',
                state: 'ON',
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_EICAS,
        title: 'EICAS',
        state: 'CHECK',
        moreInfoShort: (
            <>
                {EICAS_CJ4}
                {' '}
                on top of
                {' '}
                {MFD_CJ4}
                {' '}
                should be checked for all data to be GREEN.
            </>
        ),
        subItems: createTransformedList()([
            {
                title: 'N1',
                state: 'GREEN, 0',
            },
            {
                title: 'N2',
                state: 'GREEN, 0',
            },
            {
                title: (<>Oil Temperature (OIL &deg;C)</>),
                state: 'GREEN',
            },
            {
                title: 'Oil Pressure (OIL PSI)',
                state: 'GREEN, 0',
            },
            {
                title: 'Trims',
                state: 'GREEN',
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_FMS,
        title: 'FMS',
        state: 'CHECK/SET',
        subItems: createTransformedList()([
            {
                title: 'Configuration',
                state: 'SET / CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'FMS / MFD Units',
                        state: 'SET / CHECKED',
                    },
                ]),
            },
            {
                title: 'Position Initialization',
                state: 'COMPLETE',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                POS INIT Page (
                                <KeyboardInputs inputs={['IDX', 'LSK 4 (POS INIT)']} />
                                )
                            </>
                        ),
                        state: 'OPEN',
                    },
                    {
                        title: (
                            <>
                                GPS Position Copy (
                                <KeyboardInputs inputs={['RSK 4 (SET POS TO GNSS)']} />
                                )
                            </>
                        ),
                        state: 'COMPLETE',
                    },
                    {
                        title: (
                            <>
                                FMS Position (
                                <KeyboardInputs inputs={['RSK 5 (SET POS)']} />
                                )
                            </>
                        ),
                        state: 'CHECKED',
                    },
                ]),
            },
            {
                title: 'Flight Plan (1)',
                state: 'SET / CHECKED',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                SimBrief Direct Import (
                                <KeyboardInputs
                                    inputs={[
                                        'IDX',
                                        'NEXT',
                                        'RSK 1 (ROUTE MENU)',
                                        'LSK 3 (FPLN RECALL (SB))',
                                    ]}
                                />
                                )
                            </>
                        ),
                        state: 'AS DESIRED',
                    },
                    {
                        title: (
                            <>
                                Flight Plan Page (
                                <KeyboardInputs inputs={['FPLN']} />
                                )
                            </>
                        ),
                        state: 'OPEN',
                    },
                    {
                        title: (
                            <>
                                Origin Airport (
                                <KeyboardInputs inputs={['INPUT', 'LSK 1 (ORIGIN)']} />
                                )
                            </>
                        ),
                        state: 'SET / CHECKED',
                    },
                    {
                        title: (
                            <>
                                Destination Airport (
                                <KeyboardInputs inputs={['INPUT', 'RSK 1 (DEST)']} />
                                )
                            </>
                        ),
                        state: 'SET / CHECKED',
                    },
                ]),
            },
            {
                title: 'Departure',
                state: 'SET / CHECKED',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Departure Page (
                                <KeyboardInputs inputs={['DEP / ARR', '[opt] LSK 1 (DEP)']} />
                                )
                            </>
                        ),
                        state: 'AS DESIRED',
                    },
                    {
                        title: (
                            <>
                                Departure Runway (
                                <KeyboardInputs inputs={['RSK ? (Runways)']} />
                                )
                            </>
                        ),
                        state: 'SET / CHECKED',
                    },
                    {
                        title: (
                            <>
                                Standard Instrument Departure (
                                <KeyboardInputs inputs={['LSK ? (Departures)']} />
                                )
                            </>
                        ),
                        state: 'SET / CHECKED',
                    },
                    {
                        title: (
                            <>
                                Transition (
                                <KeyboardInputs inputs={['LSK ? (Trans)']} />
                                )
                            </>
                        ),
                        state: 'AS DESIRED',
                    },
                ]),
            },
            {
                title: 'Flight Plan (2)',
                state: 'SET / CHECKED',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Flight Plan Page (
                                <KeyboardInputs inputs={['FPLN']} />
                                )
                            </>
                        ),
                        state: 'OPEN',
                    },
                    {
                        title: (
                            <>
                                Origin Runway (
                                <KeyboardInputs inputs={['RSK 3 (ORIG RWY)']} />
                                )
                            </>
                        ),
                        state: 'CHECKED',
                    },
                    {
                        title: (
                            <>
                                VIA (
                                <KeyboardInputs inputs={['LSK 4 (VIA)']} />
                                )
                            </>
                        ),
                        state: 'CHECKED',
                    },
                    {
                        title: (
                            <>
                                Flight Plan Legs (
                                <KeyboardInputs inputs={['NEXT']} />
                                )
                            </>
                        ),
                        state: 'CHECKED',
                    },
                ]),
            },
            {
                title: 'Arrival',
                state: 'AS DESIRED',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Arrival Page (
                                <KeyboardInputs inputs={['DEP / ARR', '[opt] DEP / ARR', '[opt] RSK 2 (ARR)']} />
                                )
                            </>
                        ),
                        state: 'AS DESIRED',
                    },
                    {
                        title: (
                            <>
                                Arrival Approach (
                                <KeyboardInputs inputs={['RSK ? (Approaches)']} />
                                )
                            </>
                        ),
                        state: 'AS DESIRED',
                    },
                    {
                        title: (
                            <>
                                Standard Terminal Arrival Route (
                                <KeyboardInputs inputs={['LSK ? (STARS)']} />
                                )
                            </>
                        ),
                        state: 'AS DESIRED',
                    },
                    {
                        title: 'Transitions',
                        state: 'AS DESIRED',
                    },
                ]),
            },
            {
                title: 'Legs',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Legs Page (
                                <KeyboardInputs inputs={['LEGS']} />
                                )
                            </>
                        ),
                        state: 'OPEN',
                    },
                    {
                        title: 'All Waypoints',
                        state: 'CHECKED',
                    },
                ]),
            },
            {
                title: 'Performance Initialization',
                state: 'COMPLETE',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Performance Initialization Page (
                                <KeyboardInputs inputs={['PERF', 'LSK 1 (PERF INIT)']} />
                                )
                            </>
                        ),
                        state: 'OPEN',
                        subItems: createTransformedList()([

                        ]),
                    },
                    {
                        title: (
                            <>
                                Zero Fuel Weight (
                                <KeyboardInputs inputs={['PERF', 'RSK 3 (ZFW)']} />
                                )
                            </>),
                        state: 'SET',
                    },
                ]),
            },
        ]),
        moreInfoShort: (
            <>
                {FMS}
                {' '}
                should be checked and programmed at this point.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_CLIMATE_CONTROL_SELECTOR,
        title: 'Climate Control Selector',
        state: 'OFF',
        moreInfoShort: (
            <>
                Climate Control Selector is in the middle of the
                {' '}
                {TP_CJ4}
                . Turn it left to set it in OFF mode.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_THROTTLES,
        title: 'Throttles',
        state: 'IDLE',
        moreInfoShort: (
            <>
                Before starting the engines, the throttles should be set all the way to idle, at their bottom
                most position.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_STARTER_BUTTON_PUSH,
        title: 'Engine Starter Button',
        state: 'PUSH',
        moreInfoShort: (
            <>
                Push the starter button located below the throttles for whichever side you would like to start
                first. Alternating engine started first between trips to equalize engine running time is
                recommended.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
        title: 'Engine Run/Stop Button',
        state: 'RUN',
        moreInfoShort: (
            <>
                Push the Engine Run/Stop button behind the clear guard just above the throttles on the same side
                without delay. Button should go from Blank to displaying RUN. Remember to close the guard again.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_ITT_RISE,
        title: 'ITT',
        state: 'CHECK FOR RISE',
        moreInfoShort: (
            <>
                Monitor
                {' '}
                {N1}
                {' '}
                /
                {' '}
                {N2}
                {' '}
                /
                {' '}
                {ITT}
                {' '}
                within the
                {' '}
                {EICAS_CJ4}
                . Starting sequence is managed by
                {' '}
                {FADEC}
                {' '}
                and simply needs to be monitored.
            </>
        ),
        subItems: createTransformedList()([
            {
                title: (
                    <>
                        <CASMessage>STARTER</CASMessage>
                        {' '}
                        on
                        {' '}
                        {EICAS_CJ4}
                    </>
                ),
                state: 'DISPLAYED',
            },
            {
                title: (
                    <>
                        {N1}
                        {' '}
                        /
                        {' '}
                        {N2}
                        {' '}
                        on
                        {' '}
                        {EICAS_CJ4}
                    </>
                ),
                state: 'RISING',
            },
            {
                title: (
                    <>
                        <CASMessage level="success">IGN</CASMessage>
                        {' '}
                        for
                        {' '}
                        {ITT}
                    </>
                ),
                state: 'ON @ 12% N2',
            },
            {
                title: (
                    <>
                        {N1}
                        {' '}
                        /
                        {' '}
                        {N2}
                        {' '}
                        /
                        {' '}
                        {ITT}
                        {' '}
                        on
                        {' '}
                        {EICAS_CJ4}
                    </>
                ),
                state: 'RISING',
            },
            {
                title: (
                    <>
                        <CASMessage level="success">IGN</CASMessage>
                        {' '}
                        for
                        {' '}
                        {ITT}
                    </>
                ),
                state: 'OFF',
            },
            {
                title: (
                    <>
                        {N1}
                        {' '}
                        /
                        {' '}
                        {N2}
                        {' '}
                        /
                        {' '}
                        {ITT}
                        {' '}
                        on
                        {' '}
                        {EICAS_CJ4}
                    </>
                ),
                state: 'STABLE',
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
        title: 'EICAS',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Indicators should settle around the following values. Every indicator should be green before moving
                forward to second engine.
                {' '}
                {MFD_CJ4}
                {' '}
                warnings will only disappear after second engine is started.
            </>
        ),
        subItems: createTransformedList()([
            {
                title: N1,
                state: '24.5%',
            },
            {
                title: N2,
                state: '53.4%',
            },
            {
                title: ITT,
                state: <>600&deg;C</>,
            },
            {
                title: 'Oil Pressure',
                state: '70 PSI',
            },
            {
                title: 'Oil Temperature',
                state: <>MORE THAN 90&deg;C</>,
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_OPPOSITE_ENGINE_START,
        title: 'Opposite Engine',
        state: 'START',
        moreInfoShort: (
            <>
                Repeat the process from the starter button push. After engine starts all warnings on
                {' '}
                {MFD_CJ4}
                {' '}
                should
                disappear and more information should display regarding electrical systems, pressurization,
                hydraulic pressure and fuel.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_EXTERNAL_POWER_DISCONNECT,
        title: 'External Power',
        state: 'DISCONNECTED',
        moreInfoShort: (
            <>
                If external power was enabled, it should now be disconnected as all power should come from engines
                at this stage. Battery AMP indicator should be -38 A if ground power is connected, or -22 A if it
                is not.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_ELECTRICAL_SYSTEM_CHECK,
        title: 'Electrical System',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Check the electrical information on
                {' '}
                {MFD_CJ4}
                {' '}
                below
                {' '}
                {EICAS_CJ4}
                {' '}
                (or via
                {' '}
                <KeyboardInputs inputs={['SYS']} />
                {' '}
                key on
                {' '}
                {CCP_CJ4}
                {' '}
                if hidden).
            </>
        ),
        subItems: createTransformedList()([
            {
                title: 'DC Electric',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Amperage',
                        state: 'GREEN, +22 A',
                    },
                    {
                        title: 'Voltage',
                        state: 'GREEN, +29 V',
                    },
                ]),
            },
            {
                title: 'Battery',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Amperage',
                        state: 'GREEN, -22 A',
                    },
                    {
                        title: 'Voltage',
                        state: 'GREEN, +25 V',
                    },
                    {
                        title: 'Temperature',
                        state: 'GREEN',
                    },
                ]),
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_AVIONICS_SWITCH,
        title: 'Avionics Switch',
        state: 'ON',
        moreInfoShort: (
            <>
                Avionics switch is in the eletrical panel left of
                {' '}
                {PFD_CJ4}
                , on the second row on the right. Flick it
                in the up position to switch from dispatch mode to on mode.
                {' '}
                {PFD_CJ4}
                {' '}
                should turn on after this step
                is completed.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_CLIMATE_CONTROL_SWITCH,
        title: 'Climate Control Selector',
        state: 'NORM',
        moreInfoShort: (
            <>
                Climate Control Selector is in the middle of the
                {' '}
                {TP_CJ4}
                . Turn it right once for NORM mode to be enabled. Air conditioning fans should audibly
                activate in the cabin.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_PASSENGER_LIGHTS_SAFETY,
        title: 'Pass Lights Safety Button',
        state: 'ON',
        moreInfoShort: (
            <>
                Passenger safety and belts indicators should be turned on in the center console next to exterior
                lights. Note that if passenger briefing is not finished, it will be interrupted by the safety light
                announcement.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_TRIMS,
        title: 'Trims',
        state: 'CHECK/SET',
        moreInfoShort: (
            <>
                Trims are indicated on the right side of the
                {' '}
                {EICAS_CJ4}
                {' '}
                on
                {' '}
                {MFD_CJ4}
                . AIL is aileron trim, RUD is rudder trim and
                ELEV is elevator trim (ND/NU is nose down/up respectively). For takeoff, trims should be in the green
                area for each setting. They can be adjusted using controls below the throttles in the center console.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_FLIGHT_CONTROLS_FREE,
        title: 'Flight Controls',
        state: 'FREE/CORRECT',
        moreInfoShort: (
            <>
                In exterior view, verify that controls are able to move all flight control surfaces (ailerons, rudders,
                elevators).
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_SPEEDBRAKE_CHECK,
        title: 'Speedbrakes / Ground Spoilers',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Spoilers can be controlled in the center console left of throttles (or with
                {' '}
                <Monospaced>/</Monospaced>
                {' '}
                on numpad). Extend them 100% and check that they fully extend in exterior view, then retract them again.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_FLAPS,
        title: 'Flaps',
        state: 'CHECK/SET',
        moreInfoShort: (
            <>
                Flaps can be controlled with the wing shaped control right of throttles. They have three settings: 0%,
                15% and 35%. Extend flaps and check in exterior view that they are working, then retract them.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_HYDRAULIC_PRESSURE_CHECK,
        title: 'Hydraulic Pressure',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Check hydraulic pressure information on
                {' '}
                {MFD_CJ4}
                {' '}
                below
                {' '}
                {EICAS_CJ4}
                {' '}
                (or via
                {' '}
                <KeyboardInputs inputs={['SYS']} />
                {' '}
                key on
                {' '}
                {CCP_CJ4}
                {' '}
                if hidden). Hydraulic
                pressure should be green and have a value of 3000 PSI.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_ENGINE_ONLY_ANTI_ICE,
        title: 'Engine Only Anti-Ice',
        state: 'AS REQUIRED',
        moreInfoLong: (
            <>
                While on the ground, engine only anti-ice should be enabled when in icing condition but not until
                engines have been on for at least 1 minute. Icing condition on ground exist when
                {' '}
                {OAT}
                {' '}
                or
                {' '}
                {SAT}
                {' '}
                is at
                or below +5&deg;C and engine may ingest moisture such as snow, slush, or standing water.
                <br />
                <br />
                Engine only anti-ice can be turned on with the buttons on
                {' '}
                {TP_CJ4}
                {' '}
                in anti-ice section, just below
                {' '}
                {CCP_CJ4}
                . Current outside temperatures are visible at the very bottom of
                {' '}
                {MFD_CJ4}
                .
                {' '}
                {cj4AntiIceRules}
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_TAKEOFF_DATA,
        title: 'Takeoff Data',
        state: 'CONFIRM/SET',
        moreInfoShort: (
            <>
                Take-off data can be set on
                {' '}
                {FMS}
                . Verify that speeds turn blue on
                {' '}
                {FMS}
                {' '}
                and are displayed on
                {' '}
                {PFD_CJ4}
                {' '}
                below speed tape indicator. Expect speeds between
                90 and 140 knots.
            </>
        ),
        subItems: createTransformedList()([
            {
                title: (
                    <>
                        Take-Off Performance Page 1 (
                        <KeyboardInputs inputs={['PERF', 'LSK 3 (TAKEOFF)']} />
                        )
                    </>
                ),
                state: 'COMPLETE',
                subItems: createTransformedList()([
                    {
                        title: 'Runway (Right Side)',
                        state: 'CHECKED',
                    },
                    {
                        title: (
                            <>
                                Wind (
                                <KeyboardInputs inputs={['RSK 1 (WIND)']} />
                                )
                            </>
                        ),
                        state: 'AS DESIRED',
                    },
                    {
                        title: (
                            <>
                                {OAT}
                                {' '}
                                (
                                <KeyboardInputs inputs={['RSK 2 (OAT)']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                {QNH}
                                {' '}
                                (
                                <KeyboardInputs inputs={['RSK 3 (QNH)']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                Runway Condition
                                {' '}
                                (
                                <KeyboardInputs inputs={['LSK 5 (RWY COND)']} />
                                )
                            </>
                        ),
                        state: 'CHECKED / SET',
                    },
                ]),
            },
            {
                title: (
                    <>
                        Take-Off Performance Page 2 (
                        <KeyboardInputs inputs={['NEXT']} />
                        )
                    </>
                ),
                state: 'COMPLETE',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Anti-Ice Setting
                                {' '}
                                (
                                <KeyboardInputs inputs={['LSK 1 (A/I)']} />
                                )
                            </>
                        ),
                        state: 'CHECKED / SET',
                    },
                    {
                        title: (
                            <>
                                Take-Off Flaps
                                {' '}
                                (
                                <KeyboardInputs inputs={['LSK 2 (T/O FLAPS)']} />
                                )
                            </>
                        ),
                        state: 'CHECKED / SET',
                    },
                    {
                        title: (
                            <>
                                V-Speeds
                                {' '}
                                (
                                <KeyboardInputs inputs={['RSK 6 (SEND)']} />
                                )
                            </>
                        ),
                        state: 'SENT TO PFD',
                    },
                ]),
            },
            {
                title: (
                    <>
                        V-Speeds on
                        {' '}
                        {PFD_CJ4}
                    </>
                ),
                state: 'CHECKED',
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_AVIONICS_CHECK,
        title: 'Avionics',
        state: 'CHECK/SET',
        subItems: createTransformedList()([
            {
                title: 'Altitude Selector: Initial Altitude',
                state: 'SET',
            },
            {
                title: 'Heading Bug: Runway Heading',
                state: 'SET',
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_AUTOPILOT_CONNECT_DISCONNECT,
        title: 'Autopilot',
        state: 'ENGAGE/DISCONNECT',
        moreInfoShort: (
            <Alert
                type="warning"
                message={(
                    <>
                        <strong>Bug:</strong>
                        {' '}
                        <Monospaced>YD</Monospaced>
                        {' '}
                        does not remain
                        {' '}
                        <Monospaced>ON</Monospaced>
                        {' '}
                        with normal
                        {' '}
                        <Monospaced>AP</Monospaced>
                        {' '}
                        disconnect at the moment. Expected fixed in SU7.
                    </>
                )}
            />
        ),
        subItems: createTransformedList()([
            {
                title: 'YD/AP Disc Bar Disconnect Test',
                state: 'COMPLETE',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Autopilot (
                                <KeyboardInputs inputs={['AP']} />
                                )
                            </>
                        ),
                        state: 'ENGAGED',
                    },
                    {
                        title: (
                            <>
                                <CASMessage level="success">AP</CASMessage>
                                {' '}
                                on
                                {' '}
                                {PFD_CJ4}
                                {' '}
                                (autopilot connected)
                            </>
                        ),
                        state: 'CHECKED',
                    },
                    {
                        title: (
                            <>
                                Disc Bar Trigger (
                                <KeyboardInputs inputs={['YD/AP Disc Bar']} />
                                )
                            </>
                        ),
                        state: 'COMPLETE',
                    },
                    {
                        title: (
                            <>
                                {PFD_CJ4}
                                {' '}
                                autopilot mode clear
                            </>
                        ),
                        state: 'CHECKED',
                    },
                    {
                        title: (
                            <>
                                Disc Bar Release (
                                <KeyboardInputs inputs={['YD/AP Disc Bar']} />
                                )
                            </>
                        ),
                        state: 'COMPLETE',
                    },
                ]),
            },
            {
                title: 'AP Button Disconnect Test',
                state: 'COMPLETE',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Autopilot (
                                <KeyboardInputs inputs={['AP']} />
                                )
                            </>
                        ),
                        state: 'ENGAGED',
                    },
                    {
                        title: (
                            <>
                                <CASMessage level="success">AP</CASMessage>
                                {' '}
                                on
                                {' '}
                                {PFD_CJ4}
                                {' '}
                                (autopilot connected)
                            </>
                        ),
                        state: 'CHECKED',
                    },
                    {
                        title: (
                            <>
                                AP Disconnect (
                                <KeyboardInputs inputs={['AP']} />
                                )
                            </>
                        ),
                        state: 'COMPLETE',
                    },
                    {
                        title: (
                            <>
                                <CASMessage level="success">YD</CASMessage>
                                {' '}
                                on
                                {' '}
                                {PFD_CJ4}
                                {' '}
                                (yaw damper connected)
                            </>
                        ),
                        state: 'CHECKED',
                    },
                    {
                        title: (
                            <>
                                YD Disconnect (
                                <KeyboardInputs inputs={['YD']} />
                                )
                            </>
                        ),
                        state: 'COMPLETE',
                    },
                    {
                        title: (
                            <>
                                {PFD_CJ4}
                                {' '}
                                autopilot mode clear
                            </>
                        ),
                        state: 'CHECKED',
                    },
                ]),
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_ALTIMETER_SET,
        title: 'Altimeter',
        state: 'SET / CHECKED',
        moreInfoShort: (
            <>
                On
                {' '}
                {DCP_CJ4}
                , turn the BARO button to set barometric pressure on
                {' '}
                {PFD_CJ4}
                . Then move to standby flight display and use the rotary button on its bottom right to set
                barometric pressure for standby display. Check
                {' '}
                {PFD_CJ4}
                {' '}
                and standby display barometric pressure and indicated altitude match.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_PRESSURIZATION_CHECK,
        title: 'Pressurization',
        state: 'VERIFY/SET',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_EICAS_CHECK,
        title: 'EICAS',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Verify
                {' '}
                {EICAS_CJ4}
                {' '}
                on
                {' '}
                {MFD_CJ4}
                {' '}
                for all green values and no warning or error message.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_AFT_DIVIDER_DOORS_OPEN,
        title: 'Aft Divider Doors',
        state: 'Latched Open',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_TAXI_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'TAXI Light',
                state: 'ON',
            },
            {
                title: 'LANDING Light',
                state: 'AS REQUIRED',
            },
            {
                title: 'STROBE Light',
                state: 'AS REQUIRED',
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_TAXI_BRAKES_APPLIED,
        title: 'Brakes',
        state: 'APPLY/HOLD',
        moreInfoShort: (
            <>
                In order to control airplane on release of Parking Brake, apply brakes first.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_TAXI_PARKING_BRAKE_RELEASED,
        title: 'Parking Brake',
        state: 'RELEASE',
        moreInfoShort: (
            <>
                Release parking brake by pushing the pull handle below
                {' '}
                {TP_CJ4}
                {' '}
                on the left all the way in.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_TAXI_BRAKES_CHECK,
        title: 'Brakes',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Increase throttles and release brakes to start moving forward, once moving, press brakes again and
                check that airplane can stop.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_TAXI_NOSE_WHEEL_STEERING_CHECK,
        title: 'Nosewheel Steering',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Increase throttles again and release brakes. Use rudder input to turn slightly. The airplane should
                turn easily even at very low speeds.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_TAXI_FLIGHT_INSTRUMENTS_CHECK,
        title: 'Flight Instruments',
        state: 'CHECK',
        subItems: createTransformedList()([
            {
                title: 'Ground Speed (GS)',
                state: 'POSITIVE',
            },
            {
                title: 'Air Speed (AS)',
                state: 'POSITIVE',
            },
            {
                title: 'Roses',
                state: 'MOVING',
            },
            {
                title: 'Artificial Horizon',
                state: 'CHECKED / LEVEL',
            },
            {
                title: 'Altimeter',
                state: 'CHECKED',
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_ICE_PROTECTION_SYSTEM_CHECK,
        title: 'Ice Protection System',
        state: 'CHECK',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
        moreInfoShort: (
            <>
                Not currently modelled. Wing and engine anti-ice systems require hot air from the engines. Procedure
                here would be to spool engines
                {' '}
                {N2}
                {' '}
                to around 70% and turn on ice protection. The
                {' '}
                {EICAS_CJ4}
                {' '}
                would display
                {' '}
                <CASMessage level="warning">WING-ANTI-ICE-COLD</CASMessage>
                {' '}
                message which should disappear within 2 minutes. This indicates
                that wings/engine anti-ice is getting hot bleed air. Required for flying in icy conditions.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_RUDDER_BIAS_SYSTEM_CHECK,
        title: 'Rudder Bias System',
        state: 'CHECK',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
        moreInfoShort: (
            <>
                <strong>Not Implemented.</strong>
                {' '}
                When running on a single engine, Rudder Bias System compensates for the forces that would be required
                to put in rudder pedals to control the aircraft. These forces cannot exceed 150 lbs (68 kg) nor
                require to reduce engine power in order to maintain control at
                {' '}
                <ExternalLink href="https://en.wikipedia.org/wiki/Minimum_control_speeds">
                    V
                    <sub>MC</sub>
                </ExternalLink>
                {' '}
                by regulation. For this item, pilots would spool engines up separately and verify that they can feel
                a push in the rudder pedals.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_SEATS_UPRIGHT,
        title: 'Seats',
        state: 'UPRIGHT/OUTBOARD',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_FLAPS_SET,
        title: 'Flaps',
        state: 'CHECK/SET',
        moreInfoShort: (
            <>
                Verify on
                {' '}
                {EICAS_CJ4}
                {' '}
                that flaps are extended as configured in the TAKEOFF
                performance page. This should generally be 15&deg;. Flaps are indicated
                on on the right side of the
                {' '}
                {EICAS_CJ4}
                {' '}
                on top of
                {' '}
                {MFD_CJ4}
                , just below trims.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_SPEEDBRAKES_OFF,
        title: 'Speed Brakes',
        state: '0%',
        moreInfoShort: (
            <>
                Verify that speedbrakes are fully retracted and set to 0%.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_TRIMS_CHECK,
        title: 'Trims (3)',
        state: 'SET FOR TAKEOFF',
        moreInfoShort: (
            <>
                On the top right section of the
                {' '}
                {MFD_CJ4}
                .
            </>
        ),
        subItems: createTransformedList()([
            {
                title: (
                    <>
                        Rudder Trim (
                        <CASMessage>RUD</CASMessage>
                        )
                    </>
                ),
                state: 'GREEN',
            },
            {
                title: (
                    <>
                        Aileron Trim (
                        <CASMessage>AIL</CASMessage>
                        )
                    </>
                ),
                state: 'GREEN',
            },
            {
                title: (
                    <>
                        Elevator Trim (
                        <CASMessage>ELEV</CASMessage>
                        )
                    </>
                ),
                state: 'GREEN',
            },
        ]),
    },
    { // FIXME: Departure Briefing.
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_CREW_BRIEFING,
        title: 'Crew Briefing',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Review departure instructions and verify they are programmed in
                {' '}
                {FMS}
                {' '}
                as desired.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_TCAS_TARA,
        title: 'TCAS',
        state: 'TA/RA',
        moreInfoShort: (
            <>
                In
                {' '}
                {FMS}
                , set TCAS to mode TA/RA by clicking
                {' '}
                <KeyboardInputs inputs={['TUN', 'RSK 5 (TA/RA)']} />
                . This turns mode C on for transponder, emitting altitude information.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_RADAR_AS_REQUIRED,
        title: 'Radar',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                At this point it is allowed to enable radar (traffic, weather, terrain) as required for takeoff.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_GA_BUTTON_PUSH,
        title: 'GA Button',
        state: 'PUSH',
        moreInfoShort: (
            <>
                Above
                {' '}
                {FMS}
                /
                {MFD_CJ4}
                {' '}
                right of
                {' '}
                {DCP_CJ4}
                {' '}
                there is a black button below the FIRE button which
                enables Takeoff/Go Around mode. It should be pushed once and
                {' '}
                <CASMessage level="success">TO TO</CASMessage>
                {' '}
                should display
                on the autopilot line. Flight director should also display with intended pitch at
                takeoff.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_BATTERY_AMPS_CHECK,
        title: 'Battery Amps',
        state: 'VERIFY 20 OR LESS',
        moreInfoShort: (
            <>
                On the
                {' '}
                {EICAS_CJ4}
                , or via the
                {' '}
                <KeyboardInputs inputs={['SYS']} />
                {' '}
                key on
                {' '}
                {CCP_CJ4}
                , ensure that battery still has -20 or less amps.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_ICE_PROTECTION_SYSTEM_AS_REQUIRED,
        title: 'Ice Protection Systems',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Check temperatures and prepare for anti-ice procedure during takeoff. Enable anti-ice as required as
                soon as necessary.
                {' '}
                {cj4AntiIceRules}
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_PITOT_STATIC_HEAT_BUTTONS,
        title: 'Pitot/Static Heat Buttons',
        state: 'ON',
        moreInfoShort: (
            <>
                Pitot/Static Heat buttons are located in the Ice Protection section on the
                {' '}
                {TP_CJ4}
                {' '}
                under the
                {' '}
                {MFD_CJ4}
                . They should be turned on before take-off and on for the whole flight.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'STROBE Lights',
                state: 'ON',
            },
            {
                title: 'LANDING Lights',
                state: 'ON',
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_EICAS_CHECK,
        title: 'EICAS',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Check
                {' '}
                {EICAS_CJ4}
                {' '}
                on top of
                {' '}
                {MFD_CJ4}
                , verify all values are green.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_TAKEOFF_THROTTLES,
        title: 'Throttles',
        state: 'TAKEOFF',
        tags: [ChecklistTags.IN_MEMORY_ITEM],
        moreInfoShort: (
            <>
                To proceed with a rolling take-off, simply push throttles all the way to 100%. If doing a standing
                start takeoff, maintain brake pressure until
                {' '}
                {N1}
                {' '}
                settles around the top of its range, in the green, and
                release the brakes.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_TAKEOFF_N1_COMMAND_BUGS_GREEN,
        title: 'N1 Command Bugs',
        state: 'GREEN CHEVRON',
        tags: [ChecklistTags.IN_MEMORY_ITEM],
    },
    {
        uid: ChecklistItems.CJ4_TAKEOFF_BRAKES_RELEASED,
        title: 'Brakes',
        state: 'RELEASE',
        tags: [ChecklistTags.IN_MEMORY_ITEM],
    },
    {
        uid: ChecklistItems.CJ4_TAKEOFF_CONTROL_WHEEL_ROTATE_AT_VR,
        title: 'Control Wheel',
        state: 'ROTATE AT VR',
        tags: [ChecklistTags.IN_MEMORY_ITEM],
        moreInfoShort: (
            <>
                Monitor speed tape, once
                {' '}
                {VR}
                {' '}
                is reached, pull lightly on yoke and let
                nose come up as speed picks up.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_LANDING_GEAR_UP,
        title: 'Landing Gear',
        state: 'UP',
        tags: [ChecklistTags.IN_MEMORY_ITEM],
        moreInfoShort: (
            <>
                Once airborne with positive rate of climb, pull landing gear up. It can be done using the
                lever below
                {' '}
                {SFD_CJ4}
                .
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_FLAPS_0,
        title: 'Flaps',
        state: <>0&deg;</>,
        tags: [ChecklistTags.IN_MEMORY_ITEM],
        moreInfoShort: (
            <>
                Retract flaps fully by using the handle to the right of throttle levers by pushing it forward.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_THROTTLES_CLIMB,
        title: 'Throttles',
        state: 'CLIMB',
        tags: [ChecklistTags.IN_MEMORY_ITEM],
        moreInfoShort: (
            <>
                Pull back throttles below the takeoff (TO) detent. This can be checked on the
                {' '}
                {EICAS_CJ4}
                {' '}
                near the
                on the
                {' '}
                {N2}
                {' '}
                bars where indication should go from TO to CLB.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_YAW_DAMPER_ON,
        title: 'Yaw Damper',
        state: 'ON',
        tags: [ChecklistTags.IN_MEMORY_ITEM],
        moreInfoShort: (
            <>
                Yaw Damper can be enabled using the the button labelled
                {' '}
                <KeyboardInputs inputs={['YD']} />
                {' '}
                just left of the autopilot button. This step is not necessary if you intend to enable autopilot
                immediately as yaw damper is enabled with
                {' '}
                <KeyboardInputs inputs={['AP']} />
                .
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_AUTOPILOT_AS_REQUIRED,
        title: 'Autopilot',
        state: 'AS DESIRED',
        moreInfoShort: (
            <>
                Autopilot may be enabled using the button labelled
                {' '}
                <KeyboardInputs inputs={['AP']} />
                {' '}
                on the autopilot row. If enabled, you should also select modes like heading.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_ICE_PROTECTION_SYSTEM_CHECK,
        title: 'Ice Protection Systems',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Keep monitoring conditions via temperatures at the bottom of
                {' '}
                {MFD_CJ4}
                {' '}
                and follow rules outlined under the Before Takeoff checklist.
                {' '}
                {cj4AntiIceRules}
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_PASSENGER_LIGHTS_AS_REQUIRED,
        title: 'Pass Lights Buttons',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Belt sign may be turned off above 10,000ft in non-turbulant air.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_EXTERIOR_LIGHTS,
        title: 'Landing Lights Button',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'LANDING Light',
                state: 'OFF ABOVE 10,000 FT',
            },
            {
                title: 'STROBE Light',
                state: 'OFF ABOVE 10,000 FT',
            },
            {
                title: 'LOGO Light',
                state: 'OFF ABOVE 10,000 FT',
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_PRESSURIZATION_CHECK,
        title: 'Pressurization',
        state: 'CHECK',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_ALTIMETERS_SET,
        title: 'Altimeters',
        state: 'SET/CROSSCHECK',
        moreInfoShort: (
            <>
                Take note of transition altitude at departure and click the
                {' '}
                <KeyboardInputs inputs={['BARO']} />
                {' '}
                rotary in the
                {' '}
                {DCP_CJ4}
                {' '}
                to switch to standard pressure. Easiest way to check is to verify that
                {' '}
                <CASMessage level="data">STD</CASMessage>
                {' '}
                is displayed below the altitude tape or on the standby flight display.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_CRUISE_THROTTLES,
        title: 'Throttles',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                During cruise, any throttle setting maybe be used within CRUISE or CLIMB detents. Pilot should modulate
                throttling to maintain chosen cruising speed.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_CRUISE_PRESSURIZATION,
        title: 'Pressurization',
        state: 'CHECK',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_CRUISE_ICE_PROTECTION_SYSTEMS,
        title: 'Ice Protection Systems',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Continue to monitor icing condition during cruise.
                {' '}
                {cj4AntiIceRules}
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_DESCENT_PRESSURIZATION,
        title: 'Pressurization',
        state: 'VERIFY/SET LDG ELEV',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_DESCENT_ICE_PROTECTION_SYSTEMS,
        title: 'Ice Protection Systems',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Prepare for anti-ice procedure during descent and enable anti-ice protection systems as soon as
                required.
                {' '}
                {cj4AntiIceRules}
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_DESCENT_ALTIMETERS,
        title: 'Altimeters',
        state: 'SET/CROSSCHECK',
        moreInfoShort: (
            <>
                Preset
                {' '}
                <KeyboardInputs inputs={['BARO']} />
                {' '}
                for landing pressure and verify transition level, press
                {' '}
                <KeyboardInputs inputs={['BARO']} />
                {' '}
                to switch from standard to local pressure altitude at transition level. Once switched, configure
                {' '}
                {SFD_CJ4}
                {' '}
                and crosscheck altitude shown.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_DESCENT_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'LANDING Light',
                state: 'ON BELOW 10,000 FT',
            },
            {
                title: 'STROBE Light',
                state: 'ON BELOW 10,000 FT',
            },
            {
                title: 'LOGO Light',
                state: 'ON BELOW 10,000 FT',
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_LANDING_DATA,
        title: 'Landing Data',
        state: 'CONFIRM',
        moreInfoShort: (
            <>
                Once approach and runway is confirmed, configure landing performance using wind, temperature and
                pressure altitude found in latest METAR/ATIS.
            </>
        ),
        subItems: createTransformedList()([
            {
                title: (
                    <>
                        Approach Performance Page 1 (
                        <KeyboardInputs inputs={['PERF', 'RSK 3 (APPROACH)']} />
                        )
                    </>
                ),
                state: 'OPEN',
                subItems: createTransformedList()([
                    {
                        title: 'Runway (Right Side)',
                        state: 'CHECKED',
                    },
                    {
                        title: (
                            <>
                                Wind (
                                <KeyboardInputs inputs={['RSK 1 (WIND)']} />
                                )
                            </>
                        ),
                        state: 'AS DESIRED',
                    },
                    {
                        title: (
                            <>
                                {OAT}
                                {' '}
                                (
                                <KeyboardInputs inputs={['RSK 2 (OAT)']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                {QNH}
                                {' '}
                                (
                                <KeyboardInputs inputs={['RSK 3 (QNH)']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                Runway Condition
                                {' '}
                                (
                                <KeyboardInputs inputs={['LSK 6 (RWY COND)']} />
                                )
                            </>
                        ),
                        state: 'CHECKED / SET',
                    },
                ]),
            },
            {
                title: (
                    <>
                        Approach Performance Page 2 (
                        <KeyboardInputs inputs={['NEXT']} />
                        )
                    </>
                ),
                state: 'COMPLETE',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Anti-Ice Setting
                                {' '}
                                (
                                <KeyboardInputs inputs={['LSK 1 (A/I)']} />
                                )
                            </>
                        ),
                        state: 'CHECKED / SET',
                    },
                    {
                        title: (
                            <>
                                Landing Factor
                                {' '}
                                (
                                <KeyboardInputs inputs={['LSK 5 (LDG FACTOR)']} />
                                )
                            </>
                        ),
                        state: 'CHECKED / SET',
                    },
                    {
                        title: (
                            <>
                                V-Speeds
                                {' '}
                                (
                                <KeyboardInputs inputs={['RSK 6 (SEND)']} />
                                )
                            </>
                        ),
                        state: 'SENT TO PFD',
                    },
                ]),
            },

        ]),
    },
    { // FIXME: crew briefing
        uid: ChecklistItems.CJ4_APPROACH_CREW_BRIEFING,
        title: 'Crew Briefing',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Review approach procedure and prepare all necessary charts for quick access. Review missed approach
                procedure as well.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_AVIONICS_FLIGHT_INSTRUMENTS,
        title: 'Avionics/Flight Instruments',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_MINIMUMS,
        title: 'Minimums',
        state: 'SET',
        moreInfoShort: (
            <>
                Minimums can be found on the final approach chart. The CJ4 is only allowed to do CAT I approach which
                means full visibility is required below 200 ft
                {' '}
                {AGL}
                . The chart should provide the right altitude, adding ground altitude.
                <br />
                <br />
                Once determined, go to the
                {' '}
                {DCP_CJ4}
                , press
                {' '}
                <KeyboardInputs inputs={['REFS MENU']} />
                , scroll down to
                {' '}
                <CASMessage>MINIMUMS</CASMessage>
                {' '}
                &gt;
                {' '}
                <CASMessage>BARO</CASMessage>
                {' '}
                using the large
                {' '}
                <KeyboardInputs inputs={['MENU ADV']} />
                {' '}
                scroll wheel, then use the small scroll wheel on same knob to select the altitude and
                then click it. Minimum altitude will display under the altitude tape, as well as make an audible
                announcement upon landing.
                <br />
                <br />
                Autopilot and yaw damper should be disconnected by the time minimums are reached.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_FUEL_TRANSFER_SELECTOR,
        title: 'Fuel Transfer Selector',
        state: 'OFF',
        moreInfoShort: (
            <>
                Fuel selector is located on the
                {' '}
                {TP_CJ4}
                {' '}
                near the Climate control selector. Ensure that it is in the middle position (OFF).
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'LANDING Light',
                state: 'ON',
            },
            {
                title: 'STROBE Light',
                state: 'ON',
            },
            {
                title: 'LOGO Light',
                state: 'ON',
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_ICE_PROTECTION_SYSTEMS,
        title: 'Ice Protection Systems',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Once again, keep monitoring conditions for anti-ice protection requirements.
                {' '}
                {cj4AntiIceRules}
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_FLAPS,
        title: 'Flaps',
        state: <>15&deg;</>,
        moreInfoShort: (
            <>
                Extend flaps to 15&deg; once below 200
                {' '}
                {KIAS}
                . This can be done by setting the flaps lever, right of
                throttles, in the middle position.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_PASSENGER_BRIEFING,
        title: 'Passenger Briefing',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Use the
                {' '}
                {CCP_CJ4}
                {' '}
                to select the passenger briefing announcement by pressing the
                {' '}
                <KeyboardInputs inputs={['PASS BRIEF']} />
                {' '}
                button, selecting
                {' '}
                <CASMessage>LANDING</CASMessage>
                {' '}
                briefing using the menu selector.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_SEATS_UPRIGHT,
        title: 'Seats',
        state: 'UPRIGHT AND OUTBOARD',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_SEAT_BELTS,
        title: 'Seat Belts',
        state: 'ADJUSTED/SECURE',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_PASSENGER_LIGHTS,
        title: 'Pass Lights Safety Button',
        state: 'ON',
        subItems: createTransformedList()([
            {
                title: 'BELT Light',
                state: 'ON',
            },
            {
                title: 'SAFETY Light',
                state: 'ON',
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_PRESSURIZATION,
        title: 'Pressurization',
        state: '< 0.5 PSI BEFORE LDG',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_LANDING_LANDING_GEAR,
        title: 'Landing Gear',
        state: 'DOWN (3 GREEN)',
        moreInfoShort: (
            <>
                Pull landing gear down using the lever below
                {' '}
                {SFD_CJ4}
                , and verify that 3 green lights come on to confirm landing gear is deployed.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_LANDING_FLAPS,
        title: 'Flaps',
        state: <>35&deg;</>,
        moreInfoShort: (
            <>
                Deploy flaps to 35&deg; once below 160
                {' '}
                {KIAS}
                . This can be done using the flaps lever pulled towards the passenger cabin completely.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_LANDING_SPEEDBRAKES_OFF,
        title: 'Speed Brakes',
        state: '0%',
        moreInfoShort: (
            <>
                Ensure speed brakes are fully retracted by checking they are set to 0% by their lever left of
                throttles.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_LANDING_AIRSPEED_VREF,
        title: 'Airspeed',
        state: 'VREF',
        moreInfoShort: (
            <>
                Reduce speed to VREF. This should be visible on the speed tape after the setting landing data
                previously, and around 105-115 knot area.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_LANDING_AUTOPILOT_AND_YAW_DAMPER,
        title: 'Autopilot and Yaw Damper',
        state: 'DISENGAGE',
        moreInfoShort: (
            <>
                Disengage Autopilot and Yaw Damper by using their respective buttons by 200 ft
                {' '}
                {AGL}
                .
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_LANDING_THROTTLES,
        title: 'Throttles',
        state: 'IDLE',
        tags: [ChecklistTags.IN_MEMORY_ITEM],
        moreInfoShort: (
            <>
                Once passing the threshold of runway, pull throttles all the way back to idle.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_LANDING_BRAKES,
        title: 'Brakes (After NLG Touchdown)',
        state: 'APPLY',
        tags: [ChecklistTags.IN_MEMORY_ITEM],
        moreInfoShort: (
            <>
                Let the airplane&apos;s speed die down and the airplane not want to fly until the nose landing gear
                (NLG) touches the ground. Apply brake pressure once nose landing gear as touched down.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_LANDING_GROUND_SPOILERS,
        title: 'Ground Spoilers',
        state: 'EXTEND',
        tags: [ChecklistTags.IN_MEMORY_ITEM],
        moreInfoShort: (
            <>
                Extend ground spoilers to help with braking power. Ground spoilers are effective only above 70% of
                landing speed and help brake effectiveness when airplane is still settling between on ground and
                flying.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_GA_BUTTON,
        title: 'GA Button',
        state: 'PUSH',
        tags: [ChecklistTags.IN_MEMORY_ITEM],
        moreInfoShort: (
            <>
                Push GA button, which is located on the right side of
                {' '}
                {DCP_CJ4}
                . It is the button below
                {' '}
                <KeyboardInputs inputs={['L ENG FIRE']} />
                .
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_THROTTLES_1,
        title: 'Throttles',
        state: 'TO',
        tags: [ChecklistTags.IN_MEMORY_ITEM],
        moreInfoShort: (
            <>
                Push throttles all the way up and past the takeoff detent.
                {' '}
                {MFD_CJ4}
                {' '}
                should display TO in the
                {' '}
                {EICAS_CJ4}
                .
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_PITCH_ATTITUDE,
        title: 'Pitch Attitude',
        state: <>7.5&deg; THEN AS REQD</>,
        tags: [ChecklistTags.IN_MEMORY_ITEM],
        moreInfoShort: (
            <>
                As speed permits, pitch the airplane up to 7.5&deg; to gain altitude, then as required.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_FLAPS_1,
        title: 'Flaps',
        state: <>15&deg;</>,
        tags: [ChecklistTags.IN_MEMORY_ITEM],
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_LANDING_GEAR,
        title: 'Landing Gear',
        state: 'UP',
        tags: [ChecklistTags.IN_MEMORY_ITEM],
        moreInfoShort: (
            <>
                Once positive rate of ascent is confirmed, pull landing gear up.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_FLAPS_2,
        title: 'Flaps',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Depending on intentions, you may have to go into cruise mode or approach mode again. This decides
                whether to stay in flaps 15&deg; and go back to approach checklist which will bring us back to 35&deg;,
                or remove flaps completely to fly to another airport.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_AIRSPEED,
        title: 'Airspeed',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Follow any restrictions applied by ATC or through altitude speed restrictions. Fly as required.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_THROTTLES_2,
        title: 'Throttles',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Reduce throttles according to desired airspeed within the CLIMB or CRUISE detent.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_YAW_DAMPER,
        title: 'Yaw Damper',
        state: 'ON',
        moreInfoShort: (
            <>
                Yaw Damper can be enabled using the the button labelled
                {' '}
                <KeyboardInputs inputs={['YD']} />
                {' '}
                just left of the autopilot button. This step is not necessary if you intend to enable autopilot
                immediately as yaw damper is enabled with AP.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_AUTOPILOT,
        title: 'Autopilot',
        state: 'AS DESIRED',
        moreInfoShort: (
            <>
                Autopilot may be enabled using the
                {' '}
                <KeyboardInputs inputs={['AP']} />
                {' '}
                within the autopilot controls of cabin. Verify modes engaged before engaging autopilot to avoid any
                unexpected hard turns or altitude changes.
            </>
        ),
    },

    {
        uid: ChecklistItems.CJ4_AFTER_LANDING_SPEEDBRAKES,
        title: 'Speed Brakes',
        state: '0%',
        moreInfoShort: (
            <>
                Clean speed brakes by setting them to 0%.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_LANDING_FLAPS,
        title: 'Flaps',
        state: <>0&deg;</>,
        moreInfoShort: (
            <>
                Clean flaps by setting them to 0&deg; using the lever right side of throttles.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_LANDING_PITOT_STATIC_HEAT,
        title: 'Pitot/Static Heat Buttons',
        state: 'OFF',
        moreInfoShort: (
            <>
                Once final taxi is started, Pitot/Static Heat may be turned off using the buttons on the
                {' '}
                {TP_CJ4}
                {' '}
                under the anti-ice area.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_LANDING_ICE_PROTECTION_SYSTEMS,
        title: 'Ice Protection Systems',
        state: 'OFF / AS REQUIRED',
        moreInfoShort: (
            <>
                Ground operation for ice protection is resumed. At this point only engine anti-ice may be used if
                {' '}
                {OAT}
                /
                {SAT}
                {' '}
                is below +5&deg;C and there is visible moisture that may be ingested by engines. All other
                ice protection systems must be turned off.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_LANDING_RADAR,
        title: 'Radar',
        state: 'STANDBY',
        moreInfoShort: (
            <>
                After leaving runway, disables all terrain and weather radar from
                {' '}
                {PFD_CJ4}
                {' '}
                /
                {' '}
                {MFD_CJ4}
                .
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_LANDING_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'STROBE Lights',
                state: 'AS REQUIRED',
            },
            {
                title: 'LANDING Lights',
                state: 'AS REQUIRED',
            },
            {
                title: 'TAXI Lights',
                state: 'ON',
            },
        ]),
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'SET/WHEELS CHOCKED',
        moreInfoShort: (
            <>
                Set parking brakes by pulling the round handle under yoke fully out.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_EMERGENCY_LIGHTS,
        title: 'Emergency Lights Switch',
        state: 'OFF',
        moreInfoShort: (
            <>
                Under the electrical panel left of
                {' '}
                {PFD_CJ4}
                , turn off Emergency Lights Switch on second row all the way
                to the left by toggling it down.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_STANDBY_FLIGHT_DISPLAY,
        title: 'Standby Flight Display Switch',
        state: 'OFF',
        moreInfoShort: (
            <>
                Next to Emergency Lights Switch, in electrical panel, also toggle down the Standby Flight Display
                switch.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_AVIONICS_SWITCH,
        title: 'Avionics Switch',
        state: 'OFF',
        moreInfoShort: (
            <>
                Turn avionics off by setting the Avionics switch in its middle position in the electrical panel, left
                of
                {' '}
                {PFD_CJ4}
                , rightmost switch of the second row.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_CLIMATE_CONTROL_SELECTOR,
        title: 'Climate Control Selector',
        state: 'OFF',
        moreInfoShort: (
            <>
                On the
                {' '}
                {TP_CJ4}
                {' '}
                towards the middle, set the Climate Control selector in its left position to turn
                climate control off.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_ICE_PROTECTION_SYSTEMS,
        title: 'Ice Protection Systems (All)',
        state: 'OFF',
        moreInfoShort: (
            <>
                Turn off all ice protection systems, on the
                {' '}
                {TP_CJ4}
                {' '}
                under the anti ice section.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_THROTTLES,
        title: 'Throttles',
        state: 'IDLE',
        moreInfoShort: (
            <>
                Pull throttles all the way down to idle in preparation for engine shutdown.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_ENGINE_RUNSTOP_BUTTONS,
        title: 'Engine Run/Stop Buttons (Both)',
        state: 'STOP',
        moreInfoShort: (
            <>
                Hit each engine Run/Stop button once to toggle them in STOP mode and let the engines shut down. Those
                are the buttons just above throttles displaying RUN as engine are running.
                <br />
                <br />
                Note: MSFS screen for flight end should display after this step. You may click Continue to finish the
                last two steps of this checklist.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'OFF',
        moreInfoShort: (
            <>
                Turn all exterior lights off.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_BATTERY_SWITCH,
        title: 'Battery Switch',
        state: 'OFF',
        moreInfoShort: (
            <>
                Under the electrical panel left of
                {' '}
                {PFD_CJ4}
                , turn the red Battery switch off by toggling it down.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_CONTROL_LOCK,
        title: 'Control Lock',
        state: 'AS REQUIRED',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_ENGINE_COVERS,
        title: 'Engine Covers (After Engine Cool)',
        state: 'INSTALL',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
]);
