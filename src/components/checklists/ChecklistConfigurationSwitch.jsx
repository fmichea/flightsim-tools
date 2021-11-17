import React from 'react';

import { List, Switch } from 'antd';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

import { Clearfix } from 'components/lib/Clearfix';

const ChecklistConfigurationSwitchContainer = styled('div', (props) => ({
    width: '100%',
    opacity: props.$disabled ? '.2' : undefined,
}));

const ChecklistConfigurationSwitchSwitchContainer = styled('div', {
    float: 'right',
    marginLeft: '20px',
});

export const ChecklistConfigurationSwitch = ({
    title, description, checked, onChange, onClick, disabled,
}) => (
    <List.Item>
        <ChecklistConfigurationSwitchContainer $disabled={disabled}>
            <ChecklistConfigurationSwitchSwitchContainer>
                <Switch checked={checked} onChange={onChange} onClick={onClick} disabled={disabled} />
            </ChecklistConfigurationSwitchSwitchContainer>

            <div>
                <strong>
                    {title}
                    :
                </strong>
                {' '}
                {description}
            </div>
            <Clearfix />
        </ChecklistConfigurationSwitchContainer>
    </List.Item>
);

ChecklistConfigurationSwitch.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

ChecklistConfigurationSwitch.defaultProps = {
    onChange: null,
    onClick: null,
    disabled: false,
};
