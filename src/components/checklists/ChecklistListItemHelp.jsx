import React from 'react';
import { styled } from 'styletron-react';
import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';
import { useBooleanToggle } from 'lib/hooks/useBooleanToggle';
import { Modal, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const ChecklistItemHelpWrapper = styled('span', {
    display: 'inline-block',
    verticalAlign: 'middle',
});

const tooltipOverlayStyle = { maxWidth: '50vw' };
const cancelButtonProps = { style: { display: 'none' } };

export const ChecklistListItemHelp = ({
    title,
    state,
    moreInfoShort,
    moreInfoLong,
}) => {
    const modalVisible = useBooleanToggle(false);

    if (isNullOrUndefined(moreInfoShort) && isNullOrUndefined(moreInfoLong)) {
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
                <Tooltip
                    title={moreInfoShort}
                    placement="bottomRight"
                    overlayStyle={tooltipOverlayStyle}
                    color="#3f3f3f"
                    visible={modalVisible.value ? false : undefined}
                >
                    <QuestionCircleOutlined />
                </Tooltip>
            </ChecklistItemHelpWrapper>

            <Modal
                title={modalTitle}
                visible={modalVisible.value}
                onOk={modalVisible.toggleOff}
                onCancel={modalVisible.toggleOff}
                cancelButtonProps={cancelButtonProps}
                width="60vw"
                maskClosable
            >
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
};

ChecklistListItemHelp.defaultProps = {
    moreInfoShort: null,
    moreInfoLong: null,
};
