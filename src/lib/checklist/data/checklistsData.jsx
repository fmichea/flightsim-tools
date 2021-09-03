import React from 'react';
import { createMappingFunction } from 'lib/checklist/data/transforms';
import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistFilters } from 'lib/checklist/data/filters';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ExternalLink } from 'components/lib/ExternalLink';
import { Alert } from 'antd';

export const ChecklistsData = createMappingFunction()([
    {
        uid: Checklists.WT_CJ4,
        title: 'WorkingTitle CJ4',
        description: (
            <>
                <Alert
                    closable
                    message={(
                        <>
                            This is a BETA checklist. It contains all the official CJ4 items, but help is missing or
                            incomplete for a lot of them. Work in progress. Also you know, I&apos;m still learning this
                            is very much my best understanding of things.
                        </>
                    )}
                    type="error"
                />

                <p>
                    <br />
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
            </>
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
                    ChecklistItems.CJ4_BEFORE_START_CLIMATE_CONTROL,
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
    },
    {
        uid: Checklists.C172_STEAM,
        title: 'Cessna 172 Skyhawk (Steam Gauges)',
        selectableFilters: [],
        defaultFilters: [
            ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL,
        ],
        lists: [
            {
                listName: ChecklistLists.PRE_FLIGHT,
                items: [
                    ChecklistItems.C172_PREFLIGHT_AIRCRAFT_DOCUMENTS,
                    ChecklistItems.C172_PREFLIGHT_PARKING_BRAKE,
                    ChecklistItems.C172_PREFLIGHT_IGNITION,
                    ChecklistItems.C172_PREFLIGHT_AVIONICS_SWITCHES_OFF,
                    ChecklistItems.C172STEAM_PREFLIGHT_BATTERY_SWITCH_1,
                    ChecklistItems.C172_PREFLIGHT_FUEL_QUANTITY,
                    ChecklistItems.C172_PREFLIGHT_LOW_FUEL_ANNUNCIATORS,
                    ChecklistItems.C172STEAM_PREFLIGHT_AVIONICS_SWITCHES_1,
                    ChecklistItems.C172STEAM_PREFLIGHT_AVIONICS_COOLING_FAN,
                    ChecklistItems.C172STEAM_PREFLIGHT_AVIONICS_SWITCHES_2,
                    ChecklistItems.C172_PREFLIGHT_STATIC_PRESSURE_ALT_SOURCE_VALVE,
                    ChecklistItems.C172STEAM_PREFLIGHT_ANNUNCIATOR_PANEL,
                    ChecklistItems.C172_PREFLIGHT_FUEL_SELECTOR,
                    ChecklistItems.C172STEAM_PREFLIGHT_FUEL_SHUTOFF_VALVE,
                    ChecklistItems.C172STEAM_PREFLIGHT_FLAPS_DOWN,
                    ChecklistItems.C172_PREFLIGHT_PITOT_HEAT_ON,
                    ChecklistItems.C172_PREFLIGHT_PITOT_HEAT_OFF,
                    ChecklistItems.C172STEAM_PREFLIGHT_BATTERY_SWITCH_2,
                    ChecklistItems.C172STEAM_PREFLIGHT_ELEVATOR_TRIM,
                ],
                nextListNames: [
                    ChecklistLists.BEFORE_ENGINE_START,
                ],
            },
            {
                listName: ChecklistLists.BEFORE_ENGINE_START,
                items: [
                    ChecklistItems.C172_BEFORE_START_PREFLIGHT_INSPECTION,
                    ChecklistItems.C172_BEFORE_START_SEATS_BELTS,
                    ChecklistItems.C172_BEFORE_START_ELECTRICAL_EQUIPMENT,
                    ChecklistItems.C172_BEFORE_START_AVIONICS_SWITCHES,
                    ChecklistItems.C172_BEFORE_START_FUEL_SELECTOR,
                    ChecklistItems.C172_BEFORE_START_FUEL_SHUTOFF_VALVE,
                ],
                nextListNames: [
                    ChecklistLists.ENGINE_START,
                ],
            },
            {
                listName: ChecklistLists.ENGINE_START,
                items: [
                    ChecklistItems.C172_ENGINE_START_THROTTLE,
                    ChecklistItems.C172_ENGINE_START_MIXTURE_1,
                    ChecklistItems.C172_ENGINE_START_PROPELLER_AREA,
                    ChecklistItems.C172STEAM_ENGINE_START_BATTERY_SWITCH,
                    ChecklistItems.C172_ENGINE_START_BEACON_LIGHT,
                    ChecklistItems.C172_ENGINE_START_MIXTURE_2,
                    ChecklistItems.C172_ENGINE_START_AUX_FUEL_PUMP,
                    ChecklistItems.C172_ENGINE_START_MIXTURE_3,
                    ChecklistItems.C172_ENGINE_START_FEET_BRAKES,
                    ChecklistItems.C172_ENGINE_START_IGNITION,
                    ChecklistItems.C172_ENGINE_START_MIXTURE_4,
                ],
                nextListNames: [
                    ChecklistLists.AFTER_ENGINE_START,
                ],
            },
            {
                listName: ChecklistLists.AFTER_ENGINE_START,
                items: [
                    ChecklistItems.C172_AFTER_START_THROTTLE,
                    ChecklistItems.C172_AFTER_START_OIL_PRESSURE,
                    ChecklistItems.C172STEAM_AFTER_START_ALTERNATOR,
                    ChecklistItems.C172STEAM_AFTER_START_ALTERNATOR_INDICATOR,
                    ChecklistItems.C172STEAM_AFTER_START_ANMETER,
                    ChecklistItems.C172_AFTER_START_AVIONICS_SWITCHES,
                    ChecklistItems.C172STEAM_AFTER_START_RADIOS,
                    ChecklistItems.C172STEAM_AFTER_START_TRANSPONDER,
                    ChecklistItems.C172_AFTER_START_FLAPS,
                    ChecklistItems.C172STEAM_AFTER_START_HEADING_INDICATOR,
                    ChecklistItems.C172STEAM_AFTER_START_ALTIMETER,
                    ChecklistItems.C172STEAM_AFTER_START_ALTITUDE_INDICATOR,
                ],
                nextListNames: [
                    ChecklistLists.TAXI,
                ],
            },
            {
                listName: ChecklistLists.TAXI,
                items: [
                    ChecklistItems.C172_TAXI_TAXI_LIGHT,
                    ChecklistItems.C172_TAXI_LANDING_LIGHT,
                    ChecklistItems.C172_TAXI_STROBE_LIGHT,
                    ChecklistItems.C172_TAXI_NAV_LIGHT,
                    ChecklistItems.C172_TAXI_PARKING_BRAKE,
                    ChecklistItems.C172_TAXI_BRAKES,
                    ChecklistItems.C172_TAXI_RUDDER,
                    ChecklistItems.C172STEAM_TAXI_TURN_COORDINATOR,
                    ChecklistItems.C172STEAM_TAXI_HEADING_INDICATOR,
                    ChecklistItems.C172STEAM_TAXI_COMPASS,
                ],
                nextListNames: [
                    ChecklistLists.RUN_UP,
                ],
            },
            {
                listName: ChecklistLists.RUN_UP,
                items: [
                    ChecklistItems.C172_RUNUP_PARKING_BRAKE,
                    ChecklistItems.C172_RUNUP_SEATS_BACKS,
                    ChecklistItems.C172_RUNUP_SEATS_BELTS,
                    ChecklistItems.C172_RUNUP_FLIGHT_CONTROLS_1,
                    ChecklistItems.C172STEAM_RUNUP_FLIGHT_INSTRUMENTS,
                    ChecklistItems.C172_RUNUP_FUEL_QUANTITY,
                    ChecklistItems.C172_RUNUP_MIXTURE,
                    ChecklistItems.C172_RUNUP_FUEL_SELECTOR,
                    ChecklistItems.C172_RUNUP_AUTOPILOT,
                    ChecklistItems.C172_RUNUP_FLIGHT_CONTROLS_2,
                    ChecklistItems.C172STEAM_RUNUP_AUTOPILOT,
                    ChecklistItems.C172_RUNUP_THROTTLE_1,
                    ChecklistItems.C172_RUNUP_MAGNETOS_1,
                    ChecklistItems.C172_RUNUP_MAGNETOS_2,
                    ChecklistItems.C172_RUNUP_MAGNETOS_3,
                    ChecklistItems.C172_RUNUP_VACCUM_GAUGE,
                    ChecklistItems.C172STEAM_RUNUP_OIL_PRESSURE,
                    ChecklistItems.C172STEAM_RUNUP_OIL_TEMPERATURE,
                    ChecklistItems.C172STEAM_RUNUP_ANMETER,
                    ChecklistItems.C172STEAM_RUNUP_ANNUNCIATOR_PANEL,
                    ChecklistItems.C172_RUNUP_ENGINE_IDLE,
                    ChecklistItems.C172_RUNUP_THROTTLE_2,
                ],
                nextListNames: [
                    ChecklistLists.BEFORE_TAKEOFF,
                ],
            },
            {
                listName: ChecklistLists.BEFORE_TAKEOFF,
                items: [
                    ChecklistItems.C172STEAM_BEFORE_TAKEOFF_RADIOS,
                    ChecklistItems.C172STEAM_BEFORE_TAKEOFF_AVIONICS,
                    ChecklistItems.C172STEAM_BEFORE_TAKEOFF_NAV_GPS_SWITCH,
                    ChecklistItems.C172STEAM_BEFORE_TAKEOFF_TRANSPONDER,
                    ChecklistItems.C172STEAM_BEFORE_TAKEOFF_AUTOPILOT,
                    ChecklistItems.C172STEAM_BEFORE_TAKEOFF_ELEVATOR_TRIM,
                    ChecklistItems.C172_BEFORE_TAKEOFF_FLAPS,
                    ChecklistItems.C172_BEFORE_TAKEOFF_CABIN_WINDOWS,
                    ChecklistItems.C172_BEFORE_TAKEOFF_PARKING_BRAKE,
                ],
                nextListNames: [
                    ChecklistLists.TAKEOFF,
                ],
            },
            {
                listName: ChecklistLists.TAKEOFF,
                items: [
                    ChecklistItems.C172_TAKEOFF_FLAPS_1,
                    ChecklistItems.C172_TAKEOFF_THROTTLE,
                    ChecklistItems.C172_TAKEOFF_MIXTURE,
                    ChecklistItems.C172STEAM_TAKEOFF_ANNUCIATORS,
                    ChecklistItems.C172_TAKEOFF_AIRSPEED_INDICATOR,
                    ChecklistItems.C172_TAKEOFF_LIFT_NOSEWHEEL,
                    ChecklistItems.C172_TAKEOFF_INITIAL_CLIMB,
                    ChecklistItems.C172_TAKEOFF_FLAPS_2,
                ],
                nextListNames: [
                    ChecklistLists.CLIMB,
                ],
            },
            {
                listName: ChecklistLists.CLIMB,
                items: [
                    ChecklistItems.C172_CLIMB_AIRSPEED,
                    ChecklistItems.C172_CLIMB_THROTTLE,
                    ChecklistItems.C172_CLIMB_MIXTURE_1,
                    ChecklistItems.C172_CLIMB_ENGINE_GAUGES,
                    ChecklistItems.C172_CLIMB_TAXI_LANDING_LIGHTS,
                    ChecklistItems.C172_CLIMB_MIXTURE_2,
                ],
                nextListNames: [
                    ChecklistLists.CRUISE,
                ],
            },
            {
                listName: ChecklistLists.CRUISE,
                items: [
                    ChecklistItems.C172_CRUISE_POWER,
                    ChecklistItems.C172_CRUISE_ELEVATOR_TRIM,
                    ChecklistItems.C172_CRUISE_MIXTURE,
                    ChecklistItems.C172_CRUISE_ENGINE_GAUGES,
                    ChecklistItems.C172STEAM_CRUISE_FLIGHT_INSTRUMENTS,
                ],
                nextListNames: [
                    ChecklistLists.DESCENT,
                ],
            },
            {
                listName: ChecklistLists.DESCENT,
                items: [
                    ChecklistItems.C172_DESCENT_POWER,
                    ChecklistItems.C172_DESCENT_MIXTURE,
                    ChecklistItems.C172STEAM_DESCENT_ALTIMETER,
                    ChecklistItems.C172STEAM_DESCENT_NAV_GPS,
                    ChecklistItems.C172_DESCENT_FUEL_SELECTOR,
                    ChecklistItems.C172_DESCENT_FLAPS,
                ],
                nextListNames: [
                    ChecklistLists.BEFORE_LANDING,
                ],
            },
            {
                listName: ChecklistLists.BEFORE_LANDING,
                items: [
                    ChecklistItems.C172_BEFORE_LANDING_SEATS_BACKS,
                    ChecklistItems.C172_BEFORE_LANDING_SEATS_BELTS,
                    ChecklistItems.C172_BEFORE_LANDING_FUEL_SELECTOR,
                    ChecklistItems.C172_BEFORE_LANDING_MIXTURE,
                    ChecklistItems.C172_BEFORE_LANDING_TAXI_LANDING_LIGHTS,
                    ChecklistItems.C172_BEFORE_LANDING_AUTOPILOT,
                ],
                nextListNames: [
                    ChecklistLists.LANDING,
                ],
            },
            {
                listName: ChecklistLists.LANDING,
                items: [
                    ChecklistItems.C172_LANDING_FLAPS,
                    ChecklistItems.C172_LANDING_AIRSPEED,
                    ChecklistItems.C172_LANDING_TOUCHDOWN,
                    ChecklistItems.C172_LANDING_LANDING_ROLL,
                    ChecklistItems.C172_LANDING_BRAKING,
                ],
                nextListNames: [
                    ChecklistLists.AFTER_LANDING,
                ],
            },
            {
                listName: ChecklistLists.AFTER_LANDING,
                items: [
                    ChecklistItems.C172_AFTER_LANDING_FLAPS,
                    ChecklistItems.C172_AFTER_LANDING_LANDING_LIGHT,
                    ChecklistItems.C172_AFTER_LANDING_TAXI_LIGHT,
                    ChecklistItems.C172_AFTER_LANDING_STROBE_LIGHT,
                    ChecklistItems.C172_AFTER_LANDING_ELEVATOR_TRIM,
                    ChecklistItems.C172_AFTER_LANDING_TRANSPONDER,
                ],
                nextListNames: [
                    ChecklistLists.PARKING,
                ],
            },
            {
                listName: ChecklistLists.PARKING,
                items: [
                    ChecklistItems.C172_PARKING_PARKING_BRAKE,
                    ChecklistItems.C172STEAM_PARKING_TRANSPONDER,
                    ChecklistItems.C172_PARKING_AVIONICS_SWITCHES,
                    ChecklistItems.C172_PARKING_ENGINE_IDLE,
                    ChecklistItems.C172_PARKING_MAGNETOS,
                    ChecklistItems.C172_PARKING_MIXTURE,
                ],
                nextListNames: [
                    ChecklistLists.SECURING,
                ],
            },
            {
                listName: ChecklistLists.SECURING,
                items: [
                    ChecklistItems.C172_SECURING_IGNITION,
                    ChecklistItems.C172_SECURING_LANDING_LIGHT,
                    ChecklistItems.C172_SECURING_TAXI_LIGHT,
                    ChecklistItems.C172_SECURING_NAV_LIGHT,
                    ChecklistItems.C172STEAM_SECURING_ALTERNATOR,
                    ChecklistItems.C172STEAM_SECURING_BATTERY,
                    ChecklistItems.C172_SECURING_FUEL_SELECTOR,
                ],
            },
        ],
    },
    {
        uid: Checklists.C172_G1000,
        title: 'Cessna 172 Skyhawk (G1000)',
        selectableFilters: [],
        defaultFilters: [
            ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL,
        ],
        lists: [
            {
                listName: ChecklistLists.PRE_FLIGHT,
                items: [
                    ChecklistItems.C172_PREFLIGHT_AIRCRAFT_DOCUMENTS,
                    ChecklistItems.C172_PREFLIGHT_PARKING_BRAKE,
                    ChecklistItems.C172_PREFLIGHT_IGNITION,
                    ChecklistItems.C172_PREFLIGHT_AVIONICS_SWITCHES_OFF,
                    ChecklistItems.C172G1000_PREFLIGHT_MASTER_SWITCHES_1,
                    ChecklistItems.C172G1000_PREFLIGHT_PFD,
                    ChecklistItems.C172_PREFLIGHT_FUEL_QUANTITY,
                    ChecklistItems.C172_PREFLIGHT_LOW_FUEL_ANNUNCIATORS,
                    // FIXME: These two annunciator checks only in G1000 official version?
                    ChecklistItems.C172G1000_PREFLIGHT_OIL_PRESSURE_ANNUNCIATOR,
                    ChecklistItems.C172G1000_PREFLIGHT_LOW_VACUUM_ANNUNCIATOR,
                    // FIXME: Translate to sublists.
                    ChecklistItems.C172G1000_PREFLIGHT_AVIONICS_SWITCH_1_ON,
                    ChecklistItems.C172G1000_PREFLIGHT_AVIONICS_SWITCH_1_FAN,
                    ChecklistItems.C172G1000_PREFLIGHT_AVIONICS_SWITCH_1_OFF,
                    ChecklistItems.C172G1000_PREFLIGHT_AVIONICS_SWITCH_2_ON,
                    ChecklistItems.C172G1000_PREFLIGHT_AVIONICS_SWITCH_2_FAN,
                    ChecklistItems.C172G1000_PREFLIGHT_AVIONICS_SWITCH_2_OFF,
                    ChecklistItems.C172_PREFLIGHT_PITOT_HEAT_ON,
                    ChecklistItems.C172_PREFLIGHT_PITOT_HEAT_OFF,
                    ChecklistItems.C172G1000_PREFLIGHT_LOW_VOLTS_ANNUNCIATOR,
                    ChecklistItems.C172G1000_PREFLIGHT_MASTER_SWITCHES_2,
                    ChecklistItems.C172G1000_PREFLIGHT_ELEVATOR_TRIM,
                    ChecklistItems.C172_PREFLIGHT_FUEL_SELECTOR,
                    ChecklistItems.C172_PREFLIGHT_STATIC_PRESSURE_ALT_SOURCE_VALVE,
                ],
                nextListNames: [
                    ChecklistLists.BEFORE_ENGINE_START,
                ],
            },
            {
                listName: ChecklistLists.BEFORE_ENGINE_START,
                items: [
                    ChecklistItems.C172_BEFORE_START_PREFLIGHT_INSPECTION,
                    ChecklistItems.C172_BEFORE_START_SEATS_BELTS,
                    ChecklistItems.C172G1000_BEFORE_START_BRAKES,
                    ChecklistItems.C172G1000_BEFORE_START_CIRCUIT_BREAKERS,
                    ChecklistItems.C172_BEFORE_START_ELECTRICAL_EQUIPMENT,
                    ChecklistItems.C172_BEFORE_START_AVIONICS_SWITCHES,
                    ChecklistItems.C172_BEFORE_START_FUEL_SELECTOR,
                    ChecklistItems.C172_BEFORE_START_FUEL_SHUTOFF_VALVE,
                ],
                nextListNames: [
                    ChecklistLists.ENGINE_START,
                ],
            },
            {
                listName: ChecklistLists.ENGINE_START,
                items: [
                    ChecklistItems.C172_ENGINE_START_THROTTLE,
                    ChecklistItems.C172_ENGINE_START_MIXTURE_1,
                    ChecklistItems.C172G1000_ENGINE_START_STANDBY_BATT_TEST,
                    ChecklistItems.C172G1000_ENGINE_START_STANDBY_BATT_ARM,
                    ChecklistItems.C172G1000_ENGINE_START_ENGINE_INDICATING_SYSTEM,
                    ChecklistItems.C172G1000_ENGINE_START_BUS_E_VOLTS,
                    ChecklistItems.C172G1000_ENGINE_START_BUS_M_VOLTS,
                    ChecklistItems.C172G1000_ENGINE_START_BATT_S_AMPS,
                    ChecklistItems.C172G1000_ENGINE_START_STANDBY_BATT_ANNUNCIATOR,
                    ChecklistItems.C172_ENGINE_START_PROPELLER_AREA,
                    ChecklistItems.C172G1000_ENGINE_START_MASTER_SWITCH,
                    ChecklistItems.C172_ENGINE_START_BEACON_LIGHT,
                    ChecklistItems.C172_ENGINE_START_MIXTURE_2,
                    ChecklistItems.C172_ENGINE_START_AUX_FUEL_PUMP,
                    ChecklistItems.C172_ENGINE_START_MIXTURE_3,
                    ChecklistItems.C172_ENGINE_START_FEET_BRAKES,
                    ChecklistItems.C172_ENGINE_START_IGNITION,
                    ChecklistItems.C172_ENGINE_START_MIXTURE_4,
                ],
                nextListNames: [
                    ChecklistLists.AFTER_ENGINE_START,
                ],
            },
            {
                listName: ChecklistLists.AFTER_ENGINE_START,
                items: [
                    ChecklistItems.C172_AFTER_START_THROTTLE,
                    ChecklistItems.C172_AFTER_START_OIL_PRESSURE,
                    ChecklistItems.C172G1000_AFTER_START_AMPS,
                    ChecklistItems.C172G1000_AFTER_START_LOW_VOLTS_ANNUNCIATOR,
                    ChecklistItems.C172_AFTER_START_AVIONICS_SWITCHES,
                    ChecklistItems.C172_AFTER_START_FLAPS,
                ],
                nextListNames: [
                    ChecklistLists.TAXI,
                ],
            },
            {
                listName: ChecklistLists.TAXI,
                items: [
                    ChecklistItems.C172_TAXI_TAXI_LIGHT,
                    ChecklistItems.C172_TAXI_LANDING_LIGHT,
                    ChecklistItems.C172_TAXI_STROBE_LIGHT,
                    ChecklistItems.C172_TAXI_NAV_LIGHT,
                    ChecklistItems.C172_TAXI_PARKING_BRAKE,
                    ChecklistItems.C172_TAXI_BRAKES,
                    ChecklistItems.C172_TAXI_RUDDER,
                ],
                nextListNames: [
                    ChecklistLists.RUN_UP,
                ],
            },
            {
                listName: ChecklistLists.RUN_UP,
                items: [
                    ChecklistItems.C172_RUNUP_PARKING_BRAKE,
                    ChecklistItems.C172_RUNUP_SEATS_BACKS,
                    ChecklistItems.C172_RUNUP_SEATS_BELTS,
                    ChecklistItems.C172G1000_RUNUP_DOORS,
                    ChecklistItems.C172_RUNUP_FLIGHT_CONTROLS_1,
                    ChecklistItems.C172G1000_RUNUP_FLIGHT_INSTRUMENTS,
                    ChecklistItems.C172G1000_RUNUP_ALTIMETER,
                    ChecklistItems.C172G1000_RUNUP_STANDBY_ALTIMETER,
                    ChecklistItems.C172G1000_RUNUP_ALTITUDE_SELECT,
                    ChecklistItems.C172G1000_RUNUP_STANDBY_FLIGHT_INSTRUMENTS,
                    ChecklistItems.C172_RUNUP_FUEL_QUANTITY,
                    ChecklistItems.C172_RUNUP_MIXTURE,
                    ChecklistItems.C172_RUNUP_FUEL_SELECTOR,
                    ChecklistItems.C172_RUNUP_AUTOPILOT,
                    ChecklistItems.C172_RUNUP_FLIGHT_CONTROLS_2,
                    ChecklistItems.C172G1000_RUNUP_AP_TRIM_DISC,
                    ChecklistItems.C172G1000_RUNUP_FLIGHT_DIRECTOR,
                    ChecklistItems.C172G1000_RUNUP_ELEVATOR_TRIM,
                    ChecklistItems.C172_RUNUP_THROTTLE_1,
                    ChecklistItems.C172_RUNUP_MAGNETOS_1,
                    ChecklistItems.C172_RUNUP_MAGNETOS_2,
                    ChecklistItems.C172_RUNUP_MAGNETOS_3,
                    ChecklistItems.C172_RUNUP_VACCUM_GAUGE,
                    ChecklistItems.C172G1000_RUNUP_ENGINE_INDICATORS,
                    ChecklistItems.C172G1000_RUNUP_ANMETERS_VOLTMETERS,
                    ChecklistItems.C172G1000_RUNUP_ANNUNCIATORS,
                    ChecklistItems.C172_RUNUP_ENGINE_IDLE,
                    ChecklistItems.C172_RUNUP_THROTTLE_2,
                ],
                nextListNames: [
                    ChecklistLists.BEFORE_TAKEOFF,
                ],
            },
            {
                listName: ChecklistLists.BEFORE_TAKEOFF,
                items: [
                    ChecklistItems.C172G1000_BEFORE_TAKEOFF_COM_FREQS,
                    ChecklistItems.C172G1000_BEFORE_TAKEOFF_NAV_FREQS,
                    ChecklistItems.C172G1000_BEFORE_TAKEOFF_FMS_GPS,
                    ChecklistItems.C172G1000_BEFORE_TAKEOFF_TRANSPONDER,
                    ChecklistItems.C172G1000_BEFORE_TAKEOFF_CDI_NAV_SOURCE,
                    ChecklistItems.C172G1000_BEFORE_TAKEOFF_CABIN_PWR,
                    ChecklistItems.C172_BEFORE_TAKEOFF_FLAPS,
                    ChecklistItems.C172_BEFORE_TAKEOFF_CABIN_WINDOWS,
                    ChecklistItems.C172_BEFORE_TAKEOFF_PARKING_BRAKE,
                ],
                nextListNames: [
                    ChecklistLists.TAKEOFF,
                ],
            },
            {
                listName: ChecklistLists.TAKEOFF,
                items: [
                    ChecklistItems.C172_TAKEOFF_FLAPS_1,
                    ChecklistItems.C172_TAKEOFF_THROTTLE,
                    ChecklistItems.C172_TAKEOFF_MIXTURE,
                    ChecklistItems.C172G1000_TAKEOFF_ANNUNCIATORS,
                    ChecklistItems.C172_TAKEOFF_AIRSPEED_INDICATOR,
                    ChecklistItems.C172_TAKEOFF_LIFT_NOSEWHEEL,
                    ChecklistItems.C172_TAKEOFF_INITIAL_CLIMB,
                    ChecklistItems.C172_TAKEOFF_FLAPS_2,
                ],
                nextListNames: [
                    ChecklistLists.CLIMB,
                ],
            },
            {
                listName: ChecklistLists.CLIMB,
                items: [
                    ChecklistItems.C172_CLIMB_AIRSPEED,
                    ChecklistItems.C172_CLIMB_THROTTLE,
                    ChecklistItems.C172_CLIMB_MIXTURE_1,
                    ChecklistItems.C172_CLIMB_ENGINE_GAUGES,
                    ChecklistItems.C172_CLIMB_TAXI_LANDING_LIGHTS,
                    ChecklistItems.C172_CLIMB_MIXTURE_2,
                ],
                nextListNames: [
                    ChecklistLists.CRUISE,
                ],
            },
            {
                listName: ChecklistLists.CRUISE,
                items: [
                    ChecklistItems.C172_CRUISE_POWER,
                    ChecklistItems.C172_CRUISE_ELEVATOR_TRIM,
                    ChecklistItems.C172_CRUISE_MIXTURE,
                    ChecklistItems.C172_CRUISE_ENGINE_GAUGES,
                    ChecklistItems.C172G1000_CRUISE_FMS_GPS,
                ],
                nextListNames: [
                    ChecklistLists.DESCENT,
                ],
            },
            {
                listName: ChecklistLists.DESCENT,
                items: [
                    ChecklistItems.C172_DESCENT_POWER,
                    ChecklistItems.C172_DESCENT_MIXTURE,
                    ChecklistItems.C172G1000_DESCENT_ALTIMETER,
                    ChecklistItems.C172G1000_DESCENT_STANDBY_ALTIMETER,
                    ChecklistItems.C172G1000_DESCENT_ALTITUDE_SELECT,
                    ChecklistItems.C172G1000_DESCENT_CDI_NAV,
                    ChecklistItems.C172G1000_DESCENT_FMS_GPS,
                    ChecklistItems.C172_DESCENT_FUEL_SELECTOR,
                    ChecklistItems.C172_DESCENT_FLAPS,
                ],
                nextListNames: [
                    ChecklistLists.BEFORE_LANDING,
                ],
            },
            {
                listName: ChecklistLists.BEFORE_LANDING,
                items: [
                    ChecklistItems.C172_BEFORE_LANDING_SEATS_BACKS,
                    ChecklistItems.C172_BEFORE_LANDING_SEATS_BELTS,
                    ChecklistItems.C172_BEFORE_LANDING_FUEL_SELECTOR,
                    ChecklistItems.C172_BEFORE_LANDING_MIXTURE,
                    ChecklistItems.C172_BEFORE_LANDING_TAXI_LANDING_LIGHTS,
                    ChecklistItems.C172_BEFORE_LANDING_AUTOPILOT,
                    ChecklistItems.C172G1000_BEFORE_LANDING_CABIN_PWR,
                ],
                nextListNames: [
                    ChecklistLists.LANDING,
                ],
            },
            {
                listName: ChecklistLists.LANDING,
                items: [
                    ChecklistItems.C172_LANDING_FLAPS,
                    ChecklistItems.C172_LANDING_AIRSPEED,
                    ChecklistItems.C172_LANDING_TOUCHDOWN,
                    ChecklistItems.C172_LANDING_LANDING_ROLL,
                    ChecklistItems.C172_LANDING_BRAKING,
                ],
                nextListNames: [
                    ChecklistLists.AFTER_LANDING,
                ],
            },
            {
                listName: ChecklistLists.AFTER_LANDING,
                items: [
                    ChecklistItems.C172_AFTER_LANDING_FLAPS,
                    ChecklistItems.C172_AFTER_LANDING_LANDING_LIGHT,
                    ChecklistItems.C172_AFTER_LANDING_TAXI_LIGHT,
                    ChecklistItems.C172_AFTER_LANDING_STROBE_LIGHT,
                    ChecklistItems.C172_AFTER_LANDING_ELEVATOR_TRIM,
                    ChecklistItems.C172_AFTER_LANDING_TRANSPONDER,
                ],
                nextListNames: [
                    ChecklistLists.PARKING,
                ],
            },
            {
                listName: ChecklistLists.PARKING,
                items: [
                    ChecklistItems.C172_PARKING_PARKING_BRAKE,
                    ChecklistItems.C172_PARKING_AVIONICS_SWITCHES,
                    ChecklistItems.C172_PARKING_ENGINE_IDLE,
                    ChecklistItems.C172_PARKING_MAGNETOS,
                    ChecklistItems.C172_PARKING_MIXTURE,
                ],
                nextListNames: [
                    ChecklistLists.SECURING,
                ],
            },
            {
                listName: ChecklistLists.SECURING,
                items: [
                    ChecklistItems.C172_SECURING_IGNITION,
                    ChecklistItems.C172_SECURING_LANDING_LIGHT,
                    ChecklistItems.C172_SECURING_TAXI_LIGHT,
                    ChecklistItems.C172_SECURING_NAV_LIGHT,
                    ChecklistItems.C172G1000_SECURING_MASTER_SWITCHES,
                    ChecklistItems.C172G1000_SECURING_STANDBY_BATT,
                    ChecklistItems.C172_SECURING_FUEL_SELECTOR,
                ],
            },
        ],
    },
]);
