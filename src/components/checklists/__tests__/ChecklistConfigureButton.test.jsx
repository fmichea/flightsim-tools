import { ChecklistFilters } from 'lib/checklist/data/filters';
import { mountWithStore } from 'tests/lib/mountWithStore';
import { ChecklistConfigureButton } from 'components/checklists/ChecklistConfigureButton';
import { pick } from 'lib/pick';
import { ChecklistConfigurationSwitch } from 'components/checklists/ChecklistConfigurationSwitch';
import { act } from '@testing-library/react';

const setup = ({ props } = {}) => {
    const checklistURLManager = {
        addFilter: jest.fn(),
        removeFilter: jest.fn(),
    };

    const defaultProps = {
        checklistURLManager,
        filters: [
            ChecklistFilters.INCLUDE_VATSIM_ITEMS,
            ChecklistFilters.INCLUDE_SIMSETUP_ITEMS,
        ],
        selectedFilters: [
            ChecklistFilters.INCLUDE_VATSIM_ITEMS,
        ],
    };

    const result = mountWithStore(ChecklistConfigureButton, {
        props: {
            ...defaultProps,
            ...pick(props, {}),
        },
    });

    return { ...result, checklistURLManager };
};

describe('ChecklistConfigureButton', () => {
    test('filters are displayed in modal', () => {
        const { compWrapper, checklistURLManager } = setup();

        // Display modal.
        act(() => compWrapper().find('Button').at(0).props()
            .onClick());

        const switches = compWrapper().find(ChecklistConfigurationSwitch);
        expect(switches).toHaveLength(3);

        expect(switches.at(1).props().title).toEqual('VATSIM');
        expect(switches.at(1).props().checked).toBeTruthy();

        expect(switches.at(2).props().title).toEqual('Simulator Setup');
        expect(switches.at(2).props().checked).toBeFalsy();

        expect(checklistURLManager.removeFilter.mock.calls.length).toEqual(0);
        act(() => switches.at(1).props().onChange(false));
        expect(checklistURLManager.removeFilter.mock.calls.length).toEqual(1);

        expect(checklistURLManager.addFilter.mock.calls.length).toEqual(0);
        act(() => switches.at(2).props().onChange(true));
        expect(checklistURLManager.addFilter.mock.calls.length).toEqual(1);
    });
});
