import React, { useMemo } from 'react';
import { useChecklistLeftHandedMode } from 'lib/checklist/hooks/useChecklistLeftHandedMode';
import { ChecklistConfigurationSwitch } from 'components/checklists/ChecklistConfigurationSwitch';
import { ChecklistFiltersData } from 'lib/checklist/data/filtersData';
import { Button, List, Modal } from 'antd';
import PropTypes from 'prop-types';
import { useBooleanToggle } from 'lib/hooks/useBooleanToggle';

export const ChecklistConfigureButton = ({ checklistURLManager, filters, selectedFilters }) => {
    const selectedFiltersSet = useMemo(() => new Set(selectedFilters), [selectedFilters]);

    const modalVisible = useBooleanToggle(false);

    const { leftHandedMode, toggleLeftHandedModeHandler } = useChecklistLeftHandedMode();

    const filterItems = useMemo(() => {
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
            .map(((filterName) => ChecklistFiltersData[filterName]))
            .map(fn);
    }, [checklistURLManager, filters]);

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
                width="50vw"
            >
                <List header={<strong>Interface</strong>}>
                    <ChecklistConfigurationSwitch
                        title="Left Handed Mode"
                        description="Move all checkmarks to the left side of the screen."
                        checked={leftHandedMode}
                        onClick={toggleLeftHandedModeHandler}
                    />
                </List>

                <List header={<><strong>Filters</strong></>}>
                    {filterItems}
                </List>
            </Modal>
        </>
    );
};

ChecklistConfigureButton.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    checklistURLManager: PropTypes.object.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};
