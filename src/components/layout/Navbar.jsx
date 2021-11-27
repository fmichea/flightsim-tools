import React, { useMemo } from 'react';

import { Menu } from 'antd';
import { useHistory, useLocation } from 'react-router';

import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';
import { Checklists } from 'lib/checklist/data/checklists';
import { objectMap } from 'lib/objects';
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
            crjChecklistMenuItem,
            a32nxChecklistMenuItem,
            otherMetarExplainerMenuItem,
        },
        selectedKeys,
    } = useNavbarMenus({
        wtCJ4MenuItem: `/checklists/${Checklists.WORKINGTITLE_CJ4}`,
        wtCJ4AntiIceItem: `/anti-ice/${AntiIceAircrafts.WORKINGTITLE_CJ4}`,
        c172ChecklistMenuItem: `/checklists/${Checklists.C172_STEAM}`,
        c172G1000ChecklistMenuItem: `/checklists/${Checklists.C172_G1000}`,
        crjChecklistMenuItem: `/checklists/${Checklists.AEROSOFT_CRJ}`,
        a32nxChecklistMenuItem: `/checklists/${Checklists.FLYBYWIRE_A32NX}`,
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
            <Menu.SubMenu key="crj-menu" title="Aerosoft CRJ">
                <Menu.Item {...crjChecklistMenuItem.props}>Checklist</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="fbw-a32nx-menu" title="FlyByWire A32NX">
                <Menu.Item {...a32nxChecklistMenuItem.props}>Checklist</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="other" title="Other">
                <Menu.Item {...otherMetarExplainerMenuItem.props}>METAR Explainer</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
};

Navbar.propTypes = {};
