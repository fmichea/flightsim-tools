import React from 'react';

import { KeyboardInputs } from 'components/lib/KeyboardInputs';

export default {
    title: 'lib/KeyboardInputs',
    component: KeyboardInputs,
};

const Template = (args) => <KeyboardInputs {...args} />;

export const OneItem = Template.bind({});
OneItem.args = {
    inputs: ['KEY1'],
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
    inputs: ['KEY1', 'KEY2'],
};
