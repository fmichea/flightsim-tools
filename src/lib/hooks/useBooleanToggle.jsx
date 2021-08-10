import { useMemo, useState } from 'react';

export const useBooleanToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const [toggleOn, toggleOff] = useMemo(() => ([
        () => { setValue(true); },
        () => { setValue(false); },
    ]), [setValue]);

    const toggleValue = useMemo(
        () => () => setValue(!value),
        [value, setValue],
    );

    return {
        value, toggleValue, toggleOn, toggleOff,
    };
};
