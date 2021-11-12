import React from 'react';

import { QuestionCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Modal, Typography } from 'antd';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

import {
    ChecklistItemColumn,
    ChecklistListItemState,
    ChecklistListItemTitle,
    ChecklistListSubItemRow,
    ChecklistSubItemsTable,
} from 'components/checklists/formatting';
import { Monospaced } from 'components/lib/Monospaced';
import { VWSpace } from 'components/lib/spaces';
import { useBooleanToggle } from 'lib/hooks/useBooleanToggle';
import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';
import { isOdd } from 'lib/numbers';

const ChecklistItemHelpWrapper = styled('span', {
    display: 'inline-block',
    verticalAlign: 'middle',
    cursor: 'pointer',
});

const { Title } = Typography;

const modalStyle = {
    maxWidth: '1000px',
    maxHeight: '40vh',
};

const modalBodyStyle = {
    paddingTop: '10px',
    paddingBottom: '10px',
    maxHeight: '60vh',
    overflowX: 'scroll',
};

const cancelButtonProps = { style: { display: 'none' } };

const iconInvisibleStyle = { opacity: '0' };

const treeCharLastLeaf = <>&#x2517;&#x2501;</>; // ┗━
const treeCharLeaf = <>&#x2523;&#x2501;</>; // ┣━
const treeCharForward = <>&#x2503;&#x2003;</>; // ┃
const treeCharWhitespace = <>&#x2003;&#x2003;</>; // 2 em whitespace

const renderItemLevelTree = (levels) => levels.map(({ levelIdx, total }, idx) => {
    const isFirst = idx === 0;
    const isLeafLevel = idx === levels.length - 1;

    const isLastLevel = levelIdx === total;
    const levelHasOtherItem = !isLastLevel;

    let treeChar = treeCharWhitespace;
    if (!isLeafLevel && levelHasOtherItem) {
        treeChar = treeCharForward;
    } else if (isLeafLevel && levelHasOtherItem) {
        treeChar = treeCharLeaf;
    } else if (isLeafLevel) {
        treeChar = treeCharLastLeaf;
    }

    return (
    // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={`level-${idx}-${levelIdx}-${total}`}>
            {isFirst ? null : <VWSpace $width="4px" />}
            {treeChar}
            <VWSpace $width="6px" />
        </React.Fragment>
    );
});

const buildSubItemKey = (levels) => levels.map(({ levelIdx }) => levelIdx).join('.');

const renderSubItems = (subItems, levels = []) => {
    if (isNullOrUndefined(subItems) || subItems.length === 0) {
        return [];
    }

    const result = [];
    const subItemsLength = subItems.length - 1;

    subItems.forEach((subItem, idx) => {
        const subItemLevels = [...levels, { levelIdx: idx, total: subItemsLength }];

        result.push({
            key: buildSubItemKey(subItemLevels),
            title: (
                <>
                    <Monospaced style={{ fontSize: '1em' }}>{renderItemLevelTree(subItemLevels)}</Monospaced>
                    {subItem.title}
                </>
            ),
            state: subItem.state,
        });

        result.push(...renderSubItems(subItem.subItems, subItemLevels));
    });

    return result;
};

export const ChecklistListItemHelp = ({
    title,
    state,
    moreInfoShort,
    moreInfoLong,
    subItems,
}) => {
    const modalVisible = useBooleanToggle(false);

    const hasHelp = isNotNullOrUndefined(moreInfoShort) || isNotNullOrUndefined(moreInfoLong);
    const hasSubItems = isNotNullOrUndefined(subItems) && subItems.length !== 0;

    if (!hasHelp && !hasSubItems) {
        return null;
    }

    const modalTitle = (
        <>
            <strong>Help:</strong>
            {' '}
            {title}
            :
            {' '}
            {state}
        </>
    );

    return (
        <>
            <ChecklistItemHelpWrapper onClick={modalVisible.toggleOn}>
                <UnorderedListOutlined style={hasSubItems ? undefined : iconInvisibleStyle} />
                <VWSpace $width=".5em" />
                <QuestionCircleOutlined style={hasHelp ? undefined : iconInvisibleStyle} />
            </ChecklistItemHelpWrapper>

            <Modal
                title={modalTitle}
                visible={modalVisible.value}
                onOk={modalVisible.toggleOff}
                onCancel={modalVisible.toggleOff}
                cancelButtonProps={cancelButtonProps}
                width="80vw"
                style={modalStyle}
                bodyStyle={modalBodyStyle}
                maskClosable
            >
                {isNullOrUndefined(moreInfoShort) ? null : (
                    <p>
                        <strong>Help:</strong>
                        {' '}
                        {moreInfoShort}
                    </p>
                )}

                {!hasSubItems ? null : (
                    <p>
                        <Title level={5}>Items</Title>
                        <ChecklistSubItemsTable>
                            <tbody>
                                {renderSubItems(subItems).map((value, idx) => (
                                    <ChecklistListSubItemRow
                                        key={value.key}
                                        $isSubItemsList
                                        $isFirst={idx === 0}
                                        $isOddSubItem={isOdd(idx)}
                                    >
                                        <ChecklistItemColumn $isFirst $isSubItemsList>
                                            <ChecklistListItemTitle $isSubItemsList>
                                                {value.title}
                                            </ChecklistListItemTitle>
                                        </ChecklistItemColumn>
                                        <ChecklistItemColumn $isLast $fitToContent $isSubItemsList>
                                            <ChecklistListItemState $isSubItemsList>
                                                {value.state}
                                            </ChecklistListItemState>
                                        </ChecklistItemColumn>
                                    </ChecklistListSubItemRow>
                                ))}
                            </tbody>
                        </ChecklistSubItemsTable>
                    </p>
                )}

                {isNullOrUndefined(moreInfoLong) ? null : (
                    <p>
                        <Title level={5}>Description</Title>
                        {moreInfoLong}
                    </p>
                )}
            </Modal>
        </>
    );
};

ChecklistListItemHelp.propTypes = {
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    moreInfoShort: PropTypes.node,
    moreInfoLong: PropTypes.node,
    subItems: PropTypes.arrayOf(PropTypes.shape({})),
};

ChecklistListItemHelp.defaultProps = {
    moreInfoShort: null,
    moreInfoLong: null,
    subItems: null,
};
