import React from 'react';
import { useChecklistListInfoData } from 'lib/checklist/hooks/useChecklistListInfoData';
import { RightJustifyingContainer } from 'components/lib/CenteringContainer';
import { ChecklistDataPropTypes, ChecklistURLManagerPropTypes } from 'components/checklists/propTypes';
import PropTypes from 'prop-types';
import { ChecklistProgressAlert } from 'components/checklists/ChecklistProgressAlert';
import { ChecklistNextListButtonDisplay } from 'components/checklists/ChecklistNextListButtonDisplay';

export const ChecklistNextListButtonsDisplay = ({
    checklistData,
    checklistName,
    checklistListName,
    checklistURLManager,
}) => {
    const { progressPercent, nextListNames } = useChecklistListInfoData({
        checklistData, checklistName, checklistListName, checklistURLManager,
    });

    return (
        <RightJustifyingContainer $style={{ marginTop: '15px', gap: '16px 16px' }}>
            <ChecklistProgressAlert progressPercent={progressPercent} />

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
