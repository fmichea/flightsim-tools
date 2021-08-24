import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { resetChecklistCheckedItems, resetChecklistListCheckedItems } from 'state/actions/checklist';
import { useChecklistInit } from 'lib/checklist/hooks/useChecklistInit';
import { useChecklistMenuItems } from 'lib/checklist/hooks/useChecklistMenuItems';
import { useChecklistItems } from 'lib/checklist/hooks/useChecklistItems';
import { ChecklistListsData } from 'lib/checklist/data/listsData';
import { useChecklistNextLists } from 'lib/checklist/hooks/useChecklistNextLists';
import { useChecklistData } from 'lib/checklist/hooks/useChecklistData';
import { pick } from 'lib/pick';

export const useChecklist = ({
    checklistName,
    checklistListName,
    selectedFilters,
    checklistURLManager,
}) => {
    const dispatch = useDispatch();

    const checklistData = useChecklistData({ checklistName });

    const { filteredChecklistLists, selectedChecklistListName } = useChecklistInit({
        checklistName,
        checklistListName,
        checklistData,
        selectedFilters,
    });

    // FIXME: this used to have a description but it was CJ4 specific, so I removed it. Now it's in the checklist data,
    //   but then it is not displayed.
    const checklistListData = useMemo(
        () => pick(ChecklistListsData[selectedChecklistListName]),
        [selectedChecklistListName],
    );

    const menuItems = useChecklistMenuItems({
        checklistName,
        checklistURLManager,
        filteredChecklistLists,
    });

    const items = useChecklistItems({
        checklistName,
        selectedChecklistListName,
        filteredChecklistLists,
    });

    const nextLists = useChecklistNextLists({
        selectedChecklistListName,
        filteredChecklistLists,
        menuItems,
    });

    const [resetCallback, resetFullCallback] = useMemo(() => [
        () => dispatch(resetChecklistListCheckedItems(
            checklistName,
            selectedChecklistListName,
        )),
        () => dispatch(resetChecklistCheckedItems(checklistName)),
    ], [checklistName, selectedChecklistListName]);

    return {
        selectedChecklistListName,
        checklistData,
        checklistListData,
        menuItems,
        items,
        nextLists,
        resetCallback,
        resetFullCallback,
    };
};
