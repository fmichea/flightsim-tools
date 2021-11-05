import React from 'react';
import { styled } from 'styletron-react';
import { useChecklistLeftHandedMode } from 'lib/checklist/hooks/useChecklistLeftHandedMode';
import {
    DarkerGrey,
    DarkGrey,
    LightBlueBGHover,
    LightGreenBG,
    LightGreenBGHover,
} from 'components/lib/colors';
import { ChecklistListItemHelp } from 'components/checklists/ChecklistListItemHelp';
import { useChecklistListItemData } from 'lib/checklist/hooks/useChecklistListItemData';
import { ChecklistListItemTags } from 'components/checklists/ChecklistListItemTags';
import { ChecklistListItemSwitch } from 'components/checklists/ChecklistListItemSwitch';
import { ChecklistDataPropTypes } from 'components/checklists/propTypes';
import PropTypes from 'prop-types';

const ChecklistListItemWrapper = styled('tr', (props) => ({
    padding: '0.3em',
    backgroundColor: props.$isNotImplemented || props.$isChecked ? LightGreenBG : undefined,
    opacity: props.$isNotImplemented ? '30%' : undefined,
    borderBottom: `1px dashed ${DarkerGrey}`,
    ':hover': { backgroundColor: props.$isChecked ? LightGreenBGHover : LightBlueBGHover },
}));

const ChecklistListItemTitle = styled('div', {
    display: 'inline-block',
    fontSize: '1em',
    fontWeight: 'bold',
    color: DarkGrey,
});

const ChecklistListItemState = styled('div', {
    textAlign: 'right',
    fontSize: '1em',
    fontWeight: 'bolder',
    color: '#545454',
});

const ChecklistItemColumn = styled('td', (props) => ({
    maxWidth: props.$fitToContent ? undefined : '100%',
    width: props.$fitToContent ? '.0005%' : undefined,
    whiteSpace: props.$fitToContent ? 'nowrap' : undefined,

    paddingBottom: '6px',
    paddingTop: '6px',
    paddingLeft: props.$isFirst ? '4px' : undefined,
    paddingRight: props.$isLast ? '4px' : '1em',
}));

export const ChecklistListItemDisplay = ({
    checklistData,
    checklistName,
    checklistListName,
    itemName,
}) => {
    const {
        title,
        state,
        isChecked,
        tagsData,
        toggleChecked,
        isNotImplemented,
        moreInfoShort,
        moreInfoLong,
    } = useChecklistListItemData({
        checklistData,
        checklistName,
        checklistListName,
        itemName,
    });

    const { leftHandedMode } = useChecklistLeftHandedMode();

    const switchColumn = (
        <ChecklistItemColumn $fitToContent $isFirst={leftHandedMode} $isLast={!leftHandedMode} onClick={toggleChecked}>
            <ChecklistListItemSwitch isChecked={isChecked} isNotImplemented={isNotImplemented} />
        </ChecklistItemColumn>
    );

    const rightColumn = leftHandedMode ? null : switchColumn;
    const leftColumn = leftHandedMode ? switchColumn : null;

    return (
        <ChecklistListItemWrapper $isChecked={isChecked} $isNotImplemented={isNotImplemented}>
            {leftColumn}
            <ChecklistItemColumn $isFirst={!leftHandedMode} $fitToContent>
                <ChecklistListItemTags tagsData={tagsData} />
            </ChecklistItemColumn>
            <ChecklistItemColumn>
                <ChecklistListItemTitle>
                    {title}
                </ChecklistListItemTitle>
            </ChecklistItemColumn>
            <ChecklistItemColumn $fitToContent>
                <ChecklistListItemState>
                    {state}
                </ChecklistListItemState>
            </ChecklistItemColumn>
            <ChecklistItemColumn $fitToContent $isLast={leftHandedMode}>
                <ChecklistListItemHelp
                    title={title}
                    state={state}
                    moreInfoShort={moreInfoShort}
                    moreInfoLong={moreInfoLong}
                />
            </ChecklistItemColumn>
            {rightColumn}
        </ChecklistListItemWrapper>
    );
};

ChecklistListItemDisplay.propTypes = {
    checklistData: ChecklistDataPropTypes.isRequired,
    checklistName: PropTypes.string.isRequired,
    checklistListName: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
};
