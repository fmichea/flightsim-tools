import { useMemo } from 'react';
import { ChecklistsData } from 'lib/checklist/data/checklistsData';

export const useChecklistData = ({ checklistName }) => useMemo(() => ChecklistsData[checklistName], [checklistName]);
