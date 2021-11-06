import {
    INITIALIZE_CHECKLIST,
    RESET_CHECKED_ITEMS,
    RESET_LIST_CHECKED_ITEMS, TOGGLE_HIDE_HELP_MODE, TOGGLE_HIDE_SWITCHES_MODE, TOGGLE_HIDE_TAGS_MODE,
    TOGGLE_ITEM,
    TOGGLE_LEFT_HANDED_MODE,
} from 'state/constants/checklist';

export const initializeChecklist = (checklistName, checklistLists) => ({
    type: INITIALIZE_CHECKLIST,
    checklistName,
    checklistLists,
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

export const toggleHideTagsMode = () => ({
    type: TOGGLE_HIDE_TAGS_MODE,
});

export const toggleHideHelpMode = () => ({
    type: TOGGLE_HIDE_HELP_MODE,
});

export const toggleHideSwitchesMode = () => ({
    type: TOGGLE_HIDE_SWITCHES_MODE,
});
