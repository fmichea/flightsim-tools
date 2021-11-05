import React from 'react';
import PropTypes from 'prop-types';
import { useChecklist } from 'lib/checklist/hooks/useChecklist';
import { CenteredContentContainer } from 'components/lib/CenteredContentContainer';
import { ChecklistListDisplay } from 'components/checklists/ChecklistListDisplay';
import { ChecklistInfo } from 'components/checklists/ChecklistInfo';
import { useChecklistSelectedListScroll } from 'lib/checklist/hooks/useChecklistSelectedListScroll';

export const ChecklistDisplay = ({
    checklistName,
    checklistListName,
    selectedFilters,
    checklistURLManager,
}) => {
    const {
        checklistData,
        checklistListsData,
        resetFullCallback,
    } = useChecklist({
        checklistName,
        selectedFilters,
    });

    useChecklistSelectedListScroll({ checklistListName });

    return (
        <CenteredContentContainer>
            {/* FIXME: Removing this for now, should only make it work on mobile? */}
            {/* <BlockLockscreen /> */}

            <ChecklistInfo
                checklistData={checklistData}
                checklistURLManager={checklistURLManager}
                selectedFilters={selectedFilters}
                resetFullCallback={resetFullCallback}
            />

            {checklistListsData.map(({ listName, items }) => (
                <ChecklistListDisplay
                    key={`${checklistName}:${listName}`}
                    checklistListName={listName}
                    checklistName={checklistName}
                    checklistURLManager={checklistURLManager}
                    checklistData={checklistData}
                    items={items}
                />
            ))}
        </CenteredContentContainer>
    );
};

ChecklistDisplay.propTypes = {
    checklistName: PropTypes.string.isRequired,
    checklistListName: PropTypes.string,
    selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    checklistURLManager: PropTypes.object.isRequired,
};

ChecklistDisplay.defaultProps = {
    checklistListName: null,
};
