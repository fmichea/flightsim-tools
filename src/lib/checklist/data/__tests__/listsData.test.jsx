import { ChecklistLists } from 'lib/checklist/data/lists';
import { ChecklistListsData } from 'lib/checklist/data/listsData';

describe('listsData', () => {
    test('all checklists lists have data', () => {
        Object.values(ChecklistLists).forEach((keyName) => {
            expect(Object.keys(ChecklistListsData)).toContain(keyName);
        });
    });
});
