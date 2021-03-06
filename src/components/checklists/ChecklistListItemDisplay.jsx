import React from 'react';

import PropTypes from 'prop-types';

import { ChecklistListItemHelp } from 'components/checklists/ChecklistListItemHelp';
import { ChecklistListItemSwitch } from 'components/checklists/ChecklistListItemSwitch';
import { ChecklistListItemTags } from 'components/checklists/ChecklistListItemTags';
import {
    ChecklistItemColumn,
    ChecklistListItemRow,
    ChecklistListItemState,
    ChecklistListItemSubTitle,
    ChecklistListItemTitle,
    ChecklistListItemWrapper,
} from 'components/checklists/formatting';
import { ChecklistDataPropTypes } from 'components/checklists/propTypes';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { useChecklistDoubleClickCallback } from 'lib/checklist/hooks/useChecklistDoubleClickCallback';
import { useChecklistLayoutConfig } from 'lib/checklist/hooks/useChecklistLayoutConfig';
import { useChecklistListItemData } from 'lib/checklist/hooks/useChecklistListItemData';

export const ChecklistListItemDisplay = ({
    checklistData,
    checklistName,
    checklistListName,
    itemName,
    isOddItem,
}) => {
    const {
        title,
        state,
        tagsSet,
        isChecked,
        tagsData,
        toggleChecked,
        isNotImplemented,
        moreInfoShort,
        moreInfoLong,
        subItems,
    } = useChecklistListItemData({
        checklistData,
        checklistName,
        checklistListName,
        itemName,
    });

    const {
        leftHandedMode,
        hideTagsMode,
        hideHelpMode,
        hideSwitchesMode,
        twoRowsMode,
    } = useChecklistLayoutConfig();

    const doubleClickToggler = useChecklistDoubleClickCallback({ toggleChecked, isNotImplemented });

    const subTitleItems = [];
    if (tagsSet.has(ChecklistTags.FFOTD)) {
        subTitleItems.push('Only First Flight of the Day');
    }

    const switchColumn = hideSwitchesMode ? null : (
        <ChecklistItemColumn $fitToContent $isFirst={leftHandedMode} $isLast={!leftHandedMode} onClick={toggleChecked}>
            <ChecklistListItemSwitch isChecked={isChecked} isNotImplemented={isNotImplemented} />
        </ChecklistItemColumn>
    );

    const rightColumn = leftHandedMode ? null : switchColumn;
    const leftColumn = leftHandedMode ? switchColumn : null;

    const isSwitchColumnFirst = leftHandedMode && !hideSwitchesMode;
    const isTagsColumnFirst = !isSwitchColumnFirst;
    const isTitleColumnFirst = !isSwitchColumnFirst && hideTagsMode;

    const isSwitchColumnLast = !leftHandedMode && !hideSwitchesMode;
    const isHelpColumnLast = !isSwitchColumnLast;
    const isStateColumnLast = !isSwitchColumnLast && hideHelpMode;

    const titleColumnContent = (
        <>
            <ChecklistListItemTitle>
                {title}
            </ChecklistListItemTitle>
            {subTitleItems.length === 0 ? null : (
                <ChecklistListItemSubTitle>
                    {subTitleItems.map((item, idx) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <React.Fragment key={idx}>
                            {idx === 0 ? null : '; '}
                            {item}
                        </React.Fragment>
                    ))}
                </ChecklistListItemSubTitle>
            )}
        </>
    );

    const stateColumnContent = (
        <ChecklistListItemState>
            {state}
        </ChecklistListItemState>
    );

    const helpColumnContent = (
        <ChecklistListItemHelp
            title={title}
            state={state}
            moreInfoShort={moreInfoShort}
            moreInfoLong={moreInfoLong}
            subItems={subItems}
        />
    );

    if (twoRowsMode) {
        return (
            <ChecklistListItemWrapper
                $isChecked={isChecked}
                $isNotImplemented={isNotImplemented}
                $isOddItem={isOddItem}
            >
                <ChecklistListItemRow>
                    {hideTagsMode ? null : (
                        <ChecklistItemColumn
                            onClick={doubleClickToggler}
                            $isFirst
                            $fitToContent
                        >
                            <ChecklistListItemTags tagsData={tagsData} />
                        </ChecklistItemColumn>
                    )}
                    <ChecklistItemColumn
                        onClick={doubleClickToggler}
                        $isFirst={hideTagsMode}
                        $isLast
                        colspan={hideTagsMode ? 2 : undefined}
                    >
                        {titleColumnContent}
                    </ChecklistItemColumn>
                </ChecklistListItemRow>

                <ChecklistListItemRow>
                    <ChecklistItemColumn $fitToContent $isFirst>
                        {hideHelpMode ? null : (
                            helpColumnContent
                        )}
                    </ChecklistItemColumn>
                    <ChecklistItemColumn
                        onClick={doubleClickToggler}
                        $isLast
                    >
                        {stateColumnContent}
                    </ChecklistItemColumn>
                </ChecklistListItemRow>
            </ChecklistListItemWrapper>
        );
    }

    return (
        <ChecklistListItemWrapper
            $isChecked={isChecked}
            $isNotImplemented={isNotImplemented}
            $isOddItem={isOddItem}
        >
            <ChecklistListItemRow>
                {leftColumn}
                {hideTagsMode ? null : (
                    <ChecklistItemColumn
                        onClick={doubleClickToggler}
                        $isFirst={isTagsColumnFirst}
                        $fitToContent
                    >
                        <ChecklistListItemTags tagsData={tagsData} />
                    </ChecklistItemColumn>
                )}
                <ChecklistItemColumn
                    onClick={doubleClickToggler}
                    $isFirst={isTitleColumnFirst}
                >
                    {titleColumnContent}
                </ChecklistItemColumn>
                <ChecklistItemColumn
                    onClick={doubleClickToggler}
                    $fitToContent
                    $isLast={isStateColumnLast}
                >
                    {stateColumnContent}
                </ChecklistItemColumn>
                {hideHelpMode ? null : (
                    <ChecklistItemColumn $fitToContent $isLast={isHelpColumnLast}>
                        {helpColumnContent}
                    </ChecklistItemColumn>
                )}
                {rightColumn}
            </ChecklistListItemRow>
        </ChecklistListItemWrapper>
    );
};

ChecklistListItemDisplay.propTypes = {
    checklistData: ChecklistDataPropTypes.isRequired,
    checklistName: PropTypes.string.isRequired,
    checklistListName: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    isOddItem: PropTypes.bool.isRequired,
};
