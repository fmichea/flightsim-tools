import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { getChecklistGlobalConfig } from 'state/readers/checklist';
import { toggleLeftHandedMode } from 'state/actions/checklist';

export const useChecklistLeftHandedMode = () => {
    const dispatch = useDispatch();

    const { leftHandedMode } = useSelector(getChecklistGlobalConfig);

    const toggleLeftHandedModeHandler = useMemo(
        () => () => dispatch(toggleLeftHandedMode()),
        [dispatch],
    );

    return { leftHandedMode, toggleLeftHandedModeHandler };
};
