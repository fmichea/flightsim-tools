import React from 'react';
import { useChecklistURLConfig } from 'lib/checklist/hooks/useChecklistURLConfig';
import { useChecklistCheck } from 'lib/checklist/hooks/useChecklistCheck';
import { ChecklistDisplay } from 'components/checklists/ChecklistDisplay';
import { ChecklistNotFound } from 'components/checklists/ChecklistNotFound';

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
