import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';

describe('is(Not)NullOrUndefined', () => {
    test('isNullOrUndefined', () => {
        expect(isNullOrUndefined(null)).toBeTruthy();
        expect(isNullOrUndefined(undefined)).toBeTruthy();

        expect(isNullOrUndefined(true)).toBeFalsy();
        expect(isNullOrUndefined('hello')).toBeFalsy();
        expect(isNullOrUndefined(123)).toBeFalsy();
    });

    test('isNotNullOrUndefined', () => {
        expect(isNotNullOrUndefined(null)).toBeFalsy();
        expect(isNotNullOrUndefined(undefined)).toBeFalsy();

        expect(isNotNullOrUndefined(true)).toBeTruthy();
        expect(isNotNullOrUndefined('hello')).toBeTruthy();
        expect(isNotNullOrUndefined(123)).toBeTruthy();
    });
});
