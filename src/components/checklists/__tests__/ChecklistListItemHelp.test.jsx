import { mountWithStore } from 'tests/lib/mountWithStore';
import { ChecklistListItemHelp } from 'components/checklists/ChecklistListItemHelp';
import { pick } from 'lib/pick';
import { act } from '@testing-library/react';

const setup = ({ props } = {}) => {
    const defaultProps = { title: 'Throttles', state: 'IDLE' };
    return mountWithStore(ChecklistListItemHelp, {
        props: {
            ...defaultProps,
            ...pick(props, {}),
        },
    });
};

describe('ChecklistListItemHelp', () => {
    test('no help does not display anything', () => {
        const { compWrapper } = setup();

        const question = compWrapper().find('[aria-label="question-circle"]');
        expect(question).toHaveLength(0);
    });

    test('info short is displayed in both tooltip and modal if no long info', () => {
        const { compWrapper } = setup({
            props: {
                moreInfoShort: 'Some short information',
            },
        });

        act(() => compWrapper().find('sup').at(0).props()
            .onClick());

        const question = compWrapper().find('[aria-label="question-circle"]');
        expect(question).toHaveLength(1);

        const tooltip = compWrapper().find('Tooltip');
        expect(tooltip).toHaveLength(1);
        expect(tooltip.props().title).toEqual('Some short information');

        const modalTitle = compWrapper().find('[className="ant-modal-header"]');
        expect(modalTitle.text()).toEqual('Help: Throttles: IDLE');

        const modalBody = compWrapper().find('[className="ant-modal-body"]');
        expect(modalBody.text()).toEqual('Some short information');
    });

    test('info short is displayed in both tooltip, long info in modal', () => {
        const { compWrapper } = setup({
            props: {
                moreInfoShort: 'Some short information',
                moreInfoLong: 'Some very long information',
            },
        });

        act(() => compWrapper().find('sup').at(0).props()
            .onClick());

        const question = compWrapper().find('[aria-label="question-circle"]');
        expect(question).toHaveLength(1);

        const tooltip = compWrapper().find('Tooltip');
        expect(tooltip).toHaveLength(1);
        expect(tooltip.props().title).toEqual('Some short information');

        const modalTitle = compWrapper().find('[className="ant-modal-header"]');
        expect(modalTitle.text()).toEqual('Help: Throttles: IDLE');

        const modalBody = compWrapper().find('[className="ant-modal-body"]');
        expect(modalBody.text()).toEqual('Some very long information');
    });
});
