import { Checklists } from 'lib/checklist/data/checklists';
import { useChecklistData } from 'lib/checklist/hooks/useChecklistData';
import { mountHookWithStore } from 'tests/lib/mountHookWithStore';

const setup = () => mountHookWithStore(() => useChecklistData({
    checklistName: Checklists.WORKINGTITLE_CJ4,
}));

describe('useChecklistData', () => {
    test('checklist data is retrieved', () => {
        const { getCurrentHookResult } = setup();
        const checklistData = getCurrentHookResult();

        expect(checklistData.title).toEqual('WorkingTitle CJ4');

        expect(checklistData.listNames).toHaveLength(17);
        expect(checklistData.listsData).toBeDefined();
        expect(checklistData.listItemsData).toBeDefined();

        expect(checklistData.selectableFilters).toHaveLength(3);
        expect(checklistData.defaultFilters).toHaveLength(1);
    });
});
