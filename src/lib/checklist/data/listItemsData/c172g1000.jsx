import { createMappingFunction } from 'lib/checklist/data/transforms';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { ChecklistItems } from 'lib/checklist/data/listItems';

const addC172G1000Tags = (value) => ({
    ...value,
    tags: [
        ...value.tags,
        ChecklistTags.OFFICIAL,
        ChecklistTags.C172,
        ChecklistTags.C172_G1000,
    ],
});

export const C172G1000ChecklistItemsData = createMappingFunction(addC172G1000Tags)([
    {
        uid: ChecklistItems.C172G1000_PREFLIGHT_MASTER_SWITCHES_1,
        title: 'Master Switches (ALT and BAT)',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172G1000_PREFLIGHT_PFD,
        title: 'Primary Flight Display (PFD)',
        state: 'CHECK ON',
    },
    {
        uid: ChecklistItems.C172G1000_PREFLIGHT_OIL_PRESSURE_ANNUNCIATOR,
        title: 'Oil Pressure Annunciator',
        state: 'CHECK ON',
    },
    {
        uid: ChecklistItems.C172G1000_PREFLIGHT_LOW_VACUUM_ANNUNCIATOR,
        title: 'Low Vacuum Annunciator',
        state: 'CHECK ON',
    },
    {
        uid: ChecklistItems.C172G1000_PREFLIGHT_AVIONICS_SWITCH_1_ON,
        title: 'Avionics Switch (BUS 1)',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172G1000_PREFLIGHT_AVIONICS_SWITCH_1_FAN,
        title: 'Forward Avionics Fan',
        state: 'CHECK FAN IS HEARD',
    },
    {
        uid: ChecklistItems.C172G1000_PREFLIGHT_AVIONICS_SWITCH_1_OFF,
        title: 'Avionics Switch (BUS 1)',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172G1000_PREFLIGHT_AVIONICS_SWITCH_2_ON,
        title: 'Avionics Switch (BUS 2)',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172G1000_PREFLIGHT_AVIONICS_SWITCH_2_FAN,
        title: 'Aft Avionics Fan',
        state: 'CHECK FAN IS HEARD',
    },
    {
        uid: ChecklistItems.C172G1000_PREFLIGHT_AVIONICS_SWITCH_2_OFF,
        title: 'Avionics Switch (BUS 2)',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172G1000_PREFLIGHT_LOW_VOLTS_ANNUNCIATOR,
        title: 'Low Volts Annunciator',
        state: 'CHECK ON',
    },
    {
        uid: ChecklistItems.C172G1000_PREFLIGHT_MASTER_SWITCHES_2,
        title: 'Master Switches (ALT and BAT)',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172G1000_PREFLIGHT_ELEVATOR_TRIM,
        title: 'Elevator Trim',
        state: 'TAKE-OFF POSITION',
    },
    {
        uid: ChecklistItems.C172G1000_BEFORE_START_BRAKES,
        title: 'Brakes',
        state: 'TEST AND SET',
    },
    {
        uid: ChecklistItems.C172G1000_BEFORE_START_CIRCUIT_BREAKERS,
        title: 'Circuit Breakers',
        state: 'ALL PUSHED',
    },
    {
        uid: ChecklistItems.C172G1000_ENGINE_START_STANDBY_BATT_TEST,
        title: 'Standby Battery Switch (STBY BATT)',
        state: 'TEST, HOLD FOR 20 SEC',
    },
    {
        uid: ChecklistItems.C172G1000_ENGINE_START_STANDBY_BATT_ARM,
        title: 'Standby Battery Switch (STBY BATT)',
        state: 'ARM, VERIFY PFD ON',
    },
    {
        uid: ChecklistItems.C172G1000_ENGINE_START_ENGINE_INDICATING_SYSTEM,
        title: 'Engine Indicating System',
        state: 'CHECK PARAMETERS',
    },
    {
        uid: ChecklistItems.C172G1000_ENGINE_START_BUS_E_VOLTS,
        title: 'BUS E Volts',
        state: 'CHECK 24 VOLS MINIMUM',
    },
    {
        uid: ChecklistItems.C172G1000_ENGINE_START_BUS_M_VOLTS,
        title: 'M BUS Volts',
        state: 'CHECK 1.5 VOLTS OR LESS',
    },
    {
        uid: ChecklistItems.C172G1000_ENGINE_START_BATT_S_AMPS,
        title: 'Battery S Amps',
        state: 'CHECK, VERIFY DISCHARGE',
    },
    {
        uid: ChecklistItems.C172G1000_ENGINE_START_STANDBY_BATT_ANNUNCIATOR,
        title: 'Standby Battery Annunciator',
        state: 'CHECK ON',
    },
    {
        uid: ChecklistItems.C172G1000_ENGINE_START_MASTER_SWITCH,
        title: 'Master Switches (ALT and BAT)',
        state: 'ON',
    },
    {
        uid: ChecklistItems.C172G1000_AFTER_START_AMPS,
        title: 'Amps (M BATT and BATT S)',
        state: 'CHECK, VERIFY CHARGE SHOWN',
    },
    {
        uid: ChecklistItems.C172G1000_AFTER_START_LOW_VOLTS_ANNUNCIATOR,
        title: 'Low Volts Annunciator',
        state: 'CHECK OFF',
    },
    {
        uid: ChecklistItems.C172G1000_RUNUP_DOORS,
        title: 'Doors',
        state: 'CLOSED AND LOCKED',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.C172G1000_RUNUP_FLIGHT_INSTRUMENTS,
        title: 'Flight Instruments (PFD)',
        state: 'CHECK NO RED X\'s',
    },
    {
        uid: ChecklistItems.C172G1000_RUNUP_ALTIMETER,
        title: 'Altimeter (PFD)',
        state: 'SET BARO',
    },
    {
        uid: ChecklistItems.C172G1000_RUNUP_STANDBY_ALTIMETER,
        title: 'Standby Altimeter',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172G1000_RUNUP_ALTITUDE_SELECT,
        title: 'ALT SEL',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172G1000_RUNUP_STANDBY_FLIGHT_INSTRUMENTS,
        title: 'Standby Flight Instruments',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172G1000_RUNUP_AP_TRIM_DISC,
        title: 'A/P Trim DISC Button',
        state: 'PRESS',
    },
    {
        uid: ChecklistItems.C172G1000_RUNUP_FLIGHT_DIRECTOR,
        title: 'Flight Director',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172G1000_RUNUP_ELEVATOR_TRIM,
        title: 'Elevator Trim',
        state: 'SET FOR TAKEOFF',
    },
    {
        uid: ChecklistItems.C172G1000_RUNUP_ENGINE_INDICATORS,
        title: 'Engine Indicators',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172G1000_RUNUP_ANMETERS_VOLTMETERS,
        title: 'Anmeters and Voltmeters',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.C172G1000_RUNUP_ANNUNCIATORS,
        title: 'Annunciators',
        state: 'CHECK NONE DISPLAYED',
    },
    {
        uid: ChecklistItems.C172G1000_BEFORE_TAKEOFF_COM_FREQS,
        title: 'COM Frequency(s)',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172G1000_BEFORE_TAKEOFF_NAV_FREQS,
        title: 'NAV Frequency(s)',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172G1000_BEFORE_TAKEOFF_FMS_GPS,
        title: 'FMS/GPS Flight PLan',
        state: 'AS DESIRED',
    },
    {
        uid: ChecklistItems.C172G1000_BEFORE_TAKEOFF_TRANSPONDER,
        title: 'Transponder',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172G1000_BEFORE_TAKEOFF_CDI_NAV_SOURCE,
        title: 'CDI Softkey',
        state: 'SELECT NAV SOURCE',
    },
    {
        uid: ChecklistItems.C172G1000_BEFORE_TAKEOFF_CABIN_PWR,
        title: 'Cabin Power 12V Switch',
        state: 'OFF',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.C172G1000_TAKEOFF_ANNUNCIATORS,
        title: 'Annunciators',
        state: 'CHECK NONE DISPLAYED',
    },
    {
        uid: ChecklistItems.C172G1000_CRUISE_FMS_GPS,
        title: 'FMS/GPS',
        state: 'REVIEW AND BRIEF',
    },
    {
        uid: ChecklistItems.C172G1000_DESCENT_ALTIMETER,
        title: 'Altimeter (PFD)',
        state: 'SET BARO',
    },
    {
        uid: ChecklistItems.C172G1000_DESCENT_STANDBY_ALTIMETER,
        title: 'Standby Altimeter',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172G1000_DESCENT_ALTITUDE_SELECT,
        title: 'ALT SEL',
        state: 'SET',
    },
    {
        uid: ChecklistItems.C172G1000_DESCENT_CDI_NAV,
        title: 'CDI Softkey',
        state: 'SELECT NAV SOURCE',
    },
    {
        uid: ChecklistItems.C172G1000_DESCENT_FMS_GPS,
        title: 'FMS/GPS',
        state: 'REVIEW AND BRIEF',
    },
    {
        uid: ChecklistItems.C172G1000_BEFORE_LANDING_CABIN_PWR,
        title: 'Cabin Power 12V Switch',
        state: 'OFF',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.C172G1000_SECURING_MASTER_SWITCHES,
        title: 'Master Switches (ALT and BAT)',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.C172G1000_SECURING_STANDBY_BATT,
        title: 'Standby Battery Switch (STBY BATT)',
        state: 'OFF',
    },
]);
