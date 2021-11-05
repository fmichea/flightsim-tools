import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

export const ChecklistListItemSwitch = ({
    isChecked,
    isNotImplemented,
}) => (
    <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        checked={isChecked || isNotImplemented}
        disabled={isNotImplemented}
        size="small"
    />
);

ChecklistListItemSwitch.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    isNotImplemented: PropTypes.bool.isRequired,
};
