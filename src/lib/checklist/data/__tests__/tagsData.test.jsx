import { ChecklistTags } from 'lib/checklist/data/tags';
import { ChecklistTagsData } from 'lib/checklist/data/tagsData';

describe('tagsData', () => {
    test('all checklists items have data', () => {
        expect(ChecklistTags).toBeSetOfDataKeys();
        expect(ChecklistTags).toHaveDataForEachDataKeys(ChecklistTagsData);
    });
});
