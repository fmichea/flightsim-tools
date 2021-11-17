import { ChecklistFilters } from 'lib/checklist/data/filters';
import { ChecklistFiltersData } from 'lib/checklist/data/filtersData';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistItemsData } from 'lib/checklist/data/listItemsData';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { ChecklistListsData } from 'lib/checklist/data/listsData';
import { ChecklistTagsData } from 'lib/checklist/data/tagsData';
import { objectFromList } from 'lib/objects';

export const TestDataHookChecklistData = {
    listNames: [
        ChecklistLists.BEFORE_ENGINE_START,
        ChecklistLists.ENGINE_START,
        ChecklistLists.POST_FLIGHT,
    ],

    listsData: {
        [ChecklistLists.BEFORE_ENGINE_START]: {
            ...ChecklistListsData[ChecklistLists.BEFORE_ENGINE_START],
            items: [
                ChecklistItems.VATSIM_REQUEST_INITIAL_CLEARANCE,
                ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
            ],
        },
        [ChecklistLists.ENGINE_START]: {
            ...ChecklistListsData[ChecklistLists.ENGINE_START],
            items: [
                ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
                ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
            ],
        },
        [ChecklistLists.POST_FLIGHT]: {
            ...ChecklistListsData[ChecklistLists.POST_FLIGHT],
            items: [
                ChecklistItems.SIMSETUP_POST_FLIGHT_NOTES,
            ],
        },
    },

    listItemsData: objectFromList(
        [
            ChecklistItems.VATSIM_REQUEST_INITIAL_CLEARANCE,
            ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
            ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
            ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
            ChecklistItems.SIMSETUP_POST_FLIGHT_NOTES,
        ],
        (itemName) => ({
            key: itemName,
            value: {
                ...ChecklistItemsData[itemName],
                tagsData: Array.from(ChecklistItemsData[itemName].tags).map((tagName) => ChecklistTagsData[tagName]),
            },
        }),
    ),

    selectableFilters: [
        ChecklistFilters.INCLUDE_VATSIM,
        ChecklistFilters.INCLUDE_SIMSETUP,
    ],
    selectableFiltersData: {
        [ChecklistFilters.INCLUDE_VATSIM]: ChecklistFiltersData[ChecklistFilters.INCLUDE_VATSIM],
        [ChecklistFilters.INCLUDE_SIMSETUP]: ChecklistFiltersData[ChecklistFilters.INCLUDE_SIMSETUP],
    },

    defaultFilters: [ChecklistFilters.EXCLUDE_UNOFFICIAL],
    defaultFiltersData: {
        [ChecklistFilters.EXCLUDE_UNOFFICIAL]: ChecklistFiltersData[ChecklistFilters.EXCLUDE_UNOFFICIAL],
    },
};
