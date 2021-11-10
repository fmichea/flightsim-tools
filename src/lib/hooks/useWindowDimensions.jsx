import { useState, useEffect, useMemo } from 'react';

import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setWindowDimensions]);

    return windowDimensions;
};

export const windowWidthCondition = (limit, result) => ({ limit, result });
export const windowWidthFinalCondition = (result) => ({ result });

export const useWindowWidthConditions = (conditions = []) => {
    const { width } = useWindowDimensions();

    const preparedConditions = useMemo(() => {
        if (conditions.length === 0) {
            throw new Error('Conditions provided are empty.');
        }

        const finalCondition = conditions[conditions.length - 1];
        if (isNotNullOrUndefined(finalCondition.limit)) {
            throw new Error('Final condition provided has a limit.');
        }

        const resultSizes = new Set();

        conditions.forEach((value, idx) => {
            if (idx < conditions.length - 1 && isNullOrUndefined(value.limit)) {
                throw new Error(`Condition #${idx} provided does not have a limit.`);
            }

            if (isNullOrUndefined(value.result)) {
                throw new Error(`Condition #${idx} provided does not have results.`);
            }

            resultSizes.add(value.result.length);
        });

        if (Array.from(resultSizes).length !== 1) {
            throw new Error('Conditions have different sizes of results.');
        }

        const result = [...conditions].sort((a, b) => {
            if (isNullOrUndefined(a.limit)) {
                return 1;
            }
            if (isNullOrUndefined(b.limit)) {
                return -1;
            }
            return a.limit - b.limit;
        });

        return result;
    }, [conditions]);

    return useMemo(() => {
        let idx = 0;
        for (; idx < preparedConditions.length - 1; idx += 1) {
            if (width < preparedConditions[idx].limit) {
                return preparedConditions[idx].result;
            }
        }
        return preparedConditions[idx].result;
    }, [width, preparedConditions]);
};
