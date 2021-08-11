import { mountHookWithStore } from 'tests/lib/mountHookWithStore';
import { useChecklistInit } from 'lib/checklist/hooks/useChecklistInit';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { ChecklistsData } from 'lib/checklist/data/checklistsData';
import { Checklists } from 'lib/checklist/data/checklists';
import { getChecklistData } from 'state/readers/checklist';

const setup = ({ checklistName, checklistListName, checklistData }) => mountHookWithStore(
    () => useChecklistInit({
        checklistName,
        checklistListName,
        checklistData,
        selectedFilters: [],
    }),
);

describe('useChecklistInit', () => {
    test('list gets initialized in store', () => {
        const { store, getCurrentHookResult } = setup({
            checklistName: Checklists.WT_CJ4,
            checklistListName: ChecklistLists.LANDING,
            checklistData: ChecklistsData[Checklists.WT_CJ4],
            selectedFilters: [],
        });

        const { selectedChecklistListName, filteredChecklistLists: { listNames } } = getCurrentHookResult();

        expect(selectedChecklistListName).toEqual(ChecklistLists.LANDING);

        expect(listNames).toEqual([
            ChecklistLists.BEFORE_ENGINE_START,
            ChecklistLists.ENGINE_START,
            ChecklistLists.BEFORE_TAXI,
            ChecklistLists.TAXI,
            ChecklistLists.BEFORE_TAKEOFF,
            ChecklistLists.TAKEOFF,
            ChecklistLists.AFTER_TAKEOFF,
            ChecklistLists.CRUISE,
            ChecklistLists.DESCENT,
            ChecklistLists.APPROACH,
            ChecklistLists.BEFORE_LANDING,
            ChecklistLists.LANDING,
            ChecklistLists.ALL_ENGINES_GO_AROUND,
            ChecklistLists.AFTER_LANDING,
            ChecklistLists.SHUTDOWN,
        ]);

        expect(getChecklistData(store.getState(), Checklists.WT_CJ4)).toEqual({
            checkedItems: [],
            counters: {
                listItemsChecked: {
                    [ChecklistLists.BEFORE_ENGINE_START]: 0,
                    [ChecklistLists.ENGINE_START]: 0,
                    [ChecklistLists.BEFORE_TAXI]: 0,
                    [ChecklistLists.TAXI]: 0,
                    [ChecklistLists.BEFORE_TAKEOFF]: 0,
                    [ChecklistLists.TAKEOFF]: 0,
                    [ChecklistLists.AFTER_TAKEOFF]: 0,
                    [ChecklistLists.CRUISE]: 0,
                    [ChecklistLists.DESCENT]: 0,
                    [ChecklistLists.APPROACH]: 0,
                    [ChecklistLists.BEFORE_LANDING]: 0,
                    [ChecklistLists.LANDING]: 0,
                    [ChecklistLists.ALL_ENGINES_GO_AROUND]: 0,
                    [ChecklistLists.AFTER_LANDING]: 0,
                    [ChecklistLists.SHUTDOWN]: 0,
                },
                listItemsTotals: {
                    [ChecklistLists.BEFORE_ENGINE_START]: 11,
                    [ChecklistLists.ENGINE_START]: 8,
                    [ChecklistLists.BEFORE_TAXI]: 14,
                    [ChecklistLists.TAXI]: 6,
                    [ChecklistLists.BEFORE_TAKEOFF]: 13,
                    [ChecklistLists.TAKEOFF]: 4,
                    [ChecklistLists.AFTER_TAKEOFF]: 9,
                    [ChecklistLists.CRUISE]: 2,
                    [ChecklistLists.DESCENT]: 3,
                    [ChecklistLists.APPROACH]: 12,
                    [ChecklistLists.BEFORE_LANDING]: 5,
                    [ChecklistLists.LANDING]: 3,
                    [ChecklistLists.ALL_ENGINES_GO_AROUND]: 10,
                    [ChecklistLists.AFTER_LANDING]: 6,
                    [ChecklistLists.SHUTDOWN]: 10,
                },
            },
        });
    });

    test('first list gets selected if default is needed', () => {
        const { getCurrentHookResult } = setup({
            checklistName: Checklists.WT_CJ4,
            checklistData: ChecklistsData[Checklists.WT_CJ4],
            selectedFilters: [],
        });

        const { selectedChecklistListName } = getCurrentHookResult();

        expect(selectedChecklistListName).toEqual(ChecklistLists.BEFORE_ENGINE_START);
    });
});
