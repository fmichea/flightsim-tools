import React from 'react';
import { createMappingFunction } from 'lib/checklist/data/transforms';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { styled } from 'styletron-react';
import { objectMap } from 'lib/objectMap';

const Code = styled('span', {
    fontFamily: 'Monospaced',
});

const List = styled('ul', {
    listStyleType: 'circle',
});

const ListItem = styled('li', {
    marginLeft: '40px',
    marginBottom: '4px',
});

const addOfficialTags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.OFFICIAL, ChecklistTags.CJ4],
});

const cj4ItemsData = createMappingFunction(addOfficialTags)([
    {
        uid: ChecklistItems.CJ4_BEFORE_START_BATTERY_SWITCH,
        title: 'Battery Switch',
        state: 'ON',
        moreInfoShort: (
            <>
                Battery switch is the red switch located in the electrical panel on the left side of the PFD,
                and can be turned on by moving it in up position.
                <br />
                <br />
                MFD should turn on and show a few errors and warnings once battery is ON. Battery life is limitted at 10
                to 15 minutes so either engines must be started or ground power used pretty quickly.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_EMERGENCY_LIGHTS_SWITCH,
        title: 'Emergency Lights Switch',
        state: 'ARMED',
        moreInfoShort: (
            <>
                Emergency Lights switch is in the electrical panel along with battery switch, on the second row
                on the left. It can be armed by moving it in the up position. Warning
                {' '}
                <Code>EMER LIGHTS NOT ARMED</Code>
                {' '}
                should disappear from MFD after completing this step.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_STANDBY_FLIGHT_DISPLAY_SWITCH,
        title: 'Standby Flight Display Switch',
        state: 'ON',
        moreInfoShort: (
            <>
                Standby Flight Display switch is also in the electrical panel, on the second row in the middle.
                It can be turned on by moving it in the up position. Standby Flight Display right of MFD, above
                landing gear state display, should turn ON.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_AVIONICS_SWITCH,
        title: 'Avionics Switch',
        state: 'DISPATCH',
        moreInfoShort: (
            <>
                Avionics Switch is located in the electrical panel, on the second row on the right. It can be turned
                into dispatch mode by moving it in the down position. FMS will start and BAT AMP warning should flash
                on MFD after this step.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
        title: 'Parking Brake',
        state: 'SET',
        moreInfoShort: (
            <>
                Parking Brake is located below the the tilt panel on the left side, as a black and round pull
                handle. It is set when fully pulled out.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_WHEEL_CHOCKS,
        title: 'Wheel Chocks',
        state: 'REMOVE',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_CABIN_DOOR,
        title: 'Cabin Door',
        state: 'CLOSED',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_PASSENGER_BRIEFING,
        title: 'Passenger Briefing',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Passenger briefing can be started using the CCP below the MFD with the
                {' '}
                <Code>PASS BRIEF</Code>
                {' '}
                button (bottom right). Use one of the two available TAKEOFF briefings depending on how familiar
                your passengers are with flying.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_PILOTS_SEATS_ADJUSTED,
        title: 'Seats/Belts/Pedals',
        state: 'ADJUST/SECURE',
        moreInfoShort: (
            <>
                Adjust the Pilot&apos;s seating position and seat belt for safety.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Enable BEACON and NAV lights on the center console above the throttles.
                <br />
                <br />
                FIXME: Is that correct?
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_EICAS,
        title: 'EICAS',
        state: 'CHECK',
        moreInfoShort: (
            <>
                EICAS on top of MFD should be checked for all data to be GREEN.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_FMS,
        title: 'FMS',
        state: 'CHECK/SET',
        moreInfoShort: (
            <>
                <p>FMS should be checked and programmed at this point. The following items must be completed:</p>
                <List>
                    <ListItem>
                        <strong>Position Init:</strong>
                        {' '}
                        <Code>IDX &gt; LSK 4 (POS INIT) &gt; RSK 4 (SET POS TO GNSS)</Code>
                    </ListItem>
                    <ListItem>
                        <strong>Flight Plan programming:</strong>
                        {' '}
                        This can be done using manual input or simbrief import. Full flight plan should be
                        reviewed in the LEGS page.
                    </ListItem>
                    <ListItem>
                        <strong>Departure programming:</strong>
                        {' '}
                        Using
                        <Code>DEP/ARR</Code>
                        {' '}
                        menu, runway must be selected.
                    </ListItem>
                    <ListItem>
                        <strong>Performance Initialization:</strong>
                        {' '}
                        After setting fuel based on pre-flight planning in the weights menu, passenger and cargo
                        weight (or GWT) should be initialized in FMS in the performance initialization page. (
                        <Code>PERF &gt; LSK 1 (PERF INIT)</Code>
                        ). Planned cruise altitude should also be initialized.
                    </ListItem>
                </List>

            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_START_CLIMATE_CONTROL,
        title: 'Climate Control Selector',
        state: 'OFF',
        moreInfoShort: (
            <>
                Climate Control Selector is in the middle of the tilt panel. Turn it left to set it in OFF mode.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_THROTTLES,
        title: 'Throttles',
        state: 'IDLE',
        moreInfoShort: (
            <>
                Before starting the engines, the throttles should be set all the way to idle, at their bottom
                most position.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_STARTER_BUTTON_PUSH,
        title: 'Engine Starter Button',
        state: 'PUSH',
        moreInfoShort: (
            <>
                Push the starter button located below the throttles for whichever side you would like to start
                first. Alternating engine started first between trips to equalize engine running time is
                recommended.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
        title: 'Engine Run/Stop Button',
        state: 'RUN',
        moreInfoShort: (
            <>
                Push the Engine Run/Stop button behind the clear guard just above the throttles on the same side
                without delay. Button should go from Blank to displaying RUN. Remember to close the guard again.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_ITT_RISE,
        title: 'ITT',
        state: 'CHECK FOR RISE',
        moreInfoShort: (
            <>
                Monitor N1/N2/ITT within the EICAS. Things should happen in the following order: N2 should increase
                slowly first, then ITT will automatically ignite (IGN display) and N1 will start raising. ITT will
                rise as N1 and N2 continue to rise, until ignition disables and every value settles.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
        title: 'EICAS',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Indicators should settle around N1=24.5%, ITT=600&deg;C and N2=53.4%. Oil pressure will settle around
                70 PSI and oil temperature eventually at 103&deg;C but 90&deg;C and rising is good for this stage.
                Every indicator should be green before moving forward to second engine. MFD warnings will only
                disappear after second engine is started.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_OPPOSITE_ENGINE_START,
        title: 'Opposite Engine',
        state: 'START',
        moreInfoShort: (
            <>
                Repeat the process from the starter button push. After engine starts all warnings on MFD should
                disappear and more information should display regarding electrical systems, pressurization,
                hydraulic pressure and fuel.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_EXTERNAL_POWER_DISCONNECT,
        title: 'External Power',
        state: 'DISCONNECTED',
        moreInfoShort: (
            <>
                If external power was enabled, it should now be disconnected as all power should come from engines
                at this stage. Battery AMP indicator should be -38 A if ground power is connected, or -22 A if it
                is not.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_ENGINE_START_ELECTRICAL_SYSTEM_CHECK,
        title: 'Electrical System',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Check the electrical information on MFD below EICAS (or via SYS key on CCP if hidden). DC electric
                should have +22 A amperage and +29 V voltage. Battery should have -22 A amperage and +25 volts.
                Temperature should remain low, around 26&deg;C.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_AVIONICS_SWITCH,
        title: 'Avionics Switch',
        state: 'ON',
        moreInfoShort: (
            <>
                Avionics switch is in the eletrical panel left of PFD, on the second row on the right. Flick it
                in the up position to switch from dispatch mode to on mode. PFD should turn on after this step
                is completed.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_CLIMATE_CONTROL_SWITCH,
        title: 'Climate Control Selector',
        state: 'NORM',
        moreInfoShort: (
            <>
                Climate Control Selector is in the middle of the tilt panel. Turn it right once for NORM mode
                to be enabled. Air conditioning fans should audibly activate in the cabin.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_PASSENGER_LIGHTS_SAFETY,
        title: 'Pass Lights Safety Button',
        state: 'ON',
        moreInfoShort: (
            <>
                Passenger safety and belts indicators should be turned on in the center console next to exterior
                lights. Note that if passenger briefing is not finished, it will be interrupted by the safety light
                announcement.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_TRIMS,
        title: 'Trims',
        state: 'CHECK/SET',
        moreInfoShort: (
            <>
                Trims are indicated on the right side of the EICAS on MFD. AIL is aileron trim, RUD is rudder trim and
                ELEV is elevator trim (ND/NU is nose down/up respectively). For takeoff, trims should be in the green
                area for each setting. They can be adjusted using controls below the throttles in the center console.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_FLIGHT_CONTROLS_FREE,
        title: 'Flight Controls',
        state: 'FREE/CORRECT',
        moreInfoShort: (
            <>
                In exterior view, verify that controls are able to move all flight control surfaces (ailerons, rudders,
                elevators).
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_SPEEDBRAKE_CHECK,
        title: 'Speedbrakes / Ground Spoilers',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Spoilers can be controlled in the center console left of throttles (or with
                {' '}
                <Code>/</Code>
                {' '}
                on numpad). Extend them 100% and check that they fully extend in exterior view, then retract them again.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_FLAPS,
        title: 'Flaps',
        state: 'CHECK/SET',
        moreInfoShort: (
            <>
                Flaps can be controlled with the wing shaped control right of throttles. They have three settings: 0%,
                15% and 35%. Extend flaps and check in exterior view that they are working, then retract them.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_HYDRAULIC_PRESSURE_CHECK,
        title: 'Hydraulic Pressure',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Check hydraulic pressure information on MFD below EICAS (or via SYS key on CCP if hidden). Hydraulic
                pressure should be green and have a value of 3000 PSI.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_ENGINE_ONLY_ANTI_ICE,
        title: 'Engine Only Anti-Ice',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                While on the ground, engine only anti-ice should be enabled when in icing condition but not until
                engines have been on for at least 1 minute. Icing condition on ground exist when OAT or SAT is at
                or below +5&deg;C and engine may ingest moisture such as snow, slush, or standing water.
                <br />
                <br />
                Engine only anti-ice can be turned on with the buttons on tilt panel in anti-ice section, just below
                CCP. Current outside temperatures are visible at the very bottom of MFD.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_TAKEOFF_DATA,
        title: 'Takeoff Data',
        state: 'CONFIRM/SET',
        moreInfoShort: (
            <>
                Take-off data can be set on FMS with the following key presses:
                {' '}
                <Code>PERF &gt; LSK 3 (TAKEOFF)</Code>
                .
                Mandatory fields are Runway (RNW) taken from departure, runway condition (dry/wet), outside air
                temperature (OAT) and QNH. Once filled, go to second page using NEXT button, review the takeoff speeds
                on the right side and click send using
                {' '}
                <Code>RSK 6 (SEND)</Code>
                .
                <br />
                <br />
                Verify that speeds turn blue and are displayed on PFD below speed tape indicator. Expect speeds between
                90 and 115 knots.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_AVIONICS_CHECK,
        title: 'Avionics',
        state: 'CHECK/SET',
        moreInfoShort: (
            <>
                FIXME: set QNH and altitude/initial heading for autopilot?
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_AUTOPILOT_CONNECT_DISCONNECT,
        title: 'Autopilot',
        state: 'ENGAGE/DISCONNECT',
        moreInfoShort: (
            <>
                In the Autopilot panel, enable autopilot by clicking AP button, verify PFD displays autopilot enabled.
                Click YD/AP disc bar below. Ensure audible autopilot announcement and autopilot disabled on PFD.
                Click YD/AP disc bar again to allow autopilot connection again (autopilot should remain off).
                <br />
                <br />
                Repeat process with standard disconnect procedure. Click AP button to enable autopilot, and verify on
                PFD. Click AP button again, verify audible Autopilot announcement and check PFD for YD mode enabled
                (yaw damper). Click YD button and verify on PFD that YD mode is disabled.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_ALTIMETER_SET,
        title: 'Altimeter',
        state: 'SET/CHECK',
        moreInfoShort: (
            <>
                On DCP, turn the BARO button to set barometric pressure on PFD. Then move to standby flight display
                and use the rotary button on its bottom right to set barometric pressure for standby display. Check
                PFD and standby display barometric pressure and indicated altitude match.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_PRESSURIZATION_CHECK,
        title: 'Pressurization',
        state: 'VERIFY/SET',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_EICAS_CHECK,
        title: 'EICAS',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Verify EICAS on MFD for all green values and no warning or error message.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAXI_AFT_DIVIDER_DOORS_OPEN,
        title: 'Aft Divider Doors',
        state: 'Latched Open',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_TAXI_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Enable Taxi lights and make sure to enable strobe for any runway crossing.
                <br />
                <br />
                (FIXME: Is there more to this one?)
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_TAXI_BRAKES_APPLIED,
        title: 'Brakes',
        state: 'APPLY/HOLD',
        moreInfoShort: (
            <>
                In order to control airplane on release of Parking Brake, apply brakes first.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_TAXI_PARKING_BRAKE_RELEASED,
        title: 'Parking Brake',
        state: 'RELEASE',
        moreInfoShort: (
            <>
                Release parking brake by pushing the pull handle below tilt panel on the left all the way in.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_TAXI_BRAKES_CHECK,
        title: 'Brakes',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Increase throttles and release brakes to start moving forward, once moving, press brakes again and
                check that airplane can stop.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_TAXI_NOSE_WHEEL_STEERING_CHECK,
        title: 'Nosewheel Steering',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Increase throttles again and release brakes. Use rudder input to turn slightly. The airplane should
                turn easily even at very low speeds.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_TAXI_FLIGHT_INSTRUMENTS_CHECK,
        title: 'Flight Instruments',
        state: 'CHECK',
        moreInfoShort: (
            <>FIXME: Not sure what to look for there, Ground speed?????</>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_ICE_PROTECTION_SYSTEM_CHECK,
        title: 'Ice Protection System',
        state: 'CHECK',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
        moreInfoShort: (
            <>
                Not currently modelled. Wing and engine anti-ice systems require hot air from the engines. Procedure
                here would be to spool engines N2 to around 70% and turn on ice protection. The EICAS would display
                WING-ANTI-ICE-COLD warning message which should disappear within 2 minutes. This indicates
                that wings/engine anti-ice is getting hot bleed air. Required for flying in icy conditions.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_RUDDER_BIAS_SYSTEM_CHECK,
        title: 'Rudder Bias System',
        state: 'CHECK',
        // FIXME: information on what this is.
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_SEATS_UPRIGHT,
        title: 'Seats',
        state: 'UPRIGHT/OUTBOARD',
        moreInfoShort: (<>Sit up pilot!</>),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_FLAPS_SET,
        title: 'Flaps',
        state: 'CHECK/SET',
        moreInfoShort: (
            <>
                Verify on EICAS that flaps are extended as configured in the TAKEOFF
                performance page. This should generally be 15&deg;. Flaps are indicated
                on on the right side of the EICAS on top of MFD, just below trims.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_SPEEDBRAKES_OFF,
        title: 'Speed Brakes',
        state: '0%',
        moreInfoShort: (
            <>
                Verify that speedbrakes are fully retracted and set to 0%.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_TRIMS_CHECK,
        title: 'Trims (3)',
        state: 'SET FOR TAKEOFF',
        moreInfoShort: (
            <>
                On the top right section of the MFD, trims are indicated for Rudder, Aileron and
                Elevator. Verify that they all indicate within the green section for takeoff.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_CREW_BRIEFING,
        title: 'Crew Briefing',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Review departure instructions and verify they are programmed in FMS as desired.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_TCAS_TARA,
        title: 'TCAS',
        state: 'TA/RA',
        moreInfoShort: (
            <>
                In FMS, set TCAS to mode TA/RA by clicking
                {' '}
                <Code>TUN &gt; RSK 5 (TA/RA)</Code>
                . This turns mode C on for transponder, emitting altitude information.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_RADAR_AS_REQUIRED,
        title: 'Radar',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                At this point it is allowed to enable radar (traffic, weather, terrain) as
                required for takeoff. (FIXME: add details on what is required)
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_GA_BUTTON_PUSH,
        title: 'GA Button',
        state: 'PUSH',
        moreInfoShort: (
            <>
                Above FMS/MFD right of DCP there is a black button below the FIRE button which
                enables Takeoff/Go Around mode. It should be pushed once and
                {' '}
                <Code>TO TO</Code>
                {' '}
                should display
                on the autopilot line. Flight director should also display with intended pitch at
                takeoff.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_BATTERY_AMPS_CHECK,
        title: 'Battery Amps',
        state: 'VERIFY 20 OR LESS',
        moreInfoShort: (
            <>
                On the EICAS, or via the SYS key on CCP, ensure that battery still has -20 or less amps.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_ICE_PROTECTION_SYSTEM_AS_REQUIRED,
        title: 'Ice Protection Systems',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_PITOT_STATIC_HEAT_BUTTONS,
        title: 'Pitot/Static Heat Buttons',
        state: 'ON',
        moreInfoShort: (
            <>
                Pitot/Static Heat buttons are located in the Ice Protection section on the tilt panel
                under the MFD. They should be turned on before take-off and on for the whole flight.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Before entering runway, enable STROBE lights. Enable Landing lights, this will replace the TAXI lights.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_TAKEOFF_EICAS_CHECK,
        title: 'EICAS',
        state: 'CHECK',
        moreInfoShort: (
            <>
                Check EICAS on top of MFD, verify all values are green.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_TAKEOFF_THROTTLES,
        title: 'Throttles',
        state: 'TAKEOFF',
        moreInfoShort: (
            <>
                To proceed with a rolling take-off, simply push throttles all the way to 100%. If doing a standing
                start takeoff, maintain brake pressure until N1 settles around the top of its range, in the green, and
                release the brakes.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_TAKEOFF_N1_COMMAND_BUGS_GREEN,
        title: 'N1 Command Bugs',
        state: 'GREEN CHEVRON',
    },
    {
        uid: ChecklistItems.CJ4_TAKEOFF_BRAKES_RELEASED,
        title: 'Brakes',
        state: 'RELEASE',
    },
    {
        uid: ChecklistItems.CJ4_TAKEOFF_CONTROL_WHEEL_ROTATE_AT_VR,
        title: 'Control Wheel',
        state: 'ROTATE AT VR',
        moreInfoShort: (
            <>
                Monitor speed tape, once VR is reached, pull lightly on yoke and let
                nose come up as speed picks up.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_LANDING_GEAR_UP,
        title: 'Landing Gear',
        state: 'UP',
        moreInfoShort: (
            <>
                Once airborn with positive climb rate, pull landing gear up. It can be done using the
                lever right of FMD and below Standby Flight Display.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_FLAPS_0,
        title: 'Flaps',
        state: <>0&deg;</>,
        moreInfoShort: (
            <>
                Retract flaps fully by using the handle to the right of throttle levers by pushing it forward.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_THROTTLES_CLIMB,
        title: 'Throttles',
        state: 'CLIMB',
        moreInfoShort: (
            <>
                Pull back throttles below the takeoff (TO) detent. This can be checked on the EICAS near the
                on the N2 bars where indication should go from TO to CLB.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_YAW_DAMPER_ON,
        title: 'Yaw Damper',
        state: 'ON',
        moreInfoShort: (
            <>
                Yaw Damper can be enabled using the the button labelled
                {' '}
                <Code>YD</Code>
                {' '}
                just left of the autopilot button. This step is not necessary if you intend to enable autopilot
                immediately as yaw damper is enabled with AP.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_AUTOPILOT_AS_REQUIRED,
        title: 'Autopilot',
        state: 'AS DESIRED',
        moreInfoShort: (
            <>
                Autopilot may be enabled using the button labelled
                {' '}
                <Code>AP</Code>
                {' '}
                on the autopilot row. If enabled, you should also select modes like heading.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_ICE_PROTECTION_SYSTEM_CHECK,
        title: 'Ice Protection Systems',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_PASSENGER_LIGHTS_AS_REQUIRED,
        title: 'Pass Lights Buttons',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_EXTERIOR_LIGHTS,
        title: 'Landing Lights Button',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Landing light and Strobe can be turned off after passing 10000ft.

                (FIXME: wild guess here whats the actual rule?)
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_PRESSURIZATION_CHECK,
        title: 'Pressurization',
        state: 'CHECK',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_AFTER_TAKEOFF_ALTIMETERS_SET,
        title: 'Altimeters',
        state: 'SET/CROSSCHECK',
        moreInfoShort: (
            <>
                Take note of transition altitude at departure and click the BARO button
                in the PCP above FMS to switch to STD pressure. Easiest way to check is
                to verify that STD is displayed below the altitude tape or on the standby
                flight display.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_CRUISE_THROTTLES,
        title: 'Throttles',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                During cruise, any throttle setting maybe be used within CRUISE or CLIMB detents. Pilot should modulate
                throttling to maintain chosen cruising speed.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_CRUISE_PRESSURIZATION,
        title: 'Pressurization',
        state: 'CHECK',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_CRUISE_ICE_PROTECTION_SYSTEMS,
        title: 'Ice Protection Systems',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.CJ4_DESCENT_PRESSURIZATION,
        title: 'Pressurization',
        state: 'VERIFY/SET LDG ELEV',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_DESCENT_ICE_PROTECTION_SYSTEMS,
        title: 'Ice Protection Systems',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.CJ4_DESCENT_ALTIMETERS,
        title: 'Altimeters',
        state: 'SET/CROSSCHECK',
        moreInfoShort: (
            <>
                Preset BARO for landing pressure and verify transition level, switch BARO from standard to local
                altitude pressure at transition level. Once switched from STD to local, configure Standby Flight
                Display and crosscheck altitude shown.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_DESCENT_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_LANDING_DATA,
        title: 'Landing Data',
        state: 'CONFIRM',
        moreInfoShort: (
            <>
                Once approach and runway is confirmed, configure landing performance using wind, temperature and
                pressure altitude found in latest METAR/ATIS. This can be configured under
                {' '}
                <Code>PERF &gt; RSK 3 (APPROACH)</Code>
                .
                The mandatory configuration are on first page,
                {' '}
                <Code>RSK 2 (TEMP)</Code>
                {' '}
                which should be set to the runway outside air temperature, and
                {' '}
                <Code>RSK 3 (QNH)</Code>
                {' '}
                which should be  set correctly if already out of standard mode, or otherwise changed to the correct
                landing QNH. Runway WET condition can be set with
                {' '}
                <Code>LSK 6</Code>
                and winds optionally via
                {' '}
                <Code>RSK 1 (WIND)</Code>
                . Then go to page two using NEXT key and send VAPP/VREF calculated using
                <Code>RSK 6</Code>
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_CREW_BRIEFING,
        title: 'Crew Briefing',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Review approach procedure and prepare all necessary charts for quick access. Review missed approach
                procedure.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_AVIONICS_FLIGHT_INSTRUMENTS,
        title: 'Avionics/Flight Instruments',
        state: 'CHECK',
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_MINIMUMS,
        title: 'Minimums',
        state: 'SET',
        moreInfoShort: (
            <>
                Minimums can be found on the final approach chart. The CJ4 is only allowed to do CAT I approach which
                means full visibility is required below 200 ft AGL. The chart should provide the right altitude, adding
                ground altitude.
                <br />
                <br />
                Once determined, go to the PCP above the PFD, click refs menu, scroll down to MINIMUMS BARO using the
                large MENU ADV scroll wheel, then use the small scroll wheel on same knob to select the altitude and
                then click it. Minimum altitude will display under the altitude tape, as well as make an audible
                announcement upon landing.
                <br />
                <br />
                Autopilot and YD should be disabled by the time minimums are reached.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_FUEL_TRANSFER_SELECTOR,
        title: 'Fuel Transfer Selector',
        state: 'OFF',
        moreInfoShort: (
            <>
                Fuel selector is located on the tilt panel near the Climate control selector. Ensure that it is in the
                middle position (OFF).
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Enable LANDING lights and STROBE lights when reaching (10000ft). (FIXME)
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_ICE_PROTECTION_SYSTEMS,
        title: 'Ice Protection Systems',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_FLAPS,
        title: 'Flaps',
        state: <>15&deg;</>,
        moreInfoShort: (
            <>
                Extend flaps to 15&deg; once below 200 KIAS. This can be done by setting the flaps lever, right of
                throttles, in the middle position.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_PASSENGER_BRIEFING,
        title: 'Passenger Briefing',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Use the CCP below MFD to select the passenger briefing announcement by pressing the
                {' '}
                <Code>PASS BRIEF</Code>
                {' '}
                button, selecting
                {' '}
                <Code>LANDING</Code>
                {' '}
                briefing using the menu selector.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_SEATS_UPRIGHT,
        title: 'Seats',
        state: 'UPRIGHT AND OUTBOARD',
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_SEAT_BELTS,
        title: 'Seat Belts',
        state: 'ADJUSTED/SECURE',
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_PASSENGER_LIGHTS,
        title: 'Pass Lights Safety Button',
        state: 'ON',
        moreInfoShort: (
            <>
                Ensure both
                {' '}
                <Code>SAFETY</Code>
                {' '}
                and
                {' '}
                <Code>BELT</Code>
                {' '}
                lights are enabled under the
                {' '}
                <Code>PASS LIGHTS</Code>
                {' '}
                section on the top part of center console.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_APPROACH_PRESSURIZATION,
        title: 'Pressurization',
        state: '< 0.5 PSI BEFORE LDG',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_LANDING_LANDING_GEAR,
        title: 'Landing Gear',
        state: 'DOWN (3 GREEN)',
        moreInfoShort: (
            <>
                Pull landing gear down using the lever right of MFD and below Standby Avionics Display,
                and verify that 3 green lights come on to confirm landing gear is deployed.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_LANDING_FLAPS,
        title: 'Flaps',
        state: <>35&deg;</>,
        moreInfoShort: (
            <>
                Deploy flaps to 35&deg; once below 160 KIAS. This can be done using the flaps lever pulled towards the
                cabin completely.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_LANDING_SPEEDBRAKES_OFF,
        title: 'Speed Brakes',
        state: '0%',
        moreInfoShort: (
            <>
                Ensure speed brakes are fully retracted by checking they are set to 0% by their lever left of
                throttles.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_LANDING_AIRSPEED_VREF,
        title: 'Airspeed',
        state: 'VREF',
        moreInfoShort: (
            <>
                Reduce speed to VREF. This should be visible on the speed tape after the setting landing data
                previously, and around 105-115 knot area.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_BEFORE_LANDING_AUTOPILOT_AND_YAW_DAMPER,
        title: 'Autopilot and Yaw Damper',
        state: 'DISENGAGE',
        moreInfoShort: (
            <>
                Disengage Autopilot and Yaw Damper by using their respective buttons by 200 ft AGL.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_LANDING_THROTTLES,
        title: 'Throttles',
        state: 'IDLE',
        moreInfoShort: (
            <>
                Once passing the threshold of runway, pull throttles all the way back to idle.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_LANDING_BRAKES,
        title: 'Brakes (After NLG Touchdown)',
        state: 'APPLY',
        moreInfoShort: (
            <>
                Let the airplane&apos;s speed die down and the airplane not want to fly until the nose landing gear
                (NLG) touches the ground. Apply brake pressure once nose landing gear as touched down.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_LANDING_GROUND_SPOILERS,
        title: 'Ground Spoilers',
        state: 'EXTEND',
        moreInfoShort: (
            <>
                Extend ground spoilers to help with braking power. Ground spoilers are effective only above 70% of
                landing speed and help brake effectiveness when airplane is still settling between on ground and
                flying.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_GA_BUTTON,
        title: 'GA Button',
        state: 'PUSH',
        moreInfoShort: (
            <>
                Push GA button, which is located on the right side of PCP, above PFD. It is the button below
                {' '}
                <Code>L ENG FIRE</Code>
                .
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_THROTTLES_1,
        title: 'Throttles',
        state: 'TO',
        moreInfoShort: (
            <>
                Push throttles all the way up and past the takeoff detent.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_PITCH_ATTITUDE,
        title: 'Pitch Attitude',
        state: <>7.5&deg; THEN AS REQD</>,
        moreInfoShort: (
            <>
                As speed permits, pitch the airplane up to 7.5&deg; to gain altitude, then as required.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_FLAPS_1,
        title: 'Flaps',
        state: <>15&deg;</>,
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_LANDING_GEAR,
        title: 'Landing Gear',
        state: 'UP',
        moreInfoShort: (
            <>
                Once positive rate of ascent is confirmed, pull landing gear up.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_FLAPS_2,
        title: 'Flaps',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Depending on intentions, you may have to go into cruise mode or approach mode again. This decides
                whether to stay in flaps 15&deg; and go back to approach checklist which will bring us back to 35&deg;,
                or remove flaps completely to fly to another airport.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_AIRSPEED,
        title: 'Airspeed',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_THROTTLES_2,
        title: 'Throttles',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Reduce throttles according to desired airspeed within the CLIMB or CRUISE detent.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_YAW_DAMPER,
        title: 'Yaw Damper',
        state: 'ON',
    },
    {
        uid: ChecklistItems.CJ4_GOAROUND_AUTOPILOT,
        title: 'Autopilot',
        state: 'AS DESIRED',
    },

    {
        uid: ChecklistItems.CJ4_AFTER_LANDING_SPEEDBRAKES,
        title: 'Speed Brakes',
        state: '0%',
        moreInfoShort: (
            <>
                Clean speed brakes by setting them to 0%.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_LANDING_FLAPS,
        title: 'Flaps',
        state: <>0&deg;</>,
        moreInfoShort: (
            <>
                Clean flaps by setting them to 0&deg; using the lever right side of throttles.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4_AFTER_LANDING_PITOT_STATIC_HEAT,
        title: 'Pitot/Static Heat Buttons',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CJ4_AFTER_LANDING_ICE_PROTECTION_SYSTEMS,
        title: 'Ice Protection Systems',
        state: 'OFF/AS REQUIRED',
    },
    {
        uid: ChecklistItems.CJ4_AFTER_LANDING_RADAR,
        title: 'Radar',
        state: 'STANDBY',
    },
    {
        uid: ChecklistItems.CJ4_AFTER_LANDING_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'AS REQUIRED',
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_PARKING_BRAKE,
        title: 'Parking Brake',
        state: 'SET/WHEELS CHOCKED',
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_EMERGENCY_LIGHTS,
        title: 'Emergency Lights Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_STANDBY_FLIGHT_DISPLAY,
        title: 'Standby Flight Display Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_AVIONICS_SWITCH,
        title: 'Avionics Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_CLIMATE_CONTROL_SELECTOR,
        title: 'Climate Control Selector',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_ICE_PROTECTION_SYSTEMS,
        title: 'Ice Protection Systems (All)',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_THROTTLES,
        title: 'Throttles',
        state: 'IDLE',
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_ENGINE_RUNSTOP_BUTTONS,
        title: 'Engine Run/Stop Buttons (Both)',
        state: 'STOP',
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_EXTERIOR_LIGHTS,
        title: 'Exterior Lights',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_BATTERY_SWITCH,
        title: 'Battery Switch',
        state: 'OFF',
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_CONTROL_LOCK,
        title: 'Control Lock',
        state: 'AS REQUIRED',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
    {
        uid: ChecklistItems.CJ4_SHUTDOWN_ENGINE_COVERS,
        title: 'Engine Covers (After Engine Cool)',
        state: 'INSTALL',
        tags: [ChecklistTags.NOT_IMPLEMENTED],
    },
]);

const addCJ4EXTTags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.CJ4EXT, ChecklistTags.EXTENSION],
});

const cj4ExtItemsData = createMappingFunction(addCJ4EXTTags)([
    {
        uid: ChecklistItems.CJ4EXT_BEFORE_START_EXTERNAL_POWER,
        title: 'External Power',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Battery life without another source of power is around 10 to 15 minutes. If
                engines are expected to be started within that timeframe, this step is not
                necessary, otherwise it should be done.
                <br />
                <br />
                In real life, cost of ground power would have to be weighted against cost of
                burning a bit more fuel on the ground before taxi and using engine as a source of power.
                <br />
                <br />
                External Power can be enabled on FMS with the following set of keypresses:
                {' '}
                <Code>IDX &gt; NEXT &gt; LSK 3 (MOD SET) &gt; LSK 4 (Ground Power Unit to ON)</Code>
                .
                {' '}
                <Code>BAT AMP</Code>
                {' '}
                warning should disappear from MFD.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4EXT_BEFORE_TAKEOFF_RUNWAY_HEADING,
        title: 'Autopilot Heading Setting',
        state: 'RUNWAY HEADING',
        moreInfoShort: (
            <>
                Optionally, it can be a good idea to do takeoff with runway heading pre-programmed
                into autopilot. This does not mean enabling heading mode, but simply set the heading
                setting to the runway heading so that heading mode can easily be enabled after take-off
                if necessary.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4EXT_DESCENT_INTERIOR_LIGHTS,
        title: 'Interior / Panel Lights',
        state: 'AS REQUIRED',
    },
]);

const addVATSIMTags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.VATSIM],
});

const vatsimItemsData = createMappingFunction(addVATSIMTags)([
    {
        uid: ChecklistItems.VATSIM_METAR_ATIS_PRE_FLIGHT,
        title: 'Initial METAR/ATIS check',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Check METAR and ATIS information for your origin and destination airport for flight planning purposes.
                Try to figure out what the most likely runway to use will be, either by what ATIS specifies or by wind
                direction in METAR.
                <br />
                <br />
                Note that this is subject to change at any time and should simply be used as a starting point for
                pre-flight planning purposes.
            </>
        ),
    },
    {
        uid: ChecklistItems.VATSIM_FILE_FLIGHT_PLAN,
        title: 'File Flight Plan',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Using your VATSIM client, publish your flight plan on the network to help controllers and other pilots
                navigate with you in the airspace. This is mandatory even if you are flying uncontrolled.
            </>
        ),
    },
    {
        uid: ChecklistItems.VATSIM_REQUEST_INITIAL_CLEARANCE,
        title: 'Initial Clearance',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Initial clearance and engine start authorization should be requested from relevant controller.
                Expected information: Clearance, Departure Procedure, Initial Altitude and Squawk Code.
            </>
        ),
    },
    {
        uid: ChecklistItems.VATSIM_DEPARTURE_SETTINGS,
        title: 'Departure Settings',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Program all of the necessary settings provided during initial clearance into the autopilot and avionics.
            </>
        ),
    },
    {
        uid: ChecklistItems.VATSIM_TAXI_CLEARANCE,
        title: 'Taxi Clearance',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Request taxi clearance from controller either before or after pushback depending on airport rules. If
                pushback request is required, it will be done first with a direction to face. Another request after
                pushback will be necessary.
                <br />
                <br />
                Taxi instruction which includes ending point of current instructions and taxiway path to take. Take
                note of path provided on paper, readback and then confirm using charts before taxiing. Checking
                the charts before taxi request to have a rough idea of path is great help in doing this smoothly.
                <br />
                <br />
                In uncontrolled airport, simply announce your taxi intentions and path on UNICOM, 122.8.
            </>
        ),
    },
    {
        uid: ChecklistItems.VATSIM_TAXI_MODE_CHARLIE,
        title: 'Transponder',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Some airports require transponder to be in mode Charlie even during taxi. This is specified in the
                ATIS. In this case, check that transponder is correctly set before starting your taxi.
                <br />
                <br />
                CJ4: On FMS, check
                {' '}
                <Code>TUN &gt; RSK 5 (TCAS MODE)</Code>
                {' '}
                is set to
                {' '}
                <Code>TA/RA</Code>
                {' '}
                mode.
            </>
        ),
    },
    {
        uid: ChecklistItems.VATSIM_TAKEOFF_CLEARANCE,
        title: 'Takeoff Clearance',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Controllers will generally give you clearance on their own to line up on runway and then takeoff. Make
                sure to wait for such clearance. If frequency is quiet, you can also announce holding short of runway
                once before takeoff runway checklist is finished and you are ready.
            </>
        ),
    },
    {
        uid: ChecklistItems.VATSIM_DESCENT_CLEARANCE,
        title: 'Descent Clearance',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                In controlled airspace you are likely to be given descent clearance without requesting it, but if you
                are approaching your Top-Of-Descent (TOD), you may ask for level change.
                <br />
                <br />
                In uncontrolled airspace, simply make sure there is no other aircraft around and below you before
                starting your descent and monitor the situation using VATSpy or similar.
            </>
        ),
    },
    {
        uid: ChecklistItems.VATSIM_APPROACH_CLEARANCE,
        title: 'Approach Clearance',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                In controlled airspace, make sure to be cleared for an approach before starting it. You may request
                approach clearance or failing that hold before starting approach.
                <br />
                <br />
                For uncontrolled airspace, you should announce your approach on UNICOM (122.8) especially if other
                pilots are at the same airport.
            </>
        ),
    },
    {
        uid: ChecklistItems.VATSIM_LANDING_CLEARANCE,
        title: 'Landing Clearance',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                In controlled airspace, make sure to be cleared for landing and are on the correct runway. This is
                likely to happen without request, but you may confirm if it isn&apos;t. Go around might be necessary if
                clearance is not provided.
                <br />
                <br />
                For uncontrolled airspace, simply announce your landing intentions on UNICOM (122.8).
            </>
        ),
    },
    {
        uid: ChecklistItems.VATSIM_GOAROUND_ANNOUNCE,
        title: 'Go-Around Announcement',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Once the aircraft is climbing and stable, anounce to your controller that you are going around and
                expect new instructions.
            </>
        ),
    },
    {
        uid: ChecklistItems.VATSIM_LANDING_CLEAR_OF_RUNWAY,
        title: 'Clear-Of-Runway Announcement',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                If you leave a runway after takeoff and controller does not immedately address you, you may anounce
                clear of runway and specify taxiway. This is especially useful to higher level controllers like
                approach as they may not be watching you land but might have someone queued behind you to land, who
                might be waiting on clearance.
                <br />
                <br />
                Expect: TAXI instructions to gate.
            </>
        ),
    },
    {
        uid: ChecklistItems.VATSIM_DISCONNECT_GOODBYE,
        title: 'Goodbye / Disconnect',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                If frequency is quiet, announce you are disconnecting and thank your controller!
            </>
        ),
    },
]);

const addSimSetupTags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.SIMSETUP],
});

const simulatorSetupItemsData = createMappingFunction(addSimSetupTags)([
    {
        uid: ChecklistItems.SIMSETUP_PLAN_FLIGHT,
        title: 'Flight Planning',
        state: 'COMPLETE',
    },
    {
        uid: ChecklistItems.SIMSETUP_FLIGHT_TRACKING_START,
        title: 'Flight Logbook Tracking',
        state: 'AS DESIRED',
    },
    {
        uid: ChecklistItems.SIMSETUP_FLIGHT_TRACKING_END,
        title: 'Flight Tracking',
        state: 'ENDED',
    },
    {
        uid: ChecklistItems.SIMSETUP_FLIGHT_RECORDING_START,
        title: 'Flight Video Recording',
        state: 'AS DESIRED',
    },
    {
        uid: ChecklistItems.SIMSETUP_FLIGHT_RECORDING_END,
        title: 'Flight Video Recording',
        state: 'ENDED',
    },
    {
        uid: ChecklistItems.SIMSETUP_POST_FLIGHT_NOTES,
        title: 'Flight Debrief Notes',
        state: 'COMPLETE',
    },
]);

export const ChecklistItemsData = Object.freeze({
    ...cj4ItemsData,
    ...cj4ExtItemsData,
    ...vatsimItemsData,
    ...simulatorSetupItemsData,
});

export const ChecklistItemsNotImplemented = new Set(
    Object
        .entries(objectMap(ChecklistItemsData, (item) => item.tags.has(ChecklistTags.NOT_IMPLEMENTED)))
        .filter((keyValue) => keyValue[1])
        .map((keyValue) => keyValue[0]),
);
