import { ChecklistTags } from 'lib/checklist/data/tags';
import { ChecklistTagsData } from 'lib/checklist/data/tagsData';

describe('tagsData', () => {
    test('all checklists items have data', () => {
        Object.values(ChecklistTags).forEach((keyName) => {
            expect(Object.keys(ChecklistTagsData)).toContain(keyName);
        });
    });
});
