import React from 'react';

import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { createTransformedList, createTransformedMapping } from 'lib/checklist/data/transforms';

const addSimSetupTags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.SIMSETUP],
});

export const SimulatorSetupChecklistItemsData = createTransformedMapping(addSimSetupTags)([
    {
        uid: ChecklistItems.SIMSETUP_PLAN_FLIGHT,
        title: 'Flight Planning',
        state: 'COMPLETE',
        moreInfoShort: (
            <>
                Plan the full flight, expect to figure out the following information: departure and arrival airport,
                type of flight, route including most likely departure and arrival procedure, time in flight and fuel
                required. Tools such as Simbrief may be used to simplify this step.
            </>
        ),
        subItems: createTransformedList()([
            {
                title: 'Airframe',
                state: 'SET',
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
        uid: ChecklistItems.SIMSETUP_FLIGHT_TRACKING_START,
        title: 'Flight Logbook Tracking',
        state: 'AS DESIRED',
        moreInfoShort: (
            <>
                If you use a third party logbook program such as Volanta or SimToolkit Pro, start it up, add the route
                to it and connect it to your simulator.
            </>
        ),
    },
    {
        uid: ChecklistItems.SIMSETUP_FLIGHT_TRACKING_END,
        title: 'Flight Tracking',
        state: 'ENDED',
        moreInfoShort: (
            <>
                If not done automatically, stop flight tracking in preferred program and review log entry.
            </>
        ),
    },
    {
        uid: ChecklistItems.SIMSETUP_FLIGHT_RECORDING_START,
        title: 'Flight Video Recording',
        state: 'AS DESIRED',
        moreInfoShort: (
            <>
                Optional. Start software in order to screen record flight and sound. This is very useful in order
                to review flight for mistakes or potentially report issues with aircrafts/simulator.
            </>
        ),
    },
    {
        uid: ChecklistItems.SIMSETUP_FLIGHT_RECORDING_END,
        title: 'Flight Video Recording',
        state: 'ENDED',
        moreInfoShort: (
            <>
                If flight recording was started on video, stop recording.
            </>
        ),
    },
    {
        uid: ChecklistItems.SIMSETUP_POST_FLIGHT_NOTES,
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
