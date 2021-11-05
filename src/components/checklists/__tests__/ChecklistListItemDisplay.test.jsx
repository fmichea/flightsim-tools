import { mountWithStore } from 'tests/lib/mountWithStore';
import { ChecklistListItemDisplay } from 'components/checklists/ChecklistListItemDisplay';
import { pick } from 'lib/pick';
import { toggleLeftHandedMode } from 'state/actions/checklist';
import { act } from '@testing-library/react';
import { TestDataHookChecklistData } from 'tests/data/checklists/hooks/checklistData';
import { TestDataChecklistName } from 'tests/data/checklists/names';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { ChecklistItems } from 'lib/checklist/data/listItems';

const setup = ({ props, windowWidth } = {}) => {
    const defaultProps = {
        checklistData: TestDataHookChecklistData,
        checklistName: TestDataChecklistName,
        checklistListName: ChecklistLists.BEFORE_ENGINE_START,
        itemName: ChecklistItems.VATSIM_REQUEST_INITIAL_CLEARANCE,
    };

    const result = mountWithStore(ChecklistListItemDisplay, {
        props: {
            ...defaultProps,
            ...pick(props, {}),
        },
        windowWidth: pick(windowWidth, 1800),
    });

    return { ...result };
};

describe('ChecklistListItemDisplay', () => {
    test('item is displayed in full if windows is wide enough', () => {
        const { compWrapper } = setup();

        const row = compWrapper().find('tr');
        expect(row).toHaveLength(1);

        const columns = row.find('td');
        expect(columns).toHaveLength(5);
        expect(columns.at(0).find('Tag')).toHaveLength(1);
        expect(columns.at(1).text()).toEqual('Initial Clearance');
        expect(columns.at(2).text()).toEqual('COMPLETE');

        // One switch as a switch inside of it so double counted.
        const switches = columns.at(4).find('Switch');
        expect(switches).toHaveLength(2);
        expect(switches.at(0).props().checked).toBeFalsy();
        expect(switches.at(0).props().disabled).toBeFalsy();
    });

    test('left handed mode swaps tags and switch', () => {
        const { compWrapper, store } = setup();

        act(() => store.dispatch(toggleLeftHandedMode()));

        const row = compWrapper().find('tr');
        expect(row).toHaveLength(1);

        const columns = row.find('td');
        expect(columns).toHaveLength(5);

        // One switch as a switch inside of it so double counted.
        const switches = columns.at(0).find('Switch');
        expect(switches).toHaveLength(2);

        expect(columns.at(1).find('Tag')).toHaveLength(1);
        expect(columns.at(2).text()).toEqual('Initial Clearance');
        expect(columns.at(3).text()).toEqual('COMPLETE');
    });
});
