import React from 'react';

import { ExternalLink } from 'components/lib/ExternalLink';

export default {
    title: 'lib/ExternalLink',
    component: ExternalLink,
};

const Template = (args) => <ExternalLink {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Link title',
    href: '#',
};

export const NoIcon = Template.bind({});
NoIcon.args = {
    children: 'Link title',
    noIcon: true,
    href: '#',
};
