import { ChecklistTags } from 'lib/checklist/data/tags';
import { createMappingFunction } from 'lib/checklist/data/transforms';
import { ChecklistItems } from 'lib/checklist/data/listItems';

const addC172Tags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.OFFICIAL, ChecklistTags.C172],
});

export const C172ChecklistItemsData = createMappingFunction(addC172Tags)([
    {
        uid: ChecklistItems.C172_PREFLIGHT_AIRCRAFT_DOCUMENTS,
        title: 'Aircraft Documents',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172_PREFLIGHT_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172_PREFLIGHT_IGNITION,
        title: 'Ignition',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_PREFLIGHT_AVIONICS_SWITCHES_OFF,
        title: 'Avionics Switches (BUS 1 and BUS 2)',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_PREFLIGHT_FUEL_QUANTITY,
        title: 'Fuel Quantity Indicators',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172_PREFLIGHT_LOW_FUEL_ANNUNCIATORS,
        title: 'LOW FUEL L and LOW FUEL R Annunciators',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_PREFLIGHT_STATIC_PRESSURE_ALT_SOURCE_VALVE,
        title: 'Static Pressure Alt Source Valve',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_PREFLIGHT_PITOT_HEAT_ON,
        title: 'Pitot Heat',
        state: 'ON, CHECK WORKING',
    },
    {
        uid: ChecklistItems.C172_PREFLIGHT_PITOT_HEAT_OFF,
        title: 'Pitot Heat',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_PREFLIGHT_FUEL_SELECTOR,
        title: 'Fuel Selector',
        state: 'BOTH',
    },
    {
        uid: ChecklistItems.C172_BEFORE_START_PREFLIGHT_INSPECTION,
        title: 'Preflight Inspection',
        state: 'COMPLETE',
    },
    {
        uid: ChecklistItems.C172_BEFORE_START_SEATS_BELTS,
        title: 'Seats, Belts',
        state: 'ADJUST AND LOCK',
    },
    {
        uid: ChecklistItems.C172_BEFORE_START_ELECTRICAL_EQUIPMENT,
        title: 'Electrical Equipment',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_BEFORE_START_AVIONICS_SWITCHES,
        title: 'Avionics Switches (BUS 1 and BUS 2)',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_BEFORE_START_FUEL_SELECTOR,
        title: 'Fuel Selector',
        state: 'BOTH',
    },
    {
        uid: ChecklistItems.C172_BEFORE_START_FUEL_SHUTOFF_VALVE,
        title: 'Fuel Shutoff Valve',
        state: 'OPEN',
    },
    {
        uid: ChecklistItems.C172_ENGINE_START_THROTTLE,
        title: 'Throttle',
        state: 'OPEN 1/4 INCH',
    },
    {
        uid: ChecklistItems.C172_ENGINE_START_MIXTURE_1,
        title: 'Mixture',
        state: 'IDLE CUTOFF',
    },
    {
        uid: ChecklistItems.C172_ENGINE_START_PROPELLER_AREA,
        title: 'Propeller Area',
        state: 'CLEAR',
    },
    {
        uid: ChecklistItems.C172_ENGINE_START_BEACON_LIGHT,
        title: 'Beacon Light',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172_ENGINE_START_MIXTURE_2,
        title: 'Mixture',
        state: 'RICH',
    },
    {
        uid: ChecklistItems.C172_ENGINE_START_AUX_FUEL_PUMP,
        title: 'AUX Fuel Pump',
        state: 'ON 3-5 SECONDS, THEN OFF',
    },
    {
        uid: ChecklistItems.C172_ENGINE_START_MIXTURE_3,
        title: 'Mixture',
        state: 'LEAN',
    },
    {
        uid: ChecklistItems.C172_ENGINE_START_FEET_BRAKES,
        title: 'Feet',
        state: 'READY TO BRAKE',
    },
    {
        uid: ChecklistItems.C172_ENGINE_START_IGNITION,
        title: 'Ignition',
        state: 'START',
    },
    {
        uid: ChecklistItems.C172_ENGINE_START_MIXTURE_4,
        title: 'Mixture',
        state: 'RICH WHEN ENGINE STARTS',
    },
    {
        uid: ChecklistItems.C172_AFTER_START_THROTTLE,
        title: 'Throttle',
        state: 'ADJUST 1000 RPM',
    },
    {
        uid: ChecklistItems.C172_AFTER_START_OIL_PRESSURE,
        title: 'Oil Pressure',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172_AFTER_START_AVIONICS_SWITCHES,
        title: 'Avionics Switches (BUS 1 and BUS 2)',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172_AFTER_START_FLAPS,
        title: 'Flaps',
        state: 'UP',
    },
    {
        uid: ChecklistItems.C172_TAXI_TAXI_LIGHT,
        title: 'Taxi Light',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.C172_TAXI_LANDING_LIGHT,
        title: 'Landing Light',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.C172_TAXI_STROBE_LIGHT,
        title: 'Strobe Light',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172_TAXI_NAV_LIGHT,
        title: 'Navigation Lights',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172_TAXI_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'RELEASE',
    },
    {
        uid: ChecklistItems.C172_TAXI_BRAKES,
        title: 'Brakes',
        state: 'TEST',
    },
    {
        uid: ChecklistItems.C172_TAXI_RUDDER,
        title: 'Rudder',
        state: 'TEST',
    },
    {
        uid: ChecklistItems.C172_RUNUP_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172_RUNUP_SEATS_BACKS,
        title: 'Pilot and Passenger Seat Backs',
        state: 'MOST UPRIGHT POSITION',
    },
    {
        uid: ChecklistItems.C172_RUNUP_SEATS_BELTS,
        title: 'Seats, Belts',
        state: 'CHECK SECURE',
    },
    {
        uid: ChecklistItems.C172_RUNUP_FLIGHT_CONTROLS_1,
        title: 'Flight Controls',
        state: 'FREE AND CORRECT',
    },
    {
        uid: ChecklistItems.C172_RUNUP_FUEL_QUANTITY,
        title: 'Fuel Quantity Indicators',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172_RUNUP_MIXTURE,
        title: 'Mixture',
        state: 'RICH',
    },
    {
        uid: ChecklistItems.C172_RUNUP_FUEL_SELECTOR,
        title: 'Fuel Selector',
        state: 'BOTH',
    },
    {
        uid: ChecklistItems.C172_RUNUP_AUTOPILOT,
        title: 'Autopilot',
        state: 'ENGAGE',
    },
    {
        uid: ChecklistItems.C172_RUNUP_FLIGHT_CONTROLS_2,
        title: 'Flight Controls',
        state: 'MOVE AGAINST AP',
    },
    {
        uid: ChecklistItems.C172_RUNUP_THROTTLE_1,
        title: 'Throttle',
        state: 'SET 1800 RPM',
    },
    {
        uid: ChecklistItems.C172_RUNUP_MAGNETOS_1,
        title: 'Magnetos',
        state: '150 RPM MAX DECREASE',
    },
    {
        uid: ChecklistItems.C172_RUNUP_MAGNETOS_2,
        title: 'Magnetos',
        state: '50 RPM MAX DIFFERENCE',
    },
    {
        uid: ChecklistItems.C172_RUNUP_MAGNETOS_3,
        title: 'Magnetos',
        state: 'BOTH',
    },
    {
        uid: ChecklistItems.C172_RUNUP_VACCUM_GAUGE,
        title: 'Vacuum Gauge',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172_RUNUP_ENGINE_IDLE,
        title: 'Engine Idle',
        state: 'CHECK 600-650 RPM',
    },
    {
        uid: ChecklistItems.C172_RUNUP_THROTTLE_2,
        title: 'Throttle',
        state: 'ADJUST 1000 RPM',
    },
    {
        uid: ChecklistItems.C172_BEFORE_TAKEOFF_FLAPS,
        title: 'Flaps',
        state: '0-10 DEGREES',
    },
    {
        uid: ChecklistItems.C172_BEFORE_TAKEOFF_CABIN_WINDOWS,
        title: 'Cabin Windows',
        state: 'CLOSED AND LOCKED',
    },
    {
        uid: ChecklistItems.C172_BEFORE_TAKEOFF_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'RELEASE',
    },
    {
        uid: ChecklistItems.C172_TAKEOFF_FLAPS_1,
        title: 'Flaps',
        state: '0-10 DEGREES',
    },
    {
        uid: ChecklistItems.C172_TAKEOFF_THROTTLE,
        title: 'Throttle',
        state: 'FULL, 2300 RPM MINIMUM',
    },
    {
        uid: ChecklistItems.C172_TAKEOFF_MIXTURE,
        title: 'Mixture',
        state: 'RICH',
    },
    {
        uid: ChecklistItems.C172_TAKEOFF_AIRSPEED_INDICATOR,
        title: 'Airspeed Indicator',
        state: 'CHECK WORKING',
    },
    {
        uid: ChecklistItems.C172_TAKEOFF_LIFT_NOSEWHEEL,
        title: 'Lift Nosewheel',
        state: '55 KIAS',
    },
    {
        uid: ChecklistItems.C172_TAKEOFF_INITIAL_CLIMB,
        title: 'Initial Climb',
        state: '70-80 KIAS',
    },
    {
        uid: ChecklistItems.C172_TAKEOFF_FLAPS_2,
        title: 'Flaps',
        state: 'UP ABOVE 300 FT AGL',
    },
    {
        uid: ChecklistItems.C172_CLIMB_AIRSPEED,
        title: 'Airspeed',
        state: '70-85 KIAS',
    },
    {
        uid: ChecklistItems.C172_CLIMB_THROTTLE,
        title: 'Throttle',
        state: 'FULL',
    },
    {
        uid: ChecklistItems.C172_CLIMB_MIXTURE_1,
        title: 'Mixture',
        state: 'RICH',
    },
    {
        uid: ChecklistItems.C172_CLIMB_ENGINE_GAUGES,
        title: 'Engine Gauges',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172_CLIMB_TAXI_LANDING_LIGHTS,
        title: 'Taxi And Landing Lights',
        state: 'OFF ABOVE 1000 FT AGL',
    },
    {
        uid: ChecklistItems.C172_CLIMB_MIXTURE_2,
        title: 'Mixture',
        state: 'LEAN ABOVE 3000 FT',
    },
    {
        uid: ChecklistItems.C172_CRUISE_POWER,
        title: 'Power',
        state: '2100-2700 RPM, 75% POWER MAX',
    },
    {
        uid: ChecklistItems.C172_CRUISE_ELEVATOR_TRIM,
        title: 'Elevator Trim',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172_CRUISE_MIXTURE,
        title: 'Mixture',
        state: 'LEAN FOR ALTITUDE',
    },
    {
        uid: ChecklistItems.C172_CRUISE_ENGINE_GAUGES,
        title: 'Engine Gauges',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172_DESCENT_POWER,
        title: 'Power',
        state: 'AS DESIRED',
    },
    {
        uid: ChecklistItems.C172_DESCENT_MIXTURE,
        title: 'Mixture',
        state: 'ADJUST',
    },
    {
        uid: ChecklistItems.C172_DESCENT_FUEL_SELECTOR,
        title: 'Fuel Selector',
        state: 'BOTH',
    },
    {
        uid: ChecklistItems.C172_DESCENT_FLAPS,
        title: 'Flaps',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.C172_BEFORE_LANDING_SEATS_BACKS,
        title: 'Pilot and Passenger Seat Backs',
        state: 'MOST UPRIGHT POSITION',
    },
    {
        uid: ChecklistItems.C172_BEFORE_LANDING_SEATS_BELTS,
        title: 'Seats, Belts',
        state: 'SECURED AND LOCKED',
    },
    {
        uid: ChecklistItems.C172_BEFORE_LANDING_FUEL_SELECTOR,
        title: 'Fuel Selector',
        state: 'BOTH',
    },
    {
        uid: ChecklistItems.C172_BEFORE_LANDING_MIXTURE,
        title: 'Mixture',
        state: 'RICH',
    },
    {
        uid: ChecklistItems.C172_BEFORE_LANDING_TAXI_LANDING_LIGHTS,
        title: 'Taxi and Landing Lights',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172_BEFORE_LANDING_AUTOPILOT,
        title: 'Autopilot',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_LANDING_FLAPS,
        title: 'Flaps',
        state: 'DOWN',
    },
    {
        uid: ChecklistItems.C172_LANDING_AIRSPEED,
        title: 'Final Approach Airspeed',
        state: '60-70 KIAS',
    },
    {
        uid: ChecklistItems.C172_LANDING_TOUCHDOWN,
        title: 'Touchdown',
        state: 'MAIN FIRST',
    },
    {
        uid: ChecklistItems.C172_LANDING_LANDING_ROLL,
        title: 'Landing Roll',
        state: 'LOWER NOSE GENTLY',
    },
    {
        uid: ChecklistItems.C172_LANDING_BRAKING,
        title: 'Braking',
        state: 'MINIMUM REQUIRED',
    },
    {
        uid: ChecklistItems.C172_AFTER_LANDING_FLAPS,
        title: 'Flaps',
        state: 'UP',
    },
    {
        uid: ChecklistItems.C172_AFTER_LANDING_LANDING_LIGHT,
        title: 'Landing Lights',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.C172_AFTER_LANDING_TAXI_LIGHT,
        title: 'Taxi Lights',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.C172_AFTER_LANDING_STROBE_LIGHT,
        title: 'Strobe Lights',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_AFTER_LANDING_ELEVATOR_TRIM,
        title: 'Elevator Trim',
        state: 'RESET TO NEUTRAL',
    },
    {
        uid: ChecklistItems.C172_AFTER_LANDING_TRANSPONDER,
        title: 'Transponder',
        state: 'STANDBY',
    },
    {
        uid: ChecklistItems.C172_PARKING_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172_PARKING_AVIONICS_SWITCHES,
        title: 'Avionics Switches (BUS 1 and BUS 2)',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_PARKING_ENGINE_IDLE,
        title: 'Engine Idle',
        state: 'CHECK 600-650 RPM',
    },
    {
        uid: ChecklistItems.C172_PARKING_MAGNETOS,
        title: 'Magnetos',
        state: 'CUTOFF TEST',
    },
    {
        uid: ChecklistItems.C172_PARKING_MIXTURE,
        title: 'Mixture',
        state: 'IDLE CUTOFF',
    },
    {
        uid: ChecklistItems.C172_SECURING_IGNITION,
        title: 'Ignition',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_SECURING_LANDING_LIGHT,
        title: 'Landing Light',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_SECURING_TAXI_LIGHT,
        title: 'Taxi Light',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_SECURING_NAV_LIGHT,
        title: 'Navigation Lights',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172_SECURING_FUEL_SELECTOR,
        title: 'Fuel Selector',
        state: 'LEFT OR RIGHT',
    },
]);
