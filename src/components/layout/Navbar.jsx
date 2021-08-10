/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { Menu } from 'antd';
import { useHistory, useLocation } from 'react-router';
import { styled } from 'styletron-react';
import { objectMap } from 'lib/objectMap';

const MenuContainer = styled('div', {
    display: 'inline-block',
});

const useNavbarMenus = (mapping) => {
    const { pathname } = useLocation();
    const history = useHistory();

    const menuItems = useMemo(() => objectMap(mapping, (url) => ({
        isSelected: pathname.startsWith(url),
        props: {
            key: url,
            onClick: () => history.push(url),
        },
    })), [mapping, pathname]);

    const selectedKeys = useMemo(
        () => Object.values(menuItems)
            .filter((value) => value.isSelected)
            .map((value) => value.props.key),
        [menuItems],
    );

    return { menuItems, selectedKeys };
};

export const Navbar = () => {
    const {
        menuItems: { wtCJ4MenuItem },
        selectedKeys,
    } = useNavbarMenus({
        wtCJ4MenuItem: '/checklists/workingtitle-cj4',
    });

    return (
        <MenuContainer>
            <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys}>
                <Menu.Item {...wtCJ4MenuItem.props}>WT CJ4 Checklist</Menu.Item>
            </Menu>
        </MenuContainer>
    );
};

Navbar.propTypes = {};
