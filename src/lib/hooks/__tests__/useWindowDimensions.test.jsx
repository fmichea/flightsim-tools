/* eslint-disable no-console */
import { act } from '@testing-library/react';

import {
    useWindowDimensions,
    useWindowWidthConditions,
    windowWidthCondition,
    windowWidthFinalCondition,
} from 'lib/hooks/useWindowDimensions';
import { mountHookWithStore } from 'tests/lib/mountHookWithStore';

describe('useWindowDimensions', () => {
    const setup = (width, height) => mountHookWithStore(useWindowDimensions, {
        windowWidth: width,
        windowHeight: height,
    });

    test('window dimensions are returned and change is handled', () => {
        const { getCurrentHookResult } = setup(375, 123);

        expect(getCurrentHookResult()).toEqual({
            width: 375,
            height: 123,
        });

        act(() => {
            const resizeEvent = document.createEvent('Event');
            resizeEvent.initEvent('resize', true, true);

            global.window.innerWidth = 789;
            global.window.innerHeight = 453;
            global.window.dispatchEvent(resizeEvent);
        });

        expect(getCurrentHookResult()).toEqual({
            width: 789,
            height: 453,
        });
    });
});

describe('useWindowWidthConditions', () => {
    const realError = console.error;

    beforeEach(() => {
        console.error = jest.fn();
    });

    afterEach(() => {
        console.error = realError;
    });

    const setup = (width, conditions) => {
        const fn = () => useWindowWidthConditions(conditions);
        return mountHookWithStore(fn, {
            windowWidth: width,
            windowHeight: 700,
        });
    };

    test('correct dimension is returned based on condition (final)', () => {
        const { getCurrentHookResult } = setup(1200, [
            windowWidthCondition(100, [1, 2]),
            windowWidthFinalCondition([3, 4]),
        ]);

        expect(getCurrentHookResult()).toEqual([3, 4]);
    });

    test('correct dimension is returned based on condition (first match)', () => {
        const { getCurrentHookResult } = setup(50, [
            windowWidthCondition(100, [1, 2]),
            windowWidthFinalCondition([3, 4]),
        ]);

        expect(getCurrentHookResult()).toEqual([1, 2]);
    });

    test('correct dimension is returned based on condition (middle match)', () => {
        const { getCurrentHookResult } = setup(150, [
            windowWidthCondition(100, [1, 2]),
            windowWidthCondition(200, [5, 6]),
            windowWidthFinalCondition([3, 4]),
        ]);

        expect(getCurrentHookResult()).toEqual([5, 6]);
    });

    test('correct list but out of order is re-ordered', () => {
        const { getCurrentHookResult } = setup(150, [
            windowWidthCondition(200, [5, 6]),
            windowWidthCondition(100, [1, 2]),
            windowWidthFinalCondition([3, 4]),
        ]);

        expect(getCurrentHookResult()).toEqual([5, 6]);
    });

    test('error: no conditions provided', () => {
        const fn = () => {
            setup(150, []);
        };

        expect(fn).toThrow('Conditions provided are empty.');
    });

    test('error: no final case', () => {
        const fn = () => {
            setup(150, [
                windowWidthCondition(200, [5, 6]),
                windowWidthCondition(100, [1, 2]),
            ]);
        };

        expect(fn).toThrow('Final condition provided has a limit.');
    });

    test('error: two final cases', () => {
        const fn = () => {
            setup(150, [
                windowWidthFinalCondition([1, 2]),
                windowWidthFinalCondition([5, 6]),
            ]);
        };

        expect(fn).toThrow('Condition #0 provided does not have a limit.');
    });

    test('error: case has no result', () => {
        const fn = () => {
            setup(150, [
                { limit: 100 },
                windowWidthFinalCondition([5, 6]),
            ]);
        };

        expect(fn).toThrow('Condition #0 provided does not have results.');
    });

    test('error: different sizes of conditions result', () => {
        const fn = () => {
            setup(150, [
                windowWidthCondition(100, [1, 2, 3]),
                windowWidthFinalCondition([5, 6]),
            ]);
        };

        expect(fn).toThrow('Conditions have different sizes of results.');
    });
});
