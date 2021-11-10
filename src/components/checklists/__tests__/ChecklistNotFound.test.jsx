import { ChecklistNotFound } from 'components/checklists/ChecklistNotFound';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = () => mountWithStore(ChecklistNotFound, { props: { checklistName: 'foooo' } });

describe('ChecklistNotFound', () => {
    test('displays information about unknown checklist', () => {
        const { compWrapper } = setup();

        expect(compWrapper().text()).toContain('Unknown checklist foooo. Go Back.');
    });
});
