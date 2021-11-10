import { ChecklistDisplay } from 'components/checklists/ChecklistDisplay';
import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { pick } from 'lib/pick';
import { mockChecklistURLManager } from 'tests/data/checklists/mocks/checklistURLManager';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = ({ props, windowWidth } = {}) => {
    const checklistURLManager = mockChecklistURLManager();

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
        expect(compWrapper().find('ChecklistInfo')).toHaveLength(1);
        expect(compWrapper().find('ChecklistListDisplay')).toHaveLength(15);
    });
});
