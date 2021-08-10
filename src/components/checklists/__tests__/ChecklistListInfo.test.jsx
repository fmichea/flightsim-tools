import { mountWithStore } from 'tests/lib/mountWithStore';
import { ChecklistListInfo } from 'components/checklists/ChecklistListInfo';
import { ChecklistListsData } from 'lib/checklist/data/listsData';
import { pick } from 'lib/pick';
import { ChecklistLists } from 'lib/checklist/data/lists';

const setup = ({ props } = {}) => {
    const mockOnClick = jest.fn();

    const defaultProps = {
        onClick: mockOnClick,
        checklistListData: ChecklistListsData[ChecklistLists.AFTER_LANDING],
    };

    const result = mountWithStore(ChecklistListInfo, {
        props: {
            ...defaultProps,
            ...pick(props, {}),
        },
    });

    return { ...result, mockOnClick };
};

describe('ChecklistListInfo', () => {
    test('title and reset button is displayed', () => {
        const { compWrapper } = setup();

        expect(compWrapper().text()).toContain('After Landing');
    });

    test('unknown checklist has null data', () => {
        const { compWrapper } = setup({
            props: {
                checklistListData: null,
            },
        });

        expect(compWrapper().text()).toContain('Unknown checklist list with selected filters.');
    });
});
