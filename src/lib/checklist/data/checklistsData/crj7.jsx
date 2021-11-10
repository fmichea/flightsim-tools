import React from 'react';

import { ExternalLink } from 'components/lib/ExternalLink';
import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistFilters } from 'lib/checklist/data/filters';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistLists } from 'lib/checklist/data/lists';

export const CRJ7ChecklistData = {
    uid: Checklists.AEROSOFT_CRJ7,
    title: 'Aerosoft CRJ 550/700',
    description: (
        <p>
            The Aerosoft CRJ 550/700 is a payware aircraft for Microsoft Flight Simulator which can be bought
            {' '}
            {/* eslint-disable-next-line max-len */}
            <ExternalLink href="https://www.aerosoft.com/en/microsoft-flight-simulator/msfs-aircraft/3303/aerosoft-aircraft-crj-550/700">
                on Aerosoft&apos;s official website
            </ExternalLink>
            . This checklist is a summary inspired by the official checklist and the
            {' '}
            <strong>must do</strong>
            {' '}
            tutorial released with the aircraft.
        </p>
    ),
    selectableFilters: [
        ChecklistFilters.INCLUDE_EXTENSIONS,
    ],
    defaultFilters: [
        ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL,
    ],
    lists: [
        {
            listName: ChecklistLists.PRE_FLIGHT,
            items: [
                ChecklistItems.CRJ7EXT_PRE_FLIGHT_AIRCRAFT_EFB_SETUP,
            ],
            nextListNames: [
                ChecklistLists.SAFETY,
            ],
        },
        {
            listName: ChecklistLists.SAFETY,
            items: [
                ChecklistItems.CRJ7_SAFETY_CHECK_CIRCUIT_BREAKERS,
                ChecklistItems.CRJ7_SAFETY_CHECK_NOSEWHEEL,
                ChecklistItems.CRJ7_SAFETY_CHECK_HYDRAULIC_PUMPS_1,
                ChecklistItems.CRJ7_SAFETY_CHECK_LANDING_GEAR,
                ChecklistItems.CRJ7_SAFETY_CHECK_FLIGHT_SPOILER_LEVER,
                ChecklistItems.CRJ7_SAFETY_CHECK_SLATS_FLAPS_LEVER,
                ChecklistItems.CRJ7_SAFETY_CHECK_RADAR,
                ChecklistItems.CRJ7_SAFETY_CHECK_ADG_MANUAL_RELEASE,
                ChecklistItems.CRJ7_SAFETY_CHECK_EMERGENCY_FLAP_SWITCH,
                ChecklistItems.CRJ7_SAFETY_CHECK_BATTERY_MASTER_SWITCH,
                ChecklistItems.CRJ7_SAFETY_CHECK_APU,
                ChecklistItems.CRJ7_SAFETY_CHECK_AC_ELECTRICS,
                ChecklistItems.CRJ7_SAFETY_CHECK_IRS,
                ChecklistItems.CRJ7_SAFETY_CHECK_EMERGENCY_EQUIPMENT,
                ChecklistItems.CRJ7_SAFETY_CHECK_GEAR_SAFETY_PINS,
                ChecklistItems.CRJ7_SAFETY_CHECK_AIRPLANE_DOCUMENTS,
                ChecklistItems.CRJ7_SAFETY_CHECK_HYDRAULIC_PUMPS_2,
                ChecklistItems.CRJ7_SAFETY_CHECK_FMS_INITIALIZATION,
            ],
            nextListNames: [
                ChecklistLists.CABIN_INSPECTION,
            ],
        },
        {
            listName: ChecklistLists.CABIN_INSPECTION,
            items: [
                ChecklistItems.CRJ7_CABIN_INSPECTION_CABIN_INSPECTION,
                ChecklistItems.CRJ7_CABIN_INSPECTION_WALKAROUND_INSPECTION,
            ],
            nextListNames: [
                ChecklistLists.ORIGINATING,
            ],
        },
        {
            listName: ChecklistLists.ORIGINATING,
            items: [
                ChecklistItems.CRJ7_ORIGINATING_CHECK_CREW_OXYGEN,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_AUDIO_WARNING_PANEL,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_ELECTRICAL_POWER_PANEL,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_FIRE_DETECTION,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_EXTERNAL_LIGHTS_PANEL,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_FUEL_PANEL,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_BLEED_AIR_PANEL,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_APU_PANEL,
                ChecklistItems.CRJ7EXT_ORIGINATING_CHECK_FMS_INIT_REMINDER,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_START_PANEL,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_HYDRAULIC_PANEL,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_ELT_SWITCH,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_CABIN_PRESSURE_PANEL,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_AIR_CONDITIONING_PANEL,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_ANTIICE_PANEL,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_WINDSHIELD_HEAT,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_EMERGENCY_LIGHTS,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_STANDBY_COMPASS,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_STALL_TEST,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_NOSEWHEEL,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_CLOCKS,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_EFIS_CONTROL_PANELS,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_INSTRUMENT_PANELS,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_EICAS_AND_STDBY,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_UPPER_PEDESTAL,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_THRUST_LEVER_QUADRANT,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_AVIONICS,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_TRIMS,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_YAW_DAMPER,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_SOURCE_SELECT_PANEL,
                ChecklistItems.CRJ7_ORIGINATING_CHECK_LOWER_PEDESTAL,
            ],
            nextListNames: [
                ChecklistLists.BEFORE_ENGINE_START,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_ENGINE_START,
            items: [
                ChecklistItems.CRJ7_BEFORE_START_CHECK_PASS_SIGNS,
                ChecklistItems.CRJ7_BEFORE_START_CHECK_LANDING_ELEVATION,
                ChecklistItems.CRJ7_BEFORE_START_CHECK_BOOST_PUMPS,
                ChecklistItems.CRJ7_BEFORE_START_CHECK_ALTIMETERS,
                ChecklistItems.CRJ7_BEFORE_START_CHECK_FMS,
                ChecklistItems.CRJ7_BEFORE_START_CHECK_IRS,
                ChecklistItems.CRJ7_BEFORE_START_CHECK_RADIOS,
                ChecklistItems.CRJ7_BEFORE_START_CHECK_TAKEOFF_DATA,
                ChecklistItems.CRJ7_BEFORE_START_CHECK_TAKEOFF_BRIEFING,
                ChecklistItems.CRJ7EXT_BEFORE_START_CHECK_DOORS_CHOCKS,
            ],
            nextListNames: [
                ChecklistLists.ENGINE_START,
            ],
        },
        {
            listName: ChecklistLists.ENGINE_START,
            items: [
                ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_PERSONAL_ELECTRONIC_DEVICES,
                ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_APU,
                ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_ELECTRICS,
                ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_DOORS,
                ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_BEACON,
                ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_FUEL_PUMPS,
                ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_HYDRAULIC_PUMPS,
                ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_PARKING_BRAKE,
                ChecklistItems.CRJ7_CLEARED_TO_START_ENGINE_START,
            ],
            nextListNames: [
                ChecklistLists.AFTER_ENGINE_START,
            ],
        },
        {
            listName: ChecklistLists.AFTER_ENGINE_START,
            items: [
                ChecklistItems.CRJ7_AFTER_START_CHECK_GENERATORS,
                ChecklistItems.CRJ7_AFTER_START_CHECK_BLEED_VALVES,
                ChecklistItems.CRJ7_AFTER_START_CHECK_PACKS,
                ChecklistItems.CRJ7_AFTER_START_CHECK_SYNOPTIC_PAGES,
                ChecklistItems.CRJ7_AFTER_START_CHECK_APU,
                ChecklistItems.CRJ7_AFTER_START_CHECK_ANTIICE_PROBES,
                ChecklistItems.CRJ7_AFTER_START_CHECK_ANTIICE,
                ChecklistItems.CRJ7_AFTER_START_CHECK_NOSEWHEEL,
            ],
            nextListNames: [
                ChecklistLists.BEFORE_TAXI,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_TAXI,
            items: [
                ChecklistItems.CRJ7_TAXI_CHECK_SLATS_FLAPS,
                ChecklistItems.CRJ7_TAXI_CHECK_FLIGHT_CONTROLS,
                ChecklistItems.CRJ7_TAXI_CHECK_TRIMS,
                ChecklistItems.CRJ7_TAXI_CHECK_THRUST_REVERSERS,
                ChecklistItems.CRJ7_TAXI_CHECK_EXTERNAL_LIGHTS,
                ChecklistItems.CRJ7_TAXI_CHECK_FLIGHT_INSTRUMENTS,
                ChecklistItems.CRJ7_TAXI_CHECK_BRAKE_TEMPS,
            ],
            nextListNames: [
                ChecklistLists.BEFORE_TAKEOFF,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_TAKEOFF,
            items: [
                ChecklistItems.CRJ7_BEFORE_TAKEOFF_CHECK_EXTERNAL_LIGHTS,
                ChecklistItems.CRJ7_BEFORE_TAKEOFF_CHECK_FUEL_XFLOW,
                ChecklistItems.CRJ7_BEFORE_TAKEOFF_CHECK_FLIGHT_ATTENDANT,
                ChecklistItems.CRJ7_BEFORE_TAKEOFF_CHECK_TRANSPONDER,
                ChecklistItems.CRJ7_BEFORE_TAKEOFF_CHECK_RADAR,
                ChecklistItems.CRJ7_BEFORE_TAKEOFF_CHECK_CAS,
            ],
            nextListNames: [
                ChecklistLists.CLIMB,
            ],
        },
        {
            listName: ChecklistLists.CLIMB,
            items: [
                ChecklistItems.CRJ7_CLIMB_CHECK_FUEL_XFLOW,
                ChecklistItems.CRJ7_CLIMB_CHECK_BLEEDS_AND_APU,
                ChecklistItems.CRJ7_CLIMB_CHECK_THRUST_REVERSERS,
                ChecklistItems.CRJ7_CLIMB_CHECK_CAS,
            ],
            nextListNames: [
                ChecklistLists.DESCENT,
            ],
        },
        {
            listName: ChecklistLists.DESCENT,
            items: [
                ChecklistItems.CRJ7_DESCENT_CHECK_LANDING_ELEVATION,
                ChecklistItems.CRJ7_DESCENT_CHECK_FUEL,
                ChecklistItems.CRJ7_DESCENT_CHECK_TCAS,
                ChecklistItems.CRJ7_DESCENT_CHECK_RADAR,
                ChecklistItems.CRJ7_DESCENT_CHECK_CAS,
                ChecklistItems.CRJ7_DESCENT_CHECK_LANDING_DATA,
                ChecklistItems.CRJ7_DESCENT_CHECK_APPROACH_BRIEFING,
            ],
            nextListNames: [
                ChecklistLists.BEFORE_LANDING,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_LANDING,
            items: [
                ChecklistItems.CRJ7_BEFORE_LANDING_CHECK_FLIGHT_ATTENDANT,
                ChecklistItems.CRJ7_BEFORE_LANDING_CHECK_PASSENGER_SIGNS,
                ChecklistItems.CRJ7_BEFORE_LANDING_CHECK_THRUST_REVERSERS,
                ChecklistItems.CRJ7_BEFORE_LANDING_CHECK_LANDING_GEAR,
                ChecklistItems.CRJ7_BEFORE_LANDING_CHECK_FLAPS,
            ],
            nextListNames: [
                ChecklistLists.AFTER_LANDING,
            ],
        },
        {
            listName: ChecklistLists.AFTER_LANDING,
            items: [
                ChecklistItems.CRJ7_AFTER_LANDING_CHECK_APU,
                ChecklistItems.CRJ7_AFTER_LANDING_CHECK_TRANSPONDER_RADAR,
                ChecklistItems.CRJ7_AFTER_LANDING_CHECK_FLAPS,
                ChecklistItems.CRJ7_AFTER_LANDING_CHECK_EXTERNAL_LIGHTS,
                ChecklistItems.CRJ7_AFTER_LANDING_CHECK_PROBES,
            ],
            nextListNames: [
                ChecklistLists.SHUTDOWN,
            ],
        },
        {
            listName: ChecklistLists.SHUTDOWN,
            items: [
                ChecklistItems.CRJ7_SHUTDOWN_CHECK_PARKING_BRAKE,
                ChecklistItems.CRJ7_SHUTDOWN_CHECK_SEAT_BELTS,
                ChecklistItems.CRJ7_SHUTDOWN_CHECK_THRUST_LEVERS,
                ChecklistItems.CRJ7_SHUTDOWN_CHECK_ANTIICE,
                ChecklistItems.CRJ7_SHUTDOWN_CHECK_FUEL_PUMPS,
                ChecklistItems.CRJ7_SHUTDOWN_CHECK_BEACON,
                ChecklistItems.CRJ7_SHUTDOWN_CHECK_NOSEWHEEL,
            ],
            nextListNames: [
                ChecklistLists.TERMINATING,
            ],
        },
        {
            listName: ChecklistLists.TERMINATING,
            items: [
                ChecklistItems.CRJ7_TERMINATING_CHECK_CHOCKS_AND_BRAKES,
                ChecklistItems.CRJ7_TERMINATING_CHECK_IRS,
                ChecklistItems.CRJ7_TERMINATING_CHECK_EMERGENCY_LIGHTS,
                ChecklistItems.CRJ7_TERMINATING_CHECK_ANTIICE,
                ChecklistItems.CRJ7_TERMINATING_CHECK_HYDRAULIC_PUMPS,
                ChecklistItems.CRJ7_TERMINATING_CHECK_EXTERNAL_LIGHTS,
                ChecklistItems.CRJ7_TERMINATING_CHECK_APU,
                ChecklistItems.CRJ7_TERMINATING_CHECK_BATTERY_MASTER,
                ChecklistItems.CRJ7_TERMINATING_CHECK_COCKPIT_LIGHTS,
            ],
        },
    ],
};
