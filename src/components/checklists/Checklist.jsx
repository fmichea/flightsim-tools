import React from 'react';

import { ChecklistDisplay } from 'components/checklists/ChecklistDisplay';
import { ChecklistNotFound } from 'components/checklists/ChecklistNotFound';
import { useChecklistCheck } from 'lib/checklist/hooks/useChecklistCheck';
import { useChecklistURLConfig } from 'lib/checklist/hooks/useChecklistURLConfig';

export const Checklist = () => {
    const {
        checklistName,
        checklistListName,
        selectedFilters,
        checklistURLManager,
    } = useChecklistURLConfig();

    const { checklistFound } = useChecklistCheck({
        checklistName,
        checklistListName,
    });

    if (!checklistFound) {
        return <ChecklistNotFound checklistName={checklistName} />;
    }

    return (
        <ChecklistDisplay
            checklistName={checklistName}
            checklistListName={checklistListName}
            selectedFilters={selectedFilters}
            checklistURLManager={checklistURLManager}
        />
    );
};
