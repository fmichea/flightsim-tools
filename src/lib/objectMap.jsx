export const objectMap = (obj, callback) => {
    const result = {};

    Object.entries(obj).forEach((keyValue) => {
        const [key, value] = keyValue;
        result[key] = callback(value, key);
    });
    return result;
};
