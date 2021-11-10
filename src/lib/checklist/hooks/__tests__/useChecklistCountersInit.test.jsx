import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistsData } from 'lib/checklist/data/checklistsData';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { useChecklistCountersInit } from 'lib/checklist/hooks/useChecklistCountersInit';
import { getChecklistData } from 'state/readers/checklist';
import { TestDataHookChecklistData } from 'tests/data/checklists/hooks/checklistData';
import { TestDataHookFilteredListsNoFiltersSelected } from 'tests/data/checklists/hooks/filteredChecklistData';
import { mountHookWithStore } from 'tests/lib/mountHookWithStore';

const setup = () => mountHookWithStore(
    () => useChecklistCountersInit({
        checklistName: Checklists.WORKINGTITLE_CJ4,
        checklistData: TestDataHookChecklistData,
        filteredChecklistLists: TestDataHookFilteredListsNoFiltersSelected,
    }),
);

describe('useChecklistCountersInit', () => {
    test('list gets initialized in store', () => {
        const { store, getCurrentHookResult } = setup();

        getCurrentHookResult();

        expect(getChecklistData(store.getState(), Checklists.WORKINGTITLE_CJ4)).toEqual({
            checkedItems: [],
            counters: {
                listItemsChecked: {
                    [ChecklistLists.BEFORE_ENGINE_START]: 0,
                    [ChecklistLists.ENGINE_START]: 0,
                },
                listItemsTotals: {
                    [ChecklistLists.BEFORE_ENGINE_START]: 1,
                    [ChecklistLists.ENGINE_START]: 2,
                },
            },
        });
    });
});
