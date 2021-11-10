import React from 'react';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import PropTypes from 'prop-types';

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
