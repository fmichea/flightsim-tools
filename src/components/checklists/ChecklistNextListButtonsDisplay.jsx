import React from 'react';
import { useChecklistListInfoData } from 'lib/checklist/hooks/useChecklistListInfoData';
import { RightJustifyingContainer } from 'components/lib/CenteringContainer';
import { ChecklistNextListButton } from 'components/checklists/ChecklistNextListButton';
import { ChecklistDataPropTypes, ChecklistURLManagerPropTypes } from 'components/checklists/propTypes';
import PropTypes from 'prop-types';

const ChecklistNextListButtonDisplay = ({
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

export const ChecklistNextListButtonsDisplay = ({
    checklistData,
    checklistName,
    checklistListName,
    checklistURLManager,
}) => {
    const { nextListNames } = useChecklistListInfoData({
        checklistData, checklistName, checklistListName, checklistURLManager,
    });

    if (nextListNames.length === 0) {
        return null;
    }

    return (
        <RightJustifyingContainer>
            {nextListNames.map((nextListName) => (
                <ChecklistNextListButtonDisplay
                    key={nextListName}
                    checklistData={checklistData}
                    checklistName={checklistName}
                    checklistListName={nextListName}
                    checklistURLManager={checklistURLManager}
                />
            ))}
        </RightJustifyingContainer>
    );
};

ChecklistNextListButtonsDisplay.propTypes = {
    checklistData: ChecklistDataPropTypes.isRequired,
    checklistURLManager: ChecklistURLManagerPropTypes.isRequired,
    checklistName: PropTypes.string.isRequired,
    checklistListName: PropTypes.string.isRequired,
};
