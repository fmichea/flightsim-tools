import { useDispatch, useSelector } from 'react-redux';
import { getChecklistData } from 'state/readers/checklist';
import { ChecklistItemsData, ChecklistItemsNotImplemented } from 'lib/checklist/data/listItemsData';
import { checkItem, uncheckItem } from 'state/actions/checklist';
import { useMemo } from 'react';
import { ChecklistTagsData } from 'lib/checklist/data/tagsData';
import { pick } from 'lib/pick';

export const useChecklistItems = ({ checklistName, selectedChecklistListName, filteredChecklistLists }) => {
    const dispatch = useDispatch();

    const { checkedItems } = useSelector((state) => getChecklistData(state, checklistName));

    const checkedItemsSet = useMemo(() => new Set(checkedItems), [checkedItems]);

    return useMemo(() => pick(filteredChecklistLists.listsItems[selectedChecklistListName], []).map((itemName) => {
        const item = ChecklistItemsData[itemName];

        const itemKey = `${selectedChecklistListName}:${itemName}`;

        const isNotImplemented = ChecklistItemsNotImplemented.has(itemName);
        const isChecked = isNotImplemented || checkedItemsSet.has(itemKey);

        const toggleChecked = () => {
            if (isChecked) {
                dispatch(uncheckItem(checklistName, selectedChecklistListName, itemKey));
            } else {
                dispatch(checkItem(checklistName, selectedChecklistListName, itemKey));
            }
        };

        return {
            ...item,
            tags: Array.from(item.tags).map((tag) => ChecklistTagsData[tag]),
            isChecked,
            isNotImplemented,
            toggleChecked,
        };
    }), [filteredChecklistLists, selectedChecklistListName, checkedItemsSet]);
};
