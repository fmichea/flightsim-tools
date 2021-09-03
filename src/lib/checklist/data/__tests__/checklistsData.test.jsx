import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistsData } from 'lib/checklist/data/checklistsData';

describe('checklistsData', () => {
    test('all checklists have data', () => {
        expect(Checklists).toBeSetOfDataKeys();
        expect(Checklists).toHaveDataForEachDataKeys(ChecklistsData);
    });
});
