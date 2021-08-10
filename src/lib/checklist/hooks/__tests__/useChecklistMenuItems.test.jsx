import { mountHookWithStore } from 'tests/lib/mountHookWithStore';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { Checklists } from 'lib/checklist/data/checklists';
import { useChecklistFilteredLists } from 'lib/checklist/hooks/useChecklistFilteredLists';
import { ChecklistsData } from 'lib/checklist/data/checklistsData';
import { useChecklistMenuItems } from 'lib/checklist/hooks/useChecklistMenuItems';
import { ChecklistListsData } from 'lib/checklist/data/listsData';

const setup = ({
    checklistName, checklistURLManager, checklistData, selectedFilters,
}) => mountHookWithStore(
    () => {
        const filteredChecklistLists = useChecklistFilteredLists({
            checklistData,
            selectedFilters,
        });

        return useChecklistMenuItems({
            checklistName,
            checklistURLManager,
            filteredChecklistLists,
        });
    },
);

describe('useChecklistMenuItems', () => {
    test('menu items are returned with additional information', () => {
        const checklistURLManager = {
            changeChecklistList: jest.fn(),
        };

        const { getCurrentHookResult } = setup({
            checklistName: Checklists.WT_CJ4,
            checklistData: ChecklistsData[Checklists.WT_CJ4],
            selectedFilters: [],
            checklistURLManager,
        });

        const menuItems1 = getCurrentHookResult();
        expect(menuItems1).toHaveLength(15);

        const item1 = menuItems1[0];
        const beforeEngineStart = ChecklistListsData[ChecklistLists.BEFORE_ENGINE_START];

        expect(item1.uid).toEqual(beforeEngineStart.uid);
        expect(item1.title).toEqual(beforeEngineStart.title);
        expect(item1.progressPercent).toEqual('0');

        item1.selectMenu();

        expect(checklistURLManager.changeChecklistList.mock.calls).toHaveLength(1);
    });
});
