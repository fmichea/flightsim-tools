import { useMemo } from 'react';

import { useDispatch } from 'react-redux';

import { useDeepSelector } from 'lib/hooks/deep';
import { useWindowDimensions } from 'lib/hooks/useWindowDimensions';
import {
    toggleHideHelpMode,
    toggleHideSwitchesMode,
    toggleHideTagsMode,
    toggleLeftHandedMode,
} from 'state/actions/checklist';
import { getChecklistGlobalConfig } from 'state/readers/checklist';

export const useChecklistLayoutConfig = () => {
    const { width } = useWindowDimensions();

    const {
        leftHandedMode,
        hideTagsMode,
        hideHelpMode,
        hideSwitchesMode,
    } = useDeepSelector(getChecklistGlobalConfig);

    const twoRowsMode = width < 450;

    const widthBlocked = {
        hideTagsMode: !twoRowsMode && width < 768,
        hideHelpMode: false, // FIXME
        hideSwitchesMode: width < 675,
    };

    const hideChecklistProgress = width < 600;

    return {
        leftHandedMode,
        twoRowsMode,
        hideChecklistProgress,

        hideTagsMode: hideTagsMode || widthBlocked.hideTagsMode,
        hideTagsModeToggleable: !widthBlocked.hideTagsMode,

        hideHelpMode: hideHelpMode || widthBlocked.hideHelpMode,
        hideHelpModeToggleable: !widthBlocked.hideHelpMode,

        hideSwitchesMode: hideSwitchesMode || widthBlocked.hideSwitchesMode,
        hideSwitchesModeToggleable: !widthBlocked.hideSwitchesMode,
    };
};

export const useChecklistLayoutConfigWithTogglers = () => {
    const dispatch = useDispatch();

    const layoutConfig = useChecklistLayoutConfig();

    const togglers = useMemo(
        () => ({
            leftHandedModeToggle: () => dispatch(toggleLeftHandedMode()),
            hideTagsModeToggle: () => dispatch(toggleHideTagsMode()),
            hideHelpModeToggle: () => dispatch(toggleHideHelpMode()),
            hideSwitchesModeToggle: () => dispatch(toggleHideSwitchesMode()),
        }),
        [dispatch],
    );

    return { ...layoutConfig, ...togglers };
};
