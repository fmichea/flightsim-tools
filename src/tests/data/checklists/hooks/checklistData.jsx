import { ChecklistLists } from 'lib/checklist/data/lists';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistItemsData } from 'lib/checklist/data/listItemsData';
import { ChecklistFilters } from 'lib/checklist/data/filters';
import { ChecklistFiltersData } from 'lib/checklist/data/filtersData';
import { objectFromList } from 'lib/objects';
import { ChecklistListsData } from 'lib/checklist/data/listsData';
import { ChecklistTagsData } from 'lib/checklist/data/tagsData';

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
        ChecklistFilters.INCLUDE_VATSIM_ITEMS,
        ChecklistFilters.INCLUDE_SIMSETUP_ITEMS,
    ],
    selectableFiltersData: {
        [ChecklistFilters.INCLUDE_VATSIM_ITEMS]: ChecklistFiltersData[ChecklistFilters.INCLUDE_VATSIM_ITEMS],
        [ChecklistFilters.INCLUDE_SIMSETUP_ITEMS]: ChecklistFiltersData[ChecklistFilters.INCLUDE_SIMSETUP_ITEMS],
    },

    defaultFilters: [ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL],
    defaultFiltersData: {
        [ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL]: ChecklistFiltersData[ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL],
    },
};
