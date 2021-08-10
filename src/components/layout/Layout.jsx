import React from 'react';
import { Layout as ANTDLayout } from 'antd';
import { styled, useStyletron } from 'styletron-react';
import { Navbar } from 'components/layout/Navbar';
import { Footer } from 'components/layout/Footer';
import { HeaderLogo } from 'components/layout/HeaderLogo';
import PropTypes from 'prop-types';

const { Header, Content } = ANTDLayout;

const LayoutBackground = styled('div', {
    background: 'white',
    padding: '24px',
    minHeight: '360px',
    width: '100%',
});

export const Layout = ({ children }) => {
    const [css] = useStyletron();

    return (
        <ANTDLayout className={css({ minHeight: '100vh' })}>
            <Header>
                <HeaderLogo />

                <Navbar />
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
