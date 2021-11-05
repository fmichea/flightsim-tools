export const TOGGLE_LEFT_HANDED_MODE = 'TOGGLE_LEFT_HANDED_MODE';

export const INITIALIZE_CHECKLIST = 'INITIALIZE_CHECKLIST';
export const CHECK_ITEM = 'CHECK_ITEM';
export const UNCHECK_ITEM = 'UNCHECK_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const RESET_CHECKED_ITEMS = 'RESET_CHECKED_ITEMS';
export const RESET_LIST_CHECKED_ITEMS = 'RESET_LIST_CHECKED_ITEMS';

export const defaultChecklistListState = {
    counters: {
        listItemsChecked: {},
        listItemsTotals: {},
    },
    checkedItems: [],
};

export const defaultChecklistState = {
    config: {
        leftHandedMode: false,
    },
    lists: {},
};
