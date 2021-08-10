import { useQueryParams } from 'lib/hooks/useQueryParams';
import { mountHookWithStore } from 'tests/lib/mountHookWithStore';

const setup = (route) => mountHookWithStore(useQueryParams, { initialRoute: route });

describe('useQueryParams', () => {
    test('not params', () => {
        const { getCurrentHookResult } = setup('/');

        expect(getCurrentHookResult().toString()).toEqual('');
    });

    test('with a few params including a list', () => {
        const { getCurrentHookResult } = setup('/?f=1&f=2&l=wed');
        const flags = getCurrentHookResult();

        expect(flags.has('f')).toBeTruthy();
        expect(flags.getAll('f')).toEqual(['1', '2']);
        expect(flags.has('l')).toBeTruthy();
        expect(flags.get('l')).toEqual('wed');
    });
});
