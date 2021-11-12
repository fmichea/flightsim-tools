import { Checklist } from 'components/checklists/Checklist';
import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistsWithNameRoute } from 'lib/routes';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = ({ initialRoute, routePath } = {}) => mountWithStore(Checklist, { initialRoute, routePath });

describe('Checklist', () => {
    test('simple case with a list', () => {
        const { compWrapper } = setup({
            initialRoute: `/checklists/${Checklists.WORKINGTITLE_CJ4}`,
            routePath: ChecklistsWithNameRoute,
        });

        expect(compWrapper().find('ChecklistDisplay')).toHaveLength(1);
        expect(compWrapper().find('ChecklistNotFound')).toHaveLength(0);
    });

    test('unknown checklist', () => {
        const { compWrapper } = setup({
            initialRoute: '/checklists/weldjwedweljd',
            routePath: ChecklistsWithNameRoute,
        });

        expect(compWrapper().find('ChecklistDisplay')).toHaveLength(0);
        expect(compWrapper().find('ChecklistNotFound')).toHaveLength(1);
    });
});
