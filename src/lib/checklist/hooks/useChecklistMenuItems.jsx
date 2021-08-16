import { ChecklistListsData } from 'lib/checklist/data/listsData';
import { getChecklistData } from 'state/readers/checklist';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';

export const useChecklistMenuItems = ({ checklistName, checklistURLManager, filteredChecklistLists }) => {
    const { counters } = useSelector((state) => getChecklistData(state, checklistName));

    return useMemo(() => filteredChecklistLists.listNames.map((listName) => {
        const baseData = ChecklistListsData[listName];

        const checkedCount = counters.listItemsChecked[listName];
        const totalsCount = counters.listItemsTotals[listName];

        let progressPercent = 0;
        if (isNotNullOrUndefined(totalsCount) && totalsCount !== 0) {
            progressPercent = (checkedCount * 100) / totalsCount;
        }

        return {
            ...baseData,
            key: baseData.uid,
            progressPercent: progressPercent.toFixed(0),
            selectMenu: () => {
                checklistURLManager.changeChecklistList(listName);
            },
        };
    }), [filteredChecklistLists, counters, checklistURLManager]);
};
