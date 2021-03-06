import React from 'react';

import { ExternalLink } from 'components/lib/ExternalLink';
import { List, ListItem } from 'components/lib/List';
import { Monospaced } from 'components/lib/Monospaced';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { createTransformedMapping } from 'lib/checklist/data/transforms';

const addVATSIMTags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.VATSIM],
});

export const VATSIMChecklistItemsData = createTransformedMapping(addVATSIMTags)([
    {
        uid: ChecklistItems.VATSIM_FILE_FLIGHT_PLAN,
        title: 'Connect / File Flight Plan',
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
        moreInfoLong: (
            <>
                <p>
                    Initial clearance should be requested from relevant controller. The
                    {' '}
                    <ExternalLink href="https://en.wikipedia.org/wiki/CRAFT_(aviation)">C.R.A.F.T.</ExternalLink>
                    {' '}
                    mnemonic can be used to remember the relevant parts of the clearance.
                </p>
                <List>
                    <ListItem>
                        <strong>C</strong>
                        learance: usually the destination, but may be a different waypoint if clearance is partial.
                    </ListItem>
                    <ListItem>
                        <strong>R</strong>
                        oute: this is generally only the specific departure to fly, since route should be pre-planned
                        and filled.
                    </ListItem>
                    <ListItem>
                        <strong>A</strong>
                        ltitude: initial altitude and sometimes altitude 5/10 minutes after departure.
                    </ListItem>
                    <ListItem>
                        <strong>F</strong>
                        requency: expected departure frequency. May be omitted.
                    </ListItem>
                    <ListItem>
                        <strong>T</strong>
                        ransponder: transponder code (aka. squawk code) to be used.
                    </ListItem>
                </List>
                <p>
                    The clearance may also contain additional information such as a voidance time, at which point the
                    clearance is not valid anymore if the aircraft is not airborn.
                </p>
            </>
        ),
    },
    {
        uid: ChecklistItems.VATSIM_PUSHBACK_AND_START_CLEARANCE,
        title: 'Pushback / Engine Start Clearance',
        state: 'COMPLETE',
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
        title: 'TCAS / Transponder',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Some airports require transponder to be in mode Charlie even during taxi (altitude reported). This is
                specified in the ATIS. In this case, check that transponder is correctly set before starting your taxi.
                <br />
                <br />
                CJ4: On FMS, check
                {' '}
                <Monospaced>TUN &gt; RSK 5 (TCAS MODE)</Monospaced>
                {' '}
                is set to
                {' '}
                <Monospaced>TA/RA</Monospaced>
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
