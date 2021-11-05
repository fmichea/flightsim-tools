import { ChecklistTags } from 'lib/checklist/data/tags';
import { createMappingFunction } from 'lib/checklist/data/transforms';
import { ChecklistItems } from 'lib/checklist/data/listItems';

const addCRJ7Tags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.CRJ7, ChecklistTags.OFFICIAL],
});

export const CRJ7ChecklistItemsData = createMappingFunction(addCRJ7Tags)([
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_CIRCUIT_BREAKERS,
        title: 'Circuit Breakers',
        state: 'CLOSED',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_NOSEWHEEL,
        title: 'Nose-Wheel Steering Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_HYDRAULIC_PUMPS_1,
        title: 'Hydraulic Pumps',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_LANDING_GEAR,
        title: 'Landing Gear Lever',
        state: 'DOWN',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_FLIGHT_SPOILER_LEVER,
        title: 'Flight Spoiler Lever',
        state: 'RETRACTED',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_SLATS_FLAPS_LEVER,
        title: 'Slats / Flaps Lever',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_RADAR,
        title: 'Radar',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_ADG_MANUAL_RELEASE,
        title: 'ADG Manual Release',
        state: 'STOWED',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_EMERGENCY_FLAP_SWITCH,
        title: 'Emergency Flap Switch',
        state: 'NORMAL',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_BATTERY_MASTER_SWITCH,
        title: 'Battery Master Switch',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_APU,
        title: 'APU',
        state: 'ON/OFF',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_AC_ELECTRICS,
        title: 'AC Electrics',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_IRS,
        title: 'IRS',
        state: 'NAV',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_EMERGENCY_EQUIPMENT,
        title: 'Emergency Equipment',
        state: 'CHECKED',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_GEAR_SAFETY_PINS,
        title: 'Gear and Safety Pins',
        state: 'ON BOARD',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_AIRPLANE_DOCUMENTS,
        title: 'Airplane Documents',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_HYDRAULIC_PUMPS_2,
        title: 'Hydraulic Pumps (ALL / 3A)',
        state: 'ON / OFF', // FIXME
    },
    {
        uid: ChecklistItems.CRJ7_SAFETY_CHECK_FMS_INITIALIZATION,
        title: 'FMS Initialization',
        state: 'COMPLETE',
    },
    {
        uid: ChecklistItems.CRJ7_CABIN_INSPECTION_CABIN_INSPECTION,
        title: 'Cabin Inspection',
        state: 'ACCOMPLISH',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CRJ7_CABIN_INSPECTION_WALKAROUND_INSPECTION,
        title: 'Walk-Around Inspection',
        state: 'ACCOMPLISH',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_CREW_OXYGEN,
        title: 'Crew Oxygen and Masks',
        subTitle: 'Only First Flight of the Day',
        state: 'CHECKED', // FIXME
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_AUDIO_WARNING_PANEL,
        title: 'Audio Warning Panel',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_ELECTRICAL_POWER_PANEL,
        title: 'Electrical Power Panel',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_FIRE_DETECTION,
        title: 'Fire Detection / FIREX Monitor Test',
        subTitle: 'Only First Flight of the Day',
        state: 'COMPLETE',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_EXTERNAL_LIGHTS_PANEL,
        title: 'External Lights Panel',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_FUEL_PANEL,
        title: 'Fuel Panel',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_BLEED_AIR_PANEL,
        title: 'Bleed Air Panel',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_APU_PANEL,
        title: 'APU Panel',
        state: 'ON/OFF',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_START_PANEL,
        title: 'Start Panel',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_HYDRAULIC_PANEL,
        title: 'Hydraulic Panel',
        state: 'CHECKED, AUTO, ON (3A)',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_ELT_SWITCH,
        title: 'ELT Switch',
        state: 'ARM/RESET',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_CABIN_PRESSURE_PANEL,
        title: 'Cabin Pressure Panel',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_AIR_CONDITIONING_PANEL,
        title: 'Air Conditioning Panel',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_ANTIICE_PANEL,
        title: 'Anti-Ice Panel',
        state: 'CHECKED/COMPLETE',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_WINDSHIELD_HEAT,
        title: 'Windshield Heat',
        state: 'LOW',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_EMERGENCY_LIGHTS,
        title: 'Emergency Lights Switch',
        state: 'ARMED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_STANDBY_COMPASS,
        title: 'Standby Compass',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_NOSEWHEEL,
        title: 'Nose-Wheel Steering Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_CLOCKS,
        title: 'Clocks',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_INSTRUMENT_PANELS,
        title: 'Instrument Panels',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_UPPER_PEDESTAL,
        title: 'Upper Pedestal',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_THRUST_LEVER_QUADRANT,
        title: 'Thrust Lever Quadrant',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_AVIONICS,
        title: 'Avionics / Radio Tuning Panels',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_TRIMS,
        title: 'Trims',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_YAW_DAMPER,
        title: 'Yaw Damper',
        state: 'ENGAGE',
    },
    {
        uid: ChecklistItems.CRJ7_ORIGINATING_CHECK_SOURCE_SELECT_PANEL,
        title: 'Source Select Panel',
        state: 'NORM',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_START_CHECK_PASS_SIGNS,
        title: 'Passenger Signs',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_START_CHECK_LANDING_ELEVATION,
        title: 'Landing Elevation',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_START_CHECK_ALTIMETERS,
        title: 'Altimeters',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_START_CHECK_FMS,
        title: 'FMS',
        state: 'CHECKED, SET',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_START_CHECK_IRS,
        title: 'IRS',
        state: 'ALIGNED, NAV',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_START_CHECK_RADIOS,
        title: 'Radios and Nav Aids',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_START_CHECK_TAKEOFF_BRIEFING,
        title: 'Take-Off Briefing',
        state: 'COMPLETE',
    },
    {
        uid: ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_PERSONAL_ELECTRONIC_DEVICES,
        title: 'Personal Electronic Devices',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_APU,
        title: 'APU',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_ELECTRICS,
        title: 'Electrics',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_TAKEOFF_DATA,
        title: 'Take-Off Data',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_DOORS,
        title: 'Doors',
        state: 'CLOSED / LOCKED',
    },
    {
        uid: ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_BEACON,
        title: 'Beacon',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_FUEL_PUMPS,
        title: 'Fuel Pumps and Quantity',
        state: 'ON, CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_HYDRAULIC_PUMPS,
        title: 'Hydraulic Pumps',
        state: 'AUTO / ON',
    },
    {
        uid: ChecklistItems.CRJ7_CLEARED_TO_START_CHECK_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'ON / OFF',
    },
    {
        uid: ChecklistItems.CRJ7_AFTER_START_CHECK_GENERATORS,
        title: 'Generators',
        state: 'AUTO',
    },
    {
        uid: ChecklistItems.CRJ7_AFTER_START_CHECK_ELECTRICS,
        title: 'Electrics',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_AFTER_START_CHECK_BLEED_VALVES,
        title: 'Bleed Valves',
        state: 'AUTO',
    },
    {
        uid: ChecklistItems.CRJ7_AFTER_START_CHECK_PACKS,
        title: 'Packs',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CRJ7_AFTER_START_CHECK_APU,
        title: 'APU',
        state: 'ON / OFF',
    },
    {
        uid: ChecklistItems.CRJ7_AFTER_START_CHECK_ANTIICE,
        title: 'Anti-Ice',
        state: 'ON / OFF',
    },
    {
        uid: ChecklistItems.CRJ7_AFTER_START_CHECK_NOSEWHEEL,
        title: 'Nose-Wheel Steering Switch',
        state: 'ARMED',
    },
    {
        uid: ChecklistItems.CRJ7_TAXI_CHECK_SLATS_FLAPS,
        title: 'Slats / Flaps',
        state: 'SET, CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_TAXI_CHECK_FLIGHT_CONTROLS,
        title: 'Flight Controls',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_TAXI_CHECK_TRIMS,
        title: 'Trims',
        state: 'GREEN, CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_TAXI_CHECK_THRUST_REVERSERS,
        title: 'Thrust Reversers',
        state: 'ARMED',
    },
    {
        uid: ChecklistItems.CRJ7_TAXI_CHECK_FLIGHT_INSTRUMENTS,
        title: 'Flight Instruments',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_TAXI_CHECK_BRAKE_TEMPS,
        title: 'Brake Temperatures',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_TAKEOFF_CHECK_EXTERNAL_LIGHTS,
        title: 'External Lights',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_TAKEOFF_CHECK_FUEL_XFLOW,
        title: 'Fuel Cross-Flow (XFLOW)',
        state: 'MANUAL',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_TAKEOFF_CHECK_FLIGHT_ATTENDANT,
        title: 'Flight Attendants',
        state: 'ADVISED',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_TAKEOFF_CHECK_TRANSPONDER,
        title: 'Transponder / TCAS',
        state: 'ON, SET',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_TAKEOFF_CHECK_RADAR,
        title: 'Radar / Terrain Display',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_TAKEOFF_CHECK_CAS,
        title: 'CAS',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_CLIMB_CHECK_FUEL_XFLOW,
        title: 'Fuel Cross-Flow (XFLOW)',
        state: 'AUTO',
    },
    {
        uid: ChecklistItems.CRJ7_CLIMB_CHECK_BLEEDS_AND_APU,
        title: 'Bleeds and APU',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ7_CLIMB_CHECK_THRUST_REVERSERS,
        title: 'Thrust Reversers',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_CLIMB_CHECK_CAS,
        title: 'CAS',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_DESCENT_CHECK_LANDING_ELEVATION,
        title: 'Landing Elevation',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ7_DESCENT_CHECK_FUEL,
        title: 'Fuel',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_DESCENT_CHECK_TCAS,
        title: 'TCAS',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ7_DESCENT_CHECK_RADAR,
        title: 'Radar',
        state: 'ON / OFF',
    },
    {
        uid: ChecklistItems.CRJ7_DESCENT_CHECK_CAS,
        title: 'CAS',
        state: 'CHECKED',
    },
    {
        uid: ChecklistItems.CRJ7_DESCENT_CHECK_LANDING_DATA,
        title: 'Landing Data',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ7_DESCENT_CHECK_APPROACH_BRIEFING,
        title: 'Approach Briefing',
        state: 'COMPLETE',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_LANDING_CHECK_FLIGHT_ATTENDANT,
        title: 'Flight Attendants',
        state: 'ADVISED',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_LANDING_CHECK_PASSENGER_SIGNS,
        title: 'Passenger Signs',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_LANDING_CHECK_THRUST_REVERSERS,
        title: 'Thrust Reversers',
        state: 'ARMED',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_LANDING_CHECK_LANDING_GEAR,
        title: 'Landing Gear',
        state: 'DOWN',
    },
    {
        uid: ChecklistItems.CRJ7_BEFORE_LANDING_CHECK_FLAPS,
        title: 'Flaps',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ7_AFTER_LANDING_CHECK_APU,
        title: 'APU',
        state: 'ON / OFF',
    },
    {
        uid: ChecklistItems.CRJ7_AFTER_LANDING_CHECK_TRANSPONDER_RADAR,
        title: 'Transponder / Radar',
        state: 'STANDBY / OFF',
    },
    {
        uid: ChecklistItems.CRJ7_AFTER_LANDING_CHECK_FLAPS,
        title: 'Flaps',
        state: 'UP / ZERO',
    },
    {
        uid: ChecklistItems.CRJ7_AFTER_LANDING_CHECK_EXTERNAL_LIGHTS,
        title: 'External Lights',
        state: 'SET',
    },
    {
        uid: ChecklistItems.CRJ7_AFTER_LANDING_CHECK_PROBES,
        title: 'Probes',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_SHUTDOWN_CHECK_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'ON / OFF',
    },
    {
        uid: ChecklistItems.CRJ7_SHUTDOWN_CHECK_SEAT_BELTS,
        title: 'Seat Belts',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_SHUTDOWN_CHECK_THRUST_LEVERS,
        title: 'Thrust Levers',
        state: 'SHUT OFF',
    },
    {
        uid: ChecklistItems.CRJ7_SHUTDOWN_CHECK_ANTIICE,
        title: 'Anti-Ice',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_SHUTDOWN_CHECK_FUEL_PUMPS,
        title: 'Fuel Pumps',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_SHUTDOWN_CHECK_BEACON,
        title: 'Beacon',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_SHUTDOWN_CHECK_NOSEWHEEL,
        title: 'Nose-Wheel Steering Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_TERMINATING_CHECK_CHOCKS_AND_BRAKES,
        title: 'Chocks And Brakes',
        state: 'IN / OFF',
    },
    {
        uid: ChecklistItems.CRJ7_TERMINATING_CHECK_IRS,
        title: 'IRS',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_TERMINATING_CHECK_EMERGENCY_LIGHTS,
        title: 'Emergency Lights Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_TERMINATING_CHECK_ANTIICE,
        title: 'Anti-Ice',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_TERMINATING_CHECK_HYDRAULIC_PUMPS,
        title: 'Hydraulic Pumps',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_TERMINATING_CHECK_EXTERNAL_LIGHTS,
        title: 'External Lights',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_TERMINATING_CHECK_APU,
        title: 'APU',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_TERMINATING_CHECK_BATTERY_MASTER,
        title: 'Battery Master Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CRJ7_TERMINATING_CHECK_COCKPIT_LIGHTS,
        title: 'Cockpit Lights',
        state: 'OFF',
    },
]);
