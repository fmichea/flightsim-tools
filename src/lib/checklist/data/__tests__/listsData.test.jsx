import { ChecklistLists } from 'lib/checklist/data/lists';
import { ChecklistListsData } from 'lib/checklist/data/listsData';

describe('listsData', () => {
    test('all checklists lists have data', () => {
        expect(ChecklistLists).toBeSetOfDataKeys();
        expect(ChecklistLists).toHaveDataForEachDataKeys(ChecklistListsData);
    });
});
