import {
    CHECK_ITEM,
    INITIALIZE_CHECKLIST,
    RESET_CHECKED_ITEMS,
    RESET_LIST_CHECKED_ITEMS,
    TOGGLE_ITEM,
    TOGGLE_LEFT_HANDED_MODE,
    UNCHECK_ITEM,
} from 'state/constants/checklist';

export const initializeChecklist = (checklistName, checklistLists) => ({
    type: INITIALIZE_CHECKLIST,
    checklistName,
    checklistLists,
});

export const checkItem = (checklistName, checklistListName, itemKey) => ({
    type: CHECK_ITEM,
    checklistName,
    checklistListName,
    itemKey,
});

export const uncheckItem = (checklistName, checklistListName, itemKey) => ({
    type: UNCHECK_ITEM,
    checklistName,
    checklistListName,
    itemKey,
});

export const toggleItem = (checklistName, checklistListName, itemKey) => ({
    type: TOGGLE_ITEM,
    checklistName,
    checklistListName,
    itemKey,
});

export const resetChecklistCheckedItems = (checklistName) => ({
    type: RESET_CHECKED_ITEMS,
    checklistName,
});

export const resetChecklistListCheckedItems = (checklistName, checklistListName) => ({
    type: RESET_LIST_CHECKED_ITEMS,
    checklistName,
    checklistListName,
});

export const toggleLeftHandedMode = () => ({
    type: TOGGLE_LEFT_HANDED_MODE,
});
