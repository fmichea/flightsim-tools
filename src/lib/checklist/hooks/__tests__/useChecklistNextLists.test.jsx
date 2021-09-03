import { mountHookWithStore } from 'tests/lib/mountHookWithStore';
import { useChecklistFilteredLists } from 'lib/checklist/hooks/useChecklistFilteredLists';
import { useChecklistNextLists } from 'lib/checklist/hooks/useChecklistNextLists';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { useChecklistMenuItems } from 'lib/checklist/hooks/useChecklistMenuItems';
import { ChecklistsData } from 'lib/checklist/data/checklistsData';
import { Checklists } from 'lib/checklist/data/checklists';

const setup = ({
    checklistName,
    checklistData,
    selectedFilters,
}) => mountHookWithStore(
    () => {
        const filteredChecklistLists = useChecklistFilteredLists({
            checklistData,
            selectedFilters,
        });

        const menuItems = useChecklistMenuItems({
            checklistName,
            checklistURLManager: null,
            filteredChecklistLists,
        });

        return useChecklistNextLists({
            selectedChecklistListName: ChecklistLists.LANDING,
            menuItems,
            filteredChecklistLists,
        });
    },
);

describe('useChecklistNextLists', () => {
    test('get next lists link from current list selected', () => {
        const { getCurrentHookResult } = setup({
            checklistName: Checklists.WORKINGTITLE_CJ4,
            checklistData: ChecklistsData[Checklists.WORKINGTITLE_CJ4],
            selectedFilters: [],
        });

        const nextLists = getCurrentHookResult();

        expect(nextLists).toHaveLength(2);
        expect(nextLists[0].uid).toEqual(ChecklistLists.ALL_ENGINES_GO_AROUND);
        expect(nextLists[1].uid).toEqual(ChecklistLists.AFTER_LANDING);
    });
});
