import { createTransformedMapping } from 'lib/checklist/data/transforms';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistTags } from 'lib/checklist/data/tags';

const addC172SteamTags = (value) => ({
    ...value,
    tags: [
        ...value.tags,
        ChecklistTags.OFFICIAL,
        ChecklistTags.C172,
        ChecklistTags.C172_STEAM,
    ],
});

export const C172SteamChecklistItemsData = createTransformedMapping(addC172SteamTags)([
    {
        uid: ChecklistItems.C172STEAM_PREFLIGHT_BATTERY_SWITCH_1,
        title: 'Battery Switch',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172STEAM_PREFLIGHT_BATTERY_SWITCH_2,
        title: 'Battery Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172STEAM_PREFLIGHT_AVIONICS_SWITCHES_1,
        title: 'Avionics Switches (BUS 1 and BUS 2)',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172STEAM_PREFLIGHT_AVIONICS_SWITCHES_2,
        title: 'Avionics Switches (BUS 1 and BUS 2)',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172STEAM_PREFLIGHT_AVIONICS_COOLING_FAN,
        title: 'Avionics Cooling Fan',
        state: 'AUDIBLE',
    },
    {
        uid: ChecklistItems.C172STEAM_PREFLIGHT_ANNUNCIATOR_PANEL,
        title: 'Annunciator Panel',
        state: 'TEST',
    },
    {
        uid: ChecklistItems.C172STEAM_PREFLIGHT_FUEL_SHUTOFF_VALVE,
        title: 'Fuel Shutoff Valve',
        state: 'OPEN',
    },
    {
        uid: ChecklistItems.C172STEAM_PREFLIGHT_FLAPS_DOWN,
        title: 'Flaps',
        state: 'DOWN',
    },
    {
        uid: ChecklistItems.C172STEAM_PREFLIGHT_ELEVATOR_TRIM,
        title: 'Elevator Trim',
        state: 'NEUTRAL',
    },
    {
        uid: ChecklistItems.C172STEAM_ENGINE_START_BATTERY_SWITCH,
        title: 'Battery Switch',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172STEAM_AFTER_START_ALTERNATOR,
        title: 'Alternator',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172STEAM_AFTER_START_ALTERNATOR_INDICATOR,
        title: 'Alternator Indicator',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172STEAM_AFTER_START_ANMETER,
        title: 'Anmeter',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172STEAM_AFTER_START_RADIOS,
        title: 'Radios',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172STEAM_AFTER_START_TRANSPONDER,
        title: 'Transponder',
        state: 'STANDBY',
    },
    {
        uid: ChecklistItems.C172STEAM_AFTER_START_HEADING_INDICATOR,
        title: 'Heading Indicator',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172STEAM_AFTER_START_ALTIMETER,
        title: 'Altimeter',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172STEAM_AFTER_START_ALTITUDE_INDICATOR,
        title: 'Altitude Indicator',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172STEAM_TAXI_TURN_COORDINATOR,
        title: 'Turn Coordinator',
        state: 'CHECK WORKING',
    },
    {
        uid: ChecklistItems.C172STEAM_TAXI_HEADING_INDICATOR,
        title: 'Heading Indicator',
        state: 'CHECK WORKING',
    },
    {
        uid: ChecklistItems.C172STEAM_TAXI_COMPASS,
        title: 'Compass',
        state: 'CHECK WORKING',
    },
    {
        uid: ChecklistItems.C172STEAM_RUNUP_FLIGHT_INSTRUMENTS,
        title: 'Flight Instruments',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172STEAM_RUNUP_AUTOPILOT,
        title: 'Autopilot',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172STEAM_RUNUP_OIL_PRESSURE,
        title: 'Oil Pressure',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172STEAM_RUNUP_OIL_TEMPERATURE,
        title: 'Oil Temperature',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172STEAM_RUNUP_ANMETER,
        title: 'Anmeter',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172STEAM_RUNUP_ANNUNCIATOR_PANEL,
        title: 'Annunciator Panel',
        state: 'CLEAR',
    },
    {
        uid: ChecklistItems.C172STEAM_BEFORE_TAKEOFF_RADIOS,
        title: 'Radios',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172STEAM_BEFORE_TAKEOFF_AVIONICS,
        title: 'Avionics',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172STEAM_BEFORE_TAKEOFF_NAV_GPS_SWITCH,
        title: 'NAV/GPS switch',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172STEAM_BEFORE_TAKEOFF_TRANSPONDER,
        title: 'Transponder',
        state: 'ON ALT',
    },
    {
        uid: ChecklistItems.C172STEAM_BEFORE_TAKEOFF_AUTOPILOT,
        title: 'Autopilot',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172STEAM_BEFORE_TAKEOFF_ELEVATOR_TRIM,
        title: 'Elevator Trim',
        state: 'SET FOR TAKEOFF',
    },
    {
        uid: ChecklistItems.C172STEAM_TAKEOFF_ANNUNCIATORS,
        title: 'Annunciator Panel',
        state: 'CLEAR',
    },
    {
        uid: ChecklistItems.C172STEAM_CRUISE_FLIGHT_INSTRUMENTS,
        title: 'Flight Instruments',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172STEAM_DESCENT_ALTIMETER,
        title: 'Altimeter Setting',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172STEAM_DESCENT_NAV_GPS,
        title: 'NAV/GPS Switch',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172STEAM_PARKING_TRANSPONDER,
        title: 'Transponder',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172STEAM_SECURING_ALTERNATOR,
        title: 'Alternator',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172STEAM_SECURING_BATTERY,
        title: 'Battery Switch',
        state: 'OFF',
    },
]);
