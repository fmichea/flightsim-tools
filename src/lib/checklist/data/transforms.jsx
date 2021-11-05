import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';

const transformTagsInit = (value) => {
    const tags = isNotNullOrUndefined(value.tags) ? value.tags : [];

    return {
        ...value,
        tags,
    };
};

const transformTagsMakeSet = (value) => ({
    ...value,
    tagsSet: new Set(value.tags),
});

export const createMappingFunction = (...transforms) => (values) => {
    const result = {};

    const allTransforms = [
        transformTagsInit,
        ...transforms,
        transformTagsMakeSet,
    ];

    values.forEach((value) => {
        let transformedValue = value;
        allTransforms.forEach((transform) => {
            transformedValue = transform(transformedValue);
        });

        if (value.uid in result) {
            throw new Error(`Found data for "${value.uid}" twice.`);
        }
        result[value.uid] = transformedValue;
    });

    return Object.freeze(result);
};
