/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { Menu } from 'antd';
import { useHistory, useLocation } from 'react-router';
import { styled } from 'styletron-react';
import { objectMap } from 'lib/objectMap';
import { Checklists } from 'lib/checklist/data/checklists';
import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';

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
            c172G1000ChecklistMenuItem,
        },
        selectedKeys,
    } = useNavbarMenus({
        wtCJ4MenuItem: `/checklists/${Checklists.WORKINGTITLE_CJ4}`,
        wtCJ4AntiIceItem: `/anti-ice/${AntiIceAircrafts.WORKINGTITLE_CJ4}`,
        c172ChecklistMenuItem: `/checklists/${Checklists.C172_STEAM}`,
        c172G1000ChecklistMenuItem: `/checklists/${Checklists.C172_G1000}`,
    });

    return (
        <MenuContainer>
            <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys}>
                <Menu.SubMenu key="wt-cj4-menu" title="WorkingTitle CJ4">
                    <Menu.Item {...wtCJ4MenuItem.props}>WT CJ4 Checklist</Menu.Item>
                    <Menu.Item {...wtCJ4AntiIceItem.props}>WT CJ4 Anti-Ice</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="c172-menu" title="Cessna 172">
                    <Menu.Item {...c172ChecklistMenuItem.props}>C172 (Steam Gauges) Checklist</Menu.Item>
                    <Menu.Item {...c172G1000ChecklistMenuItem.props}>C172 (G1000) Checklist</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </MenuContainer>
    );
};

Navbar.propTypes = {};
