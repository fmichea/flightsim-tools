import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';

export const isLocalServer = () => (
    isNotNullOrUndefined(process.env.REACT_APP_IS_LOCAL_SERVER)
    && process.env.REACT_APP_IS_LOCAL_SERVER !== ''
);
