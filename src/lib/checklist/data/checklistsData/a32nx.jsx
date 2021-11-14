import React from 'react';

import { ExternalLink } from 'components/lib/ExternalLink';
import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistLists } from 'lib/checklist/data/lists';

export const A32NXChecklistData = {
    uid: Checklists.FLYBYWIRE_A32NX,
    title: 'FlyByWire A32NX',
    description: (
        <>
            The FlyByWire A32NX is a free and open source aircraft provided by
            {' '}
            <ExternalLink href="https://flybywiresim.com/">FlyByWire Simulations</ExternalLink>
            . The aircraft has an awesome, extensive and easy to use
            {' '}
            <ExternalLink href="https://docs.flybywiresim.com/pilots-corner/">documentation</ExternalLink>
            , with literally every button explained. This checklist is adapted from the information available there.
        </>
    ),
    lists: [
        {
            listName: ChecklistLists.ORIGINATING,
            items: [
                ChecklistItems.A32NX_ORIGINATING_COCKPIT_PREP,
                ChecklistItems.A32NX_ORIGINATING_PARKING_BRAKE,
                ChecklistItems.A32NX_ORIGINATING_LOWER_PEDESTAL,
                ChecklistItems.A32NX_ORIGINATING_THRUST_LEVER_QUADRANT,
                ChecklistItems.A32NX_ORIGINATING_LANDING_GEAR,
                ChecklistItems.A32NX_ORIGINATING_WIPER_SELECTORS,
                ChecklistItems.A32NX_ORIGINATING_EXT_POWER,
                ChecklistItems.A32NX_ORIGINATING_BATTERY,
                ChecklistItems.A32NX_ORIGINATING_APU,
                ChecklistItems.A32NX_ORIGINATING_ADIRS,
                ChecklistItems.A32NX_ORIGINATING_OXYGEN_PANEL,
                ChecklistItems.A32NX_ORIGINATING_EXTERIOR_LIGHTS,
                ChecklistItems.A32NX_ORIGINATING_SIGNS_PANEL,
                ChecklistItems.A32NX_ORIGINATING_ANTI_ICE_PANEL,
                ChecklistItems.A32NX_ORIGINATING_CABIN_PRESSURE_PANEL,
                ChecklistItems.A32NX_ORIGINATING_AIR_CONDITION_PANEL,
                ChecklistItems.A32NX_ORIGINATING_FUEL_PANEL,
                ChecklistItems.A32NX_ORIGINATING_HYDRAULIC_PANEL,
                ChecklistItems.A32NX_ORIGINATING_FIRE_PANEL_TEST,
                ChecklistItems.A32NX_ORIGINATING_VENTILATION_PANEL,
                ChecklistItems.A32NX_ORIGINATING_MAINTENANCE_PANEL,
                ChecklistItems.A32NX_ORIGINATING_EFIS_CONTROL_UNITS,
                ChecklistItems.A32NX_ORIGINATING_CENTER_INSTRUMENT_PANEL,
                ChecklistItems.A32NX_ORIGINATING_SWITCHING_PANEL,
                ChecklistItems.A32NX_ORIGINATING_EICAS,
                ChecklistItems.A32NX_ORIGINATING_RADIO_PANEL,
                ChecklistItems.A32NX_ORIGINATING_FUEL,
                // FIXME: ChecklistItems.A32NX_ORIGINATING_MCDU,
                ChecklistItems.A32NX_ORIGINATING_MCDU_SIMBRIEF,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_ENGINE_START,
            items: [
                ChecklistItems.A32NX_BEFORE_ENGINE_START_APU,
                ChecklistItems.A32NX_BEFORE_ENGINE_START_EXT_POWER,
                ChecklistItems.A32NX_BEFORE_ENGINE_START_TCAS,
                ChecklistItems.A32NX_BEFORE_ENGINE_START_DOORS,
                ChecklistItems.A32NX_BEFORE_ENGINE_START_BEACON,
                ChecklistItems.A32NX_BEFORE_ENGINE_START_THRUST_LEVERS,
                ChecklistItems.A32NX_BEFORE_ENGINE_START_PARKING_BRAKE,
                ChecklistItems.A32NX_BEFORE_ENGINE_START_BRAKE_PRESSURE,
            ],
        },
        {
            listName: ChecklistLists.ENGINE_START,
            items: [
                ChecklistItems.A32NX_ENGINE_START_CHRONO_START,
                ChecklistItems.A32NX_ENGINE_START_ENGINE_MODE,
                ChecklistItems.A32NX_ENGINE_START_ENG2_START,
                ChecklistItems.A32NX_ENGINE_START_ENG1_START,
            ],
        },
        {
            listName: ChecklistLists.AFTER_ENGINE_START,
            items: [
                ChecklistItems.A32NX_AFTER_ENGINE_START_ENGINE_MODE,
                ChecklistItems.A32NX_AFTER_ENGINE_START_FLAPS,
                ChecklistItems.A32NX_AFTER_ENGINE_START_GROUND_SPOILERS,
                ChecklistItems.A32NX_AFTER_ENGINE_START_APU_BLEED,
                ChecklistItems.A32NX_AFTER_ENGINE_START_APU,
                ChecklistItems.A32NX_AFTER_ENGINE_START_ANTI_ICE,
                ChecklistItems.A32NX_AFTER_ENGINE_START_PITCH_TRIM,
                ChecklistItems.A32NX_AFTER_ENGINE_START_RUDDER_TRIM,
                ChecklistItems.A32NX_AFTER_ENGINE_START_FLIGHT_CONTROLS,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_TAXI,
            items: [
                ChecklistItems.A32NX_BEFORE_TAXI_EXTERIOR_LIGHTS,
                ChecklistItems.A32NX_BEFORE_TAXI_RADAR,
                ChecklistItems.A32NX_BEFORE_TAXI_PREDICTIVE_WINDSHEAR_SYS,
                ChecklistItems.A32NX_BEFORE_TAXI_TCAS,
                ChecklistItems.A32NX_BEFORE_TAXI_PARKING_BRAKE,
                ChecklistItems.A32NX_BEFORE_TAXI_BRAKE_PRESSURE,
                ChecklistItems.A32NX_BEFORE_TAXI_TERRAIN_ON_ND,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_TAKEOFF,
            items: [
                ChecklistItems.A32NX_BEFORE_TAKEOFF_AUTOBRAKE,
                ChecklistItems.A32NX_BEFORE_TAKEOFF_CABIN_CREW,
                ChecklistItems.A32NX_BEFORE_TAKEOFF_TAKEOFF_CONFIG_TEST,
                ChecklistItems.A32NX_BEFORE_TAKEOFF_BRAKE_TEMP,
                ChecklistItems.A32NX_BEFORE_TAKEOFF_EXTERIOR_LIGHTS,
            ],
        },
        {
            listName: ChecklistLists.CLIMB,
            items: [
                ChecklistItems.A32NX_CLIMB_LANDING_GEAR,
                ChecklistItems.A32NX_CLIMB_AUTOPILOT,
                ChecklistItems.A32NX_CLIMB_THRUST_LEVERS,
                ChecklistItems.A32NX_CLIMB_FLAPS,
                ChecklistItems.A32NX_CLIMB_GROUND_SPOILERS,
                ChecklistItems.A32NX_CLIMB_EXTERIOR_LIGHTS,
                ChecklistItems.A32NX_CLIMB_SEATBELT_SIGNS,
                ChecklistItems.A32NX_CLIMB_ALTIMETER,
                ChecklistItems.A32NX_CLIMB_RADAR,
                ChecklistItems.A32NX_CLIMB_ANTI_ICE,
                ChecklistItems.A32NX_CLIMB_EFIS,
                ChecklistItems.A32NX_CLIMB_ECAM_MEMO,
                ChecklistItems.A32NX_CLIMB_NAVAIDS,
            ],
        },
        {
            listName: ChecklistLists.CRUISE,
            items: [
                ChecklistItems.A32NX_CRUISE_ECAM_MEMO,
                ChecklistItems.A32NX_CRUISE_FLIGHT_PROGRESS,
                ChecklistItems.A32NX_CRUISE_FUEL,
                ChecklistItems.A32NX_CRUISE_NAVIGATION_ACCURACY,
                ChecklistItems.A32NX_CRUISE_RADAR,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_DESCENT,
            items: [
                ChecklistItems.A32NX_BEFORE_DESCENT_WEATHER,
                ChecklistItems.A32NX_BEFORE_DESCENT_NAV_CHARTS,
                ChecklistItems.A32NX_BEFORE_DESCENT_EFB_LANDING_PERF,
                ChecklistItems.A32NX_BEFORE_DESCENT_MCDU,
                ChecklistItems.A32NX_BEFORE_DESCENT_GPWS_LDG_FLAPS_3,
                ChecklistItems.A32NX_BEFORE_DESCENT_LANDING_ELEV,
                ChecklistItems.A32NX_BEFORE_DESCENT_AUTO_BRAKE,
                ChecklistItems.A32NX_BEFORE_DESCENT_APPROACH_BRIEFING,
                ChecklistItems.A32NX_BEFORE_DESCENT_TERR_ON_ND,
                ChecklistItems.A32NX_BEFORE_DESCENT_RADAR,
                ChecklistItems.A32NX_BEFORE_DESCENT_ANTI_ICE,
            ],
        },
        {
            listName: ChecklistLists.DESCENT,
            items: [
                ChecklistItems.A32NX_DESCENT_MCDU_PERF,
                ChecklistItems.A32NX_DESCENT_ALTIMETER,
                ChecklistItems.A32NX_DESCENT_EXTERIOR_LIGHTS,
                ChecklistItems.A32NX_DESCENT_EFIS,
                ChecklistItems.A32NX_DESCENT_NAVAIDS,
            ],
        },
        {
            listName: ChecklistLists.APPROACH,
            items: [
                ChecklistItems.A32NX_APPROACH_FPLN_SEQUENCING,
                ChecklistItems.A32NX_APPROACH_APPROACH_PHASE,
                ChecklistItems.A32NX_APPROACH_MANAGED_SPEED,
                ChecklistItems.A32NX_APPROACH_SPEED_BRAKES,
                ChecklistItems.A32NX_APPROACH_RADAR,
                ChecklistItems.A32NX_APPROACH_FLAPS,
                ChecklistItems.A32NX_APPROACH_LANDING_GEAR,
                ChecklistItems.A32NX_APPROACH_GROUND_SPOILERS,
                ChecklistItems.A32NX_APPROACH_EXTERIOR_LIGHTS,
                ChecklistItems.A32NX_APPROACH_AUTO_THROTTLE,
                ChecklistItems.A32NX_APPROACH_ANTI_ICE,
                ChecklistItems.A32NX_APPROACH_SLIDING_TABLE,
                ChecklistItems.A32NX_APPROACH_CABIN_CREW,
                ChecklistItems.A32NX_APPROACH_LANDING_MEMO,
            ],
        },
        {
            listName: ChecklistLists.BEFORE_LANDING,
            items: [
                ChecklistItems.A32NX_BEFORE_LANDING_FLAPS,
                ChecklistItems.A32NX_BEFORE_LANDING_LANDING_GEAR,
            ],
        },
        {
            listName: ChecklistLists.AFTER_LANDING,
            items: [
                ChecklistItems.A32NX_AFTER_LANDING_GROUND_SPOILERS,
                ChecklistItems.A32NX_AFTER_LANDING_EXTERIOR_LIGHTS,
                ChecklistItems.A32NX_AFTER_LANDING_RADAR,
                ChecklistItems.A32NX_AFTER_LANDING_PREDICTIVE_WINDSHEAR_SYSTEM,
                ChecklistItems.A32NX_AFTER_LANDING_ENG_MODE,
                ChecklistItems.A32NX_AFTER_LANDING_TCAS,
                ChecklistItems.A32NX_AFTER_LANDING_ATC,
                ChecklistItems.A32NX_AFTER_LANDING_APU,
            ],
        },
        {
            listName: ChecklistLists.PARKING,
            items: [
                ChecklistItems.A32NX_PARKING_ANTI_ICE,
                ChecklistItems.A32NX_PARKING_PARKING_BRAKE,
                ChecklistItems.A32NX_PARKING_ENGINE_MASTERS,
                ChecklistItems.A32NX_PARKING_SEAT_BELT_SIGNS,
                ChecklistItems.A32NX_PARKING_FUEL_PUMPS,
                ChecklistItems.A32NX_PARKING_ATC,
                ChecklistItems.A32NX_PARKING_EXTERIOR_LIGHTS,
                ChecklistItems.A32NX_PARKING_EXT_POWER,
            ],
        },
        {
            listName: ChecklistLists.SECURING,
            items: [
                ChecklistItems.A32NX_SECURING_PARKING_BRAKE,
                ChecklistItems.A32NX_SECURING_ADIRS,
                ChecklistItems.A32NX_SECURING_EXTERIOR_LIGHTS,
                ChecklistItems.A32NX_SECURING_APU_BLEED,
                ChecklistItems.A32NX_SECURING_APU,
                ChecklistItems.A32NX_SECURING_EMERGENCY_LIGHTS,
                ChecklistItems.A32NX_SECURING_SIGNS,
                ChecklistItems.A32NX_SECURING_BATTERIES,
            ],
        },
    ],
};
