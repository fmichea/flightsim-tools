import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { getChecklistGlobalConfig } from 'state/readers/checklist';
import { toggleLeftHandedMode } from 'state/actions/checklist';
import { useDeepSelector } from 'lib/hooks/deep';

export const useChecklistLeftHandedMode = () => {
    const dispatch = useDispatch();

    const { leftHandedMode } = useDeepSelector(getChecklistGlobalConfig);

    const toggleLeftHandedModeHandler = useMemo(
        () => () => dispatch(toggleLeftHandedMode()),
        [dispatch],
    );

    return { leftHandedMode, toggleLeftHandedModeHandler };
};
