import { Button } from 'antd';

import { ChecklistNextListButton } from 'components/checklists/ChecklistNextListButton';
import { pick } from 'lib/pick';
import { mountWithStore } from 'tests/lib/mountWithStore';

const fn = () => {};

const setup = ({ props } = {}) => {
    const defaultProps = { title: 'Some Title', onClick: fn };
    return mountWithStore(ChecklistNextListButton, {
        props: {
            ...defaultProps,
            ...pick(props, {}),
        },
    });
};

describe('ChecklistNextListButton', () => {
    test('non emergency is primary button', () => {
        const { compWrapper } = setup();

        const main = compWrapper().find(ChecklistNextListButton);
        expect(main).toHaveLength(1);

        const button = main.find(Button);
        expect(button).toHaveLength(1);
        expect(button.at(0).props().type).toEqual('primary');
        expect(button.at(0).props().onClick).toEqual(fn);
    });

    test('emergency is danger button', () => {
        const { compWrapper } = setup({ props: { isEmergency: true } });

        const button = compWrapper().find(Button);
        expect(button).toHaveLength(1);
        expect(button.at(0).props().type).toEqual('danger');
    });
});
