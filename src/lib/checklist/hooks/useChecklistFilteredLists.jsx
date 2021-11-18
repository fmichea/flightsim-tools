import { ChecklistFiltersResults } from 'lib/checklist/data/filtersResults';
import { ChecklistItemsReplacements } from 'lib/checklist/data/listItemsData';
import { useDeepMemo } from 'lib/hooks/deep';
import { pick } from 'lib/pick';

const useChecklistFilterFunction = ({ checklistData, selectedFilters }) => useDeepMemo(() => {
    const selectedFiltersSet = new Set(pick(selectedFilters, []));

    const {
        selectableFilters,
        selectableFiltersData,

        defaultFilters,
        defaultFiltersData,
    } = checklistData;

    const filterFNs = [];

    // We add all selectable filters that are selected currently.
    selectableFilters.forEach((filterName) => {
        if (selectedFiltersSet.has(filterName)) {
            filterFNs.push(selectableFiltersData[filterName].fn);
        }
    });

    // We then add all default selected filters.
    defaultFilters.forEach((filterName) => {
        filterFNs.push(defaultFiltersData[filterName].fn);
    });

    const finalFilterResults = new Set([
        ChecklistFiltersResults.INCLUDE,
        ChecklistFiltersResults.EXCLUDE,
    ]);

    return (item) => {
        let idx = 0;

        for (; idx < filterFNs.length; idx += 1) {
            const filteringResult = filterFNs[idx](item);

            if (finalFilterResults.has(filteringResult)) {
                return filteringResult;
            }
        }

        // Most likely with have a terminal filter in the defaults, but if not
        // what remains gets included.
        return ChecklistFiltersResults.INCLUDE;
    };
}, [checklistData, selectedFilters]);

export const useChecklistFilteredLists = ({ checklistData, selectedFilters }) => {
    const filterFN = useChecklistFilterFunction({ checklistData, selectedFilters });

    return useDeepMemo(
        () => {
            const { listNames, listsData, listItemsData } = checklistData;

            const replacedItems = new Set();

            const itemIncluded = (itemName) => filterFN(listItemsData[itemName]) === ChecklistFiltersResults.INCLUDE;

            return listNames
                .map((listName) => {
                    const filteredItems = listsData[listName].items.filter(itemIncluded);

                    filteredItems
                        .reduce((agg, itemName) => [...agg, ...ChecklistItemsReplacements[itemName]], [])
                        .forEach((itemName) => { replacedItems.add(itemName); });

                    return {
                        listName,
                        items: filteredItems,
                    };
                })
                .map((value) => ({
                    ...value,
                    items: value.items.filter((itemName) => !replacedItems.has(itemName)),
                }))
                .filter((value) => value.items.length > 0);
        },
        [checklistData, filterFN],
    );
};
