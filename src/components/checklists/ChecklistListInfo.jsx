import React from 'react';

import { Progress, Typography } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styled, useStyletron } from 'styletron-react';

import { ChecklistDataPropTypes, ChecklistURLManagerPropTypes } from 'components/checklists/propTypes';
import { ButtonWithConfirm } from 'components/lib/ButtonWithConfirm';
import { Clearfix } from 'components/lib/Clearfix';
import { DarkerGrey } from 'components/lib/colors';
import { VWSpace } from 'components/lib/spaces';
import { useChecklistLayoutConfig } from 'lib/checklist/hooks/useChecklistLayoutConfig';
import { useChecklistListInfoData } from 'lib/checklist/hooks/useChecklistListInfoData';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';

const { Title } = Typography;

const ChecklistListTitleContainer = styled('div', {
    height: '30px',
    borderBottom: `2px solid ${DarkerGrey}`,
});

const ChecklistListInfoDescription = styled('div', {
    padding: '0px 20px 10px 20px',
});

const ChecklistListProgressContainer = styled('div', {
    width: '200px',
    float: 'right',
    marginRight: '20px',
});

const titleStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
};

export const ChecklistListInfo = ({
    checklistData,
    checklistName,
    checklistListName,
    checklistURLManager,
}) => {
    const [css] = useStyletron();

    const {
        hideChecklistProgress,
    } = useChecklistLayoutConfig();

    const {
        title,
        description,
        progressPercent,
        setActiveCallback,
        resetCallback,
    } = useChecklistListInfoData({
        checklistData, checklistName, checklistListName, checklistURLManager,
    });

    return (
        <>
            <ChecklistListTitleContainer>
                <ButtonWithConfirm
                    type="danger"
                    onClick={resetCallback}
                    className={css({ float: 'right' })}
                    size="small"
                >
                    Reset
                </ButtonWithConfirm>
                {hideChecklistProgress ? null : (
                    <ChecklistListProgressContainer>
                        <Progress percent={progressPercent} size="small" />
                    </ChecklistListProgressContainer>
                )}
                <Title level={4} style={titleStyle}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Link onClick={setActiveCallback}>&para;</Link>
                    <VWSpace $width="1em" />
                    {title}
                </Title>
                <Clearfix />
            </ChecklistListTitleContainer>

            {isNullOrUndefined(description) ? null : (
                <ChecklistListInfoDescription>
                    {description}
                </ChecklistListInfoDescription>
            )}
        </>

    );
};

ChecklistListInfo.propTypes = {
    checklistData: ChecklistDataPropTypes.isRequired,
    checklistURLManager: ChecklistURLManagerPropTypes.isRequired,
    checklistName: PropTypes.string.isRequired,
    checklistListName: PropTypes.string.isRequired,
};
