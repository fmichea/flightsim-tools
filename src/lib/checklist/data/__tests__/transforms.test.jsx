import { createMappingFunction } from 'lib/checklist/data/transforms';

describe('transforms', () => {
    test('test transformation uses uid as key (no func)', () => {
        const result = createMappingFunction()([
            {
                uid: 'value1',
                description: 'description for value 1',
            },
            {
                uid: 'value2',
                tags: ['tag1'],
                description: 'value 2 is desc',
            },
        ]);

        expect(result).toEqual({
            value1: {
                uid: 'value1',
                tags: [],
                tagsSet: new Set(),
                description: 'description for value 1',
            },
            value2: {
                uid: 'value2',
                tags: ['tag1'],
                tagsSet: new Set(['tag1']),
                description: 'value 2 is desc',
            },
        });
    });

    test('test transformation function', () => {
        const fn = (value) => ({ ...value, addedThing: 'here' });

        const result = createMappingFunction(fn)([
            {
                uid: 'value1',
                description: 'description for value 1',
            },
            {
                uid: 'value2',
                tags: ['tag1'],
                description: 'value 2 is desc',
            },
        ]);

        expect(result).toEqual({
            value1: {
                uid: 'value1',
                tags: [],
                tagsSet: new Set(),
                description: 'description for value 1',
                addedThing: 'here',
            },
            value2: {
                uid: 'value2',
                tags: ['tag1'],
                tagsSet: new Set(['tag1']),
                description: 'value 2 is desc',
                addedThing: 'here',
            },
        });
    });

    test('test transformation warns about multiple same key', () => {
        const fn = () => {
            createMappingFunction()([
                {
                    uid: 'value1',
                    description: 'description for value 1',
                },
                {
                    uid: 'value1',
                    tags: ['tag1'],
                    description: 'value 2 is desc',
                },
            ]);
        };

        expect(fn).toThrow('Found data for "value1" twice.');
    });
});
