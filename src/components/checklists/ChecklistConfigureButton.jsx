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

    const filtersDataEnhanced = useMemo(
        () => {
            const fn = (reduceData, filterName) => {
                const filterData = filtersData[filterName];
                const filterUID = filterData.uid;

                const revExcl = (checked) => (filterData.isExclusion ? !checked : checked);

                const onChange = (checked) => {
                    if (revExcl(checked)) {
                        checklistURLManager.addFilter(filterUID);
                    } else {
                        checklistURLManager.removeFilter(filterUID);
                    }
                };

                const filterActive = selectedFiltersSet.has(filterUID);

                const filterDataEnhanced = {
                    ...filterData,

                    onChange,
                    checked: revExcl(filterActive),
                    disabled: reduceData.isTerminated,
                };

                return {
                    data: [...reduceData.data, filterDataEnhanced],
                    isTerminated: reduceData.isTerminated || (filterData.isTerminal && filterActive),
                };
            };

            return filters.reduce(fn, { data: [], isTerminated: false }).data;
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

                {filtersDataEnhanced.length === 0 ? null : (
                    <List header={<><strong>Filters</strong></>}>
                        {filtersDataEnhanced.map((filterData) => {
                            const {
                                checked, description, onChange, title, uid, disabled,
                            } = filterData;

                            return (
                                <ChecklistConfigurationSwitch
                                    key={uid}
                                    title={title}
                                    description={description}
                                    checked={checked}
                                    onChange={onChange}
                                    disabled={disabled}
                                />
                            );
                        })}
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
