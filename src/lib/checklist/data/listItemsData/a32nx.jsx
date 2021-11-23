import React from 'react';

import { ExternalLink } from 'components/lib/ExternalLink';
import { KeyboardInputs } from 'components/lib/KeyboardInputs';
import {
    EGT, N1, N2,
} from 'components/lib/vernacular/common';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { createTransformedList, createTransformedMapping } from 'lib/checklist/data/transforms';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { pick } from 'lib/pick';

const filterNestedSubItemsList = (result) => {
    if (isNullOrUndefined(result)) {
        return result;
    }

    return result.reduce(
        (aggregatedValue, currentValue) => {
            if (isNullOrUndefined(currentValue)) {
                return aggregatedValue;
            }

            return [
                ...aggregatedValue,
                {
                    ...currentValue,
                    subItems: filterNestedSubItemsList(currentValue.subItems),
                },
            ];
        },
        [],
    );
};

const mcduInitializationSubItems = ({ withSimbrief } = {}) => {
    const withSimbriefP = pick(withSimbrief, false);

    const withConditionalRet = ({ simbrief, manual }) => (withSimbriefP ? simbrief : manual);
    const conditionalInputItem = (key) => (withSimbriefP ? [key] : ['INPUT', key]);

    return filterNestedSubItemsList([
        withSimbriefP ? {
            title: 'EFB: Import from Simbrief on Dashboard.',
            state: 'COMPLETED',
        } : null,
        {
            title: (
                <>
                    Weights / Balance Init
                    {' '}
                    <KeyboardInputs inputs={['MCDU MENU', 'ATSU (LSK?L)', 'AOC (LSK?R)', 'W/B (LSK?L)']} />
                </>
            ),
            state: 'COMPLETED',
            subItems: [
                {
                    title: 'Page 1: Fuel Initialization',
                    state: 'COMPLETED',
                    subItems: [
                        ...withConditionalRet({
                            simbrief: [
                                {
                                    title: (
                                        <>
                                            OFP Request
                                            {' '}
                                            <KeyboardInputs inputs={['LSK?R']} />
                                        </>
                                    ),
                                    state: 'COMPLETE',
                                },
                            ],
                            manual: [
                                {
                                    title: (
                                        <>
                                            Block Fuel
                                            {' '}
                                            <KeyboardInputs inputs={['LSK?L']} />
                                        </>
                                    ),
                                    state: 'SET',
                                },
                                {
                                    title: (
                                        <>
                                            Block Fuel
                                            {' '}
                                            <KeyboardInputs inputs={['LSK?L']} />
                                        </>
                                    ),
                                    state: 'SET',
                                },
                                {
                                    title: (
                                        <>
                                            Block Fuel
                                            {' '}
                                            <KeyboardInputs inputs={['LSK?L']} />
                                        </>
                                    ),
                                    state: 'SET',
                                },
                            ],
                        }),
                        {
                            title: (
                                <>
                                    Refuel (Immediate
                                    {' '}
                                    <KeyboardInputs inputs={['LSK?R']} />
                                    , timed
                                    {' '}
                                    <KeyboardInputs inputs={['EFB']} />
                                    )
                                </>
                            ),
                            state: 'COMPLETE',
                        },
                    ],
                },
                {
                    title: 'Page 2: Boarding Initialization',
                    state: 'COMPLETED',
                    subItems: [
                        ...withConditionalRet({
                            simbrief: [
                                {
                                    title: (
                                        <>
                                            Request
                                            {' '}
                                            <KeyboardInputs inputs={['LSK5R']} />
                                        </>
                                    ),
                                    state: 'COMPLETE',
                                },
                            ],
                            manual: [
                                {
                                    title: (
                                        <>
                                            Passengers Total
                                            {' '}
                                            <KeyboardInputs inputs={['LSK1L']} />
                                        </>
                                    ),
                                    state: 'SET',
                                },
                                {
                                    title: (
                                        <>
                                            ZFW
                                            {' '}
                                            <KeyboardInputs inputs={['LSK1R']} />
                                        </>
                                    ),
                                    state: 'SET',
                                },
                            ],
                        }),
                        {
                            title: (
                                <>
                                    Boarding
                                    {' '}
                                    <KeyboardInputs inputs={['LSK6R']} />
                                </>
                            ),
                            state: 'STARTED',
                        },
                    ],
                },

            ],
        },
        {
            title: 'Data Page',
            state: 'CHECKED',
        },
        {
            title: 'Init 1',
            state: 'COMPLETED',
            subItems: (
                [
                    withConditionalRet({
                        simbrief: {
                            title: (
                                <>
                                    Init Request
                                    {' '}
                                    <KeyboardInputs inputs={['LSK6R']} />
                                </>
                            ),
                            state: 'COMPLETED',
                        },
                    }),
                    {
                        title: (
                            <>
                                From/To
                                {' '}
                                <KeyboardInputs inputs={conditionalInputItem('LSK1R')} />
                            </>
                        ),
                        state: withSimbriefP ? 'CHECKED' : 'SET',
                    },
                    {
                        title: (
                            <>
                                Alternate
                                {' '}
                                <KeyboardInputs inputs={conditionalInputItem('LSK2L')} />
                            </>
                        ),
                        state: withSimbriefP ? 'CHECKED' : 'SET',
                    },
                    {
                        title: (
                            <>
                                Flight Number
                                {' '}
                                <KeyboardInputs inputs={conditionalInputItem('LSK3L')} />
                            </>
                        ),
                        state: withSimbriefP ? 'CHECKED' : 'SET',
                    },
                    {
                        title: (
                            <>
                                Cost Index
                                {withSimbriefP ? ' (CRZ SYS CI)' : null}
                                {' '}
                                <KeyboardInputs inputs={conditionalInputItem('LSK5L')} />
                            </>
                        ),
                        state: withSimbriefP ? 'CHECKED' : 'SET',
                    },
                    {
                        title: (
                            <>
                                Cruise Altitude
                                {' '}
                                <KeyboardInputs inputs={conditionalInputItem('LSK6L')} />
                            </>
                        ),
                        state: withSimbriefP ? 'CHECKED' : 'SET',
                    },
                ]
            ),
        },
        {
            title: 'Flight Plan',
            state: 'SET / CHECKED',
            subItems: createTransformedList()([
                {
                    title: (
                        <>
                            Standard Instrument Departure (
                            <KeyboardInputs inputs={['LSK?L', 'LSK1L (Departure)']} />
                            )
                        </>
                    ),
                    state: 'COMPLETED',
                    subItems: [
                        {
                            title: (
                                <>
                                    Runway (
                                    <KeyboardInputs inputs={['LSK?L (Runway)']} />
                                    )
                                </>
                            ),
                            state: 'SET',
                        },
                        {
                            title: (
                                <>
                                    SID (
                                    <KeyboardInputs inputs={['LSK?L (SID)']} />
                                    )
                                </>
                            ),
                            state: 'SET',
                        },
                        {
                            title: (
                                <>
                                    Flight Plan Insert (
                                    <KeyboardInputs inputs={['LSK6R (INSERT)']} />
                                    )
                                </>
                            ),
                            state: 'COMPLETED',
                        },
                    ],
                },
                {
                    title: 'Waypoints',
                    state: withSimbriefP ? 'CHECKED' : 'INSERTED',
                    subItems: withConditionalRet({
                        manual: [
                            {
                                title: (
                                    <>
                                        by Direct Leg (
                                        <KeyboardInputs
                                            inputs={[
                                                'LSK?L (Starting Waypoint)',
                                                'LSK3R (Next WPT)',
                                            ]}
                                        />
                                        )
                                    </>
                                ),
                                state: '',
                            },
                            {
                                title: (
                                    <>
                                        by Airways (
                                        <KeyboardInputs
                                            inputs={[
                                                'LSK?L (Starting Waypoint)',
                                                'LSK5R (Airways)',
                                            ]}
                                        />
                                        )
                                    </>
                                ),
                                state: '',
                            },
                        ],
                    }),
                },
                {
                    title: (
                        <>
                            Standard Terminal Arrival Route (
                            <KeyboardInputs inputs={['LSK6L (Destination)', 'LSK1R (Arrival)']} />
                            )
                        </>
                    ),
                    state: 'AS REQUIRED',
                    subItems: [
                        {
                            title: (
                                <>
                                    STAR (
                                    <KeyboardInputs inputs={['LSK?L (STAR)']} />
                                    )
                                </>
                            ),
                            state: 'SET',
                        },
                        {
                            title: (
                                <>
                                    STAR (
                                    <KeyboardInputs inputs={['LSK?L (Approach)']} />
                                    )
                                </>
                            ),
                            state: 'SET',
                        },
                        {
                            title: (
                                <>
                                    Flight Plan Insert (
                                    <KeyboardInputs inputs={['LSK6R (INSERT)']} />
                                    )
                                </>
                            ),
                            state: 'COMPLETED',
                        },
                    ],
                },
            ]),
        },
        {
            title: 'Secondary Flight Plan (INOP)',
            state: '-',
        },
        {
            title: 'RAD NAV',
            state: 'AS DESIRED',
        },
        {
            title: 'Init 2',
            state: 'COMPLETED',
            subItems: createTransformedList()([
                {
                    title: (
                        <>
                            ZFW/ZFWCG (
                            <KeyboardInputs
                                inputs={[
                                    'LSK1R (Compute)',
                                    'LSK1R (Insert)',
                                ]}
                            />
                            )
                        </>
                    ),
                    state: 'SET / CHECKED',
                },
                {
                    title: 'ZFWCG',
                    state: 'NOTED',
                },
                {
                    title: (
                        <>
                            Block Fuel (
                            <KeyboardInputs inputs={['LSK1L']} />
                            )
                        </>
                    ),
                    state: 'SET / CHECKED',
                },
            ]),
        },
        {
            title: 'Performance Init',
            state: 'COMPLETED',
            subItems: [
                {
                    title: (
                        <>
                            Flaps (
                            <KeyboardInputs inputs={['INPUT "1/"', 'LSK3R']} />
                            )
                        </>
                    ),
                    state: 'SET',
                },
                {
                    title: (
                        <>
                            Flaps THS (
                            <KeyboardInputs inputs={['INPUT eg. "/UP0.8"', 'LSK3R']} />
                            )
                        </>
                    ),
                    state: 'SET',
                },
                {
                    title: (
                        <>
                            Flex Temp (INOP,
                            {' '}
                            <KeyboardInputs inputs={['"60"', 'LSK4R']} />
                            )
                        </>
                    ),
                    state: 'SET',
                },
                {
                    title: (
                        <>
                            Transition Altitude (
                            <KeyboardInputs inputs={['LSK4L']} />
                            )
                        </>
                    ),
                    state: 'SET',
                },
                {
                    title: (
                        <>
                            V1 Speed (
                            <KeyboardInputs
                                inputs={[
                                    'LSK1L (Compute)',
                                    'LSK1L (Insert)',
                                ]}
                            />
                            )
                        </>
                    ),
                    state: 'SET / CHECKED',
                },
                {
                    title: (
                        <>
                            VR Speed (
                            <KeyboardInputs
                                inputs={[
                                    'LSK2L (Compute)',
                                    'LSK2L (Insert)',
                                ]}
                            />
                            )
                        </>
                    ),
                    state: 'SET / CHECKED',
                },
                {
                    title: (
                        <>
                            V2 Speed (
                            <KeyboardInputs
                                inputs={[
                                    'LSK3L (Compute)',
                                    'LSK3L (Insert)',
                                ]}
                            />
                            )
                        </>
                    ),
                    state: 'SET / CHECKED',
                },
            ],
        },
    ]);
};

const engineStartVitals = {
    title: 'Engine Values',
    state: 'CHECKED, W/IN 1 MINUTE',
    subItems: createTransformedList()([
        {
            title: N1,
            state: '19%, AVAIL',
        },
        {
            title: N2,
            state: '68%',
        },
        {
            title: EGT, // FIXME: would have expected ITT?
            state: <>520&deg;C</>,
        },
        {
            title: 'Fuel Flow',
            state: '290 kg/h',
        },
    ]),
};

const apuStartProcedure = [
    {
        title: 'Air Conditioning Packs',
        state: 'OFF',
    },
    {
        title: 'APU Master Switch',
        state: 'ON',
    },
    {
        title: 'APU Starter Switch',
        state: 'ON, WAIT AVAIL',
    },
    {
        title: 'Wait 1 Minute',
        state: 'COMPLETED',
    },
    {
        title: 'APU Bleed',
        state: 'ON',
    },
    {
        title: 'Wait 1 Minute',
        state: 'COMPLETED',
    },
    {
        title: 'Air Conditioning Packs',
        state: 'ON',
    },
];

const addA320NEOTags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.A32NX, ChecklistTags.OFFICIAL],
});

export const A32NXChecklistItemsData = createTransformedMapping(addA320NEOTags)([
    {
        uid: ChecklistItems.A32NX_ORIGINATING_COCKPIT_PREP,
        title: 'Cockpit Preparation',
        state: 'COMPLETE',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
        subItems: createTransformedList()([
            {
                title: 'Emergency Equipment',
                state: 'CHECKED',
            },
            {
                title: 'Rain Repellent',
                state: 'CHECKED',
            },
            {
                title: 'Circuit Breakers Panel',
                state: 'CHECKED',
            },
            {
                title: 'Gear Pins and Covers',
                state: 'ONBOARD, STOWED',
            },
            {
                title: 'Gravity Gear Extension',
                state: 'CHECKED',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'SET',
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_LOWER_PEDESTAL,
        title: 'Lower Pedestal',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Speed Brake',
                state: 'RETRACTED, DISARMED',
            },
            {
                title: 'Flaps',
                state: 'RETRACTED',
            },
            {
                title: 'Weather Radar',
                state: 'OFF',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_THRUST_LEVER_QUADRANT,
        title: 'Thrust Lever Quadrant',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Engine Master 1 & 2',
                state: 'OFF',
            },
            {
                title: 'Engine Mode',
                state: 'NORM',
            },
            {
                title: 'Thrust Levers',
                state: 'IDLE',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_LANDING_GEAR,
        title: 'Landing Gear',
        state: 'DOWN',
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_ADIRS,
        title: 'Air Data Inertial Reference System (ADIRS)',
        state: 'NAV',
        moreInfoShort: (
            <>
                Inertial Reference Systems should be turned to NAV in their numerical order (so, left, right then
                middle by their position).
            </>
        ),
        subItems: createTransformedList()([
            {
                title: 'No White Lights',
                state: 'CHECKED',
            },
            {
                title: 'ADIRS 1',
                state: 'NAV',
            },
            {
                title: 'ADIRS 2',
                state: 'NAV',
            },
            {
                title: 'ADIRS 3',
                state: 'NAV',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_WIPER_SELECTORS,
        title: 'Wiper Selectors',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_AIR_CONDITION_PANEL,
        title: 'Air Condition Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'APU Bleed',
                state: 'AS REQUIRED',
            },
            {
                title: 'PACK Flow',
                state: 'NORM',
                moreInfo: ( // FIXME: not working yet, need to implement sub item help.
                    <>
                        More information on various modes can be found
                        {' '}
                        {/* eslint-disable-next-line max-len */}
                        <ExternalLink href="https://docs.flybywiresim.com/pilots-corner/a32nx-briefing/flight-deck/ovhd/ac/#pack-flow-selector">
                            here
                        </ExternalLink>
                        .
                    </>
                ),
            },
            {
                title: 'Air Conditioning Temperature',
                state: 'AS REQUIRED',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_FUEL_PANEL,
        title: 'Fuel Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Fuel Pumps',
                state: 'ON',
            },
            {
                title: 'No White Lights',
                state: 'CHECKED',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_FIRE_PANEL_TEST,
        title: 'Fire Panels Tests',
        state: 'COMPLETED',
        subItems: createTransformedList()([
            {
                title: 'Fire Control Panel',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'APU Fire Test',
                        state: 'COMPLETED',
                    },
                    {
                        title: 'Engine 1 Fire Test',
                        state: 'COMPLETED',
                    },
                    {
                        title: 'Engine 2 Fire Test',
                        state: 'COMPLETED',
                    },
                ]),
            },
            {
                title: 'Cargo Smoke Panel',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Cargo Smoke Test',
                        state: 'COMPLETED',
                    },
                ]),
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_HYDRAULIC_PANEL,
        title: 'Hydraulic Panel',
        state: 'CHECKED',
        moreInfoShort: (
            <>
                Verify that there are no white lights on.
            </>
        ),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_ANTI_ICE_PANEL,
        title: 'Anti-Ice Control Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Engine Anti-Ice',
                state: 'OFF',
            },
            {
                title: 'Wing Anti-Ice',
                state: 'OFF',
            },
            {
                title: 'Probe/Window Heat',
                state: 'AUTO',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_EXTERIOR_LIGHTS,
        title: 'Exterior Lights Panel',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'NAV Light',
                state: 'ON',
            },
            {
                title: 'Strobe Lights',
                state: 'AUTO',
            },
            {
                title: 'Other Lights',
                state: 'OFF',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_SIGNS_PANEL,
        title: 'Signs Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Seat Belt Signs',
                state: 'ON',
            },
            {
                title: 'No Smoking Signs',
                state: 'ON',
            },
            {
                title: 'Emergency Exit Signs',
                state: 'ARMED',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_OXYGEN_PANEL,
        title: 'Oxygen Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Crew Supply',
                state: 'ON',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_EXT_POWER,
        title: 'External Power',
        state: 'AS DESIRED',
        moreInfoShort: (
            <>
                If external power is not available, it will be generated using the APU. If it is available, power may
                be turned ON now.
            </>
        ),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_BATTERY,
        title: 'Battery 1 & 2',
        state: 'ON',
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_APU,
        title: 'APU',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                In order to get early air conditioning, APU must be started to provide for bleed air. If external
                power is unavailable, then APU will also be required to power the aircraft systems.
            </>
        ),
        subItems: createTransformedList()(apuStartProcedure),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_CABIN_PRESSURE_PANEL,
        title: 'Cabin Pressure Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Landing Elevation',
                state: 'AUTO',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_VENTILATION_PANEL,
        title: 'Ventilation Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'No White Lights',
                state: 'CHECKED',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_MAINTENANCE_PANEL,
        title: 'Maintenance Panel',
        state: 'CHECKED',
        moreInfoShort: (
            <>
                Check there are no white lights on. Panel information can be found
                {' '}
                {/* eslint-disable-next-line max-len */}
                <ExternalLink href="https://docs.flybywiresim.com/pilots-corner/a32nx-briefing/flight-deck/ovhd-aft/maintenance/">
                    here
                </ExternalLink>
                .
            </>
        ),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_EFIS_CONTROL_UNITS,
        title: 'EFIS Control Units',
        state: 'SET, CHECKED',
        moreInfoShort: (
            <>
                {/* eslint-disable-next-line max-len */}
                <ExternalLink href="https://docs.flybywiresim.com/pilots-corner/a32nx-briefing/flight-deck/glareshield/efis_control/">
                    EFIS Control Units
                </ExternalLink>
                {' '}
                are available on both side of the autopilot bar on the glare shield.
            </>
        ),
        subItems: createTransformedList()([
            {
                title: 'QNH Unit',
                state: 'SET',
            },
            {
                title: 'FD',
                state: 'ON',
            },
            {
                title: 'LS',
                state: 'OFF',
            },
            {
                title: 'CSTR / WPT / VOR D / NDB / ARPT',
                state: 'AS DESIRED',
            },
            {
                title: 'MFD Format / Range',
                state: 'ARC / 10',
            },
            {
                title: 'VOR/ADF Switches',
                state: 'AS DESIRED',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_CENTER_INSTRUMENT_PANEL,
        title: 'Center Instrument Panel',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Anti-Skid and Nose-Wheel Steering',
                state: 'ON',
            },
            {
                title: 'Clocks',
                state: 'CHECKED, SET',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_SWITCHING_PANEL,
        title: 'Switching Panel',
        state: 'ALL NORM',
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_EICAS,
        title: 'EICAS',
        state: 'CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Oxygen Pressure',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Doors Page',
                        state: 'OPEN',
                    },
                    {
                        title: 'Levels',
                        state: 'CHECKED',
                    },
                ]),
            },
            { // FIXME: what can be checked at this point? INOP?
                title: 'Hydraulic Fluid Quantity',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Hydraulic Page (HYD)',
                        state: 'OPEN',
                    },
                    {
                        title: 'Levels',
                        state: 'CHECKED',
                    },
                ]),
            },
            {
                title: 'Oil Quantity',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Engine Page (ENG)',
                        state: 'OPEN',
                    },
                    {
                        title: 'Levels',
                        state: 'CHECKED',
                    },
                ]),
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_RADIO_PANEL,
        title: 'Radio Panel',
        state: 'SET, CHECKED',
        subItems: createTransformedList()([
            {
                title: 'Radio Frequencies',
                state: 'SET, BOTH SIDES',
                subItems: createTransformedList()([
                    {
                        title: 'Active: ATIS Frequency',
                        state: 'SET',
                    },
                    {
                        title: 'Standby: Delivery / Ground Frequency',
                        state: 'SET',
                    },
                ]),
            },
            {
                title: 'Radio Selector',
                state: 'VHF 1, BOTH SIDES',
            },
            {
                title: 'ATC Code',
                state: 'SET',
            },
            {
                title: 'ATC Mode',
                state: 'AUTO',
            },
            {
                title: 'TCAS Mode',
                state: 'STANDBY',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_FUEL,
        title: 'Fuel Quantity',
        state: 'CHECKED / REFUEL',
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_MCDU,
        title: 'MCDU Initialization',
        state: 'COMPLETE',
        subItems: mcduInitializationSubItems(),
    },
    {
        uid: ChecklistItems.A32NX_ORIGINATING_MCDU_SIMBRIEF,
        title: 'MCDU Initialization',
        state: 'COMPLETE',
        subItems: mcduInitializationSubItems({ withSimbrief: true }),
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_ENGINE_START_APU,
        title: 'APU',
        state: 'STARTED / BLEED ON',
        subItems: createTransformedList()(apuStartProcedure),
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_ENGINE_START_EXT_POWER,
        title: 'External Power',
        state: 'OFF / DISCONNECTED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_ENGINE_START_TCAS,
        title: 'TCAS: ATC',
        state: 'AUTO',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_ENGINE_START_DOORS,
        title: 'Doors / Slides',
        state: 'CLOSED / ARMED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_ENGINE_START_BEACON,
        title: 'Beacon',
        state: 'ON',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_ENGINE_START_THRUST_LEVERS,
        title: 'Thrust Levers',
        state: 'IDLE',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_ENGINE_START_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_ENGINE_START_BRAKE_PRESSURE,
        title: 'Brake Pressure',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.A32NX_ENGINE_START_CHRONO_START,
        title: 'Chrono',
        state: 'STARTED',
        moreInfoShort: 'Chronometer is available on the glare shield and will be displayed on the MFD.',
    },
    {
        uid: ChecklistItems.A32NX_ENGINE_START_ENGINE_MODE,
        title: 'Engine Mode Switch',
        state: 'IGNITION / START',
    },
    {
        uid: ChecklistItems.A32NX_ENGINE_START_ENG2_START,
        title: 'Engine 2',
        state: 'STARTED',
        subItems: createTransformedList()([
            {
                title: 'Engine 2 Switch',
                state: 'ON',
            },
            engineStartVitals,
        ]),
    },
    {
        uid: ChecklistItems.A32NX_ENGINE_START_ENG1_START,
        title: 'Engine 1',
        state: 'STARTED',
        subItems: createTransformedList()([
            {
                title: 'Engine 1 Switch',
                state: 'ON',
            },
            engineStartVitals,
        ]),
    },
    {
        uid: ChecklistItems.A32NX_AFTER_ENGINE_START_ENGINE_MODE,
        title: 'Engine Mode Switch',
        state: 'NORM',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_ENGINE_START_FLAPS,
        title: 'Flaps',
        state: 'SET FOR TAKEOFF',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_ENGINE_START_GROUND_SPOILERS,
        title: 'Ground Spoilers',
        state: 'ARMED',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_ENGINE_START_APU_BLEED,
        title: 'APU Bleed',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_ENGINE_START_APU,
        title: 'APU',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_ENGINE_START_ANTI_ICE,
        title: 'Anti-Ice',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_ENGINE_START_PITCH_TRIM,
        title: 'Pitch Trim',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_ENGINE_START_RUDDER_TRIM,
        title: 'Rudder Trim',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_ENGINE_START_FLIGHT_CONTROLS,
        title: 'Flight Controls',
        state: 'FREE AND CORRECT',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_TAXI_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'Nose Lights',
                state: 'TAXI',
            },
            {
                title: 'Runway Turn-Off Lights',
                state: 'AS REQUIRED',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_TAXI_RADAR,
        title: 'Radar',
        state: 'AS DESIRED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_TAXI_PREDICTIVE_WINDSHEAR_SYS,
        title: 'Windshear Predictive System',
        state: 'ON',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_TAXI_TCAS,
        title: 'TCAS',
        state: 'TA/RA',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_TAXI_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_TAXI_BRAKE_PRESSURE,
        title: 'Brake Pressure',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_TAXI_TERRAIN_ON_ND,
        title: 'Terrain on ND',
        state: 'AS DESIRED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_TAKEOFF_AUTOBRAKE,
        title: 'Auto-Brake',
        state: 'MAX',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_TAKEOFF_CABIN_CREW,
        title: 'Cabin Crew',
        state: 'NOTIFIED',
        moreInfoShort: 'Cabin crew can be notified by pressing the ALL call on the left side of the overhead.',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_TAKEOFF_TAKEOFF_CONFIG_TEST,
        title: 'Take-Off Config Test',
        state: 'COMPLETED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_TAKEOFF_BRAKE_TEMP,
        title: 'Brake Temperature',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_TAKEOFF_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'Landing Lights',
                state: 'ON',
            },
            {
                title: 'Nose Lights',
                state: 'T.O.',
            },
            {
                title: 'Strobe',
                state: 'ON',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_CLIMB_LANDING_GEAR,
        title: 'Landing Gear',
        state: 'ORDER / UP',
    },
    {
        uid: ChecklistItems.A32NX_CLIMB_AUTOPILOT,
        title: 'Autopilot',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.A32NX_CLIMB_THRUST_LEVERS,
        title: 'Thrust Levers',
        state: 'CLIMB',
        moreInfoShort: (
            'Thrust levers should be moved to the climb detent at the Thrust Reduction Altitude, when'
            + ' LVR CLB flashes on PFD'
        ),
    },
    {
        uid: ChecklistItems.A32NX_CLIMB_FLAPS,
        title: 'Flaps',
        state: 'ORDER / RETRACT',
        moreInfoShort: (
            'Flaps may be retracted once S speed is reached, see PFD indicator on speed tape.'
        ),
    },
    {
        uid: ChecklistItems.A32NX_CLIMB_GROUND_SPOILERS,
        title: 'Ground Spoilers',
        state: 'DISARM',
    },
    {
        uid: ChecklistItems.A32NX_CLIMB_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'Landing Lights',
                state: 'OFF / RETRACTED ABOVE 10,000 FT',
            },
            {
                title: 'Nose Lights',
                state: 'OFF ABOVE 10,000 FT',
            },
            {
                title: 'Strobe',
                state: 'OFF ABOVE 10,000 FT',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_CLIMB_SEATBELT_SIGNS,
        title: 'Seatbelt Signs',
        state: 'AS DESIRED',
    },
    {
        uid: ChecklistItems.A32NX_CLIMB_ALTIMETER,
        title: 'Altimeter',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.A32NX_CLIMB_RADAR,
        title: 'Radar',
        state: 'AS DESIRED',
    },
    {
        uid: ChecklistItems.A32NX_CLIMB_ANTI_ICE,
        title: 'Anti-Ice',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.A32NX_CLIMB_EFIS,
        title: 'EFIS Options',
        state: 'AS DESIRED',
        moreInfoShort: <>EFIS Options may be adjusted (CSTR/ARPT)</>,
    },
    {
        uid: ChecklistItems.A32NX_CLIMB_ECAM_MEMO,
        title: 'ECAM MEMO',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.A32NX_CLIMB_NAVAIDS,
        title: 'Navigation Aids (MCDU)',
        state: 'CLEARED',
    },
    {
        uid: ChecklistItems.A32NX_CRUISE_ECAM_MEMO,
        title: 'ECAM MEMO / SD Pages',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.A32NX_CRUISE_FLIGHT_PROGRESS,
        title: 'Flight Progress',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.A32NX_CRUISE_FUEL,
        title: 'Fuel',
        state: 'MONITOR',
    },
    {
        uid: ChecklistItems.A32NX_CRUISE_NAVIGATION_ACCURACY,
        title: 'Navigation Accuracy',
        state: 'MONITOR',
    },
    {
        uid: ChecklistItems.A32NX_CRUISE_RADAR,
        title: 'Radar',
        state: 'AS DESIRED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_DESCENT_WEATHER,
        title: 'Weather and Landing Information',
        state: 'OBTAINED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_DESCENT_NAV_CHARTS,
        title: 'Navigation Charts',
        state: 'PREPARED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_DESCENT_EFB_LANDING_PERF,
        title: 'EFB: Landing Performance',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_DESCENT_MCDU,
        title: 'MCDU',
        state: 'SET / CHECKED',
    },
    { // FIXME: What is GPWS?
        uid: ChecklistItems.A32NX_BEFORE_DESCENT_GPWS_LDG_FLAPS_3,
        title: 'GPWS Landing Flap 3',
        state: 'AS REQUIRED',
        moreInfoShort: 'If the intent is to land with flaps 3, GPWS should be configured.',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_DESCENT_LANDING_ELEV,
        title: 'Landing Elevation',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_DESCENT_AUTO_BRAKE,
        title: 'Auto-Brake',
        state: 'AS DESIRED',
        moreInfoShort: 'MED on short or contaminated runway, LO otherwise.',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_DESCENT_APPROACH_BRIEFING,
        title: 'Approach Briefing',
        state: 'COMPLETED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_DESCENT_TERR_ON_ND,
        title: 'Terrain on ND',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_DESCENT_RADAR,
        title: 'Radar',
        state: 'AS DESIRED',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_DESCENT_ANTI_ICE,
        title: 'Anti-Ice',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.A32NX_DESCENT_MCDU_PERF,
        title: 'MCDU Descent Performance',
        state: 'COMPLETED',
    },
    {
        uid: ChecklistItems.A32NX_DESCENT_ALTIMETER,
        title: 'Altimeter',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.A32NX_DESCENT_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'Landing Lights',
                state: 'ON BELOW 10,000 FT',
            },
            {
                title: 'Nose Lights',
                state: 'T.O. BELOW 10,000 FT',
            },
            {
                title: 'Strobe Lights',
                state: 'ON BELOW 10,000 FT',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_DESCENT_EFIS,
        title: 'EFIS Options',
        state: 'AS REQUIRED',
        moreInfoShort: 'Constraints (CSTR) should be enabled for this phase.',
    },
    {
        uid: ChecklistItems.A32NX_DESCENT_NAVAIDS,
        title: 'Navigation Aids (NAVAIDS)',
        state: 'SELECTED',
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_FPLN_SEQUENCING,
        title: 'Flight Plan Sequencing',
        state: 'ADJUST',
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_APPROACH_PHASE,
        title: 'Approach Phase',
        state: 'CHECKED / ACTIVATED',
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_MANAGED_SPEED,
        title: 'Managed Speed',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_SPEED_BRAKES,
        title: 'Speed Brakes Lever',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_RADAR,
        title: 'Radar',
        state: 'AS DESIRED',
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_FLAPS,
        title: 'Flaps',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_LANDING_GEAR,
        title: 'Landing Gear',
        state: 'DOWN, GREEN',
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_GROUND_SPOILERS,
        title: 'Ground Spoilers',
        state: 'ARMED',
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'Landing Lights',
                state: 'ON',
            },
            {
                title: 'Nose Lights',
                state: 'T.O.',
            },
            {
                title: 'Strobe Lights',
                state: 'ON',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_AUTO_THROTTLE,
        title: 'Auto Throttles',
        state: 'SPEED OR OFF',
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_ANTI_ICE,
        title: 'Anti-Ice',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_SLIDING_TABLE,
        title: 'Sliding Table',
        state: 'STOWED',
        tag: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_CABIN_CREW,
        title: 'Cabin Crew',
        state: 'NOTIFIED',
    },
    {
        uid: ChecklistItems.A32NX_APPROACH_LANDING_MEMO,
        title: 'EICAS Landing MEMO',
        state: 'NO BLUE',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_LANDING_FLAPS,
        title: 'Flaps',
        state: 'FULL / 3',
    },
    {
        uid: ChecklistItems.A32NX_BEFORE_LANDING_LANDING_GEAR,
        title: 'Landing Gear',
        state: 'DOWN, ALL GREEN',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_LANDING_GROUND_SPOILERS,
        title: 'Ground Spoilers',
        state: 'DISARMED',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_LANDING_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        subItems: createTransformedList()([
            {
                title: 'Landing Lights',
                state: 'RETRACTED',
            },
        ]),
    },
    {
        uid: ChecklistItems.A32NX_AFTER_LANDING_RADAR,
        title: 'Radar',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_LANDING_PREDICTIVE_WINDSHEAR_SYSTEM,
        title: 'Windshear Predictive System',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_LANDING_ENG_MODE,
        title: 'Engine Mode Selector',
        state: 'NORM',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_LANDING_TCAS,
        title: 'TCAS',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_LANDING_ATC,
        title: 'ATC',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.A32NX_AFTER_LANDING_APU,
        title: 'APU',
        state: 'STARTED',
        subItems: apuStartProcedure,
    },
    {
        uid: ChecklistItems.A32NX_PARKING_ANTI_ICE,
        title: 'Anti-Ice',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_PARKING_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'ON',
    },
    {
        uid: ChecklistItems.A32NX_PARKING_ENGINE_MASTERS,
        title: 'Engine Masters',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_PARKING_SEAT_BELT_SIGNS,
        title: 'Seat Belt Signs',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_PARKING_FUEL_PUMPS,
        title: 'Fuel Pumps',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_PARKING_ATC,
        title: 'ATC',
        state: 'STANDBY',
    },
    {
        uid: ChecklistItems.A32NX_PARKING_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_PARKING_EXT_POWER,
        title: 'External Power',
        state: 'CHECK AVAIL, ON',
    },
    {
        uid: ChecklistItems.A32NX_SECURING_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'ON',
    },
    {
        uid: ChecklistItems.A32NX_SECURING_ADIRS,
        title: 'All ADIRS',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_SECURING_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_SECURING_APU_BLEED,
        title: 'APU Bleed',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_SECURING_APU,
        title: 'APU',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_SECURING_EMERGENCY_LIGHTS,
        title: 'Emergency Exit Lights',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.A32NX_SECURING_SIGNS,
        title: 'Signs Panel',
        state: 'ALL OFF',
    },
    {
        uid: ChecklistItems.A32NX_SECURING_BATTERIES,
        title: 'Battery 1 & 2',
        state: 'OFF',
    },
]);
