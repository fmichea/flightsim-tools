import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { createTransformedList, createTransformedMapping } from 'lib/checklist/data/transforms';

const addCRJ7ExtTags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.CRJ7, ChecklistTags.EXTENSION],
});

export const CRJ7ExtChecklistItemsData = createTransformedMapping(addCRJ7ExtTags)([
    {
        uid: ChecklistItems.CRJ7EXT_PRE_FLIGHT_AIRCRAFT_EFB_SETUP,
        title: 'Aircraft Setup',
        state: 'COMPLETE',
        subItems: createTransformedList()([
            {
                title: 'Performance Tab',
                state: 'COMPLETE',
                subItems: createTransformedList()([
                    {
                        title: 'Zero Fuel Weight (ZFW)',
                        state: 'SET',
                    },
                    {
                        title: 'Fuel',
                        state: 'SET',
                    },
                    {
                        title: 'SET PAYLOAD IN SIMULATOR',
                        state: 'COMPLETE',
                    },
                ]),
            },
            {
                title: 'Aircraft Tab',
                state: 'COMPLETE',
                subItems: createTransformedList()([
                    {
                        title: 'Wheel Chocks',
                        state: 'IN PLACE',
                    },
                    {
                        title: 'Passenger Door',
                        state: 'OPEN',
                    },
                    {
                        title: 'Forward Cargo Door',
                        state: 'OPEN',
                    },
                    {
                        title: 'Aft Cargo Door',
                        state: 'OPEN',
                    },
                    {
                        title: 'Service Door',
                        state: 'OPEN',
                    },
                ]),
            },
            {
                title: 'Maintenance Tab',
                state: 'CHECKED',
            },
        ]),
    },
    {
        uid: ChecklistItems.CRJ7EXT_ORIGINATING_CHECK_FMS_INIT_REMINDER,
        title: 'FMS Position Initialization (Reminder)',
        state: 'COMPLETE',
    },
    {
        uid: ChecklistItems.CRJ7EXT_BEFORE_START_CHECK_DOORS_CHOCKS,
        title: 'Doors / Chocks',
        state: 'LOCKED / REMOVED',
        subItems: createTransformedList()([
            {
                title: 'Passenger Door',
                state: 'CLOSED',
            },
            {
                title: 'Forward Cargo Door',
                state: 'CLOSED',
            },
            {
                title: 'Aft Cargo Door',
                state: 'CLOSED',
            },
            {
                title: 'Service Door',
                state: 'CLOSED',
            },
            {
                title: 'Wheel Chocks',
                state: 'REMOVED',
            },
        ]),
    },
]);
