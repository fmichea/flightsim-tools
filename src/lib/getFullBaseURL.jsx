import { isLocalServer } from 'lib/isLocalServer';

export const getFullBaseURL = () => {
    let baseURL = 'https://fmichea.github.io';
    if (isLocalServer()) {
        baseURL = 'http://localhost:8081';
    }
    return `${baseURL}${process.env.PUBLIC_URL}/#`;
};
