import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import { List, Switch } from 'antd';
import { Clearfix } from 'components/lib/Clearfix';

const ChecklistConfigurationSwitchContainer = styled('div', {
    width: '100%',
});

const ChecklistConfigurationSwitchSwitchContainer = styled('div', {
    float: 'right',
    marginLeft: '20px',
});

export const ChecklistConfigurationSwitch = ({
    title, description, checked, onChange, onClick,
}) => (
    <List.Item>
        <ChecklistConfigurationSwitchContainer>
            <ChecklistConfigurationSwitchSwitchContainer>
                <Switch checked={checked} onChange={onChange} onClick={onClick} />
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
};

ChecklistConfigurationSwitch.defaultProps = {
    onChange: null,
    onClick: null,
};
