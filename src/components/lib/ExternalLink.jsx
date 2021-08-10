import React from 'react';
import { LinkOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

export const ExternalLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noreferrer">
        {children}
        {' '}
        <LinkOutlined />
    </a>
);

ExternalLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
