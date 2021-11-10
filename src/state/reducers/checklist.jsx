import { listItemKey } from 'lib/checklist/listItemKey';
import { objectMap } from 'lib/objects';
import { intersection } from 'lib/sets';
import {
    defaultChecklistListState,
    defaultChecklistState,
    INITIALIZE_CHECKLIST,
    RESET_CHECKED_ITEMS,
    RESET_LIST_CHECKED_ITEMS,
    TOGGLE_HIDE_HELP_MODE, TOGGLE_HIDE_SWITCHES_MODE,
    TOGGLE_HIDE_TAGS_MODE,
    TOGGLE_ITEM,
    TOGGLE_LEFT_HANDED_MODE,
} from 'state/constants/checklist';

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

    case TOGGLE_ITEM:
        if (state.checkedItems.includes(action.itemKey)) {
            return uncheckItem(state, action.checklistListName, action.itemKey);
        }
        return checkItem(state, action.checklistListName, action.itemKey);

    default:
        return state;
    }
};

const toggleGlobalConfig = (state, fn) => ({
    ...state,
    config: {
        ...state.config,
        ...fn(state.config),
    },
});

export const checklistReducer = (state = defaultChecklistState, action) => {
    switch (action.type) {
    case TOGGLE_LEFT_HANDED_MODE:
        return toggleGlobalConfig(state, (config) => ({ leftHandedMode: !config.leftHandedMode }));

    case TOGGLE_HIDE_TAGS_MODE:
        return toggleGlobalConfig(state, (config) => ({ hideTagsMode: !config.hideTagsMode }));

    case TOGGLE_HIDE_HELP_MODE:
        return toggleGlobalConfig(state, (config) => ({ hideHelpMode: !config.hideHelpMode }));

    case TOGGLE_HIDE_SWITCHES_MODE:
        return toggleGlobalConfig(state, (config) => ({ hideSwitchesMode: !config.hideSwitchesMode }));

    case INITIALIZE_CHECKLIST:
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
