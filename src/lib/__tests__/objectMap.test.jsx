import { objectMap } from 'lib/objects';

describe('objectMap', () => {
    test('simple case with just values', () => {
        const dct = {
            value1: 1,
            value2: 3,
        };

        const result = objectMap(dct, (value) => value * 2);

        expect(result).toEqual({
            value1: 2,
            value2: 6,
        });
    });

    test('case with both value and key', () => {
        const dct = {
            value1: 1,
            value2: 3,
        };

        const result = objectMap(dct, (value, key) => ({ key, value: value * 2 }));

        expect(result).toEqual({
            value1: { key: 'value1', value: 2 },
            value2: { key: 'value2', value: 6 },
        });
    });
});
