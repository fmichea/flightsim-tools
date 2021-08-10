import { mountHookWithStore } from 'tests/lib/mountHookWithStore';
import { ChecklistURLManager, useChecklistURLConfig } from 'lib/checklist/hooks/useChecklistURLConfig';
import { ChecklistsWithNameAndListNameRoute, ChecklistsWithNameRoute } from 'lib/routes';

const setup = (routePath, route) => mountHookWithStore(
    useChecklistURLConfig,
    {
        initialRoute: route,
        routePath,
    },
);

describe('useChecklistURLConfig', () => {
    test('checklistName only provided', () => {
        const { getCurrentHookResult } = setup(
            ChecklistsWithNameRoute,
            '/checklists/foo',
        );

        const hookResult = getCurrentHookResult();

        expect(hookResult).toEqual({
            checklistName: 'foo',
            checklistListName: null,
            selectedFilters: [],
            checklistURLManager: expect.any(ChecklistURLManager),
        });
    });

    test('checklistName and checklistListName provided', () => {
        const { getCurrentHookResult } = setup(
            ChecklistsWithNameAndListNameRoute,
            '/checklists/foo/bar?filter=a&filter=b',
        );

        const hookResult = getCurrentHookResult();

        expect(hookResult).toEqual({
            checklistName: 'foo',
            checklistListName: 'bar',
            selectedFilters: ['a', 'b'],
            checklistURLManager: expect.any(ChecklistURLManager),
        });
    });
});

describe('ChecklistURLManager', () => {
    test('test how history gets changed dependeing on function', () => {
        const mockHistory = {
            push: jest.fn(),
        };

        const checklistURLManager1 = new ChecklistURLManager({
            history: mockHistory,
            checklistName: 'foo',
            checklistListName: null,
            selectedFilters: [],
        });

        checklistURLManager1.changeChecklistList('bar');
        checklistURLManager1.addFilter('a');

        const checklistURLManager2 = new ChecklistURLManager({
            history: mockHistory,
            checklistName: 'foo',
            checklistListName: 'bar',
            selectedFilters: ['a'],
        });

        checklistURLManager2.addFilter('b');
        checklistURLManager2.removeFilter('a');

        const { calls } = mockHistory.push.mock;

        expect(calls).toHaveLength(4);
        expect(calls[0][0]).toEqual('/checklists/foo/bar');
        expect(calls[1][0]).toEqual('/checklists/foo?filter=a');
        expect(calls[2][0]).toEqual('/checklists/foo/bar?filter=a&filter=b');
        expect(calls[3][0]).toEqual('/checklists/foo/bar');
    });
});
