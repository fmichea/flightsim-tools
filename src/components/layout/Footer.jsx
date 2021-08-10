import React from 'react';
import { Layout } from 'antd';
import { useStyletron } from 'styletron-react';
import { GithubOutlined } from '@ant-design/icons';

const ANTDFooter = Layout.Footer;

export const Footer = () => {
    const [css] = useStyletron();

    return (
        <ANTDFooter className={css({ textAlign: 'center' })}>
            TOOLING AVAILABLE
            {' '}
            <strong>FOR FLIGHT SIMULATION ONLY</strong>
            . DO NOT USE FOR REAL WORLD OPERATIONS. &mdash;
            {' '}
            <GithubOutlined />
            {' '}
            <a href="https://github.com/fmichea/flightsim-tools" target="_blank" rel="noreferrer">Sources</a>
        </ANTDFooter>
    );
};

Footer.propTypes = {};
