import React from 'react';

import { Layout as ANTDLayout } from 'antd';
import PropTypes from 'prop-types';
import { styled, useStyletron } from 'styletron-react';

import { Footer } from 'components/layout/Footer';
import { HeaderLogo } from 'components/layout/HeaderLogo';
import { Navbar } from 'components/layout/Navbar';
import { CenteredContentContainer } from 'components/lib/CenteredContentContainer';

const { Header, Content } = ANTDLayout;

const LayoutBackground = styled('div', {
    background: 'white',
    padding: '24px',
    minHeight: '360px',
    width: '100%',
    maxWidth: '1200px',
    margin: 'auto',
});

export const Layout = ({ children }) => {
    const [css] = useStyletron();

    return (
        <ANTDLayout className={css({ minHeight: '100vh' })}>
            <Header>
                <CenteredContentContainer>
                    <HeaderLogo />
                    <Navbar />
                </CenteredContentContainer>
            </Header>

            <Content className={css({ margin: '0 16px' })}>
                <ANTDLayout>
                    <LayoutBackground>{children}</LayoutBackground>
                </ANTDLayout>
            </Content>

            <Footer />

        </ANTDLayout>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
