import React from 'react';

import { CASMessage } from 'components/lib/CASMessage';
import { KeyboardInputs } from 'components/lib/KeyboardInputs';
import {
    APU, ITT, N1, N2,
} from 'components/lib/vernacular/common';
import { EICAS_CRJ } from 'components/lib/vernacular/crj';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { createTransformedList, createTransformedMapping } from 'lib/checklist/data/transforms';

const addCRJTags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.CRJ, ChecklistTags.OFFICIAL],
});

export const ACRJChecklistItemsData = createTransformedMapping(addCRJTags)([
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_CIRCUIT_BREAKERS,
        title: 'Circuit Breakers',
        state: 'CLOSED',
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_NOSEWHEEL,
        title: 'Nose-Wheel Steering Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_HYDRAULIC_PUMPS_1,
        title: 'Hydraulic Pumps',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_LANDING_GEAR,
        title: 'Landing Gear Lever',
        state: 'DOWN',
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_FLIGHT_SPOILER_LEVER,
        title: 'Flight Spoiler Lever',
        state: 'RETRACTED',
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_SLATS_FLAPS_LEVER,
        title: 'Slats / Flaps Lever',
        state: 'SET',
        moreInfoShort: (
            <>
                Lever should be set to the setting corresponding to the physical position of flaps and slats while in
                cold and dark mode, to avoid any abrupt movement once hydraulics are turned on.
            </>
        ),
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_RADAR,
        title: 'Radar',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_ADG_MANUAL_RELEASE,
        title: 'ADG Manual Release',
        state: 'STOWED',
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_EMERGENCY_FLAP_SWITCH,
        title: 'Emergency Flap Switch',
        state: 'NORMAL',
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_BATTERY_MASTER_SWITCH,
        title: 'Battery Master Switch',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_APU,
        title: 'APU',
        state: 'ON / OFF',
        moreInfoShort: (
            <>
                {APU}
                {' '}
                must remain OFF until fire test is done in Originating check list for first flight of the day.
            </>
        ),
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_AC_ELECTRICS,
        title: 'AC Electrics',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                If
                {' '}
                {APU}
                {' '}
                was started, AC electrics can be established and verified in the
                <KeyboardInputs inputs={['ELEC']} />
                {' '}
                page of the secondary
                {' '}
                {EICAS_CRJ}
                .
            </>
        ),
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_IRS,
        title: 'IRS',
        state: 'NAV',
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_EMERGENCY_EQUIPMENT,
        title: 'Emergency Equipment',
        state: 'CHECKED',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_GEAR_SAFETY_PINS,
        title: 'Gear and Safety Pins',
        state: 'ON BOARD',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_AIRPLANE_DOCUMENTS,
        title: 'Airplane Documents',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_HYDRAULIC_PUMPS_2,
        title: 'Hydraulic 3A Pump',
        state: 'ON / OFF',
        moreInfoShort: (
            <>
                System 3 pumps are electric driven pumps when hydraulic pressure is necessary before engine start.
                Can remain OFF in most cases at this point.
            </>
        ),
    },
    {
        uid: ChecklistItems.CRJ_SAFETY_CHECK_FMS_INITIALIZATION,
        title: 'FMS Position Initialization',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                In order to align the IRS, position initialization should be done as soon as possible. This is only
                possible at this stage if
                {' '}
                {APU}
                {' '}
                was started.
            </>
        ),
        subItems: createTransformedList()([
            {
                title: (
                    <>
                        POS INIT Page (
                        <KeyboardInputs
                            inputs={[
                                'INDEX',
                                'LSK 2 (POS INIT)',
                            ]}
                        />
                        )
                    </>
                ),
                state: 'OPEN',
            },
            {
                title: (
                    <>
                        Airport Reference (
                        <KeyboardInputs
                            inputs={[
                                'KEYBOARD INPUT',
                                'LSK 2 (AIRPORT)',
                            ]}
                        />
                        )
                    </>
                ),
                state: 'SET',
            },
            {
                title: (
                    <>
                        Position (
                        <KeyboardInputs
                            inputs={[
                                'NEXT PAGE',
                                'LSK 2 (GNSS1 POS)',
                                'PREV PAGE',
                                'RSK 5 (SET POS)',
                            ]}
                        />
                        )
                    </>
                ),
                state: 'SET',
            },
            {
                title: 'Position',
                state: 'VERIFIED',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_CABIN_INSPECTION_CABIN_INSPECTION,
        title: 'Cabin Inspection',
        state: 'ACCOMPLISH',
        subItems: createTransformedList()([
            {
                title: 'Emergency Lights Switch',
                state: 'ON',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                <CASMessage>EMER LTS ON</CASMessage>
                                {' '}
                                on secondary
                                {' '}
                                {EICAS_CRJ}
                                {' '}
                                (STAT page)
                            </>
                        ),
                        state: 'DISPLAYED',
                    },
                ]),
            },
            {
                title: 'NO SMOKING and SEAT BELT Signs',
                state: 'AUTO',
            },
            {
                title: 'Emergency Lights Switch',
                state: 'OFF',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                <CASMessage>EMER LTS ON</CASMessage>
                                {' '}
                                on secondary
                                {' '}
                                {EICAS_CRJ}
                                {' '}
                                (STAT page)
                            </>
                        ),
                        state: 'NOT DISPLAYED',
                    },
                    {
                        title: (
                            <>
                                <CASMessage level="warning">EMER LTS OFF</CASMessage>
                                {' '}
                                on primary
                                {' '}
                                {EICAS_CRJ}
                            </>
                        ),
                        state: 'DISPLAYED',
                    },
                ]),
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_CABIN_INSPECTION_WALKAROUND_INSPECTION,
        title: 'Walk-Around Inspection',
        state: 'ACCOMPLISH',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_CREW_OXYGEN,
        title: 'Crew Oxygen and Masks',
        state: 'CHECKED',
        tags: [ChecklistTags.FFOTD],
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_AUDIO_WARNING_PANEL,
        title: 'Audio Warning Panel',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_ELECTRICAL_POWER_PANEL,
        title: 'Electrical Power Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'All Generators Switches (ALL GEN)',
                state: 'AUTO',
            },
            {
                title: 'IDG Disc Switches',
                state: 'GUARDED',
            },
            {
                title: 'DC Service Switch',
                state: 'OFF',
            },
            {
                title: 'Battery Master',
                state: 'ON',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_FIRE_DETECTION,
        title: 'Fire Detection / FIREX Monitor Test',
        state: 'COMPLETE',
        tags: [ChecklistTags.FFOTD],
        subItems: createTransformedList()([
            {
                title: 'Fire Detection Monitor Button',
                state: 'PRESS 2 SECONDS',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                {' '}
                                <CASMessage level="info">FIRE SYS OK</CASMessage>
                                {' '}
                                on secondary
                                {' '}
                                {EICAS_CRJ}
                            </>
                        ),
                        state: 'DISPLAYED',
                    },
                ]),
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_EXTERNAL_LIGHTS_PANEL,
        title: 'External Lights Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'NAV Light',
                state: 'ON',
            },
            {
                title: 'Beacon Light',
                state: 'OFF',
            },
            {
                title: 'Strobe Light',
                state: 'OFF',
            },
            {
                title: 'Logo Lights',
                state: 'ON',
            },
            {
                title: 'Wing Inspection Light',
                state: 'OFF',
            },
            {
                title: 'Landing Lights',
                state: 'OFF',
            },
            {
                title: 'Taxi Lights',
                state: 'OFF',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_FUEL_PANEL,
        title: 'Fuel Panel',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_BLEED_AIR_PANEL,
        title: 'Bleed Air Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Wing A/I Cross Bleed Switch',
                state: 'NORMAL',
            },
            {
                title: 'Bleed Valves Switch',
                state: 'AUTO',
            },
            {
                title: 'ISOL Switch',
                state: 'OPEN', // FIXME: sub item help could be useful here.
            },
            {
                title: 'Bleed Source Switch',
                state: 'BOTH ENG',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_APU_PANEL,
        title: 'APU Panel',
        state: 'ON / OFF',
        moreInfoShort: (
            <>
                If
                {' '}
                {APU}
                {' '}
                was not started before, it can now be safely started to supply power and bleed air to systems.
            </>
        ),
        subItems: createTransformedList()([
            {
                title: 'PWR Fuel Switch',
                state: 'PRESS',
            },
            {
                title: 'START / STOP Switch',
                state: 'START',
            },
            {
                title: 'DC and AC Electrical Power',
                state: 'CHECKED',
            },
            // FIXME: help items for sub items to explain "as required".
            // {
            //     title: 'Bleed Source Switch',
            //     state: 'AS REQUIRED',
            // },
            // {
            //     title: 'Bleed Valves Switch',
            //     state: 'AS REQUIRED',
            // },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_START_PANEL,
        title: 'Start Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'L ENG START and R ENG START Switches',
                state: 'OFF',
            },
            {
                title: 'IGNITION, CONT Switch',
                state: 'OFF',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_HYDRAULIC_PANEL,
        title: 'Hydraulic Panel',
        state: 'CHECKED, AUTO, ON (3A)',
        subItems: createTransformedList()([
            {
                title: 'All Hydraulic Switches',
                state: 'OFF',
            },
            {
                title: 'EICAS, HYD Synoptic Page',
                state: 'SELECT',
            },
            {
                title: 'STAB TRIM Switches',
                state: 'OFF / DISENGAGE',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                <CASMessage level="warning">STAB TRIM</CASMessage>
                                {' '}
                                on primary
                                {' '}
                                {EICAS_CRJ}
                            </>
                        ),
                        state: 'DISPLAYED',
                    },
                ]),
            },
            {
                title: 'Fluid Quantities',
                state: 'CHECKED',
            },
            {
                title: 'Pump 1, 3B and 2 Switches',
                state: 'ON',
            },
            {
                title: 'Hydraulic Pressures',
                state: 'CHECKED',
            },
            {
                title: 'EICAS, STAT Synoptic Page',
                state: 'SELECT',
            },
            {
                title: 'STAB TRIM Switches',
                state: 'ENGAGE',
            },
            {
                title: 'Pump 1, 3B and 2 Switches',
                state: 'AUTO',
            },
            {
                title: 'Pump 3A',
                state: 'ON',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_ELT_SWITCH,
        title: 'ELT Switch',
        state: 'ARM / RESET',
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_CABIN_PRESSURE_PANEL,
        title: 'Cabin Pressure Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'EICAS, ECS Synoptic Page',
                state: 'SELECT',
            },
            {
                title: 'MAN ALT Switch',
                state: 'CENTER POSITION',
            },
            {
                title: 'EMER DEPRESS Switch',
                state: 'OFF / GUARDED',
            },
            {
                title: 'PRESS CONTROL Switch',
                state: 'OFF / FLUSH',
            },
            {
                title: 'MAN RATE Switch',
                state: 'FULL DECR',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_AIR_CONDITIONING_PANEL,
        title: 'Air Conditioning Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'PACK Switches',
                state: 'AUTO',
            },
            {
                title: 'RECIRC FAN Switch',
                state: 'ON',
            },
            {
                title: 'Temperature Control Mode',
                state: 'AUTO',
            },
            {
                title: 'RAM AIR Switch',
                state: 'OFF / GUARDED',
            },
            {
                title: 'Aft Cargo',
                state: 'AS REQUIRED',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_ANTIICE_PANEL,
        title: 'Anti-Ice Panel',
        state: 'CHECKED / COMPLETE',
        subItems: createTransformedList()([
            {
                title: 'EICAS, PRI and STAT Pages',
                state: 'SELECT',
            },
            {
                title: 'WING and COWL Anti-Ice Switches',
                state: 'OFF',
            },
            {
                title: 'DET TEST Switch',
                state: 'PRESSED 2 SEC',
                subItems: createTransformedList()([
                    {
                        title: 'ICE Switch Light',
                        state: 'CHECKED',
                    },
                    {
                        title: (
                            <>
                                <CASMessage level="info">ADS HEAT TEST OK</CASMessage>
                                {' '}
                                on secondary
                                {' '}
                                {EICAS_CRJ}
                            </>
                        ),
                        state: 'CHECKED',
                    },
                ]),
            },
            {
                title: 'DET TEST Switch',
                state: 'PRESS / RESET',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_WINDSHIELD_HEAT,
        title: 'Windshield Heat',
        state: 'LOW',
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_EMERGENCY_LIGHTS,
        title: 'Emergency Lights Switch',
        state: 'ARMED',
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_STANDBY_COMPASS,
        title: 'Standby Compass',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_STALL_TEST,
        title: 'Stall Test',
        state: 'COMPLETE',
        tags: [ChecklistTags.FFOTD],
        subItems: createTransformedList()([
            {
                title: 'STALL PTCT, Pusher Switches',
                state: 'ON',
            },
            {
                title: 'STALL Switch',
                state: 'PUSH, HOLD',
                subItems: createTransformedList()([
                    {
                        title: 'INGITION, CONT Switch',
                        state: 'ON',
                    },
                    {
                        title: (
                            <>
                                <CASMessage>CONT IGNITION</CASMessage>
                                {' '}
                                on secondary
                                {' '}
                                {EICAS_CRJ}
                            </>
                        ),
                        state: 'CHECKED',
                    },
                    {
                        title: 'STALL Switch',
                        state: 'FLASHING',
                    },
                    {
                        title: 'Stick Checker',
                        state: 'ON',
                    },
                ]),
            },
            {
                title: 'STALL Switch',
                state: 'RELEASE',
                subItems: createTransformedList()([
                    {
                        title: 'INGITION, CONT Switch',
                        state: 'OFF',
                    },
                    {
                        title: (
                            <>
                                <CASMessage>CONT IGNITION</CASMessage>
                                {' '}
                                on secondary
                                {' '}
                                {EICAS_CRJ}
                            </>
                        ),
                        state: 'OFF',
                    },
                ]),
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_NOSEWHEEL,
        title: 'Nose-Wheel Steering Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_CLOCKS,
        title: 'Clocks',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_EFIS_CONTROL_PANELS,
        title: 'EFIS Control Panels',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Display Control Switches',
                state: 'MAP',
            },
            {
                title: 'NAV Source',
                state: 'FMS1',
            },
            {
                title: 'BARO Switch',
                state: 'SET',
            },
            {
                title: 'Display Reversionary Selector',
                state: 'NORM',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_INSTRUMENT_PANELS,
        title: 'Instrument Panels',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Primary Flight Display',
                state: 'CHECKED',
            },
            {
                title: 'Altimeter Readout',
                state: 'CROSS-CHECKED',
            },
            {
                title: 'Multifunction Display',
                state: 'CHECKED',
            },
            {
                title: 'Cockpit Voice Recorder',
                state: 'TEST',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_EICAS_AND_STDBY,
        title: 'EICAS and Standby Instruments',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'EICAS Primary Display',
                state: 'CHECKED',
            },
            {
                title: 'Standby Altimeters / Airspeed Indicator',
                state: 'CROSS-CHECKED',
            },
            {
                title: 'EICAS Secondary Display',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Brake Temperature',
                        state: 'CHECKED',
                    },
                ]),
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_UPPER_PEDESTAL,
        title: 'Upper Pedestal',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'MUTE HORN Switch',
                state: 'GUARDED',
            },
            {
                title: 'ANTI SKID Test',
                state: 'COMPLETE',
                subItems: createTransformedList()([
                    {
                        title: 'ANTI SKID Switch',
                        state: 'ARMED',
                    },
                    {
                        title: (
                            <>
                                <CASMessage level="warning">A/SKID INBD</CASMessage>
                                {' '}
                                and
                                <CASMessage level="warning">A/SKID OUTBD</CASMessage>
                                {' '}
                                on secondary
                                {' '}
                                {EICAS_CRJ}
                            </>
                        ),
                        state: 'NOT DISPLAYED',
                    },
                    {
                        title: 'ANTI SKID Switch',
                        state: 'OFF',
                    },
                    {
                        title: (
                            <>
                                <CASMessage level="warning">A/SKID INBD</CASMessage>
                                {' '}
                                and
                                <CASMessage level="warning">A/SKID OUTBD</CASMessage>
                                {' '}
                                on secondary
                                {' '}
                                {EICAS_CRJ}
                            </>
                        ),
                        state: 'DISPLAYED',
                    },
                    {
                        title: 'ANTI SKID Switch',
                        state: 'ARMED',
                    },
                    {
                        title: (
                            <>
                                <CASMessage level="warning">A/SKID INBD</CASMessage>
                                {' '}
                                and
                                <CASMessage level="warning">A/SKID OUTBD</CASMessage>
                                {' '}
                                on secondary
                                {' '}
                                {EICAS_CRJ}
                            </>
                        ),
                        state: 'NOT DISPLAYED',
                    },
                ]),
            },
            {
                title: 'MLG BAY Over-Heat Test',
                state: 'COMPLETE',
                subItems: createTransformedList()([
                    {
                        title: 'MLG BAY OVHT Switch',
                        state: 'HOLD',
                        subItems: createTransformedList()([
                            {
                                title: (
                                    <>
                                        <CASMessage level="critical">MLG BAY OVHT</CASMessage>
                                        {' '}
                                        on primary
                                        {' '}
                                        {EICAS_CRJ}
                                    </>
                                ),
                                state: 'DISPLAYED',
                            },
                        ]),
                    },
                    {
                        title: 'MLG TEST WARN FAIL Switch',
                        state: 'HOLD',
                        subItems: createTransformedList()([
                            {
                                title: (
                                    <>
                                        <CASMessage level="warning">MLG OVHT FAIL</CASMessage>
                                        {' '}
                                        on primary
                                        {' '}
                                        {EICAS_CRJ}
                                    </>
                                ),
                                state: 'DISPLAYED',
                            },
                        ]),
                    },
                ]),
            },
            {
                title: 'Landing Gear Lever',
                state: 'DOWN',
            },
            {
                title: 'Engines Sync Switches',
                state: 'N1 or N2',
            },
            {
                title: 'Indicator Lights Switch (IND LTS)',
                state: 'AS REQUIRED',
            },
            {
                title: 'Ground Proximity Switches (GRND PROX)',
                state: 'CHECKED, GUARDED',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_THRUST_LEVER_QUADRANT,
        title: 'Thrust Lever Quadrant',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'PITCH and ROLL DISC Handles',
                state: 'IN / STOWED',
            },
            {
                title: 'GND LIFT DUMPING Switch',
                state: 'CHECK / AUTO',
            },
            {
                title: 'Thrust Reverser Switches',
                state: 'ARMED',
            },
            {
                title: 'Thrust Levers',
                state: 'CHECKED / SHUT OFF',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_AVIONICS,
        title: 'Avionics / Radio Tuning Panels',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'TCAS Test',
                state: 'COMPLETE',
            },
            {
                title: 'RTU & FMS TUNE INHIBIT Switches',
                state: 'OFF / FLUSH',
            },
            {
                title: 'Back-Up Mode Selector Switch',
                state: 'STBY',
            },
            {
                title: 'DSPLAY FAN Switch',
                state: 'NORM',
            },
            {
                title: 'IRS Switch',
                state: 'NAV',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_TRIMS,
        title: 'Trims',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'STAB TRIM and MACH TRIM Switches',
                state: 'ENGAGE',
            },
            {
                title: 'Aileron and Rudder Trim (AIL, RUD)',
                state: 'CHECKED',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_YAW_DAMPER,
        title: 'Yaw Damper',
        state: 'ENGAGE',
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_SOURCE_SELECT_PANEL,
        title: 'Source Select Panel',
        state: 'NORM',
    },
    {
        uid: ChecklistItems.CRJ_ORIGINATING_CHECK_LOWER_PEDESTAL,
        title: 'Lower Pedestal',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Parking Brake',
                state: 'SET',
            },
            {
                title: 'Landing Gear Manual Release Handle',
                state: 'STOWED',
            },
            {
                title: 'ADG Manual Deploy Handle',
                state: 'STOWED',
            },
            {
                title: 'Emergency Flap Switch (EMER Flap)',
                state: 'NORMAL',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_START_CHECK_PASS_SIGNS,
        title: 'Passenger Signs',
        state: 'ON',
        subItems: createTransformedList()([
            {
                title: 'No Smoking Sign (NO SMKG)',
                state: 'ON',
            },
            {
                title: 'Seat Belts Sign (SEAT BLTS)',
                state: 'ON',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_START_CHECK_LANDING_ELEVATION,
        title: 'Landing Elevation',
        state: 'SET',
        moreInfoShort: (
            <>
                This elevation should be set to the elevation of the field we will return to in case of an emergency
                at take-off.
            </>
        ),
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_START_CHECK_BOOST_PUMPS,
        title: 'Boost Fuel Pumps',
        state: 'ON / CHECKED',
        moreInfoShort: (
            <>
                Center tank&apos;s quantity should not increase by more than 68 kg (150 lbs). Wait 10 minutes to verify
                values.
            </>
        ),
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_START_CHECK_ALTIMETERS,
        title: 'Altimeters',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_START_CHECK_FMS,
        title: 'FMS',
        state: 'SET, CHECKED',
        subItems: createTransformedList()([
            {
                title: (
                    <>
                        Status Page (
                        <KeyboardInputs inputs={['INDEX', 'LSK 1 (STATUS)']} />
                        )
                    </>
                ),
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Navigation Data',
                        state: 'WORLD',
                    },
                    {
                        title: 'Active Database Dates',
                        state: 'ACCURATE',
                    },
                    {
                        title: 'FMC Time',
                        state: 'ACCURATE',
                    },
                ]),
            },
            {
                title: (
                    <>
                        Position Initialization (
                        <KeyboardInputs inputs={['RSK 6 (POS INIT)']} />
                        )
                    </>
                ),
                state: 'CHECKED',
            },
            {
                title: (
                    <>
                        Flight Plan Init 1 (
                        <KeyboardInputs inputs={['RSK 6 (FPLN)']} />
                        )
                    </>
                ),
                state: 'SET',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Origin Airport (
                                <KeyboardInputs inputs={['INPUT', 'LSK 1 (ORIGIN)']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                Destination Airport (
                                <KeyboardInputs inputs={['INPUT', 'RSK 1 (DEST)']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                Alternate Destination Airport (
                                <KeyboardInputs inputs={['INPUT', 'RSK 2 (ALTN)']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                Flight Number (
                                <KeyboardInputs inputs={['INPUT', 'RSK 5 (FLT NO)']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                Execute (
                                <KeyboardInputs inputs={['EXEC']} />
                                )
                            </>
                        ),
                        state: 'COMPLETE',
                    },
                ]),
            },
            {
                title: (
                    <>
                        Departure Init (
                        <KeyboardInputs inputs={['DEP/ARR']} />
                        )
                    </>
                ),
                state: 'SET',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Departure Runway (
                                <KeyboardInputs inputs={['RSK ?']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                Standard Instrument Departure (
                                <KeyboardInputs inputs={['LSK ?']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                Transition (
                                <KeyboardInputs inputs={['INPUT', 'RSK 2 (ALTN)']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                Execute (
                                <KeyboardInputs inputs={['EXEC']} />
                                )
                            </>
                        ),
                        state: 'COMPLETE',
                    },
                ]),
            },
            {
                title: (
                    <>
                        Flight Plan Init 2 (
                        <KeyboardInputs inputs={['FPLN', 'NEXT PAGE']} />
                        )
                    </>
                ),
                state: 'SET',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Highways / Waypoints (
                                <KeyboardInputs inputs={['LSK ? / RSK ?']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                Execute (
                                <KeyboardInputs inputs={['EXEC']} />
                                )
                            </>
                        ),
                        state: 'COMPLETE',
                    },
                ]),
            },
            {
                title: (
                    <>
                        Legs Page (
                        <KeyboardInputs inputs={['LEGS']} />
                        )
                    </>
                ),
                state: 'CHECKED',
            },
            {
                title: (
                    <>
                        Performance Page (
                        <KeyboardInputs inputs={['PERF']} />
                        )
                    </>
                ),
                state: 'SET',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Performance Init Page 1 (
                                <KeyboardInputs inputs={['LSK 1 (PERF INIT)']} />
                                )
                            </>
                        ),
                        state: 'OPEN',
                        subItems: createTransformedList()([
                            {
                                title: 'EFB: Copy Performance Init Data to FMS',
                                state: 'SELECTED',
                            },
                            {
                                title: 'FMS: Zero Fuel Weight, Fuel Weight',
                                state: 'CHECKED',
                            },
                            {
                                title: (
                                    <>
                                        Cruise Altitude (
                                        <KeyboardInputs inputs={['RSK 1 (CRZ ALT)']} />
                                        )
                                    </>
                                ),
                                state: 'SET',
                            },
                            {
                                title: (
                                    <>
                                        Alternate Cruise Altitude (
                                        <KeyboardInputs inputs={['RSK 2 (ALTN CRZ ALT)']} />
                                        )
                                    </>
                                ),
                                state: 'SET',
                            },
                        ]),
                    },
                    {
                        title: (
                            <>
                                Performance Init Page 2 (
                                <KeyboardInputs inputs={['NEXT PAGE']} />
                                )
                            </>
                        ),
                        state: 'OPEN',
                        subItems: createTransformedList()([
                            {
                                title: (
                                    <>
                                        ISA Dev (
                                        <KeyboardInputs inputs={['LSK 2 (ISA DEV)']} />
                                        )
                                    </>
                                ),
                                state: 'SET',
                            },
                        ]),
                    },
                    {
                        title: (
                            <>
                                Performance Init Page 3 (
                                <KeyboardInputs inputs={['NEXT PAGE']} />
                                )
                            </>
                        ),
                        state: 'OPEN',
                        subItems: createTransformedList()([
                            {
                                title: (
                                    <>
                                        Reserves Fuel (
                                        <KeyboardInputs inputs={['LSK 1 (RESERVES)']} />
                                        )
                                    </>
                                ),
                                state: 'SET',
                            },
                            {
                                title: (
                                    <>
                                        Taxi Fuel (
                                        <KeyboardInputs inputs={['RSK 1 (TAXI FUEL)']} />
                                        )
                                    </>
                                ),
                                state: 'SET',
                            },
                        ]),
                    },
                    {
                        title: (
                            <>
                                VNAV Climb Profile (
                                <KeyboardInputs inputs={['LSK 6 (VNAV SETUP)']} />
                                )
                            </>
                        ),
                        state: 'OPEN',
                        subItems: createTransformedList()([
                            {
                                title: (
                                    <>
                                        Transition Altitude (
                                        <KeyboardInputs inputs={['RSK 1 (TRANS ALT)']} />
                                        )
                                    </>
                                ),
                                state: 'SET',
                            },
                        ]),
                    },
                ]),
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_START_CHECK_IRS,
        title: 'IRS',
        state: 'ALIGNED, NAV',
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_START_CHECK_RADIOS,
        title: 'Radios and Nav Aids',
        state: 'SET',
        moreInfoShort: 'If any navigation aids (VORs) can be used on departure, they should be configured now.',
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_START_CHECK_TAKEOFF_DATA,
        title: 'Take-Off Data',
        state: 'SET',
        subItems: createTransformedList()([
            {
                title: 'EFB: Take-Off Speeds',
                state: 'SET ALL',
            },
            {
                title: 'PFD: V Speeds',
                state: 'AVAILABLE',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_START_CHECK_TAKEOFF_BRIEFING,
        title: 'Take-Off Briefing',
        state: 'COMPLETE',
        // FIXME: create an abstract briefing
    },
    {
        uid: ChecklistItems.CRJ_CLEARED_TO_START_CHECK_PERSONAL_ELECTRONIC_DEVICES,
        title: 'Personal Electronic Devices',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_CLEARED_TO_START_CHECK_APU,
        title: 'APU',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CRJ_CLEARED_TO_START_CHECK_ELECTRICS,
        title: 'Electrics',
        state: 'CHECKED',
        moreInfoShort: (
            <>
                Electric circuits can be checked on the ELEC page of the secondary
                {' '}
                {EICAS_CRJ}
                .
            </>
        ),
    },
    {
        uid: ChecklistItems.CRJ_CLEARED_TO_START_CHECK_DOORS,
        title: 'Doors',
        state: 'CLOSED / LOCKED',
        moreInfoShort: (
            <>
                Door status can be checked on the DOORS page of the secondary
                {' '}
                {EICAS_CRJ}
                .
            </>
        ),
    },
    {
        uid: ChecklistItems.CRJ_CLEARED_TO_START_CHECK_BEACON,
        title: 'Beacon',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CRJ_CLEARED_TO_START_CHECK_FUEL_PUMPS,
        title: 'Fuel Pumps and Quantity',
        state: 'ON, CHECKED',
    },
    {
        uid: ChecklistItems.CRJ_CLEARED_TO_START_CHECK_HYDRAULIC_PUMPS,
        title: 'Hydraulic Pumps',
        state: 'AUTO / ON',
    },
    {
        uid: ChecklistItems.CRJ_CLEARED_TO_START_CHECK_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.CRJ_CLEARED_TO_START_ENGINE_START,
        title: 'Engine Start',
        state: 'COMPLETE',
        subItems: createTransformedList()([
            {
                title: 'Right Engine Start',
                state: 'COMPLETE',
                subItems: createTransformedList()([
                    {
                        title: 'R ENG Start Button',
                        state: 'PUSH',
                    },
                    {
                        title: (
                            <>
                                {N2}
                                {' '}
                                Monitor
                            </>
                        ),
                        state: '20%',
                    },
                    {
                        title: 'Right Throttle Lever',
                        state: 'IDLE',
                    },
                    {
                        title: (
                            <>
                                {N1}
                                {' '}
                                = 20%,
                                {' '}
                                {N2}
                                {' '}
                                = 60%,
                                {' '}
                                {ITT}
                                {' '}
                                = 525&deg;C
                            </>
                        ),
                        state: 'CHECKED',
                    },
                ]),
            },
            {
                title: 'Fuel Feed Check Valve Test',
                state: 'COMPLETE',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Fuel Page on
                                {' '}
                                {EICAS_CRJ}
                                {' '}
                                (
                                <KeyboardInputs inputs={['FUEL']} />
                                )
                            </>
                        ),
                        state: 'OPEN',
                    },
                    {
                        title: 'Fuel Boost Pumps',
                        state: 'OFF, BOTH',
                    },
                    {
                        title: (
                            <>
                                <CASMessage level="warning">LEFT FUEL LO PRESS</CASMessage>
                                {' '}
                                on primary
                                {' '}
                                {EICAS_CRJ}
                            </>
                        ),
                        state: 'DISPLAYED',
                    },
                    {
                        title: 'Fuel Boost Pumps',
                        state: 'ON, BOTH',
                    },
                ]),
            },
            {
                title: 'Left Engine Start',
                state: 'COMPLETE',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_AFTER_START_CHECK_GENERATORS,
        title: 'Electrical Panel: Generators',
        state: 'AUTO',
    },
    {
        uid: ChecklistItems.CRJ_AFTER_START_CHECK_BLEED_VALVES,
        title: 'Bleed Valves',
        state: 'AUTO',
    },
    {
        uid: ChecklistItems.CRJ_AFTER_START_CHECK_PACKS,
        title: 'Packs',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CRJ_AFTER_START_CHECK_SYNOPTIC_PAGES,
        title: 'Synoptic Pages',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: (
                    <>
                        Hyrdaulic System Pages (
                        <KeyboardInputs inputs={['HYD']} />
                        )
                    </>
                ),
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Hydraulic Pump 1A',
                        state: 'GREEN',
                    },
                    {
                        title: 'Hydraulic Pump 2A',
                        state: 'GREEN',
                    },
                    {
                        title: 'Hydraulic Pump 3A',
                        state: 'GREEN',
                    },
                ]),
            },
            {
                title: (
                    <>
                        Eletric System Pages (
                        <KeyboardInputs inputs={['ELEC']} />
                        )
                    </>
                ),
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Generator 1',
                        state: 'GREEN',
                    },
                    {
                        title: 'Generator 2',
                        state: 'GREEN',
                    },
                ]),
            },
            {
                title: (
                    <>
                        Fuel System Page (
                        <KeyboardInputs inputs={['FUEL']} />
                        )
                    </>
                ),
                state: 'CHECKED',
            },
            {
                title: (
                    <>
                        Flight Control Surfaces Page (
                        <KeyboardInputs inputs={['F/CTL']} />
                        ), Flight Controls
                    </>
                ),
                state: 'FREE AND MOVING',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_AFTER_START_CHECK_APU,
        title: 'APU',
        state: 'OFF',
        subItems: createTransformedList()([
            {
                title: 'APU Start/Stop Switch',
                state: 'PRESSED',
            },
            {
                title: 'APU, PWR Fuel Switch',
                state: 'PRESSED',
            },
            {
                title: (
                    <>
                        Secondary
                        {' '}
                        {EICAS_CRJ}
                        {' '}
                        Page (
                        <KeyboardInputs inputs={['STAT']} />
                        ), APU DOOR CLSD
                    </>
                ),
                state: 'CHECKED',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_AFTER_START_CHECK_ANTIICE_PROBES,
        title: 'Anti-Ice Probes',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CRJ_AFTER_START_CHECK_ANTIICE,
        title: 'Anti-Ice',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.CRJ_AFTER_START_CHECK_NOSEWHEEL,
        title: 'Nose-Wheel Steering Switch',
        state: 'ARMED',
    },
    {
        uid: ChecklistItems.CRJ_TAXI_CHECK_SLATS_FLAPS,
        title: 'Slats / Flaps',
        state: 'SET, CHECKED',
    },
    {
        uid: ChecklistItems.CRJ_TAXI_CHECK_FLIGHT_CONTROLS,
        title: 'Flight Controls',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ_TAXI_CHECK_TRIMS,
        title: 'Trims',
        state: 'GREEN, CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Rudder Trim (RUD)',
                state: 'GREEN',
            },
            {
                title: 'Aileron Trim (AIL)',
                state: 'GREEN',
            },
            {
                title: 'Elevator Trim',
                state: 'SET FOR TAKEOFF, GREEN',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_TAXI_CHECK_THRUST_REVERSERS,
        title: 'Thrust Reversers',
        state: 'ARMED',
    },
    {
        uid: ChecklistItems.CRJ_TAXI_CHECK_EXTERNAL_LIGHTS,
        title: 'External Lights',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'Taxi Lights (RECOG TAXI LTS)',
                state: 'ON',
            },
            {
                title: 'Strobe Lights (STROBE)',
                state: 'AS REQUIRED',
            },
            {
                title: 'Landing Lights (All LANDING LTS)',
                state: 'AS REQUIRED',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_TAXI_CHECK_FLIGHT_INSTRUMENTS,
        title: 'Flight Instruments',
        state: 'CHECKED', // FIXME: shared with other aircraft, check the roses rotate, speeds are indicated, ...
    },
    {
        uid: ChecklistItems.CRJ_TAXI_CHECK_BRAKE_TEMPS,
        title: 'Brake Temperatures',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_TAKEOFF_CHECK_EXTERNAL_LIGHTS,
        title: 'External Lights',
        state: 'ON',
        subItems: createTransformedList()([
            {
                title: 'Strobe Lights (STROBE)',
                state: 'ON',
            },
            {
                title: 'Landing Lights (All LANDING LTS)',
                state: 'ON',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_TAKEOFF_CHECK_FUEL_XFLOW,
        title: 'Fuel Cross-Flow (XFLOW)',
        state: 'MANUAL',
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_TAKEOFF_CHECK_FLIGHT_ATTENDANT,
        title: 'Flight Attendants',
        state: 'ADVISED',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_TAKEOFF_CHECK_TRANSPONDER,
        title: 'Transponder / TCAS',
        state: 'ON, SET',
        moreInfoShort: 'Rotate ATC SEL in Radios section on Pedestal to 1.',
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_TAKEOFF_CHECK_RADAR,
        title: 'Radar / Terrain Display',
        state: 'SET',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_TAKEOFF_CHECK_CAS,
        title: 'CAS',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ_CLIMB_CHECK_FUEL_XFLOW,
        title: 'Fuel Cross-Flow (XFLOW)',
        state: 'AUTO',
    },
    {
        uid: ChecklistItems.CRJ_CLIMB_CHECK_BLEEDS_AND_APU,
        title: 'Bleeds and APU',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ_CLIMB_CHECK_THRUST_REVERSERS,
        title: 'Thrust Reversers',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_CLIMB_CHECK_CAS,
        title: 'CAS',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ_DESCENT_CHECK_LANDING_ELEVATION,
        title: 'Landing Elevation',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ_DESCENT_CHECK_FUEL,
        title: 'Fuel',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ_DESCENT_CHECK_TCAS,
        title: 'TCAS',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ_DESCENT_CHECK_RADAR,
        title: 'Radar',
        state: 'ON / OFF',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CRJ_DESCENT_CHECK_CAS,
        title: 'CAS',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ_DESCENT_CHECK_LANDING_DATA,
        title: 'Landing Data',
        state: 'SET',
        subItems: createTransformedList()([
            {
                title: (
                    <>
                        Arrival Init (
                        <KeyboardInputs inputs={['DEP/ARR']} />
                        )
                    </>
                ),
                state: 'SET',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Approach (
                                <KeyboardInputs inputs={['RSK ?']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                Standard Terminal Arrival Route (
                                <KeyboardInputs inputs={['LSK ?']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                Execute (
                                <KeyboardInputs inputs={['EXEC']} />
                                )
                            </>
                        ),
                        state: 'COMPLETE',
                    },
                ]),
            },
            {
                title: (
                    <>
                        Legs Page (
                        <KeyboardInputs inputs={['LEGS']} />
                        )
                    </>
                ),
                state: 'CHECKED',
            },
            {
                title: (
                    <>
                        VNAV Descent Profile (
                        <KeyboardInputs inputs={['PERF', 'LSK 2 (VNAV SETUP)', 'NEXT PAGE', 'NEXT PAGE']} />
                        )
                    </>
                ),
                state: 'OPEN',
                subItems: createTransformedList()([
                    {
                        title: (
                            <>
                                Transition Level (
                                <KeyboardInputs inputs={['RSK 1 (TRANS FL)']} />
                                )
                            </>
                        ),
                        state: 'SET',
                    },
                    {
                        title: (
                            <>
                                Execute (
                                <KeyboardInputs inputs={['EXEC']} />
                                )
                            </>
                        ),
                        state: 'COMPLETE',
                    },
                ]),
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ_DESCENT_CHECK_APPROACH_BRIEFING,
        title: 'Approach Briefing',
        state: 'COMPLETE',
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_LANDING_CHECK_FLIGHT_ATTENDANT,
        title: 'Flight Attendants',
        state: 'ADVISED',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_LANDING_CHECK_PASSENGER_SIGNS,
        title: 'Passenger Signs',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_LANDING_CHECK_THRUST_REVERSERS,
        title: 'Thrust Reversers',
        state: 'ARMED',
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_LANDING_CHECK_LANDING_GEAR,
        title: 'Landing Gear',
        state: 'DOWN',
    },
    {
        uid: ChecklistItems.CRJ_BEFORE_LANDING_CHECK_FLAPS,
        title: 'Flaps',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ_AFTER_LANDING_CHECK_APU,
        title: 'APU',
        state: 'ON / OFF',
    },
    {
        uid: ChecklistItems.CRJ_AFTER_LANDING_CHECK_TRANSPONDER_RADAR,
        title: 'Transponder / Radar',
        state: 'STANDBY / OFF',
    },
    {
        uid: ChecklistItems.CRJ_AFTER_LANDING_CHECK_FLAPS,
        title: 'Flaps',
        state: 'UP / ZERO',
    },
    {
        uid: ChecklistItems.CRJ_AFTER_LANDING_CHECK_EXTERNAL_LIGHTS,
        title: 'External Lights',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ_AFTER_LANDING_CHECK_PROBES,
        title: 'Probes',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_SHUTDOWN_CHECK_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'ON / OFF',
    },
    {
        uid: ChecklistItems.CRJ_SHUTDOWN_CHECK_SEAT_BELTS,
        title: 'Seat Belts',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_SHUTDOWN_CHECK_THRUST_LEVERS,
        title: 'Thrust Levers',
        state: 'SHUT OFF',
    },
    {
        uid: ChecklistItems.CRJ_SHUTDOWN_CHECK_ANTIICE,
        title: 'Anti-Ice',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_SHUTDOWN_CHECK_FUEL_PUMPS,
        title: 'Fuel Pumps',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_SHUTDOWN_CHECK_BEACON,
        title: 'Beacon',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_SHUTDOWN_CHECK_NOSEWHEEL,
        title: 'Nose-Wheel Steering Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_TERMINATING_CHECK_CHOCKS_AND_BRAKES,
        title: 'Chocks And Brakes',
        state: 'IN / OFF',
    },
    {
        uid: ChecklistItems.CRJ_TERMINATING_CHECK_IRS,
        title: 'IRS',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_TERMINATING_CHECK_EMERGENCY_LIGHTS,
        title: 'Emergency Lights Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_TERMINATING_CHECK_ANTIICE,
        title: 'Anti-Ice',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_TERMINATING_CHECK_HYDRAULIC_PUMPS,
        title: 'Hydraulic Pumps',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_TERMINATING_CHECK_EXTERNAL_LIGHTS,
        title: 'External Lights',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_TERMINATING_CHECK_APU,
        title: 'APU',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_TERMINATING_CHECK_BATTERY_MASTER,
        title: 'Battery Master Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ_TERMINATING_CHECK_COCKPIT_LIGHTS,
        title: 'Cockpit Lights',
        state: 'OFF',
    },
]);
