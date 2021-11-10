import { ChecklistsData } from 'lib/checklist/data/checklistsData';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistItemsData } from 'lib/checklist/data/listItemsData';

describe('listItemsData', () => {
    test('all checklists items have data', () => {
        expect(ChecklistItems).toBeSetOfDataKeys();
        expect(ChecklistItems).toHaveDataForEachDataKeys(ChecklistItemsData);
    });

    test('all checklist items are used at least once', () => {
        const usedItems = Object.values(ChecklistsData)
            .map((value) => value.lists.map((listValue) => listValue.items))
            .reduce((previousValue, currentValue) => previousValue.concat(...currentValue), []);

        Object.values(ChecklistItems).forEach((keyName) => {
            expect(usedItems).toContain(keyName);
        });
    });
});
