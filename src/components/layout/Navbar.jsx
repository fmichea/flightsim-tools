/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { Menu } from 'antd';
import { useHistory, useLocation } from 'react-router';
import { styled } from 'styletron-react';
import { objectMap } from 'lib/objectMap';

const MenuContainer = styled('div', {
    display: 'flex',
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
        menuItems: {
            wtCJ4MenuItem,
            wtCJ4AntiIceItem,
            c172ChecklistMenuItem,
        },
        selectedKeys,
    } = useNavbarMenus({
        wtCJ4MenuItem: '/checklists/workingtitle-cj4',
        wtCJ4AntiIceItem: '/anti-ice/workingtitle-cj4',
        c172ChecklistMenuItem: '/checklists/c172-g1000',
    });

    return (
        <MenuContainer>
            <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys}>
                <Menu.Item {...wtCJ4MenuItem.props}>WT CJ4 Checklist</Menu.Item>
                <Menu.Item {...wtCJ4AntiIceItem.props}>WT CJ4 Anti-Ice</Menu.Item>
                <Menu.Item {...c172ChecklistMenuItem.props}>C172 (G1000) Checklist</Menu.Item>
            </Menu>
        </MenuContainer>
    );
};

Navbar.propTypes = {};
