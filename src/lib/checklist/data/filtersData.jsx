import React from 'react';

import { ChecklistFilters } from 'lib/checklist/data/filters';
import { ChecklistFiltersResults } from 'lib/checklist/data/filtersResults';
import { buildTagFilterFNExclusion, buildTagFilterFNInclusion } from 'lib/checklist/data/lib/filtersData';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { createTransformedMapping } from 'lib/checklist/data/transforms';

const vatsimFilterData = {
    title: 'VATSIM',
    description: (
        <>
            Include checklist items for VATSIM in relevant places. Note that this
            only currently includes items that should happen on all flights, and
            you should follow correct procedure depending on controller instructions.
        </>
    ),
};

const extensionsFilterData = {
    title: 'Extensions',
    description: (
        <>
            Include checklist items extending the official checklist for
            things not addressed by the official checklist.
        </>
    ),
};

const simsetupFilterData = {
    title: 'Simulator Setup',
    description: (
        <>
            Include checklist items related to setting up the simulator before
            and after flight.
        </>
    ),
};

const commonFiltersData = createTransformedMapping()([
    {
        uid: ChecklistFilters.EXCLUDE_UNOFFICIAL,
        title: 'Official Only',
        description: (
            <>
                Exclude all items but official checklist items for this aircraft.
            </>
        ),
        isTerminal: true,
        fn: (item) => {
            if (item.tagsSet.has(ChecklistTags.OFFICIAL)) {
                return ChecklistFiltersResults.INCLUDE;
            }
            return ChecklistFiltersResults.EXCLUDE;
        },
    },
    {
        uid: ChecklistFilters.INCLUDE_VATSIM,
        fn: buildTagFilterFNInclusion(ChecklistTags.VATSIM),
        ...vatsimFilterData,
    },
    {
        uid: ChecklistFilters.EXCLUDE_VATSIM,
        fn: buildTagFilterFNExclusion(ChecklistTags.VATSIM),
        isExclusion: true,
        ...vatsimFilterData,
    },
    {
        uid: ChecklistFilters.INCLUDE_EXTENSIONS,
        fn: buildTagFilterFNInclusion(ChecklistTags.EXTENSION),
        ...extensionsFilterData,
    },
    {
        uid: ChecklistFilters.EXCLUDE_EXTENSIONS,
        fn: buildTagFilterFNExclusion(ChecklistTags.EXTENSION),
        isExclusion: true,
        ...extensionsFilterData,
    },
    {
        uid: ChecklistFilters.INCLUDE_SIMSETUP,
        fn: buildTagFilterFNInclusion(ChecklistTags.SIMSETUP),
        ...simsetupFilterData,
    },
    {
        uid: ChecklistFilters.EXCLUDE_SIMSETUP,
        fn: buildTagFilterFNExclusion(ChecklistTags.SIMSETUP),
        isExclusion: true,
        ...simsetupFilterData,
    },
    {
        uid: ChecklistFilters.EXCLUDE_FFOTD,
        title: 'First Flight of Day',
        description: (
            <>
                Include checklist item relevant only for the first flight of the day.
            </>
        ),
        fn: buildTagFilterFNExclusion(ChecklistTags.FFOTD),
        isExclusion: true,
    },
]);

export const ChecklistFiltersData = Object.freeze({
    ...commonFiltersData,
});
