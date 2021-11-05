import { pick } from 'lib/pick';
import { defaultChecklistListState, defaultChecklistState } from 'state/constants/checklist';

export const getChecklistGlobalConfig = (state) => pick(
    state.checklist,
    defaultChecklistState,
).config;

export const getChecklistData = (state, checklistName) => pick(
    state.checklist.lists[checklistName],
    defaultChecklistListState,
);

export const getChecklistListItemData = (state, checklistName, itemKey) => {
    const { checkedItems } = getChecklistData(state, checklistName);

    return {
        isChecked: checkedItems.includes(itemKey),
    };
};

export const getChecklistListCountersData = (state, checklistName, checklistListName) => {
    const { counters } = getChecklistData(state, checklistName);

    return {
        checkedCount: counters.listItemsChecked[checklistListName],
        totalsCount: counters.listItemsTotals[checklistListName],
    };
};
