import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistFilters } from 'lib/checklist/data/filters';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistLists } from 'lib/checklist/data/lists';

export const C172SteamChecklistData = {
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
                ChecklistItems.C172STEAM_TAKEOFF_ANNUNCIATORS,
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
};
