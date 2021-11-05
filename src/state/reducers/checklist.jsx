import {
    CHECK_ITEM,
    defaultChecklistListState,
    defaultChecklistState,
    INITIALIZE_CHECKLIST,
    RESET_CHECKED_ITEMS,
    RESET_LIST_CHECKED_ITEMS, TOGGLE_ITEM,
    TOGGLE_LEFT_HANDED_MODE,
    UNCHECK_ITEM,
} from 'state/constants/checklist';
import { intersection } from 'lib/sets';
import { objectMap } from 'lib/objects';
import { listItemKey } from 'lib/checklist/listItemKey';

const initializeChecklist = (state, action) => {
    const checkedItems = new Set(state.checkedItems);

    return {
        ...state,
        counters: {
            listItemsTotals: objectMap(action.checklistLists, (items) => items.length),
            listItemsChecked: objectMap(action.checklistLists, (items) => {
                const itemsSet = new Set(items);
                return Array.from(intersection(itemsSet, checkedItems)).length;
            }),
        },
    };
};

const checkItem = (state, checklistListName, itemKey) => ({
    ...state,
    counters: {
        ...state.counters,
        listItemsChecked: {
            ...state.counters.listItemsChecked,
            [checklistListName]: state.counters.listItemsChecked[checklistListName] + 1,
        },
    },
    checkedItems: [...state.checkedItems, itemKey],
});

const uncheckItem = (state, checklistListName, itemKey) => ({
    ...state,
    counters: {
        ...state.counters,
        listItemsChecked: {
            ...state.counters.listItemsChecked,
            [checklistListName]: state.counters.listItemsChecked[checklistListName] - 1,
        },
    },
    checkedItems: state.checkedItems.filter((item) => item !== itemKey),
});

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
            checkedItems: state.checkedItems.filter((value) => !value.startsWith(listItemKey(
                action.checklistName,
                action.checklistListName,
                '',
            ))),
        };

    case CHECK_ITEM:
        return checkItem(state, action.checklistListName, action.itemKey);

    case UNCHECK_ITEM:
        return uncheckItem(state, action.checklistListName, action.itemKey);

    case TOGGLE_ITEM:
        if (state.checkedItems.includes(action.itemKey)) {
            return uncheckItem(state, action.checklistListName, action.itemKey);
        }
        return checkItem(state, action.checklistListName, action.itemKey);

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
    case TOGGLE_ITEM:
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
