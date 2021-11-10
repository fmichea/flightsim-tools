import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistLists } from 'lib/checklist/data/lists';

export const TestDataHookFilteredListsNoFiltersSelected = [
    {
        listName: ChecklistLists.BEFORE_ENGINE_START,
        items: [
            ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
        ],
    },
    {
        listName: ChecklistLists.ENGINE_START,
        items: [
            ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
            ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
        ],
    },
];

export const TestDataHookFilteredListsVatsimIncluded = [
    {
        listName: ChecklistLists.BEFORE_ENGINE_START,
        items: [
            ChecklistItems.VATSIM_REQUEST_INITIAL_CLEARANCE,
            ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
        ],
    },
    {
        listName: ChecklistLists.ENGINE_START,
        items: [
            ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
            ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
        ],
    },
];

export const TestDataHookFilteredListsSimsetupIncluded = [
    {
        listName: ChecklistLists.BEFORE_ENGINE_START,
        items: [
            ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
        ],
    },
    {
        listName: ChecklistLists.ENGINE_START,
        items: [
            ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
            ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
        ],
    },
    {
        listName: ChecklistLists.POST_FLIGHT,
        items: [
            ChecklistItems.SIMSETUP_POST_FLIGHT_NOTES,
        ],
    },
];

export const TestDataHookFilteredListsVatsimAndSimsetupIncluded = [
    {
        listName: ChecklistLists.BEFORE_ENGINE_START,
        items: [
            ChecklistItems.VATSIM_REQUEST_INITIAL_CLEARANCE,
            ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
        ],
    },
    {
        listName: ChecklistLists.ENGINE_START,
        items: [
            ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
            ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
        ],
    },
    {
        listName: ChecklistLists.POST_FLIGHT,
        items: [
            ChecklistItems.SIMSETUP_POST_FLIGHT_NOTES,
        ],
    },
];
