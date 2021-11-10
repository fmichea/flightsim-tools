import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { useChecklist } from 'lib/checklist/hooks/useChecklist';
import { useChecklistURLConfig } from 'lib/checklist/hooks/useChecklistURLConfig';
import { ChecklistsWithNameAndListNameRoute } from 'lib/routes';
import { mountHookWithStore } from 'tests/lib/mountHookWithStore';

const setup = () => mountHookWithStore(
    () => {
        const {
            checklistName,
            checklistListName,
            selectedFilters,
            checklistURLManager,
        } = useChecklistURLConfig();

        return useChecklist({
            checklistName,
            checklistListName,
            selectedFilters,
            checklistURLManager,
        });
    },
    {
        initialRoute: `/checklists/${Checklists.WORKINGTITLE_CJ4}/${ChecklistLists.LANDING}`,
        routePath: ChecklistsWithNameAndListNameRoute,
    },
);

describe('useChecklist', () => {
    test('overall test all pieces are set together', () => {
        const { getCurrentHookResult } = setup();

        const { checklistData, checklistListsData, resetFullCallback } = getCurrentHookResult();

        expect(checklistData).toBeDefined();

        expect(checklistListsData[0].listName).toEqual('before-engine-start');
        expect(checklistListsData[0].items).toHaveLength(13);

        expect(resetFullCallback).toBeDefined();
    });
});
