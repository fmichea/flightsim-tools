import { useMemo } from 'react';
import { ChecklistFiltersData } from 'lib/checklist/data/filtersData';
import { ChecklistItemsData } from 'lib/checklist/data/listItemsData';
import { ChecklistFiltersResults } from 'lib/checklist/data/filtersResults';
import { pick } from 'lib/pick';

export const useChecklistFilteredLists = ({ checklistData, selectedFilters }) => useMemo(() => {
    const selectedFiltersSet = new Set(selectedFilters);
    const selectableFilters = pick(checklistData.selectableFilters, []);
    const defaultFilters = pick(checklistData.defaultFilters, []);

    const result = {
        listNames: [],
        listsItems: {},
        listsNextListNames: {},
    };
    const filterFNs = [];

    // We add all selectable filters that are selected currently.
    selectableFilters.forEach((filterName) => {
        if (selectedFiltersSet.has(filterName)) {
            filterFNs.push(ChecklistFiltersData[filterName].fn);
        }
    });

    // We then add all default selected filters.
    defaultFilters.forEach((filterName) => {
        filterFNs.push(ChecklistFiltersData[filterName].fn);
    });

    checklistData.lists.forEach((checklistList) => {
        const filteredItems = [];

        checklistList.items.forEach((itemName) => {
            const item = ChecklistItemsData[itemName];

            let idx = 0;

            for (; idx < filterFNs.length; idx += 1) {
                const filteringResult = filterFNs[idx](item);

                if (filteringResult === ChecklistFiltersResults.INCLUDE) {
                    filteredItems.push(itemName);
                    break;
                } else if (filteringResult === ChecklistFiltersResults.EXCLUDE) {
                    break;
                }
            }

            // Most likely with have a terminal filter in the defaults, but if not
            // what remains gets included.
            if (idx === filterFNs.length) {
                filteredItems.push(itemName);
            }
        });

        if (filteredItems.length === 0) {
            return;
        }

        result.listNames.push(checklistList.listName);
        result.listsItems[checklistList.listName] = filteredItems;
        result.listsNextListNames[checklistList.listName] = checklistList.nextListNames;
    });

    return result;
}, [checklistData, selectedFilters]);
