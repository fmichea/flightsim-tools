import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';

export const pick = (...args) => {
    for (let idx = 0; idx < args.length; idx += 1) {
        const arg = args[idx];

        if (isNotNullOrUndefined(arg)) {
            return arg;
        }
    }
    return null;
};
