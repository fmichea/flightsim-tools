import {
    CHECK_ITEM,
    defaultChecklistListState,
    defaultChecklistState,
    INITIALIZE_CHECKLIST,
    RESET_CHECKED_ITEMS,
    RESET_LIST_CHECKED_ITEMS,
    TOGGLE_LEFT_HANDED_MODE,
    UNCHECK_ITEM,
} from 'state/constants/checklist';
import { intersection } from 'lib/sets';
import { objectMap } from 'lib/objectMap';

const initializeChecklist = (state, action) => {
    const checkedItems = new Set(state.checkedItems);

    return {
        ...state,
        counters: {
            listItemsTotals: objectMap(action.checklistLists, (items) => items.length),
            listItemsChecked: objectMap(action.checklistLists, (items, checklistListName) => {
                const itemsSet = new Set(items.map((itemName) => `${checklistListName}:${itemName}`));
                return Array.from(intersection(itemsSet, checkedItems)).length;
            }),
        },
    };
};

const checklistListReducer = (state = defaultChecklistListState, action) => {
    switch (action.type) {
    case INITIALIZE_CHECKLIST:
        return initializeChecklist(state, action);

    case RESET_CHECKED_ITEMS:
        return {
            ...state,
            counters: {
                ...state.counters,
                listItemsChecked: objectMap(state.counters.listItemsChecked, () => 0),
            },
            checkedItems: [],
        };

    case RESET_LIST_CHECKED_ITEMS:
        return {
            ...state,
            counters: {
                ...state.counters,
                listItemsChecked: objectMap(
                    state.counters.listItemsChecked,
                    (value, key) => (key === action.checklistListName ? 0 : value),
                ),
            },
            checkedItems: state.checkedItems.filter((value) => !value.startsWith(`${action.checklistListName}:`)),
        };

    case CHECK_ITEM:
        return {
            ...state,
            counters: {
                ...state.counters,
                listItemsChecked: {
                    ...state.counters.listItemsChecked,
                    [action.checklistListName]: state.counters.listItemsChecked[action.checklistListName] + 1,
                },
            },
            checkedItems: [...state.checkedItems, action.itemKey],
        };

    case UNCHECK_ITEM:
        return {
            ...state,
            counters: {
                ...state.counters,
                listItemsChecked: {
                    ...state.counters.listItemsChecked,
                    [action.checklistListName]: state.counters.listItemsChecked[action.checklistListName] - 1,
                },
            },
            checkedItems: state.checkedItems.filter(
                (item) => item !== action.itemKey,
            ),
        };

    default:
        return state;
    }
};

export const checklistReducer = (state = defaultChecklistState, action) => {
    switch (action.type) {
    case TOGGLE_LEFT_HANDED_MODE:
        return {
            ...state,
            config: {
                ...state.config,
                leftHandedMode: !state.config.leftHandedMode,
            },
        };

    case INITIALIZE_CHECKLIST:
    case CHECK_ITEM:
    case UNCHECK_ITEM:
    case RESET_CHECKED_ITEMS:
    case RESET_LIST_CHECKED_ITEMS:
        return {
            ...state,
            lists: {
                ...state.lists,
                [action.checklistName]: checklistListReducer(
                    state.lists[action.checklistName],
                    action,
                ),
            },
        };

    default:
        return state;
    }
};
