import React from 'react';

import { CASMessage } from 'components/lib/CASMessage';

export default {
    title: 'lib/CASMessage',
    component: CASMessage,
};

const Template = (args) => <CASMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'DEFAULT MESSAGE',
};

export const Critical = Template.bind({});
Critical.args = {
    level: 'critical',
    children: 'CRITICAL MESSAGE',
};

export const Warning = Template.bind({});
Warning.args = {
    level: 'warning',
    children: 'WARNING MESSAGE',
};

export const Success = Template.bind({});
Success.args = {
    level: 'success',
    children: 'SUCCESS MESSAGE',
};

export const Info = Template.bind({});
Info.args = {
    level: 'info',
    children: 'INFO MESSAGE',
};

export const Data = Template.bind({});
Data.args = {
    level: 'data',
    children: 'DATA MESSAGE',
};
