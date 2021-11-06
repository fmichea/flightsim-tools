import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
    toggleHideHelpMode,
    toggleHideSwitchesMode,
    toggleHideTagsMode,
    toggleLeftHandedMode,
} from 'state/actions/checklist';
import { useChecklistGlobalConfig } from 'lib/checklist/hooks/useChecklistGlobalConfig';

export const useChecklistGlobalConfigWithTogglers = () => {
    const dispatch = useDispatch();

    const checklistConfig = useChecklistGlobalConfig();

    const togglers = useMemo(
        () => ({
            leftHandedMode: () => dispatch(toggleLeftHandedMode()),
            hideTagsMode: () => dispatch(toggleHideTagsMode()),
            hideHelpMode: () => dispatch(toggleHideHelpMode()),
            hideSwitchesMode: () => dispatch(toggleHideSwitchesMode()),
        }),
        [dispatch],
    );

    return { checklistConfig, togglers };
};
