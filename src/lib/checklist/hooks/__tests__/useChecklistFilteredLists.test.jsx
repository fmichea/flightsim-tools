import { mountHookWithStore } from 'tests/lib/mountHookWithStore';
import { useChecklistFilteredLists } from 'lib/checklist/hooks/useChecklistFilteredLists';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistFilters } from 'lib/checklist/data/filters';
import { TestDataHookChecklistData } from 'tests/data/checklists/hooks/checklistData';
import { pick } from 'lib/pick';
import {
    TestDataHookFilteredListsNoFiltersSelected,
    TestDataHookFilteredListsSimsetupIncluded,
    TestDataHookFilteredListsVatsimAndSimsetupIncluded,
    TestDataHookFilteredListsVatsimIncluded,
} from 'tests/data/checklists/hooks/filteredChecklistData';

const setup = ({ checklistData, selectedFilters }) => mountHookWithStore(
    () => useChecklistFilteredLists({
        checklistData,
        selectedFilters: pick(selectedFilters, []),
    }),
);

describe('useChecklistFilteredLists', () => {
    test('default filter is used even if not selected', () => {
        const { getCurrentHookResult } = setup({
            checklistData: TestDataHookChecklistData,
        });

        expect(getCurrentHookResult()).toEqual(TestDataHookFilteredListsNoFiltersSelected);
    });

    test('no default filters just includes everything', () => {
        const { getCurrentHookResult } = setup({
            checklistData: {
                ...TestDataHookChecklistData,
                defaultFilters: [],
            },
        });

        expect(getCurrentHookResult()).toEqual(TestDataHookFilteredListsVatsimAndSimsetupIncluded);
    });

    test('with selectable filter (selected)', () => {
        const { getCurrentHookResult } = setup({
            checklistData: TestDataHookChecklistData,
            selectedFilters: [ChecklistFilters.INCLUDE_VATSIM_ITEMS],
        });

        expect(getCurrentHookResult()).toEqual(TestDataHookFilteredListsVatsimIncluded);
    });

    test('list filtered out completely back if filter selected', () => {
        const { getCurrentHookResult } = setup({
            checklistData: TestDataHookChecklistData,
            selectedFilters: [ChecklistFilters.INCLUDE_SIMSETUP_ITEMS],
        });

        expect(getCurrentHookResult()).toEqual(TestDataHookFilteredListsSimsetupIncluded);
    });
});
