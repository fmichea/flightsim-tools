import { mountWithStore } from 'tests/lib/mountWithStore';
import { ChecklistListItem } from 'components/checklists/ChecklistListItem';
import { pick } from 'lib/pick';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistItemsData } from 'lib/checklist/data/listItemsData';
import { ChecklistTagsData } from 'lib/checklist/data/tagsData';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { toggleLeftHandedMode } from 'state/actions/checklist';
import { act } from '@testing-library/react';

const setup = ({ itemProps, windowWidth } = {}) => {
    const toggleCheckedMock = jest.fn();

    const defaultItemProps = {
        ...ChecklistItemsData[ChecklistItems.CJ4_AFTER_LANDING_EXTERIOR_LIGHTS],
        isChecked: false,
        toggleChecked: toggleCheckedMock,
        isNotImplemented: false,
        tags: [ChecklistTagsData[ChecklistTags.CJ4]],
    };

    const result = mountWithStore(ChecklistListItem, {
        props: {
            item: {
                ...defaultItemProps,
                ...pick(itemProps, {}),
            },
        },
        windowWidth: pick(windowWidth, 1800),
    });

    return { ...result, toggleCheckedMock };
};

describe('ChecklistListItem', () => {
    test('item is displayed in full if windows is wide enough', () => {
        const { compWrapper } = setup();

        const row = compWrapper().find('Row');
        expect(row).toHaveLength(1);

        const columns = row.find('Col');
        expect(columns).toHaveLength(4);
        expect(columns.at(0).find('Tag')).toHaveLength(1);
        expect(columns.at(1).text()).toEqual('Exterior Lights');
        expect(columns.at(2).text()).toEqual('AS REQUIRED');

        // One switch as a switch inside of it so double counted.
        const switches = columns.at(3).find('Switch');
        expect(switches).toHaveLength(2);
        expect(switches.at(0).props().checked).toBeFalsy();
        expect(switches.at(0).props().disabled).toBeFalsy();
    });

    test('smaller window hides the tags', () => {
        const { compWrapper } = setup({ windowWidth: 400 });

        const row = compWrapper().find('Row');
        expect(row).toHaveLength(1);

        const columns = row.find('Col');
        expect(columns).toHaveLength(4);
        expect(columns.at(0).props().span).toEqual(0);
    });

    test('is checked shows switch correctly', () => {
        const { compWrapper } = setup({
            itemProps: {
                isChecked: true,
            },
        });

        const row = compWrapper().find('Row');
        expect(row).toHaveLength(1);

        // One switch as a switch inside of it so double counted.
        const columns = row.find('Col');
        const switches = columns.at(3).find('Switch');
        expect(switches.at(0).props().checked).toBeTruthy();
        expect(switches.at(0).props().disabled).toBeFalsy();
    });

    test('is not implemented disables switch', () => {
        const { compWrapper } = setup({
            itemProps: {
                isNotImplemented: true,
            },
        });

        const row = compWrapper().find('Row');
        expect(row).toHaveLength(1);

        // One switch as a switch inside of it so double counted.
        const columns = row.find('Col');
        const switches = columns.at(3).find('Switch');
        expect(switches.at(0).props().checked).toBeTruthy();
        expect(switches.at(0).props().disabled).toBeTruthy();
    });

    test('left handed mode swaps tags and switch', () => {
        const { compWrapper, store } = setup();

        act(() => store.dispatch(toggleLeftHandedMode()));

        const row = compWrapper().find('Row');
        expect(row).toHaveLength(1);

        const columns = row.find('Col');
        expect(columns).toHaveLength(4);

        // One switch as a switch inside of it so double counted.
        const switches = columns.at(0).find('Switch');
        expect(switches).toHaveLength(2);

        expect(columns.at(1).text()).toEqual('Exterior Lights');
        expect(columns.at(2).text()).toEqual('AS REQUIRED');
        expect(columns.at(3).find('Tag')).toHaveLength(1);
    });
});
