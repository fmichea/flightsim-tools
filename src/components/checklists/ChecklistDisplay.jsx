import React from 'react';
import {
    Button, Col, Divider, Menu, Modal, Row, Typography,
} from 'antd';
import { styled, useStyletron } from 'styletron-react';
import { Clearfix } from 'components/lib/Clearfix';
import { useChecklist } from 'lib/checklist/hooks/useChecklist';
import { FullscreenExitOutlined, FullscreenOutlined, UnorderedListOutlined } from '@ant-design/icons';
import {
    useWindowWidthConditions,
    windowWidthCondition,
    windowWidthFinalCondition,
} from 'lib/hooks/useWindowDimensions';
import { useChecklistFullscreenMode } from 'lib/checklist/hooks/useChecklistFullscreenMode';
import { ChecklistMenuTitle } from 'components/checklists/ChecklistMenuTitle';
import { ChecklistListItem } from 'components/checklists/ChecklistListItem';
import { ChecklistConfigureButton } from 'components/checklists/ChecklistConfigureButton';
import { useBooleanToggle } from 'lib/hooks/useBooleanToggle';
import { ChecklistNextListButton } from 'components/checklists/ChecklistNextListButton';
import { useDocumentTitle } from 'lib/hooks/useDocumentTitle';
import PropTypes from 'prop-types';
import { ChecklistListInfo } from 'components/checklists/ChecklistListInfo';
import { BlockLockscreen } from 'components/lib/BlockLockscreen';

const { Title, Text } = Typography;

const OverlayButtonsWrapper = styled('div', {
    position: 'fixed',
    bottom: '40px',
    left: '40px',
    height: '50px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '30px',
    zIndex: '20',
});

const OverlayButton = styled('div', {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    borderRadius: '25px',
    paddingLeft: '10px',
    paddingTop: '1px',
    marginRight: '10px',
});

export const ChecklistDisplay = ({
    checklistName,
    checklistListName,
    selectedFilters,
    checklistURLManager,
}) => {
    const [css] = useStyletron();

    const {
        selectedChecklistListName,
        checklistData,
        checklistListData,
        menuItems,
        items,
        nextLists,
        resetCallback,
        resetFullCallback,
    } = useChecklist({
        checklistName, checklistListName, selectedFilters, checklistURLManager,
    });

    useDocumentTitle({ title: `${checklistData.title} Checklist - FlightSim Tools` });

    const menuVisible = useBooleanToggle(false);

    const checklistMenuItems = menuItems.map((value) => (
        <Menu.Item key={value.key} onClick={() => { menuVisible.toggleOff(); value.selectMenu(); }}>
            <ChecklistMenuTitle
                title={value.title}
                isEmergency={value.isEmergency}
                percentProgress={value.progressPercent}
            />
        </Menu.Item>
    ));

    const [menuCols, checklistCols] = useWindowWidthConditions([
        windowWidthCondition(1000, [0, 24]),
        windowWidthCondition(1200, [7, 17]),
        windowWidthCondition(1450, [6, 18]),
        windowWidthCondition(1800, [5, 19]),
        windowWidthFinalCondition([4, 20]),
    ]);

    const { fullscreenMode, toggleFullscreenModeHandler } = useChecklistFullscreenMode();

    return (
        <>
            <BlockLockscreen />

            <Modal
                title="List Selector"
                visible={menuVisible.value}
                onOk={menuVisible.toggleOff}
                onCancel={menuVisible.toggleOff}
                cancelButtonProps={{ style: { display: 'none' } }}
                maskClosable
                width="70vw"
            >
                <Menu
                    mode="inline"
                    className={css({ maxHeight: '60vh', overflowY: 'scroll' })}
                    selectedKeys={[selectedChecklistListName]}
                >
                    {checklistMenuItems}
                </Menu>

                <div className={css({
                    backgroundColor: 'rgb(128,128,128)',
                    fontSize: '.75em',
                    color: 'white',
                    paddingLeft: '5px',
                })}
                >
                    This list may contain more items. Scroll to reveal them (will be fixed in future).
                </div>
            </Modal>

            {menuVisible.value ? null : (
                <OverlayButtonsWrapper>
                    {menuCols !== 0 ? null : (
                        // eslint-disable-next-line max-len
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
                        <OverlayButton
                            role="button"
                            className={css({ backgroundColor: '#237ad0' })}
                            onClick={menuVisible.toggleOn}
                        >
                            <UnorderedListOutlined />
                        </OverlayButton>
                    )}

                    {!fullscreenMode ? null : (
                        // eslint-disable-next-line max-len
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
                        <OverlayButton
                            role="button"
                            className={css({ backgroundColor: '#5d5d5d' })}
                            onClick={toggleFullscreenModeHandler}
                        >
                            <FullscreenExitOutlined />
                        </OverlayButton>
                    )}
                </OverlayButtonsWrapper>
            )}

            {fullscreenMode ? null : (
                <>
                    <div className={css({ height: '45px' })}>
                        <div className={css({ float: 'right' })}>
                            <Button
                                className={css({ fontWeight: 'bold' })}
                                onClick={toggleFullscreenModeHandler}
                            >
                                <FullscreenOutlined />
                            </Button>
                            {' '}
                            <ChecklistConfigureButton
                                checklistURLManager={checklistURLManager}
                                filters={checklistData.selectableFilters}
                                selectedFilters={selectedFilters}
                            />
                            {' '}
                            <Button type="danger" onClick={resetFullCallback}>Reset All</Button>
                        </div>
                        <Title>
                            {checklistData.title}
                        </Title>
                        <Clearfix />
                    </div>

                    <>
                        <Text>{checklistData.description}</Text>
                        <Divider />
                    </>
                </>
            )}

            <Row>
                <Col span={menuCols}>
                    <Menu
                        mode="inline"
                        className={css({ height: '100%' })}
                        selectedKeys={[selectedChecklistListName]}
                    >
                        {checklistMenuItems}
                    </Menu>

                </Col>
                <Col span={checklistCols}>
                    <div style={{ padding: '0 20px' }}>
                        <ChecklistListInfo onClick={resetCallback} checklistListData={checklistListData} />

                        {items.map((item) => <ChecklistListItem key={item.uid} item={item} />)}

                        {nextLists.length === 0 ? null : (
                            <div style={{ padding: '0 20px' }}>
                                {nextLists.map((value) => (
                                    <ChecklistNextListButton
                                        key={value.uid}
                                        title={value.title}
                                        isEmergency={value.isEmergency}
                                        onClick={value.selectMenu}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </>
    );
};

ChecklistDisplay.propTypes = {
    checklistName: PropTypes.string.isRequired,
    checklistListName: PropTypes.string,
    selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    checklistURLManager: PropTypes.object.isRequired,
};

ChecklistDisplay.defaultProps = {
    checklistListName: null,
};
