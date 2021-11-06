import { useDeepSelector } from 'lib/hooks/deep';
import { getChecklistGlobalConfig } from 'state/readers/checklist';

export const useChecklistGlobalConfig = () => useDeepSelector(getChecklistGlobalConfig);
