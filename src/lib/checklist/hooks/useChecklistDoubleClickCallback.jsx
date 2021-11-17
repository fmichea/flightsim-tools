import { useEffect, useMemo, useState } from 'react';

export const useChecklistDoubleClickCallback = ({ toggleChecked, isNotImplemented }) => {
    const [clickCounter, setClickCounter] = useState(0);

    const onClickHandler = useMemo(
        () => () => {
            if (clickCounter === 1) {
                if (!isNotImplemented) toggleChecked();
                setClickCounter(0);
            } else {
                setClickCounter(1);
            }
        },
        [clickCounter, setClickCounter, isNotImplemented],
    );

    useEffect(
        // eslint-disable-next-line consistent-return
        () => {
            if (clickCounter === 1) {
                const tid = setTimeout(() => setClickCounter(0), 550);
                return () => clearTimeout(tid);
            }
        },
        [clickCounter, setClickCounter],
    );

    return onClickHandler;
};
