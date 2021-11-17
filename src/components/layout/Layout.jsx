import React from 'react';

import { Layout as ANTDLayout } from 'antd';
import PropTypes from 'prop-types';
import { styled, useStyletron } from 'styletron-react';

import { Footer } from 'components/layout/Footer';
import { HeaderLogo } from 'components/layout/HeaderLogo';
import { Navbar } from 'components/layout/Navbar';
import { CenteredContentContainer } from 'components/lib/CenteredContentContainer';
import { useWindowDimensions } from 'lib/hooks/useWindowDimensions';

const { Header, Content } = ANTDLayout;

const LayoutBackground = styled('div', (props) => ({
    background: 'white',
    padding: props.$smallScreen ? '0' : '12px',
    minHeight: '360px',
    width: '100%',
    maxWidth: '1200px',
    margin: 'auto',
}));

const contentStyle = {
    marginBottom: '0',
    marginTop: '0',
    marginLeft: '16px',
    marginRight: '16px',
};

const contentStyleSmall = {
    ...contentStyle,

    marginLeft: '0',
    marginRight: '0',
};

export const Layout = ({ children }) => {
    const [css] = useStyletron();

    const { width } = useWindowDimensions();
    const smallScreen = width < 500;

    return (
        <ANTDLayout className={css({ minHeight: '100vh' })}>
            <Header>
                <CenteredContentContainer>
                    <HeaderLogo />
                    <Navbar />
                </CenteredContentContainer>
            </Header>

            <Content className={css(smallScreen ? contentStyleSmall : contentStyle)}>
                <ANTDLayout>
                    <LayoutBackground $smallScreen={smallScreen}>
                        {children}
                    </LayoutBackground>
                </ANTDLayout>
            </Content>

            <Footer />

        </ANTDLayout>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
