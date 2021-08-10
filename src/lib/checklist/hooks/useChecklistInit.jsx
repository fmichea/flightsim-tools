import { useDispatch } from 'react-redux';
import { useChecklistFilteredLists } from 'lib/checklist/hooks/useChecklistFilteredLists';
import { useEffect, useMemo } from 'react';
import { objectMap } from 'lib/objectMap';
import { ChecklistItemsNotImplemented } from 'lib/checklist/data/listItemsData';
import { initializeChecklist } from 'state/actions/checklist';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';

export const useChecklistInit = ({
    checklistName, checklistListName, checklistData, selectedFilters,
}) => {
    const dispatch = useDispatch();

    const filteredChecklistLists = useChecklistFilteredLists({
        checklistData,
        selectedFilters,
    });

    useEffect(() => {
        const filteredChecklistNoNotImplemented = objectMap(
            filteredChecklistLists.listsItems,
            (items) => items.filter((itemName) => !ChecklistItemsNotImplemented.has(itemName)),
        );

        dispatch(initializeChecklist(checklistName, filteredChecklistNoNotImplemented));
    }, [filteredChecklistLists]);

    const selectedChecklistListName = useMemo(() => {
        if (isNotNullOrUndefined(checklistListName)) {
            return checklistListName;
        }
        return filteredChecklistLists.listNames[0];
    }, [checklistListName, filteredChecklistLists]);

    return { selectedChecklistListName, filteredChecklistLists };
};
