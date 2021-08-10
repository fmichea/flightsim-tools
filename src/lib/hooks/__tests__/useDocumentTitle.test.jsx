import { useDocumentTitle } from 'lib/hooks/useDocumentTitle';
import { mountHookWithStore } from 'tests/lib/mountHookWithStore';

const setup = (title) => mountHookWithStore(() => useDocumentTitle({ title }));

describe('useDocumentTitle', () => {
    test('title is changed after using the hook', () => {
        global.document.title = 'Some title!';

        setup('New title!');

        expect(global.document.title).toEqual('New title!');
    });
});
