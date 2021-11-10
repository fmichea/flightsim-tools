const commonFilters = {
    EXCLUDE_ALL_BUT_OFFICIAL: 'exclude-all-but-official',

    INCLUDE_VATSIM_ITEMS: 'include-vatsim-items',

    INCLUDE_EXTENSIONS: 'include-extensions',
    EXCLUDE_EXTENSIONS: 'exclude-extensions',

    INCLUDE_SIMSETUP_ITEMS: 'include-simsetup-items',

    EXCLUDE_FIRST_FLIGHT_OF_DAY: 'exclude-first-flight-of-day',
};

export const ChecklistFilters = Object.freeze({
    ...commonFilters,
});
