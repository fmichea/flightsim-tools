import { act } from '@testing-library/react';

import { ChecklistConfigurationSwitch } from 'components/checklists/ChecklistConfigurationSwitch';
import { pick } from 'lib/pick';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = ({ props } = {}) => {
    const mockOnChange = jest.fn();

    const defaultProps = {
        title: 'Left handed mode',
        description: 'Moves UI around to make it easier to use left handed',
        checked: false,
        onChange: mockOnChange,
        onClick: mockOnChange,
    };

    const result = mountWithStore(ChecklistConfigurationSwitch, {
        props: {
            ...defaultProps,
            ...pick(props, {}),
        },
    });

    return { ...result, mockOnChange };
};

describe('ChecklistConfigurationSwitch', () => {
    test('switch and information is displayed', () => {
        const { compWrapper, mockOnChange } = setup();

        expect(compWrapper().text()).toContain(
            'Left handed mode: Moves UI around to make it easier to use left handed',
        );

        const switches = compWrapper().find('Switch');
        expect(switches).toHaveLength(2);

        expect(mockOnChange.mock.calls.length).toEqual(0);
        act(() => switches.at(0).props().onClick());
        expect(mockOnChange.mock.calls.length).toEqual(1);
    });
});
