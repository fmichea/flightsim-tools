import { useEffect, useMemo, useRef } from 'react';

import { isEqual } from 'lodash';
import { useSelector } from 'react-redux';

const useDeepDeps = (deps) => {
    const isFirst = useRef(true);
    const prevDeps = useRef(deps);
    const counter = useRef(0);

    return useMemo(() => {
        const isFirstEffect = isFirst.current;
        const isSame = prevDeps.current.every((obj, index) => isEqual(obj, deps[index]));

        isFirst.current = false;
        prevDeps.current = deps;

        if (isFirstEffect || !isSame) {
            counter.current += 1;
        }

        return counter.current;
    }, deps);
};

export const useDeepEffect = (fn, deps) => {
    const counter = useDeepDeps(deps);
    useEffect(fn, [counter]);
};

export const useDeepMemo = (fn, deps) => {
    const counter = useDeepDeps(deps);
    return useMemo(fn, [counter]);
};

export const useDeepSelector = (fn) => useSelector(fn, isEqual);
