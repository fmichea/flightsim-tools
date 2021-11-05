import { pick } from 'lib/pick';

export const objectMap = (obj, callback) => {
    const result = {};

    Object.entries(obj).forEach((keyValue) => {
        const [key, value] = keyValue;
        result[key] = callback(value, key);
    });
    return result;
};

export const objectFromList = (lst, callback) => {
    const result = {};

    pick(lst, []).forEach((lstValue) => {
        const { key, value } = callback(lstValue);
        result[key] = value;
    });

    return result;
};
