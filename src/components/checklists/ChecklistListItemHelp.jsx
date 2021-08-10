import { styled } from 'styletron-react';
import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';
import { useBooleanToggle } from 'lib/hooks/useBooleanToggle';
import { Modal, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import PropTypes from 'prop-types';

const ChecklistItemHelpWrapper = styled('sup', {
    display: 'inline-block',
    marginLeft: '1em',
    fontSize: '1em',
    verticalAlign: 'middle',
});

export const ChecklistListItemHelp = ({
    title, state, moreInfoShort, moreInfoLong,
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
                    overlayStyle={{ maxWidth: '50vw' }}
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
                cancelButtonProps={{ style: { display: 'none' } }}
                maskClosable
                width="60vw"
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
