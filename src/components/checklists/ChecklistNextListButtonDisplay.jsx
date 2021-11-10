import React from 'react';

import PropTypes from 'prop-types';

import { ChecklistNextListButton } from 'components/checklists/ChecklistNextListButton';
import { ChecklistDataPropTypes, ChecklistURLManagerPropTypes } from 'components/checklists/propTypes';
import { useChecklistListInfoData } from 'lib/checklist/hooks/useChecklistListInfoData';

export const ChecklistNextListButtonDisplay = ({
    checklistData,
    checklistName,
    checklistListName,
    checklistURLManager,
}) => {
    const {
        title,
        isEmergency,
        setActiveCallback,
    } = useChecklistListInfoData({
        checklistData, checklistName, checklistListName, checklistURLManager,
    });

    return (
        <ChecklistNextListButton
            title={title}
            isEmergency={isEmergency}
            onClick={setActiveCallback}
        />
    );
};

ChecklistNextListButtonDisplay.propTypes = {
    checklistData: ChecklistDataPropTypes.isRequired,
    checklistURLManager: ChecklistURLManagerPropTypes.isRequired,
    checklistName: PropTypes.string.isRequired,
    checklistListName: PropTypes.string.isRequired,
};
