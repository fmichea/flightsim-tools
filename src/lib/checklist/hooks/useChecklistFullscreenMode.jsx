import { useBooleanToggle } from 'lib/hooks/useBooleanToggle';

export const useChecklistFullscreenMode = () => {
    const { value, toggleValue } = useBooleanToggle(false);
    return { fullscreenMode: value, toggleFullscreenModeHandler: toggleValue };
};
