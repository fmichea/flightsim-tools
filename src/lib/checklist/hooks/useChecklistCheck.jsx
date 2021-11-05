import { useMemo } from 'react';
import { Checklists } from 'lib/checklist/data/checklists';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';

export const useChecklistCheck = ({
    checklistName,
    checklistListName,
}) => {
    const knownLists = useMemo(() => ({
        checklistsNames: new Set(Object.values(Checklists)),
        checklistListNames: new Set(Object.values(ChecklistLists)),
    }), []);

    return useMemo(() => ({
        checklistFound: knownLists.checklistsNames.has(checklistName),
        checklistListFound: (
            isNullOrUndefined(checklistListName)
            || knownLists.checklistListNames.has(checklistListName)
        ),
    }), [checklistName, checklistListName]);
};
