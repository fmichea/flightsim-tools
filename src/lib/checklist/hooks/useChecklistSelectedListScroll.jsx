import { useEffect } from 'react';

import Scroll from 'react-scroll';

import { isNullOrUndefined } from 'lib/isNullOrUndefined';

export const useChecklistSelectedListScroll = ({ checklistListName }) => useEffect(() => {
    if (isNullOrUndefined(checklistListName)) {
        return () => null;
    }

    const timeoutID = setTimeout(() => {
        Scroll.scroller.scrollTo(checklistListName, {
            duration: 400,
            smooth: true,
            offset: -80,
        }, 75);
    });

    return () => clearTimeout(timeoutID);
}, [checklistListName]);
