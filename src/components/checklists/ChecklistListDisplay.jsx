import React from 'react';

import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import { styled } from 'styletron-react';

import { ChecklistListInfo } from 'components/checklists/ChecklistListInfo';
import { ChecklistListItemDisplay } from 'components/checklists/ChecklistListItemDisplay';
import { ChecklistNextListButtonsDisplay } from 'components/checklists/ChecklistNextListButtonsDisplay';
import { ChecklistDataPropTypes, ChecklistURLManagerPropTypes } from 'components/checklists/propTypes';
import { isOdd } from 'lib/numbers';

const ChecklistItemsTable = styled('table', { width: '100%' });
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
                {items.map((itemName, idx) => (
                    <ChecklistListItemDisplay
                        key={`${checklistName}:${checklistListName}:${itemName}`}
                        itemName={itemName}
                        checklistName={checklistName}
                        checklistListName={checklistListName}
                        checklistData={checklistData}
                        isOddItem={isOdd(idx)}
                    />
                ))}
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
