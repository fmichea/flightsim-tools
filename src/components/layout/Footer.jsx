import React from 'react';
import { Layout } from 'antd';
import { useStyletron } from 'styletron-react';
import { GithubOutlined } from '@ant-design/icons';
import { ExternalLink } from 'components/lib/ExternalLink';
import { useWindowDimensions } from 'lib/hooks/useWindowDimensions';

const ANTDFooter = Layout.Footer;

export const Footer = () => {
    const [css] = useStyletron();

    const { width } = useWindowDimensions();

    return (
        <ANTDFooter className={css({ textAlign: 'center' })}>
            TOOLING AVAILABLE
            {' '}
            <strong>FOR FLIGHT SIMULATION ONLY</strong>
            .
            {width < 780 ? (<br />) : ' '}
            DO NOT USE FOR REAL WORLD OPERATIONS.
            {width < 970 ? (<br />) : (
                <>
                    {' '}
                    &mdash;
                    {' '}
                </>
            )}
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
