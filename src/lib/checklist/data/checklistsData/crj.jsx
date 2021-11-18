import React from 'react';

import { ExternalLink } from 'components/lib/ExternalLink';
import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistFilters } from 'lib/checklist/data/filters';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistLists } from 'lib/checklist/data/lists';

export const CRJChecklistData = {
    uid: Checklists.AEROSOFT_CRJ,
    title: 'Aerosoft CRJ 550/700/900/1000',
    description: (
        <p>
            The Aerosoft CRJ 550/700/900/1000 is a payware aircraft for Microsoft Flight Simulator which can be bought
            {' '}
            <ExternalLink href="https://www.aerosoft.com/en/microsoft-flight-simulator/msfs-aircraft/">
                on Aerosoft&apos;s official website
            </ExternalLink>
            {' '}
            (available in various bundles). This checklist is a summary inspired by the official checklist and the
            {' '}
            <strong>must do</strong>
            {' '}
            tutorial released with the aircraft.
        </p>
    ),
    selectableFilters: [
        ChecklistFilters.EXCLUDE_UNOFFICIAL,
        ChecklistFilters.EXCLUDE_FFOTD,
        ChecklistFilters.EXCLUDE_EXTENSIONS,
        ChecklistFilters.EXCLUDE_NAV,
        ChecklistFilters.EXCLUDE_SIMSETUP,
        ChecklistFilters.EXCLUDE_VATSIM,
    ],
    defaultFilters: [],
    lists: [
        {
            listName: ChecklistLists.PRE_FLIGHT,
            items: [
                ChecklistItems.NAV_FLIGHT_PLANNING,
                ChecklistItems.VATSIM_FILE_FLIGHT_PLAN,
                ChecklistItems.SIMSETUP_FLIGHT_TRACKING_START,
                ChecklistItems.SIMSETUP_FLIGHT_RECORDING_START,
                ChecklistItems.CRJEXT_PRE_FLIGHT_AIRCRAFT_EFB_SETUP,
            ],
            nextListNames: [
                ChecklistLists.SAFETY,
            ],
        },
        {
            listName: ChecklistLists.SAFETY,
            items: [
                ChecklistItems.CRJ_SAFETY_CHECK_CIRCUIT_BREAKERS,
                ChecklistItems.CRJ_SAFETY_CHECK_NOSEWHEEL,
                ChecklistItems.CRJ_SAFETY_CHECK_HYDRAULIC_PUMPS_1,
                ChecklistItems.CRJ_SAFETY_CHECK_LANDING_GEAR,
                ChecklistItems.CRJ_SAFETY_CHECK_FLIGHT_SPOILER_LEVER,
                ChecklistItems.CRJ_SAFETY_CHECK_SLATS_FLAPS_LEVER,
                ChecklistItems.CRJ_SAFETY_CHECK_RADAR,
                ChecklistItems.CRJ_SAFETY_CHECK_ADG_MANUAL_RELEASE,
                ChecklistItems.CRJ_SAFETY_CHECK_EMERGENCY_FLAP_SWITCH,
                ChecklistItems.CRJ_SAFETY_CHECK_BATTERY_MASTER_SWITCH,
                ChecklistItems.CRJ_SAFETY_CHECK_APU,
                ChecklistItems.CRJ_SAFETY_CHECK_AC_ELECTRICS,
                ChecklistItems.CRJ_SAFETY_CHECK_IRS,
                ChecklistItems.CRJ_SAFETY_CHECK_EMERGENCY_EQUIPMENT,
                ChecklistItems.CRJ_SAFETY_CHECK_GEAR_SAFETY_PINS,
                ChecklistItems.CRJ_SAFETY_CHECK_AIRPLANE_DOCUMENTS,
                ChecklistItems.CRJ_SAFETY_CHECK_HYDRAULIC_PUMPS_2,
                ChecklistItems.CRJ_SAFETY_CHECK_FMS_INITIALIZATION,
            ],
            nextListNames: [
                ChecklistLists.CABIN_INSPECTION,
            ],
        },
        {
            listName: ChecklistLists.CABIN_INSPECTION,
            items: [
                ChecklistItems.CRJ_CABIN_INSPECTION_CABIN_INSPECTION,
                ChecklistItems.CRJ_CABIN_INSPECTION_WALKAROUND_INSPECTION,
            ],
            nextListNames: [
                ChecklistLists.ORIGINATING,
            ],
        },
        {
            listName: ChecklistLists.ORIGINATING,
            items: [
                ChecklistItems.CRJ_ORIGINATING_CHECK_CREW_OXYGEN,
                ChecklistItems.CRJ_ORIGINATING_CHECK_AUDIO_WARNING_PANEL,
                ChecklistItems.CRJ_ORIGINATING_CHECK_ELECTRICAL_POWER_PANEL,
                ChecklistItems.CRJ_ORIGINATING_CHECK_FIRE_DETECTION,
                ChecklistItems.CRJ_ORIGINATING_CHECK_EXTERNAL_LIGHTS_PANEL,
                ChecklistItems.CRJ_ORIGINATING_CHECK_FUEL_PANEL,
                ChecklistItems.CRJ_ORIGINATING_CHECK_BLEED_AIR_PANEL,
                ChecklistItems.CRJ_ORIGINATING_CHECK_APU_PANEL,
                ChecklistItems.CRJEXT_ORIGINATING_CHECK_FMS_INIT_REMINDER,
                ChecklistItems.CRJ_ORIGINATING_CHECK_START_PANEL,
                ChecklistItems.CRJ_ORIGINATING_CHECK_HYDRAULIC_PANEL,
                ChecklistItems.CRJ_ORIGINATING_CHECK_ELT_SWITCH,
                ChecklistItems.CRJ_ORIGINATING_CHECK_CABIN_PRESSURE_PANEL,
                ChecklistItems.CRJ_ORIGINATING_CHECK_AIR_CONDITIONING_PANEL,
                ChecklistItems.CRJ_ORIGINATING_CHECK_ANTIICE_PANEL,
                ChecklistItems.CRJ_ORIGINATING_CHECK_WINDSHIELD_HEAT,
                ChecklistItems.CRJ_ORIGINATING_CHECK_EMERGENCY_LIGHTS,
                ChecklistItems.CRJ_ORIGINATING_CHECK_STANDBY_COMPASS,
                ChecklistItems.CRJ_ORIGINATING_CHECK_STALL_TEST,
                ChecklistItems.CRJ_ORIGINATING_CHECK_NOSEWHEEL,
                ChecklistItems.CRJ_ORIGINATING_CHECK_CLOCKS,
                ChecklistItems.CRJ_ORIGINATING_CHECK_EFIS_CONTROL_PANELS,
                ChecklistItems.CRJ_ORIGINATING_CHECK_INSTRUMENT_PANELS,
                ChecklistItems.CRJ_ORIGINATING_CHECK_EICAS_AND_STDBY,
                ChecklistItems.CRJ_ORIGINATING_CHECK_UPPER_PEDESTAL,
                ChecklistItems.CRJ_ORIGINATING_CHECK_THRUST_LEVER_QUADRANT,
                ChecklistItems.CRJ_ORIGINATING_CHECK_AVIONICS,
                ChecklistItems.CRJ_ORIGINATING_CHECK_TRIMS,
                ChecklistItems.CRJ_ORIGINATING_CHECK_YAW_DAMPER,
                ChecklistItems.CRJ_ORIGINATING_CHECK_SOURCE_SELECT_PANEL,
                ChecklistItems.CRJ_ORIGINATING_CHECK_LOWER_PEDESTAL,
            ],
            nextListNames: [
                ChecklistLists.BEFORE_ENGINE_START,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_ENGINE_START,
            items: [
                ChecklistItems.CRJ_BEFORE_START_CHECK_PASS_SIGNS,
                ChecklistItems.CRJ_BEFORE_START_CHECK_LANDING_ELEVATION,
                ChecklistItems.CRJ_BEFORE_START_CHECK_BOOST_PUMPS,
                ChecklistItems.CRJ_BEFORE_START_CHECK_ALTIMETERS,
                ChecklistItems.VATSIM_REQUEST_INITIAL_CLEARANCE,
                ChecklistItems.CRJ_BEFORE_START_CHECK_FMS,
                ChecklistItems.CRJ_BEFORE_START_CHECK_IRS,
                ChecklistItems.CRJ_BEFORE_START_CHECK_RADIOS,
                ChecklistItems.CRJ_BEFORE_START_CHECK_TAKEOFF_DATA,
                ChecklistItems.CRJ_BEFORE_START_CHECK_TAKEOFF_BRIEFING,
                ChecklistItems.NAV_TAKEOFF_DEPARTURE_BRIEFING,
                ChecklistItems.CRJEXT_BEFORE_START_CHECK_DOORS_CHOCKS,
            ],
            nextListNames: [
                ChecklistLists.ENGINE_START,
            ],
        },
        {
            listName: ChecklistLists.ENGINE_START,
            items: [
                ChecklistItems.CRJ_CLEARED_TO_START_CHECK_PERSONAL_ELECTRONIC_DEVICES,
                ChecklistItems.CRJ_CLEARED_TO_START_CHECK_APU,
                ChecklistItems.CRJ_CLEARED_TO_START_CHECK_ELECTRICS,
                ChecklistItems.CRJ_CLEARED_TO_START_CHECK_DOORS,
                ChecklistItems.VATSIM_PUSHBACK_AND_START_CLEARANCE,
                ChecklistItems.CRJ_CLEARED_TO_START_CHECK_BEACON,
                ChecklistItems.CRJ_CLEARED_TO_START_CHECK_FUEL_PUMPS,
                ChecklistItems.CRJ_CLEARED_TO_START_CHECK_HYDRAULIC_PUMPS,
                ChecklistItems.CRJ_CLEARED_TO_START_CHECK_PARKING_BRAKE,
                ChecklistItems.CRJ_CLEARED_TO_START_ENGINE_START,
            ],
            nextListNames: [
                ChecklistLists.AFTER_ENGINE_START,
            ],
        },
        {
            listName: ChecklistLists.AFTER_ENGINE_START,
            items: [
                ChecklistItems.CRJ_AFTER_START_CHECK_GENERATORS,
                ChecklistItems.CRJ_AFTER_START_CHECK_BLEED_VALVES,
                ChecklistItems.CRJ_AFTER_START_CHECK_PACKS,
                ChecklistItems.CRJ_AFTER_START_CHECK_SYNOPTIC_PAGES,
                ChecklistItems.CRJ_AFTER_START_CHECK_APU,
                ChecklistItems.CRJ_AFTER_START_CHECK_ANTIICE_PROBES,
                ChecklistItems.CRJ_AFTER_START_CHECK_ANTIICE,
                ChecklistItems.CRJ_AFTER_START_CHECK_NOSEWHEEL,
            ],
            nextListNames: [
                ChecklistLists.TAXI,
            ],
        },
        {
            listName: ChecklistLists.TAXI,
            items: [
                ChecklistItems.CRJ_TAXI_CHECK_SLATS_FLAPS,
                ChecklistItems.CRJ_TAXI_CHECK_FLIGHT_CONTROLS,
                ChecklistItems.CRJ_TAXI_CHECK_TRIMS,
                ChecklistItems.VATSIM_TAXI_CLEARANCE,
                ChecklistItems.VATSIM_TAXI_MODE_CHARLIE,
                ChecklistItems.CRJ_TAXI_CHECK_THRUST_REVERSERS,
                ChecklistItems.CRJ_TAXI_CHECK_EXTERNAL_LIGHTS,
                ChecklistItems.CRJ_TAXI_CHECK_FLIGHT_INSTRUMENTS,
                ChecklistItems.CRJ_TAXI_CHECK_BRAKE_TEMPS,
            ],
            nextListNames: [
                ChecklistLists.BEFORE_TAKEOFF,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_TAKEOFF,
            items: [
                ChecklistItems.NAV_TAKEOFF_DEPARTURE_BRIEFING_SHORT,
                ChecklistItems.CRJ_BEFORE_TAKEOFF_CHECK_EXTERNAL_LIGHTS,
                ChecklistItems.CRJ_BEFORE_TAKEOFF_CHECK_FUEL_XFLOW,
                ChecklistItems.CRJ_BEFORE_TAKEOFF_CHECK_FLIGHT_ATTENDANT,
                ChecklistItems.CRJ_BEFORE_TAKEOFF_CHECK_TRANSPONDER,
                ChecklistItems.CRJ_BEFORE_TAKEOFF_CHECK_RADAR,
                ChecklistItems.VATSIM_TAKEOFF_CLEARANCE,
                ChecklistItems.CRJ_BEFORE_TAKEOFF_CHECK_CAS,
            ],
            nextListNames: [
                ChecklistLists.CLIMB,
            ],
        },
        {
            listName: ChecklistLists.CLIMB,
            items: [
                ChecklistItems.CRJ_CLIMB_CHECK_FUEL_XFLOW,
                ChecklistItems.CRJ_CLIMB_CHECK_BLEEDS_AND_APU,
                ChecklistItems.CRJ_CLIMB_CHECK_THRUST_REVERSERS,
                ChecklistItems.CRJ_CLIMB_CHECK_CAS,
            ],
            nextListNames: [
                ChecklistLists.CRUISE,
            ],
        },
        {
            listName: ChecklistLists.CRUISE,
            items: [
                ChecklistItems.CRJEXT_CRUISE_ANTIICE,
                ChecklistItems.NAV_DESCENT_PLANNING,
                ChecklistItems.VATSIM_DESCENT_CLEARANCE,
            ],
            nextListNames: [
                ChecklistLists.DESCENT,
            ],
        },
        {
            listName: ChecklistLists.DESCENT,
            items: [
                ChecklistItems.CRJ_DESCENT_CHECK_LANDING_ELEVATION,
                ChecklistItems.CRJ_DESCENT_CHECK_FUEL,
                ChecklistItems.CRJ_DESCENT_CHECK_TCAS,
                ChecklistItems.CRJ_DESCENT_CHECK_RADAR,
                ChecklistItems.CRJ_DESCENT_CHECK_CAS,
                ChecklistItems.VATSIM_APPROACH_CLEARANCE,
                ChecklistItems.CRJ_DESCENT_CHECK_LANDING_DATA,
                ChecklistItems.CRJ_DESCENT_CHECK_APPROACH_BRIEFING,
                ChecklistItems.NAV_APPROACH_BRIEFING,
            ],
            nextListNames: [
                ChecklistLists.BEFORE_LANDING,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_LANDING,
            items: [
                ChecklistItems.CRJ_BEFORE_LANDING_CHECK_FLIGHT_ATTENDANT,
                ChecklistItems.CRJ_BEFORE_LANDING_CHECK_PASSENGER_SIGNS,
                ChecklistItems.CRJ_BEFORE_LANDING_CHECK_THRUST_REVERSERS,
                ChecklistItems.CRJ_BEFORE_LANDING_CHECK_LANDING_GEAR,
                ChecklistItems.CRJ_BEFORE_LANDING_CHECK_FLAPS,
                ChecklistItems.VATSIM_LANDING_CLEARANCE,
            ],
            nextListNames: [
                ChecklistLists.AFTER_LANDING,
            ],
        },
        {
            listName: ChecklistLists.AFTER_LANDING,
            items: [
                ChecklistItems.VATSIM_LANDING_CLEAR_OF_RUNWAY,
                ChecklistItems.CRJ_AFTER_LANDING_CHECK_APU,
                ChecklistItems.CRJ_AFTER_LANDING_CHECK_TRANSPONDER_RADAR,
                ChecklistItems.CRJ_AFTER_LANDING_CHECK_FLAPS,
                ChecklistItems.CRJ_AFTER_LANDING_CHECK_EXTERNAL_LIGHTS,
                ChecklistItems.CRJ_AFTER_LANDING_CHECK_PROBES,
            ],
            nextListNames: [
                ChecklistLists.SHUTDOWN,
            ],
        },
        {
            listName: ChecklistLists.SHUTDOWN,
            items: [
                ChecklistItems.CRJ_SHUTDOWN_CHECK_PARKING_BRAKE,
                ChecklistItems.CRJ_SHUTDOWN_CHECK_SEAT_BELTS,
                ChecklistItems.CRJ_SHUTDOWN_CHECK_THRUST_LEVERS,
                ChecklistItems.CRJ_SHUTDOWN_CHECK_ANTIICE,
                ChecklistItems.CRJ_SHUTDOWN_CHECK_FUEL_PUMPS,
                ChecklistItems.CRJ_SHUTDOWN_CHECK_BEACON,
                ChecklistItems.CRJ_SHUTDOWN_CHECK_NOSEWHEEL,
                ChecklistItems.VATSIM_DISCONNECT_GOODBYE,
            ],
            nextListNames: [
                ChecklistLists.TERMINATING,
            ],
        },
        {
            listName: ChecklistLists.TERMINATING,
            items: [
                ChecklistItems.CRJ_TERMINATING_CHECK_CHOCKS_AND_BRAKES,
                ChecklistItems.CRJ_TERMINATING_CHECK_IRS,
                ChecklistItems.CRJ_TERMINATING_CHECK_EMERGENCY_LIGHTS,
                ChecklistItems.CRJ_TERMINATING_CHECK_ANTIICE,
                ChecklistItems.CRJ_TERMINATING_CHECK_HYDRAULIC_PUMPS,
                ChecklistItems.CRJ_TERMINATING_CHECK_EXTERNAL_LIGHTS,
                ChecklistItems.CRJ_TERMINATING_CHECK_APU,
                ChecklistItems.CRJ_TERMINATING_CHECK_BATTERY_MASTER,
                ChecklistItems.CRJ_TERMINATING_CHECK_COCKPIT_LIGHTS,
            ],
            nextListNames: [
                ChecklistLists.POST_FLIGHT,
            ],
        },
        {
            listName: ChecklistLists.POST_FLIGHT,
            items: [
                ChecklistItems.SIMSETUP_FLIGHT_RECORDING_END,
                ChecklistItems.SIMSETUP_FLIGHT_TRACKING_END,
                ChecklistItems.NAV_POST_FLIGHT_NOTES,
            ],
        },
    ],
};
