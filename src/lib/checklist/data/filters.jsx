const commonFilters = {
    EXCLUDE_UNOFFICIAL: 'exclude-unofficial',
    EXCLUDE_FFOTD: 'exclude-ffotd',

    INCLUDE_VATSIM: 'include-vatsim',
    EXCLUDE_VATSIM: 'exclude-vatsim',

    INCLUDE_EXTENSIONS: 'include-extensions',
    EXCLUDE_EXTENSIONS: 'exclude-extensions',

    INCLUDE_SIMSETUP: 'include-simsetup',
    EXCLUDE_SIMSETUP: 'exclude-simsetup',
};

export const ChecklistFilters = Object.freeze({
    ...commonFilters,
});
