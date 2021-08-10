import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistsData } from 'lib/checklist/data/checklistsData';

describe('checklistsData', () => {
    test('all checklists have data', () => {
        Object.values(Checklists).forEach((keyName) => {
            expect(Object.keys(ChecklistsData)).toContain(keyName);
        });
    });
});
