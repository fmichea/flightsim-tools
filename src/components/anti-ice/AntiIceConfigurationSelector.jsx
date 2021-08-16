import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

export const AntiIceConfigurationSelector = ({
    currentConfiguration,
    setCurrentConfiguration,
    optionalModesOrder,
    optionalModesMapping,
}) => {
    const hasMoreConfigs = optionalModesOrder.length !== 0;

    const optionalModesOptions = optionalModesOrder.map((uid) => (
        <Option key={uid} value={uid}>
            {optionalModesMapping[uid].title}
        </Option>
    ));

    return (
        <Select
            value={currentConfiguration}
            onChange={setCurrentConfiguration}
            disabled={!hasMoreConfigs}
            style={{ width: 150 }}
        >
            <Option value="default">default</Option>
            {optionalModesOptions}
        </Select>
    );
};

AntiIceConfigurationSelector.propTypes = {
    currentConfiguration: PropTypes.string.isRequired,
    setCurrentConfiguration: PropTypes.func.isRequired,
    optionalModesOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
    optionalModesMapping: PropTypes.objectOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
    })).isRequired,
};
