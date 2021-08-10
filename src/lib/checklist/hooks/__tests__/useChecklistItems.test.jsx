import { mountHookWithStore } from 'tests/lib/mountHookWithStore';
import { useChecklistItems } from 'lib/checklist/hooks/useChecklistItems';
import { useChecklistInit } from 'lib/checklist/hooks/useChecklistInit';
import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistsData } from 'lib/checklist/data/checklistsData';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { ChecklistItems } from 'lib/checklist/data/listItems';

const setup = ({
    checklistName, checklistListName, checklistData, selectedFilters,
}) => mountHookWithStore(
    () => {
        const {
            selectedChecklistListName,
            filteredChecklistLists,
        } = useChecklistInit({
            checklistName,
            checklistListName,
            checklistData,
            selectedFilters,
        });

        return useChecklistItems({
            checklistName,
            selectedChecklistListName,
            filteredChecklistLists,
        });
    },
);

describe('useChecklistItems', () => {
    test('get all items from currently selected checklist', () => {
        const { getCurrentHookResult } = setup({
            checklistName: Checklists.WT_CJ4,
            checklistListName: ChecklistLists.LANDING,
            checklistData: ChecklistsData[Checklists.WT_CJ4],
            selectedFilters: [],
        });

        const items1 = getCurrentHookResult();
        expect(items1).toHaveLength(3);

        const {
            moreInfoShort: moreInfoShort1,
            toggleChecked: toggleChecked1,
            tags: tags1,
            ...item1V
        } = items1[0];

        expect(item1V).toEqual({
            uid: ChecklistItems.CJ4_LANDING_THROTTLES,
            title: 'Throttles',
            state: 'IDLE',
            isChecked: false,
            isNotImplemented: false,
        });

        expect(moreInfoShort1).toBeDefined();
        expect(toggleChecked1).toBeDefined();
        expect(tags1).toHaveLength(2);

        toggleChecked1();

        const items2 = getCurrentHookResult();
        expect(items2).toHaveLength(3);

        const { uid, isChecked, toggleChecked: toggleChecked2 } = items2[0];
        expect(uid).toEqual(ChecklistItems.CJ4_LANDING_THROTTLES);
        expect(isChecked).toBeTruthy();

        toggleChecked2();

        const items3 = getCurrentHookResult();
        expect(items3).toHaveLength(3);
        expect(items3[0].isChecked).toBeFalsy();
    });
});
