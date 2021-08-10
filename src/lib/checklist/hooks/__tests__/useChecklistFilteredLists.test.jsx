import { mountHookWithStore } from 'tests/lib/mountHookWithStore';
import { useChecklistFilteredLists } from 'lib/checklist/hooks/useChecklistFilteredLists';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistFilters } from 'lib/checklist/data/filters';

const setup = ({ checklistData, selectedFilters }) => mountHookWithStore(
    () => useChecklistFilteredLists({ checklistData, selectedFilters }),
);

const checklistDataDefault = {
    lists: [
        {
            listName: ChecklistLists.BEFORE_ENGINE_START,
            items: [
                ChecklistItems.VATSIM_REQUEST_INITIAL_CLEARANCE,
                ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
            ],
        },
        {
            listName: ChecklistLists.ENGINE_START,
            items: [
                ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
                ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
            ],
        },
    ],
};

describe('useChecklistFilteredLists', () => {
    test('no filters is simple same data', () => {
        const { getCurrentHookResult } = setup({
            checklistData: checklistDataDefault,
            selectedFilters: [],
        });

        const { listNames, listsItems } = getCurrentHookResult();

        expect(listNames).toEqual([
            ChecklistLists.BEFORE_ENGINE_START,
            ChecklistLists.ENGINE_START,
        ]);

        expect(listsItems[ChecklistLists.BEFORE_ENGINE_START]).toEqual([
            ChecklistItems.VATSIM_REQUEST_INITIAL_CLEARANCE,
            ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
        ]);

        expect(listsItems[ChecklistLists.ENGINE_START]).toEqual([
            ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
            ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
        ]);
    });

    test('default filter is used even if not selected', () => {
        const { getCurrentHookResult } = setup({
            checklistData: {
                ...checklistDataDefault,
                defaultFilters: [
                    ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL,
                ],
            },
            selectedFilters: [],
        });

        const { listNames, listsItems } = getCurrentHookResult();

        expect(listNames).toEqual([
            ChecklistLists.BEFORE_ENGINE_START,
            ChecklistLists.ENGINE_START,
        ]);

        expect(listsItems[ChecklistLists.BEFORE_ENGINE_START]).toEqual([
            ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
        ]);

        expect(listsItems[ChecklistLists.ENGINE_START]).toEqual([
            ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
            ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
        ]);
    });

    test('with selectable filter (not selected)', () => {
        const { getCurrentHookResult } = setup({
            checklistData: {
                ...checklistDataDefault,
                selectableFilter: [
                    ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL,
                ],
            },
            selectedFilters: [],
        });

        const { listNames, listsItems } = getCurrentHookResult();

        expect(listNames).toEqual([
            ChecklistLists.BEFORE_ENGINE_START,
            ChecklistLists.ENGINE_START,
        ]);

        expect(listsItems[ChecklistLists.BEFORE_ENGINE_START]).toEqual([
            ChecklistItems.VATSIM_REQUEST_INITIAL_CLEARANCE,
            ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
        ]);

        expect(listsItems[ChecklistLists.ENGINE_START]).toEqual([
            ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
            ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
        ]);
    });

    test('with selectable filter (selected)', () => {
        const { getCurrentHookResult } = setup({
            checklistData: {
                ...checklistDataDefault,
                selectableFilters: [
                    ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL,
                ],
            },
            selectedFilters: [
                ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL,
            ],
        });

        const { listNames, listsItems } = getCurrentHookResult();

        expect(listNames).toEqual([
            ChecklistLists.BEFORE_ENGINE_START,
            ChecklistLists.ENGINE_START,
        ]);

        expect(listsItems[ChecklistLists.BEFORE_ENGINE_START]).toEqual([
            ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
        ]);

        expect(listsItems[ChecklistLists.ENGINE_START]).toEqual([
            ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
            ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
        ]);
    });

    test('filter removes a list completely', () => {
        const { getCurrentHookResult } = setup({
            checklistData: {
                ...checklistDataDefault,
                lists: [
                    ...checklistDataDefault.lists,
                    {
                        listName: ChecklistLists.POST_FLIGHT,
                        items: [
                            ChecklistItems.SIMSETUP_POST_FLIGHT_NOTES,
                        ],
                    },
                ],
                selectableFilters: [
                    ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL,
                ],
            },
            selectedFilters: [
                ChecklistFilters.EXCLUDE_ALL_BUT_OFFICIAL,
            ],
        });

        const { listNames, listsItems } = getCurrentHookResult();

        expect(listNames).toEqual([
            ChecklistLists.BEFORE_ENGINE_START,
            ChecklistLists.ENGINE_START,
        ]);

        expect(listsItems[ChecklistLists.BEFORE_ENGINE_START]).toEqual([
            ChecklistItems.CJ4_BEFORE_START_PARKING_BRAKES,
        ]);

        expect(listsItems[ChecklistLists.ENGINE_START]).toEqual([
            ChecklistItems.CJ4_ENGINE_START_EICAS_CHECK,
            ChecklistItems.CJ4_ENGINE_START_RUNSTOP_BUTTON_TO_RUN,
        ]);
    });
});
