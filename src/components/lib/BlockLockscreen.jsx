/* eslint-disable no-console */
import React, { useEffect, useMemo, useState } from 'react';
import PageVisibility from 'react-page-visibility';

export const BlockLockscreen = () => {
    const [wakeLock, setWakeLock] = useState(null);

    const onChange = useMemo(
        () => (visibilityState) => {
            if (!('wakeLock' in navigator)) {
                return;
            }

            if (visibilityState) {
                navigator.wakeLock.request('screen').then(setWakeLock).catch(() => {});
            } else {
                wakeLock.release().then(() => { setWakeLock(null); });
            }
        },
        [wakeLock, setWakeLock],
    );

    useEffect(() => onChange(true), []);

    return <PageVisibility onChange={onChange} />;
};
