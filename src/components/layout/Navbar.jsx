/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { Menu } from 'antd';
import { useHistory, useLocation } from 'react-router';
import { objectMap } from 'lib/objects';
import { Checklists } from 'lib/checklist/data/checklists';
import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';
import { MetarExplainerRoute } from 'lib/routes';

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
            crj7ChecklistMenuItem,
            otherMetarExplainerMenuItem,
        },
        selectedKeys,
    } = useNavbarMenus({
        wtCJ4MenuItem: `/checklists/${Checklists.WORKINGTITLE_CJ4}`,
        wtCJ4AntiIceItem: `/anti-ice/${AntiIceAircrafts.WORKINGTITLE_CJ4}`,
        c172ChecklistMenuItem: `/checklists/${Checklists.C172_STEAM}`,
        c172G1000ChecklistMenuItem: `/checklists/${Checklists.C172_G1000}`,
        crj7ChecklistMenuItem: `/checklists/${Checklists.AEROSOFT_CRJ7}`,
        otherMetarExplainerMenuItem: MetarExplainerRoute,
    });

    return (
        <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys}>
            <Menu.SubMenu key="wt-cj4-menu" title="WorkingTitle CJ4">
                <Menu.Item {...wtCJ4MenuItem.props}>Checklist</Menu.Item>
                <Menu.Item {...wtCJ4AntiIceItem.props}>Anti-Ice</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="c172-menu" title="Cessna 172">
                <Menu.Item {...c172ChecklistMenuItem.props}>C172 (Steam Gauges) Checklist</Menu.Item>
                <Menu.Item {...c172G1000ChecklistMenuItem.props}>C172 (G1000) Checklist</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="crj7-menu" title="Aerosoft CRJ 550 / 700">
                <Menu.Item {...crj7ChecklistMenuItem.props}>Checklist</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="other" title="Other">
                <Menu.Item {...otherMetarExplainerMenuItem.props}>METAR Explainer</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
};

Navbar.propTypes = {};
