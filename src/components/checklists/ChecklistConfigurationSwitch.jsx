import { styled } from 'styletron-react';
import { List, Switch } from 'antd';
import { Clearfix } from 'components/lib/Clearfix';
import React from 'react';
import PropTypes from 'prop-types';

const ChecklistConfigurationSwitchContainer = styled('div', {
    width: '100%',
});

const ChecklistConfigurationSwitchSwitchContainer = styled('div', {
    float: 'right',
});

const ChecklistConfigurationSwitchDescription = styled('div', {
    display: 'inline-block',
});

export const ChecklistConfigurationSwitch = ({
    title, description, checked, onChange, onClick,
}) => (
    <List.Item>
        <ChecklistConfigurationSwitchContainer>
            <ChecklistConfigurationSwitchSwitchContainer>
                <Switch checked={checked} onChange={onChange} onClick={onClick} />
            </ChecklistConfigurationSwitchSwitchContainer>
            <ChecklistConfigurationSwitchDescription>
                <strong>
                    {title}
                    :
                </strong>
                {' '}
                {description}
            </ChecklistConfigurationSwitchDescription>
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
