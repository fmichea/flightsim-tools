import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';

export const getFullBaseURL = () => {
    let value = 'http://localhost:8081';
    if (isNotNullOrUndefined(process.env.IS_LOCAL_SERVER) && process.env.IS_LOCAL_SERVER !== '') {
        value = 'https://fmichea.github.io';
    }
    return `${value}${process.env.PUBLIC_URL}/#`;
};
