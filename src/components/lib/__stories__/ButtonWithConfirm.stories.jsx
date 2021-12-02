import React from 'react';

import { ButtonWithConfirm } from 'components/lib/ButtonWithConfirm';

export default {
    title: 'lib/ButtonWithConfirm',
    component: ButtonWithConfirm,
    argTypes: { onClick: { action: 'onClick' } },
};

const Template = (args) => <ButtonWithConfirm {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Content',
};
