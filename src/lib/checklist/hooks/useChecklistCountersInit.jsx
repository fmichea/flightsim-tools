import { useDispatch } from 'react-redux';

import { listItemKey } from 'lib/checklist/listItemKey';
import { useDeepEffect, useDeepMemo } from 'lib/hooks/deep';
import { objectFromList } from 'lib/objects';
import { initializeChecklist } from 'state/actions/checklist';

export const useChecklistCountersInit = ({ checklistName, checklistData, filteredChecklistLists }) => {
    const dispatch = useDispatch();

    const initializeChecklistData = useDeepMemo(() => {
        const { listItemsData } = checklistData;

        return objectFromList(
            filteredChecklistLists,
            ({ items, listName }) => ({
                key: listName,
                value: items
                    .filter((itemName) => !listItemsData[itemName].isNotImplemented)
                    .map((itemName) => listItemKey(checklistName, listName, itemName)),
            }),
        );
    }, [checklistData, filteredChecklistLists]);

    useDeepEffect(() => {
        dispatch(initializeChecklist(checklistName, initializeChecklistData));
    }, [dispatch, checklistName, initializeChecklistData]);
};
