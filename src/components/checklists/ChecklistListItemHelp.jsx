import React from 'react';
import { styled } from 'styletron-react';
import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';
import { useBooleanToggle } from 'lib/hooks/useBooleanToggle';
import { Modal, Typography } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { isOdd } from 'lib/numbers';
import { VWSpace } from 'components/lib/spaces';
import {
    ChecklistItemColumn, ChecklistListItemState,
    ChecklistListItemTitle,
    ChecklistListSubItemRow,
    ChecklistSubItemsTable,
} from 'components/checklists/formatting';

const ChecklistItemHelpWrapper = styled('span', {
    display: 'inline-block',
    verticalAlign: 'middle',
    cursor: 'pointer',
});

const { Title } = Typography;

const modalStyle = { maxWidth: '1000px' };
const modalBodyStyle = { paddingTop: '10px', paddingBottom: '10px' };
const cancelButtonProps = { style: { display: 'none' } };

export const ChecklistListItemHelp = ({
    title,
    state,
    moreInfoShort,
    moreInfoLong,
    subItems,
}) => {
    const modalVisible = useBooleanToggle(false);
    const hasSubItems = isNotNullOrUndefined(subItems) && subItems.length !== 0;

    if (isNullOrUndefined(moreInfoShort) && isNullOrUndefined(moreInfoLong) && !hasSubItems) {
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
                <QuestionCircleOutlined />
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
                {!hasSubItems ? null : (
                    <>
                        <Title level={5}>Items</Title>
                        <ChecklistSubItemsTable>
                            <tbody>
                                {subItems.map((value, idx) => (
                                    <ChecklistListSubItemRow
                                        key={value.title}
                                        $isSubItemsList
                                        $isFirst={idx === 0}
                                        $isOddSubItem={isOdd(idx)}
                                    >
                                        <ChecklistItemColumn $isFirst $isSubItemsList>
                                            <ChecklistListItemTitle $isSubItemsList>
                                                {idx !== subItems.length - 1 ? <>&#x2523;</> : <>&#x2517;</>}
                                                <VWSpace $width="8px" />
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
                    </>
                )}

                {isNotNullOrUndefined(moreInfoLong) ? moreInfoLong : moreInfoShort}
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
