import React from 'react';

import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';

import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';

export const AntiIceTemperatureTitle = ({ temperature: { name, fullName, description } }) => {
    let temperatureHelp = null;
    if (isNotNullOrUndefined(fullName) || isNotNullOrUndefined(description)) {
        temperatureHelp = (
            <>
                {isNullOrUndefined(fullName) ? null : (<strong>{fullName}</strong>)}
                {isNullOrUndefined(description) ? null : (
                    <>
                        :
                        {' '}
                        {description}
                    </>
                )}
            </>
        );
    }

    return (
        <strong>
            Temperature (
            {name}
            {isNullOrUndefined(temperatureHelp) ? null : (
                <>
                    {' '}
                    <Tooltip
                        title={temperatureHelp}
                        color="#3f3f3f"
                        placement="right"
                        overlayStyle={{ maxWidth: '50vw' }}
                    >
                        <QuestionCircleOutlined />
                    </Tooltip>
                </>
            )}
            )
        </strong>
    );
};

AntiIceTemperatureTitle.propTypes = {
    temperature: PropTypes.shape({
        name: PropTypes.node.isRequired,
        fullName: PropTypes.node,
        description: PropTypes.node,
    }).isRequired,
};
