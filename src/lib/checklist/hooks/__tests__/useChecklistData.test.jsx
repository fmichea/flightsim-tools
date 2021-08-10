import { mountHookWithStore } from 'tests/lib/mountHookWithStore';
import { useChecklistData } from 'lib/checklist/hooks/useChecklistData';
import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistsData } from 'lib/checklist/data/checklistsData';

const setup = () => mountHookWithStore(() => useChecklistData({ checklistName: Checklists.WT_CJ4 }));

describe('useChecklistData', () => {
    test('checklist data is retrieved', () => {
        const { getCurrentHookResult } = setup();

        expect(getCurrentHookResult()).toEqual(ChecklistsData[Checklists.WT_CJ4]);
    });
});
