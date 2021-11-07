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

const transformValueBuilder = (transforms) => {
    const allTransforms = [
        transformTagsInit,
        ...transforms,
        transformTagsMakeSet,
    ];

    return (value) => {
        let transformedValue = value;
        allTransforms.forEach((transform) => {
            transformedValue = transform(transformedValue);
        });
        return transformedValue;
    };
};

export const createTransformedMapping = (...transforms) => (values) => {
    const result = {};
    const transformValueFN = transformValueBuilder(transforms);

    values.forEach((value) => {
        if (value.uid in result) {
            throw new Error(`Found data for "${value.uid}" twice.`);
        }
        result[value.uid] = transformValueFN(value);
    });

    return Object.freeze(result);
};

export const createTransformedList = (...transforms) => {
    const transformValueFN = transformValueBuilder(transforms);
    return (values) => values.map(transformValueFN);
};
