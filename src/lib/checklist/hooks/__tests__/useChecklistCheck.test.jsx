import { mountHookWithStore } from 'tests/lib/mountHookWithStore';
import { useChecklistCheck } from 'lib/checklist/hooks/useChecklistCheck';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { Checklists } from 'lib/checklist/data/checklists';

const setup = ({ checklistName, checklistListName }) => mountHookWithStore(
    () => useChecklistCheck({ checklistName, checklistListName }),
);

describe('useChecklistCheck', () => {
    test('checklist name and checklist list name are known', () => {
        const { getCurrentHookResult } = setup({
            checklistName: Checklists.WORKINGTITLE_CJ4,
            checklistListName: ChecklistLists.AFTER_LANDING,
        });

        expect(getCurrentHookResult()).toEqual({
            checklistFound: true,
            checklistListFound: true,
        });
    });

    test('checklist name and checklist list name are not known', () => {
        const { getCurrentHookResult } = setup({
            checklistName: 'abc',
            checklistListName: 'efg',
        });

        expect(getCurrentHookResult()).toEqual({
            checklistFound: false,
            checklistListFound: false,
        });
    });
});
