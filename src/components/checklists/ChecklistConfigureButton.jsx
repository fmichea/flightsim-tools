import React, { useMemo } from 'react';

import { Button, List, Modal } from 'antd';
import PropTypes from 'prop-types';

import { ChecklistConfigurationSwitch } from 'components/checklists/ChecklistConfigurationSwitch';
import { ChecklistDataPropTypes, ChecklistURLManagerPropTypes } from 'components/checklists/propTypes';
import { useChecklistLayoutConfigWithTogglers } from 'lib/checklist/hooks/useChecklistLayoutConfig';
import { useBooleanToggle } from 'lib/hooks/useBooleanToggle';

const modalStyle = { maxWidth: '1000px' };

export const ChecklistConfigureButton = ({ checklistData, checklistURLManager, selectedFilters }) => {
    const { selectableFilters: filters, selectableFiltersData: filtersData } = checklistData;

    const selectedFiltersSet = useMemo(() => new Set(selectedFilters), [selectedFilters]);

    const modalVisible = useBooleanToggle(false);

    const layoutConfig = useChecklistLayoutConfigWithTogglers();

    const filterItems = useMemo(
        () => {
            const fn = (filterData) => {
                const filterUID = filterData.uid;

                const onChange = (checked) => {
                    if (checked) {
                        checklistURLManager.addFilter(filterUID);
                    } else {
                        checklistURLManager.removeFilter(filterUID);
                    }
                };

                return (
                    <ChecklistConfigurationSwitch
                        key={filterUID}
                        title={filterData.title}
                        description={filterData.description}
                        checked={selectedFiltersSet.has(filterUID)}
                        onChange={onChange}
                    />
                );
            };

            return filters
                .map(((filterName) => filtersData[filterName]))
                .map(fn);
        },
        [checklistURLManager, filters],
    );

    return (
        <>
            <Button type="primary" onClick={modalVisible.toggleOn}>Configure</Button>

            <Modal
                title="Configure"
                visible={modalVisible.value}
                onOk={modalVisible.toggleOff}
                onCancel={modalVisible.toggleOff}
                cancelButtonProps={{ style: { display: 'none' } }}
                maskClosable
                width="90vw"
                style={modalStyle}
            >
                <List header={<strong>Interface</strong>}>
                    <ChecklistConfigurationSwitch
                        title="Left Handed Mode"
                        description={
                            'Move relevant UI items to the left side of the screen for easier '
                            + 'interaction left handed.'
                        }
                        checked={layoutConfig.leftHandedMode}
                        onClick={layoutConfig.leftHandedModeToggle}
                    />

                    <ChecklistConfigurationSwitch
                        title="Hide Tags"
                        description="Hide all of the tags from the list."
                        checked={layoutConfig.hideTagsMode}
                        onClick={layoutConfig.hideTagsModeToggle}
                        disabled={!layoutConfig.hideTagsModeToggleable}
                    />

                    <ChecklistConfigurationSwitch
                        title="Hide Help"
                        description="Hide all of the help info from the list."
                        checked={layoutConfig.hideHelpMode}
                        onClick={layoutConfig.hideHelpModeToggle}
                        disabled={!layoutConfig.hideHelpModeToggleable}
                    />

                    <ChecklistConfigurationSwitch
                        title="Hide Switches"
                        description="Hide the toggleable switch from the list."
                        checked={layoutConfig.hideSwitchesMode}
                        onClick={layoutConfig.hideSwitchesModeToggle}
                        disabled={!layoutConfig.hideSwitchesModeToggleable}
                    />
                </List>

                {filterItems.length === 0 ? null : (
                    <List header={<><strong>Filters</strong></>}>
                        {filterItems}
                    </List>
                )}
            </Modal>
        </>
    );
};

ChecklistConfigureButton.propTypes = {
    checklistData: ChecklistDataPropTypes.isRequired,
    checklistURLManager: ChecklistURLManagerPropTypes.isRequired,
    selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};
