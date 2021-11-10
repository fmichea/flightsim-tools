import { ChecklistListInfo } from 'components/checklists/ChecklistListInfo';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { pick } from 'lib/pick';
import { TestDataHookChecklistData } from 'tests/data/checklists/hooks/checklistData';
import { mockChecklistURLManager } from 'tests/data/checklists/mocks/checklistURLManager';
import { TestDataChecklistName } from 'tests/data/checklists/names';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = ({ props } = {}) => {
    const defaultProps = {
        checklistData: TestDataHookChecklistData,
        checklistName: TestDataChecklistName,
        checklistListName: ChecklistLists.BEFORE_ENGINE_START,
        checklistURLManager: mockChecklistURLManager(),
    };

    const result = mountWithStore(ChecklistListInfo, {
        props: {
            ...defaultProps,
            ...pick(props, {}),
        },
    });

    return { ...result };
};

describe('ChecklistListInfo', () => {
    test('title and reset button is displayed', () => {
        const { compWrapper } = setup();

        const text = compWrapper().text();
        expect(text).toContain('Before Engine Start');
        expect(text).toContain('Reset');
    });
});
