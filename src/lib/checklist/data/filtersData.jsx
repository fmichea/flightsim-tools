import React from 'react';

import { ChecklistFilters } from 'lib/checklist/data/filters';
import { ChecklistFiltersResults } from 'lib/checklist/data/filtersResults';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { createTransformedMapping } from 'lib/checklist/data/transforms';

const commonFiltersData = createTransformedMapping()([
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
            if (item.tagsSet.has(ChecklistTags.OFFICIAL)) {
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
            if (item.tagsSet.has(ChecklistTags.VATSIM)) {
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
            if (item.tagsSet.has(ChecklistTags.EXTENSION)) {
                return ChecklistFiltersResults.INCLUDE;
            }
            return ChecklistFiltersResults.PASS;
        },
    },
    {
        uid: ChecklistFilters.EXCLUDE_EXTENSIONS,
        title: 'Extensions',
        description: (
            <>
                Exclude checklist items extending the official checklist.
            </>
        ),
        fn: (item) => {
            if (item.tagsSet.has(ChecklistTags.EXTENSION)) {
                return ChecklistFiltersResults.EXCLUDE;
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
            if (item.tagsSet.has(ChecklistTags.SIMSETUP)) {
                return ChecklistFiltersResults.INCLUDE;
            }
            return ChecklistFiltersResults.PASS;
        },
    },
    {
        uid: ChecklistFilters.EXCLUDE_FIRST_FLIGHT_OF_DAY,
        title: 'First Flight of Day',
        description: (
            <>
                Exclude checklist item relevant only for the first flight of the day.
            </>
        ),
        fn: (item) => {
            if (item.tagsSet.has(ChecklistTags.FIRST_FLIGHT_OF_DAY)) {
                return ChecklistFiltersResults.EXCLUDE;
            }
            return ChecklistFiltersResults.PASS;
        },
    },
]);

export const ChecklistFiltersData = Object.freeze({
    ...commonFiltersData,
});
