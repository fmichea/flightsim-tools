import { ChecklistItemsData } from 'lib/checklist/data/listItemsData';
import { ChecklistItems } from 'lib/checklist/data/listItems';

describe('listItemsData', () => {
    test('all checklists items have data', () => {
        Object.values(ChecklistItems).forEach((keyName) => {
            expect(Object.keys(ChecklistItemsData)).toContain(keyName);
        });
    });
});
