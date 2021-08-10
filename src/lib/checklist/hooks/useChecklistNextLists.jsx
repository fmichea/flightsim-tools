import { useMemo } from 'react';
import { pick } from 'lib/pick';

export const useChecklistNextLists = ({ selectedChecklistListName, menuItems, filteredChecklistLists }) => useMemo(
    () => {
        const intermediate = {};

        const nextItems = pick(filteredChecklistLists.listsNextListNames[selectedChecklistListName], []);
        if (nextItems.length === 0) {
            return [];
        }

        const nextItemsSet = new Set(nextItems);

        menuItems
            .filter((value) => nextItemsSet.has(value.uid))
            .forEach((value) => { intermediate[value.uid] = value; });

        return nextItems
            .filter((checklistListName) => (checklistListName in intermediate))
            .map((checklistListName) => intermediate[checklistListName]);
    },
    [selectedChecklistListName, menuItems, filteredChecklistLists],
);
