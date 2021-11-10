import { useMemo } from 'react';

import { useDispatch } from 'react-redux';

import { useChecklistCountersInit } from 'lib/checklist/hooks/useChecklistCountersInit';
import { useChecklistData } from 'lib/checklist/hooks/useChecklistData';
import { useChecklistFilteredLists } from 'lib/checklist/hooks/useChecklistFilteredLists';
import { resetChecklistCheckedItems } from 'state/actions/checklist';

export const useChecklist = ({
    checklistName,
    selectedFilters,
}) => {
    const dispatch = useDispatch();

    const checklistData = useChecklistData({ checklistName });

    const filteredChecklistLists = useChecklistFilteredLists({
        checklistData,
        selectedFilters,
    });

    useChecklistCountersInit({
        checklistName,
        filteredChecklistLists,
        checklistData,
    });

    const [resetFullCallback] = useMemo(() => [
        () => dispatch(resetChecklistCheckedItems(checklistName)),
    ], [checklistName]);

    return {
        checklistData,
        checklistListsData: filteredChecklistLists,
        resetFullCallback,
    };
};
