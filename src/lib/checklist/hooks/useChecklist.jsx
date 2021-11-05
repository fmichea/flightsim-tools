import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { resetChecklistCheckedItems } from 'state/actions/checklist';
import { useChecklistData } from 'lib/checklist/hooks/useChecklistData';
import { useChecklistFilteredLists } from 'lib/checklist/hooks/useChecklistFilteredLists';
import { useChecklistCountersInit } from 'lib/checklist/hooks/useChecklistCountersInit';

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
