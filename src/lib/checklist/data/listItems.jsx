const cj4Items = Object.freeze({
    // Before Engine Start
    CJ4_BEFORE_START_BATTERY_SWITCH: 'cj4-before-start-battery-switch',
    CJ4_BEFORE_START_EMERGENCY_LIGHTS_SWITCH: 'cj4-before-start-emergency-lights-switch',
    CJ4_BEFORE_START_STANDBY_FLIGHT_DISPLAY_SWITCH: 'cj4-before-start-standby-flight-display-switch',
    CJ4_BEFORE_START_AVIONICS_SWITCH: 'cj4-before-start-avionics-switch',
    CJ4_BEFORE_START_PARKING_BRAKES: 'cj4-before-start-parking-brakes',
    CJ4_BEFORE_START_WHEEL_CHOCKS: 'cj4-before-start-wheel-chocks',
    CJ4_BEFORE_START_CABIN_DOOR: 'cj4-before-start-cabin-door',
    CJ4_BEFORE_START_PASSENGER_BRIEFING: 'cj4-before-start-passenger-briefing',
    CJ4_BEFORE_START_PILOTS_SEATS_ADJUSTED: 'cj4-before-start-pilots-seats-adjusted',
    CJ4_BEFORE_START_EXTERIOR_LIGHTS: 'cj4-before-start-exterior-lights',
    CJ4_BEFORE_START_EICAS: 'cj4-before-start-eicas',
    CJ4_BEFORE_START_FMS: 'cj4-before-start-fms',
    CJ4_BEFORE_START_CLIMATE_CONTROL: 'cj4-before-start-climate-control-selector',

    // Engine Start
    CJ4_ENGINE_START_THROTTLES: 'cj4-engine-start-throttles',
    CJ4_ENGINE_START_STARTER_BUTTON_PUSH: 'cj4-engine-start-starter-button-push',
    CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN: 'cj4-engine-start-runstop-button-to-run',
    CJ4_ENGINE_START_ITT_RISE: 'cj4-engine-start-itt-rise',
    CJ4_ENGINE_START_EICAS_CHECK: 'cj4-engine-start-eicas-check',
    CJ4_ENGINE_START_OPPOSITE_ENGINE_START: 'cj4-engine-start-opposite-engine-start',
    CJ4_ENGINE_START_EXTERNAL_POWER_DISCONNECT: 'cj4-engine-start-external-power-disconnect',
    CJ4_ENGINE_START_ELECTRICAL_SYSTEM_CHECK: 'cj4-engine-start-electrical-system-check',

    // Before Taxi
    CJ4_BEFORE_TAXI_AVIONICS_SWITCH: 'cj4-before-taxi-avionics-switch',
    CJ4_BEFORE_TAXI_CLIMATE_CONTROL_SWITCH: 'cj4-before-taxi-climate-control-switch',
    CJ4_BEFORE_TAXI_PASSENGER_LIGHTS_SAFETY: 'cj4-before-taxi-passenger-lights-safety',
    CJ4_BEFORE_TAXI_TRIMS: 'cj4-before-taxi-trims',
    CJ4_BEFORE_TAXI_FLIGHT_CONTROLS_FREE: 'cj4-before-taxi-flight-controls-free',
    CJ4_BEFORE_TAXI_SPEEDBRAKE_CHECK: 'cj4-before-taxi-speedbrake-check',
    CJ4_BEFORE_TAXI_FLAPS: 'cj4-before-taxi-flaps-set',
    CJ4_BEFORE_TAXI_HYDRAULIC_PRESSURE_CHECK: 'cj4-before-taxi-hydraulic-pressure-check',
    CJ4_BEFORE_TAXI_ENGINE_ONLY_ANTI_ICE: 'cj4-before-taxi-engine-only-anti-ice',
    CJ4_BEFORE_TAXI_TAKEOFF_DATA: 'cj4-before-taxi-takeoff-data',
    CJ4_BEFORE_TAXI_AVIONICS_CHECK: 'cj4-before-taxi-avionics-check',
    CJ4_BEFORE_TAXI_AUTOPILOT_CONNECT_DISCONNECT: 'cj4-before-taxi-autopilot-connect-disconnect',
    CJ4_BEFORE_TAXI_ALTIMETER_SET: 'cj4-before-taxi-altimeter-set',
    CJ4_BEFORE_TAXI_PRESSURIZATION_CHECK: 'cj4-before-taxi-pressurization-check',
    CJ4_BEFORE_TAXI_EICAS_CHECK: 'cj4-before-taxi-eicas-check',
    CJ4_BEFORE_TAXI_AFT_DIVIDER_DOORS_OPEN: 'cj4-before-taxi-aft-divider-doors-open',

    // Taxi
    CJ4_TAXI_EXTERIOR_LIGHTS: 'cj4-taxi-exterior-lights',
    CJ4_TAXI_BRAKES_APPLIED: 'cj4-taxi-brakes-applied',
    CJ4_TAXI_PARKING_BRAKE_RELEASED: 'cj4-taxi-parking-brake-released',
    CJ4_TAXI_BRAKES_CHECK: 'cj4-taxi-brakes-check',
    CJ4_TAXI_NOSE_WHEEL_STEERING_CHECK: 'cj4-taxi-nose-wheel-steering-check',
    CJ4_TAXI_FLIGHT_INSTRUMENTS_CHECK: 'cj4-taxi-flight-instruments-check',

    // Before Take-Off
    CJ4_BEFORE_TAKEOFF_ICE_PROTECTION_SYSTEM_CHECK: 'cj4-before-takeoff-ice-protection-system-check',
    CJ4_BEFORE_TAKEOFF_RUDDER_BIAS_SYSTEM_CHECK: 'cj4-before-takeoff-rudder-bias-system-check',
    CJ4_BEFORE_TAKEOFF_SEATS_UPRIGHT: 'cj4-before-takeoff-seats-upright',
    CJ4_BEFORE_TAKEOFF_FLAPS_SET: 'cj4-before-takeoff-flaps-set',
    CJ4_BEFORE_TAKEOFF_SPEEDBRAKES_OFF: 'cj4-before-takeoff-speedbrakes-off',
    CJ4_BEFORE_TAKEOFF_TRIMS_CHECK: 'cj4-before-takeoff-trims-check',
    CJ4_BEFORE_TAKEOFF_CREW_BRIEFING: 'cj4-before-takeoff-crew-briefing',
    CJ4_BEFORE_TAKEOFF_TCAS_TARA: 'cj4-before-takeoff-tcas-tara',
    CJ4_BEFORE_TAKEOFF_RADAR_AS_REQUIRED: 'cj4-before-takeoff-radar-as-required',
    CJ4_BEFORE_TAKEOFF_GA_BUTTON_PUSH: 'cj4-before-takeoff-ga-button-push',
    CJ4_BEFORE_TAKEOFF_BATTERY_AMPS_CHECK: 'cj4-before-takeoff-battery-amps-check',
    CJ4_BEFORE_TAKEOFF_ICE_PROTECTION_SYSTEM_AS_REQUIRED: 'cj4-before-takeoff-ice-protection-system-as-required',
    CJ4_BEFORE_TAKEOFF_PITOT_STATIC_HEAT_BUTTONS: 'cj4-before-takeoff-pitot-static-heat-buttons',
    CJ4_BEFORE_TAKEOFF_EICAS_CHECK: 'cj4-before-takeoff-eicas-check',
    CJ4_BEFORE_TAKEOFF_EXTERIOR_LIGHTS: 'cj4-before-takeoff-exterior-lights',

    // Takeoff
    CJ4_TAKEOFF_THROTTLES: 'cj4-takeoff-throttles',
    CJ4_TAKEOFF_N1_COMMAND_BUGS_GREEN: 'cj4-takeoff-n1-command-bugs-green',
    CJ4_TAKEOFF_BRAKES_RELEASED: 'cj4-takeoff-brakes-released',
    CJ4_TAKEOFF_CONTROL_WHEEL_ROTATE_AT_VR: 'cj4-takeoff-control-wheel-rotate-at-vr',

    // After Takeoff
    CJ4_AFTER_TAKEOFF_LANDING_GEAR_UP: 'cj4-after-takeoff-landing-gear-up',
    CJ4_AFTER_TAKEOFF_FLAPS_0: 'cj4-after-takeoff-flaps-0',
    CJ4_AFTER_TAKEOFF_THROTTLES_CLIMB: 'cj4-after-takeoff-throttles-climb',
    CJ4_AFTER_TAKEOFF_YAW_DAMPER_ON: 'cj4-after-takeoff-yaw-damper-on',
    CJ4_AFTER_TAKEOFF_AUTOPILOT_AS_REQUIRED: 'cj4-after-takeoff-autopilot-as-required',
    CJ4_AFTER_TAKEOFF_ICE_PROTECTION_SYSTEM_CHECK: 'cj4-after-takeoff-ice-protection-system-check',
    CJ4_AFTER_TAKEOFF_PASSENGER_LIGHTS_AS_REQUIRED: 'cj4-after-takeoff-passenger-lights-as-required',
    CJ4_AFTER_TAKEOFF_EXTERIOR_LIGHTS: 'cj4-after-takeoff-exterior-lights-as-required',
    CJ4_AFTER_TAKEOFF_PRESSURIZATION_CHECK: 'cj4-after-takeoff-pressurization-check',
    CJ4_AFTER_TAKEOFF_ALTIMETERS_SET: 'cj4-after-takeoff-altimeters-set',

    // Cruise
    CJ4_CRUISE_THROTTLES: 'cj4-cruise-throttles',
    CJ4_CRUISE_PRESSURIZATION: 'cj4-cruise-pressurization',
    CJ4_CRUISE_ICE_PROTECTION_SYSTEMS: 'cj4-cruise-ice-protection-systems',

    // Descent
    CJ4_DESCENT_PRESSURIZATION: 'cj4-descent-pressurization',
    CJ4_DESCENT_ICE_PROTECTION_SYSTEMS: 'cj4-descent-ice-protection-systems',
    CJ4_DESCENT_ALTIMETERS: 'cj4-descent-altimeters',
    CJ4_DESCENT_EXTERIOR_LIGHTS: 'cj4-descent-exterior-lights',

    // Approach
    CJ4_APPROACH_LANDING_DATA: 'cj4-approach-landing-data',
    CJ4_APPROACH_CREW_BRIEFING: 'cj4-approach-crew-briefing',
    CJ4_APPROACH_AVIONICS_FLIGHT_INSTRUMENTS: 'cj4-approach-avionics-flight-instruments',
    CJ4_APPROACH_MINIMUMS: 'cj4-approach-minimums',
    CJ4_APPROACH_FUEL_TRANSFER_SELECTOR: 'cj4-approach-fuel-transfer-selector',
    CJ4_APPROACH_EXTERIOR_LIGHTS: 'cj4-approach-exterior-lights',
    CJ4_APPROACH_ICE_PROTECTION_SYSTEMS: 'cj4-approach-ice-protection-systems',
    CJ4_APPROACH_FLAPS: 'cj4-approach-flaps',
    CJ4_APPROACH_PASSENGER_BRIEFING: 'cj4-approach-passenger-briefing',
    CJ4_APPROACH_SEATS_UPRIGHT: 'cj4-approach-seats-upright',
    CJ4_APPROACH_SEAT_BELTS: 'cj4-approach-belts',
    CJ4_APPROACH_PASSENGER_LIGHTS: 'cj4-approach-passenger-lights',
    CJ4_APPROACH_PRESSURIZATION: 'cj4-approach-pressurization',

    // Before Landing
    CJ4_BEFORE_LANDING_LANDING_GEAR: 'cj4-before-landing-landing-gear',
    CJ4_BEFORE_LANDING_FLAPS: 'cj4-before-landing-flaps',
    CJ4_BEFORE_LANDING_SPEEDBRAKES_OFF: 'cj4-before-landing-speedbrakes-off',
    CJ4_BEFORE_LANDING_AIRSPEED_VREF: 'cj4-before-landing-airspeed-vref',
    CJ4_BEFORE_LANDING_AUTOPILOT_AND_YAW_DAMPER: 'cj4-before-landing-autopilot-and-yaw-damper',

    // Landing
    CJ4_LANDING_THROTTLES: 'cj4-landing-throttles',
    CJ4_LANDING_BRAKES: 'cj4-landing-brakes',
    CJ4_LANDING_GROUND_SPOILERS: 'cj4-landing-ground-spoilers',

    // All Engine Go-Around
    CJ4_GOAROUND_GA_BUTTON: 'cj4-goaround-ga-button',
    CJ4_GOAROUND_THROTTLES_1: 'cj4-goaround-throttles-1',
    CJ4_GOAROUND_PITCH_ATTITUDE: 'cj4-goaround-pitch-altitude',
    CJ4_GOAROUND_FLAPS_1: 'cj4-goaround-flaps-1',
    CJ4_GOAROUND_LANDING_GEAR: 'cj4-goaround-landing-gear',
    CJ4_GOAROUND_FLAPS_2: 'cj4-goaround-flaps-2',
    CJ4_GOAROUND_AIRSPEED: 'cj4-goaround-airspeed',
    CJ4_GOAROUND_THROTTLES_2: 'cj4-goaround-throttles',
    CJ4_GOAROUND_YAW_DAMPER: 'cj4-goaround-yaw-damper',
    CJ4_GOAROUND_AUTOPILOT: 'cj4-goaround-autopilot',

    // After Landing
    CJ4_AFTER_LANDING_SPEEDBRAKES: 'cj4-after-landing-speedbrakes',
    CJ4_AFTER_LANDING_FLAPS: 'cj4-after-landing-flaps',
    CJ4_AFTER_LANDING_PITOT_STATIC_HEAT: 'cj4-after-landing-pitot-static-heat',
    CJ4_AFTER_LANDING_ICE_PROTECTION_SYSTEMS: 'cj4-after-landing-ice-protection-systems',
    CJ4_AFTER_LANDING_RADAR: 'cj4-after-landing-radar',
    CJ4_AFTER_LANDING_EXTERIOR_LIGHTS: 'cj4-after-landing-exterior-lights',

    // Shutdown
    CJ4_SHUTDOWN_PARKING_BRAKE: 'cj4-shutdown-parking-great',
    CJ4_SHUTDOWN_EMERGENCY_LIGHTS: 'cj4-shutdown-emergency-lights-switch',
    CJ4_SHUTDOWN_STANDBY_FLIGHT_DISPLAY: 'cj4-shutdown-standby-flight-display',
    CJ4_SHUTDOWN_AVIONICS_SWITCH: 'cj4-shutdown-avionics-switch',
    CJ4_SHUTDOWN_CLIMATE_CONTROL_SELECTOR: 'cj4-shutdown-climate-control-selector',
    CJ4_SHUTDOWN_ICE_PROTECTION_SYSTEMS: 'cj4-shutdown-ice-protection-systems',
    CJ4_SHUTDOWN_THROTTLES: 'cj4-shutdown-throttles',
    CJ4_SHUTDOWN_ENGINE_RUNSTOP_BUTTONS: 'cj4-shutdown-engine-runstop-buttons',
    CJ4_SHUTDOWN_EXTERIOR_LIGHTS: 'cj4-shutdown-exterior-lights',
    CJ4_SHUTDOWN_BATTERY_SWITCH: 'cj4-shutdown-battery-switch',
    CJ4_SHUTDOWN_CONTROL_LOCK: 'cj4-shutdown-control-lock',
    CJ4_SHUTDOWN_ENGINE_COVERS: 'cj4-shutdown-engine-covers',
});

const cj4ExtItems = Object.freeze({
    CJ4EXT_BEFORE_START_EXTERNAL_POWER: 'cj4ext-before-start-external-power',
    CJ4EXT_BEFORE_TAKEOFF_RUNWAY_HEADING: 'cj4ext-before-takeoff-runway-heading',
    CJ4EXT_DESCENT_INTERIOR_LIGHTS: 'cj4ext-descent-interior-lights',
});

const vatsimItems = Object.freeze({
    VATSIM_METAR_ATIS_PRE_FLIGHT: 'vatsim-metar-atis-pre-flight',
    VATSIM_FILE_FLIGHT_PLAN: 'vatsim-file-flight-plan',
    VATSIM_REQUEST_INITIAL_CLEARANCE: 'vatsim-initial-clearance',
    VATSIM_DEPARTURE_SETTINGS: 'vatsim-departure-settings',
    VATSIM_TAXI_CLEARANCE: 'vatsim-taxi-clearance',
    VATSIM_TAXI_MODE_CHARLIE: 'vatsim-taxi-mode-charlie',
    VATSIM_TAKEOFF_CLEARANCE: 'vatsim-takeoff-clearance',
    VATSIM_DESCENT_CLEARANCE: 'vatsim-descent-clearance',
    VATSIM_APPROACH_CLEARANCE: 'vatsim-approach-clearance',
    VATSIM_LANDING_CLEARANCE: 'vatsim-landing-clearance',
    VATSIM_GOAROUND_ANNOUNCE: 'vatsim-goaround-announce',
    VATSIM_LANDING_CLEAR_OF_RUNWAY: 'vatsim-landing-clear-of-runway',
    VATSIM_DISCONNECT_GOODBYE: 'vatsim-disconnect-goodbye',
});

const simulatorSetupItems = Object.freeze({
    SIMSETUP_PLAN_FLIGHT: 'simsetup-plan-flight',
    SIMSETUP_FLIGHT_TRACKING_START: 'simsetup-flight-tracking-start',
    SIMSETUP_FLIGHT_TRACKING_END: 'simsetup-flight-tracking-end',
    SIMSETUP_FLIGHT_RECORDING_START: 'simsetup-flight-recording-start',
    SIMSETUP_FLIGHT_RECORDING_END: 'simsetup-flight-recording-end',
    SIMSETUP_POST_FLIGHT_NOTES: 'simsetup-post-flight-notes',
});

export const ChecklistItems = Object.freeze({
    ...cj4Items,
    ...cj4ExtItems,
    ...vatsimItems,
    ...simulatorSetupItems,
});
