import React, { useMemo } from 'react';

import { Button, Divider, Typography } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styled } from 'styletron-react';

import { ChecklistConfigureButton } from 'components/checklists/ChecklistConfigureButton';
import { ChecklistDataPropTypes, ChecklistURLManagerPropTypes } from 'components/checklists/propTypes';
import { Clearfix } from 'components/lib/Clearfix';
import { VWSpace } from 'components/lib/spaces';
import { useDocumentTitle } from 'lib/hooks/useDocumentTitle';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';

const { Title, Text } = Typography;

const ChecklistTitleContainer = styled('div', {
    height: '45px',
});

const ChecklistTitleButtonsContainer = styled('div', { float: 'right' });

export const ChecklistInfo = ({
    checklistData,
    checklistURLManager,
    selectedFilters,
    resetFullCallback,
}) => {
    const { title, description } = checklistData;

    const resetChecklistSelectCallback = useMemo(
        () => () => checklistURLManager.changeChecklistList(null),
        [checklistURLManager],
    );

    useDocumentTitle({ title: `${title} Checklist - FlightSim Tools` });

    return (
        <>
            <ChecklistTitleContainer>
                <ChecklistTitleButtonsContainer>
                    <ChecklistConfigureButton
                        checklistData={checklistData}
                        checklistURLManager={checklistURLManager}
                        selectedFilters={selectedFilters}
                    />
                    {' '}
                    <Button type="danger" onClick={resetFullCallback}>Reset All</Button>
                </ChecklistTitleButtonsContainer>
                <Title>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Link onClick={resetChecklistSelectCallback}>&para;</Link>
                    <VWSpace $width="20px" />
                    {title}
                </Title>
                <Clearfix />
            </ChecklistTitleContainer>

            <Divider />

            {isNullOrUndefined(description) ? null : (
                <>
                    <Text>{description}</Text>
                    <Divider />
                </>
            )}
        </>
    );
};

ChecklistInfo.propTypes = {
    checklistData: ChecklistDataPropTypes.isRequired,
    checklistURLManager: ChecklistURLManagerPropTypes.isRequired,
    selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    resetFullCallback: PropTypes.func.isRequired,
};
