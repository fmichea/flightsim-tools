import { ChecklistFilters } from 'lib/checklist/data/filters';
import { ChecklistFiltersData } from 'lib/checklist/data/filtersData';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { ChecklistFiltersResults } from 'lib/checklist/data/filtersResults';

describe('filtersData', () => {
    test('all checklists filters have data', () => {
        expect(ChecklistFilters).toBeSetOfDataKeys();
        expect(ChecklistFilters).toHaveDataForEachDataKeys(ChecklistFiltersData);
    });

    test('exclude all returns INCLUDE/EXCLUDE on official', () => {
        const tagData = ChecklistFiltersData[ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL];

        expect(tagData.terminal).toBeTruthy();

        expect(tagData.fn({ tags: new Set([ChecklistTags.OFFICIAL]) }))
            .toEqual(ChecklistFiltersResults.INCLUDE);

        expect(tagData.fn({ tags: new Set([ChecklistTags.VATSIM]) }))
            .toEqual(ChecklistFiltersResults.EXCLUDE);
    });

    test('VATSIM include only filters vatsim items', () => {
        const tagData = ChecklistFiltersData[ChecklistFilters.INCLUDE_VATSIM_ITEMS];

        expect(tagData.terminal).toBeFalsy();

        expect(tagData.fn({ tags: new Set([ChecklistTags.VATSIM]) }))
            .toEqual(ChecklistFiltersResults.INCLUDE);

        expect(tagData.fn({
            tags: new Set([
                ChecklistTags.OFFICIAL,
                ChecklistTags.EXTENSION,
                ChecklistTags.SIMSETUP,
            ]),
        })).toEqual(ChecklistFiltersResults.PASS);
    });

    test('Extensions include only filters extensions items', () => {
        const tagData = ChecklistFiltersData[ChecklistFilters.INCLUDE_EXTENSIONS];

        expect(tagData.terminal).toBeFalsy();

        expect(tagData.fn({ tags: new Set([ChecklistTags.EXTENSION]) }))
            .toEqual(ChecklistFiltersResults.INCLUDE);

        expect(tagData.fn({
            tags: new Set([
                ChecklistTags.OFFICIAL,
                ChecklistTags.VATSIM,
                ChecklistTags.SIMSETUP,
            ]),
        })).toEqual(ChecklistFiltersResults.PASS);
    });

    test('SimSetup include only filters vatsim items', () => {
        const tagData = ChecklistFiltersData[ChecklistFilters.INCLUDE_SIMSETUP_ITEMS];

        expect(tagData.terminal).toBeFalsy();

        expect(tagData.fn({ tags: new Set([ChecklistTags.SIMSETUP]) }))
            .toEqual(ChecklistFiltersResults.INCLUDE);

        expect(tagData.fn({
            tags: new Set([
                ChecklistTags.OFFICIAL,
                ChecklistTags.EXTENSION,
                ChecklistTags.VATSIM,
            ]),
        })).toEqual(ChecklistFiltersResults.PASS);
    });
});
