import { act } from '@testing-library/react';

import { ChecklistConfigurationSwitch } from 'components/checklists/ChecklistConfigurationSwitch';
import { ChecklistConfigureButton } from 'components/checklists/ChecklistConfigureButton';
import { ChecklistFilters } from 'lib/checklist/data/filters';
import { pick } from 'lib/pick';
import { TestDataHookChecklistData } from 'tests/data/checklists/hooks/checklistData';
import { mockChecklistURLManager } from 'tests/data/checklists/mocks/checklistURLManager';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = ({ props } = {}) => {
    const checklistURLManager = mockChecklistURLManager();

    const defaultProps = {
        checklistURLManager,
        checklistData: TestDataHookChecklistData,
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
