import React from 'react';

import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { createTransformedMapping } from 'lib/checklist/data/transforms';

const addSimSetupTags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.SIMSETUP],
});

export const SimulatorSetupChecklistItemsData = createTransformedMapping(addSimSetupTags)([
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
]);
