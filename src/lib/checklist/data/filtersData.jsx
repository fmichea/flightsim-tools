import React from 'react';
import { createMappingFunction } from 'lib/checklist/data/transforms';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { ChecklistFiltersResults } from 'lib/checklist/data/filtersResults';
import { ChecklistFilters } from 'lib/checklist/data/filters';

const commonFiltersData = createMappingFunction()([
    {
        uid: ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL,
        title: 'Official Only',
        description: (
            <>
                Exclude all items but official checklist items for this aircraft.
            </>
        ),
        terminal: true,
        fn: (item) => {
            if (item.tags.has(ChecklistTags.OFFICIAL)) {
                return ChecklistFiltersResults.INCLUDE;
            }
            return ChecklistFiltersResults.EXCLUDE;
        },
    },
    {
        uid: ChecklistFilters.INCLUDE_VATSIM_ITEMS,
        title: 'VATSIM',
        description: (
            <>
                Include checklist items for VATSIM in relevant places. Note that this
                only currently includes items that should happen on all flights, and
                you should follow correct procedure depending on controller instructions.
            </>
        ),
        fn: (item) => {
            if (item.tags.has(ChecklistTags.VATSIM)) {
                return ChecklistFiltersResults.INCLUDE;
            }
            return ChecklistFiltersResults.PASS;
        },
    },
    {
        uid: ChecklistFilters.INCLUDE_EXTENSIONS,
        title: 'Extensions',
        description: (
            <>
                Include checklist items extending the official checklist for
                things not addressed by the official checklist.
            </>
        ),
        fn: (item) => {
            if (item.tags.has(ChecklistTags.EXTENSION)) {
                return ChecklistFiltersResults.INCLUDE;
            }
            return ChecklistFiltersResults.PASS;
        },
    },
    {
        uid: ChecklistFilters.INCLUDE_SIMSETUP_ITEMS,
        title: 'Simulator Setup',
        description: (
            <>
                Include checklist items related to setting up the simulator before
                and after flight.
            </>
        ),
        fn: (item) => {
            if (item.tags.has(ChecklistTags.SIMSETUP)) {
                return ChecklistFiltersResults.INCLUDE;
            }
            return ChecklistFiltersResults.PASS;
        },
    },
]);

export const ChecklistFiltersData = Object.freeze({
    ...commonFiltersData,
});
