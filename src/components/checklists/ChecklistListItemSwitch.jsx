import React from 'react';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import PropTypes from 'prop-types';

const iconStyle = {
    fontSize: '.85em',
};

export const ChecklistListItemSwitch = ({
    isChecked,
    isNotImplemented,
}) => (
    <Switch
        checkedChildren={<CheckOutlined style={iconStyle} />}
        unCheckedChildren={<CloseOutlined style={iconStyle} />}
        checked={isChecked || isNotImplemented}
        disabled={isNotImplemented}
        size="small"
    />
);

ChecklistListItemSwitch.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    isNotImplemented: PropTypes.bool.isRequired,
};
