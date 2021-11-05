import React from 'react';
import Scroll from 'react-scroll';
import { ChecklistListInfo } from 'components/checklists/ChecklistListInfo';
import { ChecklistListItemDisplay } from 'components/checklists/ChecklistListItemDisplay';
import { styled } from 'styletron-react';
import { ChecklistNextListButtonsDisplay } from 'components/checklists/ChecklistNextListButtonsDisplay';
import { ChecklistDataPropTypes, ChecklistURLManagerPropTypes } from 'components/checklists/propTypes';
import PropTypes from 'prop-types';

const ChecklistItemsTable = styled('table', { width: '100%', padding: '0 20px' });
const ChecklistListContainer = styled('div', { marginBottom: '2em' });

export const ChecklistListDisplay = ({
    checklistData,
    checklistName,
    checklistListName,
    checklistURLManager,
    items,
}) => (
    <Scroll.Element name={checklistListName}>
        <ChecklistListContainer>
            <ChecklistListInfo
                checklistData={checklistData}
                checklistName={checklistName}
                checklistListName={checklistListName}
                checklistURLManager={checklistURLManager}
            />

            <ChecklistItemsTable>
                <tbody>
                    {items.map((itemName) => (
                        <ChecklistListItemDisplay
                            key={`${checklistName}:${checklistListName}:${itemName}`}
                            itemName={itemName}
                            checklistName={checklistName}
                            checklistListName={checklistListName}
                            checklistData={checklistData}
                        />
                    ))}
                </tbody>
            </ChecklistItemsTable>

            <ChecklistNextListButtonsDisplay
                checklistData={checklistData}
                checklistName={checklistName}
                checklistListName={checklistListName}
                checklistURLManager={checklistURLManager}
            />
        </ChecklistListContainer>
    </Scroll.Element>
);

ChecklistListDisplay.propTypes = {
    checklistData: ChecklistDataPropTypes.isRequired,
    checklistURLManager: ChecklistURLManagerPropTypes.isRequired,
    checklistName: PropTypes.string.isRequired,
    checklistListName: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
