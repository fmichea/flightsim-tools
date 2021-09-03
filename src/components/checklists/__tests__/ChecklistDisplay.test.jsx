import { mountWithStore } from 'tests/lib/mountWithStore';
import { ChecklistDisplay } from 'components/checklists/ChecklistDisplay';
import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { pick } from 'lib/pick';

const setup = ({ props, windowWidth } = {}) => {
    const checklistURLManager = {
        addFilter: jest.fn(),
        removeFilter: jest.fn(),
    };

    const defaultProps = {
        checklistName: Checklists.WORKINGTITLE_CJ4,
        checklistListName: ChecklistLists.LANDING,
        selectedFilters: [],
        checklistURLManager,

    };

    const result = mountWithStore(ChecklistDisplay, {
        props: {
            ...defaultProps,
            ...pick(props, {}),
        },
        windowWidth: pick(windowWidth, 1800),
    });

    return { ...result, checklistURLManager };
};

describe('ChecklistDisplay', () => {
    test('overall test that items are included', () => {
        const { compWrapper } = setup();

        expect(compWrapper().find('ChecklistConfigureButton')).toHaveLength(1);
        expect(compWrapper().find('ChecklistListInfo')).toHaveLength(1);
        expect(compWrapper().find('ChecklistNextListButton')).toHaveLength(2);
    });
});
