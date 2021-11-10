import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { useChecklistListInfoData } from 'lib/checklist/hooks/useChecklistListInfoData';
import { TestDataHookChecklistData } from 'tests/data/checklists/hooks/checklistData';
import { mountHookWithStore } from 'tests/lib/mountHookWithStore';

const setup = () => mountHookWithStore(() => useChecklistListInfoData({
    checklistData: TestDataHookChecklistData,
    checklistName: Checklists.WORKINGTITLE_CJ4,
    checklistListName: ChecklistLists.BEFORE_ENGINE_START,
    checklistURLManager: null,
}));

describe('useChecklistListInfoData', () => {
    test('get the items data', () => {
        const { getCurrentHookResult } = setup();
        const { title, setActiveCallback, resetCallback } = getCurrentHookResult();

        expect(title).toEqual('Before Engine Start');
        expect(setActiveCallback).toBeDefined();
        expect(resetCallback).toBeDefined();
    });
});
