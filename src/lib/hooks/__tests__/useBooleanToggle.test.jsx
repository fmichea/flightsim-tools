import { useBooleanToggle } from 'lib/hooks/useBooleanToggle';
import { act } from '@testing-library/react';
import { mountHookWithStore } from 'tests/lib/mountHookWithStore';

const setup = (defaultValue) => mountHookWithStore(() => useBooleanToggle(defaultValue));

describe('useBooleanToggle', () => {
    test('default is used correctly', () => {
        const v1 = setup(true);
        expect(v1.getCurrentHookResult().value).toBeTruthy();

        const v2 = setup(false);
        expect(v2.getCurrentHookResult().value).toBeFalsy();
    });

    test('toggleOn only turns value to true', () => {
        const v = setup(false);

        expect(v.getCurrentHookResult().value).toBeFalsy();

        act(() => { v.getCurrentHookResult().toggleOn(); });
        expect(v.getCurrentHookResult().value).toBeTruthy();

        act(() => { v.getCurrentHookResult().toggleOn(); });
        expect(v.getCurrentHookResult().value).toBeTruthy();
    });

    test('toggleOff only turns value to false', () => {
        const v = setup(true);

        expect(v.getCurrentHookResult().value).toBeTruthy();

        act(() => { v.getCurrentHookResult().toggleOff(); });
        expect(v.getCurrentHookResult().value).toBeFalsy();

        act(() => { v.getCurrentHookResult().toggleOff(); });
        expect(v.getCurrentHookResult().value).toBeFalsy();
    });

    test('toggleValue changes value to the reverse', () => {
        const v = setup(true);

        expect(v.getCurrentHookResult().value).toBeTruthy();

        act(() => { v.getCurrentHookResult().toggleValue(); });
        expect(v.getCurrentHookResult().value).toBeFalsy();

        act(() => { v.getCurrentHookResult().toggleValue(); });
        expect(v.getCurrentHookResult().value).toBeTruthy();
    });
});
