import { useMemo } from 'react';
import { ChecklistsData } from 'lib/checklist/data/checklistsData';
import { ChecklistFiltersData } from 'lib/checklist/data/filtersData';
import { objectFromList } from 'lib/objects';
import { ChecklistListsData } from 'lib/checklist/data/listsData';
import { pick } from 'lib/pick';
import { ChecklistItemsData, ChecklistItemsNotImplemented } from 'lib/checklist/data/listItemsData';
import { ChecklistTagsData } from 'lib/checklist/data/tagsData';

export const useChecklistData = ({ checklistName }) => useMemo(() => {
    const baseData = ChecklistsData[checklistName];

    const filtersDataFN = (filterName) => ({ key: filterName, value: ChecklistFiltersData[filterName] });

    const selectableFiltersData = objectFromList(baseData.selectableFilters, filtersDataFN);
    const defaultFiltersData = objectFromList(baseData.defaultFilters, filtersDataFN);

    const listNames = [];
    const listItems = [];

    const listsData = objectFromList(baseData.lists, (checklistList) => {
        const {
            listName, description, items, nextListNames,
        } = checklistList;

        listNames.push(listName);
        listItems.push(...items);

        return {
            key: listName,
            value: {
                ...ChecklistListsData[listName],

                description: pick(description),
                items: pick(items, []),
                nextListNames: pick(nextListNames, []),
            },
        };
    });

    // Remove duplicates.
    const listItemsU = Array.from(new Set(listItems));

    const listItemsData = objectFromList(listItemsU, (itemName) => {
        const item = ChecklistItemsData[itemName];
        const isNotImplemented = ChecklistItemsNotImplemented.has(itemName);
        const tagsData = Array.from(item.tags).map((tag) => ChecklistTagsData[tag]);

        return {
            key: itemName,
            value: {
                ...item,

                tagsData,
                isNotImplemented,
            },
        };
    });

    return {
        title: baseData.title,
        description: baseData.description,

        selectableFilters: pick(baseData.selectableFilters, []),
        defaultFilters: pick(baseData.defaultFilters, []),

        selectableFiltersData,
        defaultFiltersData,

        listNames,
        listsData,
        listItemsData,
    };
}, [checklistName]);
