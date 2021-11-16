import { useEffect, useMemo, useState } from 'react';

const clearSelection = () => {
    if (document.selection && document.selection.empty) {
        document.selection.empty();
    } else if (window.getSelection) {
        const sel = window.getSelection();
        sel.removeAllRanges();
    }
};

export const useChecklistDoubleClickCallback = ({ toggleChecked }) => {
    const [clickCounter, setClickCounter] = useState(0);

    const onClickHandler = useMemo(
        () => () => {
            if (clickCounter === 1) {
                toggleChecked();
                clearSelection();
                setClickCounter(0);
            } else {
                setClickCounter(1);
            }
        },
        [clickCounter, setClickCounter],
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
