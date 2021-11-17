import { ChecklistFiltersResults } from 'lib/checklist/data/filtersResults';

export const buildTagFilterFNInclusion = (tag) => (item) => {
    if (item.tagsSet.has(tag)) {
        return ChecklistFiltersResults.INCLUDE;
    }
    return ChecklistFiltersResults.PASS;
};

export const buildTagFilterFNExclusion = (tag) => (item) => {
    if (item.tagsSet.has(tag)) {
        return ChecklistFiltersResults.EXCLUDE;
    }
    return ChecklistFiltersResults.PASS;
};
