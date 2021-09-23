import React from 'react';
import { Layout } from 'antd';
import { useStyletron } from 'styletron-react';
import { GithubOutlined } from '@ant-design/icons';
import { ExternalLink } from 'components/lib/ExternalLink';

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
            <ExternalLink href="https://github.com/fmichea/flightsim-tools" noIcon>
                Sources
            </ExternalLink>
            {' '}
            or
            {' '}
            <ExternalLink href="https://github.com/fmichea/flightsim-tools/issues" noIcon>
                Report Issues
            </ExternalLink>
        </ANTDFooter>
    );
};

Footer.propTypes = {};
