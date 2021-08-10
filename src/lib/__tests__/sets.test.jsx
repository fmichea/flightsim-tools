import { intersection } from 'lib/sets';

describe('sets', () => {
    test('intersection of two sets is computed', () => {
        const result = intersection(
            new Set([1, 2, 3, 4, 12]),
            new Set([0, 2, 3, 5, 12, 18]),
        );

        expect(Array.from(result).sort((a, b) => a - b))
            .toEqual([2, 3, 12]);
    });
});
