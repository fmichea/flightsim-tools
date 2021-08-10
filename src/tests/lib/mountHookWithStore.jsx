import React from 'react';
import { mountWithStore } from 'tests/lib/mountWithStore';

export const mountHookWithStore = (hookFN, opts = {}) => {
    const Wrapper = () => {
        const v = hookFN();
        return <div data-testid="hookResult" v={v} />;
    };

    const mountWithStoreResults = mountWithStore(Wrapper, opts);

    const getCurrentHookResult = () => mountWithStoreResults.compWrapper()
        .find('[data-testid="hookResult"]').props().v;

    return { ...mountWithStoreResults, getCurrentHookResult };
};
