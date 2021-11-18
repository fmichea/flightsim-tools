import React from 'react';

import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { createTransformedList, createTransformedMapping } from 'lib/checklist/data/transforms';

const addNavTags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.NAV],
});

export const NavChecklistItemsData = createTransformedMapping(addNavTags)([
    {
        uid: ChecklistItems.NAV_FLIGHT_PLANNING,
        title: 'Flight Planning',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Plan the full flight, expect to figure out the following information: departure and arrival airport,
                type of flight, route including most likely departure and arrival procedure, time in flight and fuel
                required. This is subject to changes by controllers, but a plan needs to be made. Tools such as
                Simbrief may be used to simplify this step.
            </>
        ),
        subItems: createTransformedList()([
            {
                title: 'ATIS/METAR for departure/destinations',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Runways in Use',
                        state: 'CHECKED',
                    },
                    {
                        title: 'Departure/Arrival/Approach in Use',
                        state: 'CHECKED',
                    },
                ]),
            },
            {
                title: 'Airframe',
                state: 'SELECTED',
            },
            {
                title: 'Route (1)',
                state: 'SET',
                subItems: createTransformedList()([
                    {
                        title: 'Departure Airport',
                        state: 'SET',
                    },
                    {
                        title: 'Arrival Airport',
                        state: 'SET',
                    },
                ]),
            },
            {
                title: 'Departure',
                state: 'SET',
                subItems: createTransformedList()([
                    {
                        title: 'Departure Runway Predicted (based on METAR/ATIS)',
                        state: 'CHECKED / SET',
                    },
                    {
                        title: 'Departure Time',
                        state: 'CHECKED / SET',
                    },
                ]),
            },
            {
                title: 'Arrival Airport',
                state: 'SET',
                subItems: createTransformedList()([
                    {
                        title: 'Arrival Runway Predicted (based on METAR/ATIS)',
                        state: 'CHECKED / SET',
                    },
                    {
                        title: 'Scheduled Flight Time',
                        state: 'CHECKED',
                    },
                ]),
            },
            {
                title: 'Alternate Airport',
                state: 'CHECKED / SET',
            },
            {
                title: 'Route (2)',
                state: 'CHECKED / SET',
                subItems: createTransformedList()([
                    {
                        title: 'SID / STAR',
                        state: 'CHECKED',
                    },
                    {
                        title: 'Route',
                        state: 'CHECKED',
                    },
                    {
                        title: 'Distance Within Range',
                        state: 'CHECKED',
                    },
                    {
                        title: 'Weather / Winds',
                        state: 'CHECKED',
                    },
                ]),
            },
            {
                title: 'OFP',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Call Sign / Registration / Aircraft Type',
                        state: 'CHECKED',
                    },
                    {
                        title: 'Flight Level Steps',
                        state: 'CHECKED',
                    },
                    {
                        title: 'Fuel',
                        state: 'CHECKED',
                        subItems: createTransformedList()([
                            {
                                title: 'Taxi Fuel',
                                state: 'CHECKED',
                            },
                            {
                                title: 'Trip Fuel',
                                state: 'CHECKED',
                            },
                            {
                                title: 'Alternate Fuel',
                                state: 'CHECKED',
                            },
                            {
                                title: 'Reserves',
                                state: 'CHECKED',
                            },
                            {
                                title: 'Block Fuel',
                                state: 'CHECKED',
                            },
                        ]),
                    },
                    {
                        title: 'Weights',
                        state: 'CHECKED',
                        subItems: createTransformedList()([
                            {
                                title: 'TOW (Maximum / Estimated)',
                                state: 'CHECKED',
                            },
                            {
                                title: 'LAW (Maximum)',
                                state: 'CHECKED',
                            },
                            {
                                title: 'ZFW',
                                state: 'CHECKED',
                            },
                        ]),
                    },
                    {
                        title: 'Alternate',
                        state: 'CHECKED',
                        subItems: createTransformedList()([
                            {
                                title: 'Route',
                                state: 'CHECKED',
                            },
                            {
                                title: 'Flight Level',
                                state: 'CHECKED',
                            },
                        ]),
                    },
                ]),
            },
        ]),
    },
    {
        uid: ChecklistItems.NAV_TAKEOFF_DEPARTURE_BRIEFING,
        title: 'Take-Off / Departure Briefing',
        state: 'COMPLETE',
        replaces: [
            ChecklistItems.CRJ_BEFORE_START_CHECK_TAKEOFF_BRIEFING,
        ],
        subItems: createTransformedList()([
            {
                title: 'Pilot In Command (PIC)',
                state: 'SET',
            },
            {
                title: 'Take-Off Runway',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Length (Required / Available)',
                        state: 'CHECKED',
                    },
                    {
                        title: 'Winds',
                        state: 'CHECKED',
                    },
                ]),
            },
            {
                title: 'Departure',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Constraints',
                        state: 'CHECKED',
                    },
                    {
                        title: 'Obstacles',
                        state: 'CHECKED',
                    },
                ]),
            },
            {
                title: 'Emergency Planning',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Engine Failure on Ground',
                        state: 'CHECKED',
                    },
                    {
                        title: 'Engine Failure during Climb',
                        state: 'CHECKED',
                        subItems: createTransformedList()([
                            {
                                title: 'Emergency Landing Airport / Runways',
                                state: 'CHECKED',
                            },
                            {
                                title: 'Maximum Landing Weight / Take-Off Weight',
                                state: 'CHECKED',
                            },
                        ]),
                    },
                ]),
            },
        ]),
    },
    {
        uid: ChecklistItems.NAV_TAKEOFF_DEPARTURE_BRIEFING_SHORT,
        title: 'Take-Off / Departure Briefing (Short)',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Just review the most important parts of the take-off briefing.
            </>
        ),
    },
    {
        uid: ChecklistItems.NAV_DESCENT_PLANNING,
        title: 'Descent Planning',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Review the expected approach and plan for Top-of-Descent (TOD).
            </>
        ),
    },
    {
        uid: ChecklistItems.NAV_APPROACH_BRIEFING,
        title: 'Approach Briefing',
        state: 'COMPLETE',
        replaces: [
            ChecklistItems.CJ4_APPROACH_CREW_BRIEFING,
            ChecklistItems.CRJ_DESCENT_CHECK_APPROACH_BRIEFING,
        ],
        subItems: createTransformedList()([
            {
                title: 'Pilot In Command (PIC)',
                state: 'SET',
            },
            {
                title: 'Approach',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Landing Runway',
                        state: 'CHECKED',
                        subItems: createTransformedList()([
                            {
                                title: 'Runway Length',
                                state: 'CHECKED',
                            },
                            {
                                title: 'Runway Exits',
                                state: 'CHECKED',
                            },
                        ]),
                    },
                    {
                        title: 'Obstacles',
                        state: 'CHECKED',
                    },
                ]),
            },
            {
                title: 'Missed Approach',
                state: 'CHECKED',
                subItems: createTransformedList()([
                    {
                        title: 'Constraints',
                        state: 'CHECKED',
                    },
                    {
                        title: 'Hold',
                        state: 'CHECKED',
                    },
                ]),
            },
        ]),
    },
    {
        uid: ChecklistItems.NAV_POST_FLIGHT_NOTES,
        title: 'Flight Debrief Notes',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                In your chosen logbook, write down notes for the things that went well but more importantly the things
                that did not go well and need to be reviewed. Improve every day!
            </>
        ),
    },
]);
