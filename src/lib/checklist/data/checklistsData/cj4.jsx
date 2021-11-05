import React from 'react';
import { ExternalLink } from 'components/lib/ExternalLink';
import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistFilters } from 'lib/checklist/data/filters';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { ChecklistItems } from 'lib/checklist/data/listItems';

export const CJ4ChecklistData = {
    uid: Checklists.WORKINGTITLE_CJ4,
    title: 'WorkingTitle CJ4',
    description: (
        <p>
            This is an interactive checklist for the
            {' '}
            <ExternalLink href="https://www.workingtitle.aero/packages/cj4/">WorkingTitle CJ4</ExternalLink>
            {' '}
            airplane in Microsoft Flight Simulator 2020. It is recommended to read the
            {' '}
            {/* eslint-disable-next-line max-len */}
            <ExternalLink href="https://docs.google.com/document/d/1qzxPMTSQRkvau8QOi7xUqNvjx9rbww_qHlso5AT5OnI/edit">Operator&apos;s Guide</ExternalLink>
            {' '}
            and at least understand the name of various cockpit elements in order to follow steps
            of this checklist.
        </p>
    ),
    selectableFilters: [
        ChecklistFilters.INCLUDE_EXTENSIONS,
        ChecklistFilters.INCLUDE_VATSIM_ITEMS,
        ChecklistFilters.INCLUDE_SIMSETUP_ITEMS,
    ],
    defaultFilters: [
        ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL,
    ],
    lists: [
        {
            listName: ChecklistLists.PRE_FLIGHT,
            items: [
                ChecklistItems.VATSIM_METAR_ATIS_PRE_FLIGHT,
                ChecklistItems.SIMSETUP_PLAN_FLIGHT,
                ChecklistItems.VATSIM_FILE_FLIGHT_PLAN,
                ChecklistItems.SIMSETUP_FLIGHT_TRACKING_START,
                ChecklistItems.SIMSETUP_FLIGHT_RECORDING_START,
            ],
            nextListNames: [
                ChecklistLists.BEFORE_ENGINE_START,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_ENGINE_START,
            items: [
                ChecklistItems.CJ4_BEFORE_START_BATTERY_SWITCH,
                ChecklistItems.CJ4_BEFORE_START_EMERGENCY_LIGHTS_SWITCH,
                ChecklistItems.CJ4_BEFORE_START_STANDBY_FLIGHT_DISPLAY_SWITCH,
                ChecklistItems.CJ4_BEFORE_START_AVIONICS_SWITCH,
                ChecklistItems.CJ4EXT_BEFORE_START_EXTERNAL_POWER,
                ChecklistItems.VATSIM_REQUEST_INITIAL_CLEARANCE,
                ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
                ChecklistItems.CJ4_BEFORE_START_WHEEL_CHOCKS,
                ChecklistItems.CJ4_BEFORE_START_CABIN_DOOR,
                ChecklistItems.CJ4_BEFORE_START_PASSENGER_BRIEFING,
                ChecklistItems.CJ4_BEFORE_START_PILOTS_SEATS_ADJUSTED,
                ChecklistItems.CJ4_BEFORE_START_EXTERIOR_LIGHTS,
                ChecklistItems.CJ4_BEFORE_START_EICAS,
                ChecklistItems.CJ4_BEFORE_START_FMS,
                ChecklistItems.CJ4_BEFORE_START_CLIMATE_CONTROL_SELECTOR,
            ],
            nextListNames: [
                ChecklistLists.ENGINE_START,
            ],
        },
        {
            listName: ChecklistLists.ENGINE_START,
            description: (
                <>
                    Engine Start procedure is described in detail in the
                    {' '}
                    {/* eslint-disable-next-line max-len */}
                    <ExternalLink href="https://docs.google.com/document/d/1qzxPMTSQRkvau8QOi7xUqNvjx9rbww_qHlso5AT5OnI/edit#heading=h.180d15le0pjm">WorkingTitle CJ4 Guide</ExternalLink>
                    {' '}
                    under NORMAL PROCEDURES &gt; ENGINE START.
                </>
            ),
            items: [
                ChecklistItems.CJ4_ENGINE_START_THROTTLES,
                ChecklistItems.CJ4_ENGINE_START_STARTER_BUTTON_PUSH,
                ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
                ChecklistItems.CJ4_ENGINE_START_ITT_RISE,
                ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
                ChecklistItems.CJ4_ENGINE_START_OPPOSITE_ENGINE_START,
                ChecklistItems.CJ4_ENGINE_START_EXTERNAL_POWER_DISCONNECT,
                ChecklistItems.CJ4_ENGINE_START_ELECTRICAL_SYSTEM_CHECK,
            ],
            nextListNames: [
                ChecklistLists.BEFORE_TAXI,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_TAXI,
            items: [
                ChecklistItems.CJ4_BEFORE_TAXI_AVIONICS_SWITCH,
                ChecklistItems.CJ4_BEFORE_TAXI_CLIMATE_CONTROL_SWITCH,
                ChecklistItems.CJ4_BEFORE_TAXI_PASSENGER_LIGHTS_SAFETY,
                ChecklistItems.CJ4_BEFORE_TAXI_TRIMS,
                ChecklistItems.CJ4_BEFORE_TAXI_FLIGHT_CONTROLS_FREE,
                ChecklistItems.CJ4_BEFORE_TAXI_SPEEDBRAKE_CHECK,
                ChecklistItems.CJ4_BEFORE_TAXI_FLAPS,
                ChecklistItems.CJ4_BEFORE_TAXI_HYDRAULIC_PRESSURE_CHECK,
                ChecklistItems.CJ4_BEFORE_TAXI_ENGINE_ONLY_ANTI_ICE,
                ChecklistItems.CJ4_BEFORE_TAXI_TAKEOFF_DATA,
                ChecklistItems.CJ4_BEFORE_TAXI_AVIONICS_CHECK,
                ChecklistItems.CJ4_BEFORE_TAXI_AUTOPILOT_CONNECT_DISCONNECT,
                ChecklistItems.CJ4_BEFORE_TAXI_ALTIMETER_SET,
                ChecklistItems.VATSIM_DEPARTURE_SETTINGS,
                ChecklistItems.CJ4_BEFORE_TAXI_PRESSURIZATION_CHECK,
                ChecklistItems.CJ4_BEFORE_TAXI_EICAS_CHECK,
                ChecklistItems.CJ4_BEFORE_TAXI_AFT_DIVIDER_DOORS_OPEN,
            ],
            nextListNames: [
                ChecklistLists.TAXI,
            ],
        },
        {
            listName: ChecklistLists.TAXI,
            items: [
                ChecklistItems.CJ4_TAXI_EXTERIOR_LIGHTS,
                ChecklistItems.VATSIM_TAXI_CLEARANCE,
                ChecklistItems.VATSIM_TAXI_MODE_CHARLIE,
                ChecklistItems.CJ4_TAXI_BRAKES_APPLIED,
                ChecklistItems.CJ4_TAXI_PARKING_BRAKE_RELEASED,
                ChecklistItems.CJ4_TAXI_BRAKES_CHECK,
                ChecklistItems.CJ4_TAXI_NOSE_WHEEL_STEERING_CHECK,
                ChecklistItems.CJ4_TAXI_FLIGHT_INSTRUMENTS_CHECK,
            ],
            nextListNames: [
                ChecklistLists.BEFORE_TAKEOFF,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_TAKEOFF,
            items: [
                ChecklistItems.CJ4_BEFORE_TAKEOFF_ICE_PROTECTION_SYSTEM_CHECK,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_RUDDER_BIAS_SYSTEM_CHECK,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_SEATS_UPRIGHT,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_FLAPS_SET,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_SPEEDBRAKES_OFF,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_TRIMS_CHECK,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_CREW_BRIEFING,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_TCAS_TARA,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_RADAR_AS_REQUIRED,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_GA_BUTTON_PUSH,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_BATTERY_AMPS_CHECK,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_ICE_PROTECTION_SYSTEM_AS_REQUIRED,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_PITOT_STATIC_HEAT_BUTTONS,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_EICAS_CHECK,
                ChecklistItems.CJ4_BEFORE_TAKEOFF_EXTERIOR_LIGHTS,
                ChecklistItems.CJ4EXT_BEFORE_TAKEOFF_RUNWAY_HEADING,
                ChecklistItems.VATSIM_TAKEOFF_CLEARANCE,
            ],
            nextListNames: [
                ChecklistLists.TAKEOFF,
            ],
        },
        {
            listName: ChecklistLists.TAKEOFF,
            items: [
                ChecklistItems.CJ4_TAKEOFF_THROTTLES,
                ChecklistItems.CJ4_TAKEOFF_N1_COMMAND_BUGS_GREEN,
                ChecklistItems.CJ4_TAKEOFF_BRAKES_RELEASED,
                ChecklistItems.CJ4_TAKEOFF_CONTROL_WHEEL_ROTATE_AT_VR,
            ],
            nextListNames: [
                ChecklistLists.AFTER_TAKEOFF_CLIMB,
            ],
        },
        {
            listName: ChecklistLists.AFTER_TAKEOFF_CLIMB,
            items: [
                ChecklistItems.CJ4_AFTER_TAKEOFF_LANDING_GEAR_UP,
                ChecklistItems.CJ4_AFTER_TAKEOFF_FLAPS_0,
                ChecklistItems.CJ4_AFTER_TAKEOFF_THROTTLES_CLIMB,
                ChecklistItems.CJ4_AFTER_TAKEOFF_YAW_DAMPER_ON,
                ChecklistItems.CJ4_AFTER_TAKEOFF_AUTOPILOT_AS_REQUIRED,
                ChecklistItems.CJ4_AFTER_TAKEOFF_ICE_PROTECTION_SYSTEM_CHECK,
                ChecklistItems.CJ4_AFTER_TAKEOFF_PASSENGER_LIGHTS_AS_REQUIRED,
                ChecklistItems.CJ4_AFTER_TAKEOFF_EXTERIOR_LIGHTS,
                ChecklistItems.CJ4_AFTER_TAKEOFF_PRESSURIZATION_CHECK,
                ChecklistItems.CJ4_AFTER_TAKEOFF_ALTIMETERS_SET,
            ],
            nextListNames: [
                ChecklistLists.CRUISE,
            ],
        },
        {
            listName: ChecklistLists.CRUISE,
            items: [
                ChecklistItems.CJ4_CRUISE_THROTTLES,
                ChecklistItems.CJ4_CRUISE_PRESSURIZATION,
                ChecklistItems.CJ4_CRUISE_ICE_PROTECTION_SYSTEMS,
                ChecklistItems.VATSIM_DESCENT_CLEARANCE,
            ],
            nextListNames: [
                ChecklistLists.DESCENT,
            ],
        },
        {
            listName: ChecklistLists.DESCENT,
            items: [
                ChecklistItems.CJ4_DESCENT_PRESSURIZATION,
                ChecklistItems.CJ4_DESCENT_ICE_PROTECTION_SYSTEMS,
                ChecklistItems.CJ4_DESCENT_ALTIMETERS,
                ChecklistItems.CJ4_DESCENT_EXTERIOR_LIGHTS,
                ChecklistItems.CJ4EXT_DESCENT_INTERIOR_LIGHTS,
                ChecklistItems.VATSIM_APPROACH_CLEARANCE,
            ],
            nextListNames: [
                ChecklistLists.APPROACH,
            ],
        },
        {
            listName: ChecklistLists.APPROACH,
            items: [
                ChecklistItems.CJ4_APPROACH_LANDING_DATA,
                ChecklistItems.CJ4_APPROACH_CREW_BRIEFING,
                ChecklistItems.CJ4_APPROACH_AVIONICS_FLIGHT_INSTRUMENTS,
                ChecklistItems.CJ4_APPROACH_MINIMUMS,
                ChecklistItems.CJ4_APPROACH_FUEL_TRANSFER_SELECTOR,
                ChecklistItems.CJ4_APPROACH_EXTERIOR_LIGHTS,
                ChecklistItems.CJ4_APPROACH_ICE_PROTECTION_SYSTEMS,
                ChecklistItems.CJ4_APPROACH_FLAPS,
                ChecklistItems.CJ4_APPROACH_PASSENGER_BRIEFING,
                ChecklistItems.CJ4_APPROACH_SEATS_UPRIGHT,
                ChecklistItems.CJ4_APPROACH_SEAT_BELTS,
                ChecklistItems.CJ4_APPROACH_PASSENGER_LIGHTS,
                ChecklistItems.CJ4_APPROACH_PRESSURIZATION,
            ],
            nextListNames: [
                ChecklistLists.BEFORE_LANDING,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_LANDING,
            items: [
                ChecklistItems.CJ4_BEFORE_LANDING_LANDING_GEAR,
                ChecklistItems.CJ4_BEFORE_LANDING_FLAPS,
                ChecklistItems.CJ4_BEFORE_LANDING_SPEEDBRAKES_OFF,
                ChecklistItems.CJ4_BEFORE_LANDING_AIRSPEED_VREF,
                ChecklistItems.VATSIM_LANDING_CLEARANCE,
                ChecklistItems.CJ4_BEFORE_LANDING_AUTOPILOT_AND_YAW_DAMPER,
            ],
            nextListNames: [
                ChecklistLists.LANDING,
            ],
        },
        {
            listName: ChecklistLists.LANDING,
            items: [
                ChecklistItems.CJ4_LANDING_THROTTLES,
                ChecklistItems.CJ4_LANDING_BRAKES,
                ChecklistItems.CJ4_LANDING_GROUND_SPOILERS,
            ],
            nextListNames: [
                ChecklistLists.ALL_ENGINES_GO_AROUND,
                ChecklistLists.AFTER_LANDING,
            ],
        },
        {
            listName: ChecklistLists.ALL_ENGINES_GO_AROUND,
            items: [
                ChecklistItems.CJ4_GOAROUND_GA_BUTTON,
                ChecklistItems.CJ4_GOAROUND_THROTTLES_1,
                ChecklistItems.CJ4_GOAROUND_PITCH_ATTITUDE,
                ChecklistItems.CJ4_GOAROUND_FLAPS_1,
                ChecklistItems.CJ4_GOAROUND_LANDING_GEAR,
                ChecklistItems.VATSIM_GOAROUND_ANNOUNCE,
                ChecklistItems.CJ4_GOAROUND_FLAPS_2,
                ChecklistItems.CJ4_GOAROUND_AIRSPEED,
                ChecklistItems.CJ4_GOAROUND_THROTTLES_2,
                ChecklistItems.CJ4_GOAROUND_YAW_DAMPER,
                ChecklistItems.CJ4_GOAROUND_AUTOPILOT,
            ],
            nextListNames: [
                ChecklistLists.APPROACH,
            ],
        },
        {
            listName: ChecklistLists.AFTER_LANDING,
            items: [
                ChecklistItems.CJ4_AFTER_LANDING_SPEEDBRAKES,
                ChecklistItems.CJ4_AFTER_LANDING_FLAPS,
                ChecklistItems.VATSIM_LANDING_CLEAR_OF_RUNWAY,
                ChecklistItems.CJ4_AFTER_LANDING_PITOT_STATIC_HEAT,
                ChecklistItems.CJ4_AFTER_LANDING_ICE_PROTECTION_SYSTEMS,
                ChecklistItems.CJ4_AFTER_LANDING_RADAR,
                ChecklistItems.CJ4_AFTER_LANDING_EXTERIOR_LIGHTS,
            ],
            nextListNames: [
                ChecklistLists.SHUTDOWN,
            ],
        },
        {
            listName: ChecklistLists.SHUTDOWN,
            items: [
                ChecklistItems.CJ4_SHUTDOWN_PARKING_BRAKE,
                ChecklistItems.VATSIM_DISCONNECT_GOODBYE,
                ChecklistItems.CJ4_SHUTDOWN_EMERGENCY_LIGHTS,
                ChecklistItems.CJ4_SHUTDOWN_STANDBY_FLIGHT_DISPLAY,
                ChecklistItems.CJ4_SHUTDOWN_AVIONICS_SWITCH,
                ChecklistItems.CJ4_SHUTDOWN_CLIMATE_CONTROL_SELECTOR,
                ChecklistItems.CJ4_SHUTDOWN_ICE_PROTECTION_SYSTEMS,
                ChecklistItems.CJ4_SHUTDOWN_THROTTLES,
                ChecklistItems.CJ4_SHUTDOWN_ENGINE_RUNSTOP_BUTTONS,
                ChecklistItems.CJ4_SHUTDOWN_EXTERIOR_LIGHTS,
                ChecklistItems.CJ4_SHUTDOWN_BATTERY_SWITCH,
                ChecklistItems.CJ4_SHUTDOWN_CONTROL_LOCK,
                ChecklistItems.CJ4_SHUTDOWN_ENGINE_COVERS,
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
                ChecklistItems.SIMSETUP_POST_FLIGHT_NOTES,
            ],
        },
    ],
};
