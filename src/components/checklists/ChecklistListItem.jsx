import { styled, useStyletron, withStyle } from 'styletron-react';
import { useChecklistLeftHandedMode } from 'lib/checklist/hooks/useChecklistLeftHandedMode';
import React from 'react';
import {
    Col, Row, Switch, Tag,
} from 'antd';
import {
    useWindowWidthConditions,
    windowWidthCondition,
    windowWidthFinalCondition,
} from 'lib/hooks/useWindowDimensions';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { ChecklistListItemHelp } from 'components/checklists/ChecklistListItemHelp';
import PropTypes from 'prop-types';

const ChecklistListItemTitle = styled('div', {
    display: 'inline-block',
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: 'rgb(54,54,54)',
});

const ChecklistListItemState = styled('div', {
    display: 'inline-block',
    fontSize: '1.2em',
    fontWeight: 'bolder',
    color: 'black',
});

const ChecklistListItemWrapperBlank = styled('div', {
    padding: '1em',
    borderBottom: '1px solid rgb(45, 45, 45)',
    ':hover': {
        backgroundColor: 'rgba(108,233,255,0.1)',
    },
});

const ChecklistListItemWrapperGreen = withStyle(ChecklistListItemWrapperBlank, {
    backgroundColor: 'rgba(108,255,108,0.1)',
    ':hover': {
        backgroundColor: 'rgba(108,255,108,0.25)',
    },
});

const getChecklistItemWrapper = ({ isChecked }) => {
    if (isChecked) {
        return ChecklistListItemWrapperGreen;
    }
    return ChecklistListItemWrapperBlank;
};

export const ChecklistListItem = ({
    item: {
        uid,
        title,
        state,
        isChecked,
        toggleChecked,
        moreInfoShort,
        moreInfoLong,
        isNotImplemented,
        tags,
    },
}) => {
    const [css] = useStyletron();

    const { leftHandedMode } = useChecklistLeftHandedMode();

    const [tagsCols, titleCols, stateCols, switchCols] = useWindowWidthConditions([
        windowWidthCondition(800, [0, 13, 9, 2]),
        windowWidthCondition(1200, [2, 12, 8, 2]),
        windowWidthCondition(1500, [2, 14, 6, 2]),
        windowWidthFinalCondition([2, 16, 5, 1]),
    ]);

    let textClassName = null;
    if (isNotImplemented) {
        textClassName = css({ opacity: '30%' });
    }

    const ChecklistItemWrapper = getChecklistItemWrapper({ isChecked });

    const tagsValues = Array.from(tags)
        .filter((tag) => !tag.hidden)
        .map((tag) => <Tag key={tag.uid} className={textClassName} color={tag.color}>{tag.uid}</Tag>);

    const switchColumn = (
        <Col span={switchCols} onClick={toggleChecked}>
            <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                checked={isChecked || isNotImplemented}
                disabled={isNotImplemented}
            />
        </Col>
    );

    const tagsColumn = <Col span={tagsCols}>{tagsValues}</Col>;

    let rightColumn = null;
    let leftColumn = null;

    if (leftHandedMode) {
        leftColumn = switchColumn;
        rightColumn = tagsColumn;
    } else {
        leftColumn = tagsColumn;
        rightColumn = switchColumn;
    }

    return (
        <ChecklistItemWrapper key={uid}>
            <Row>
                {leftColumn}
                <Col span={titleCols}>
                    <ChecklistListItemTitle className={textClassName}>
                        {title}
                    </ChecklistListItemTitle>
                </Col>
                <Col span={stateCols}>
                    <ChecklistListItemState className={textClassName}>
                        {state}
                    </ChecklistListItemState>

                    <ChecklistListItemHelp
                        title={title}
                        state={state}
                        moreInfoShort={moreInfoShort}
                        moreInfoLong={moreInfoLong}
                    />
                </Col>
                {rightColumn}
            </Row>
        </ChecklistItemWrapper>
    );
};

ChecklistListItem.propTypes = {
    item: PropTypes.shape({
        uid: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        isChecked: PropTypes.bool.isRequired,
        toggleChecked: PropTypes.func.isRequired,
        moreInfoShort: PropTypes.node,
        moreInfoLong: PropTypes.node,
        isNotImplemented: PropTypes.bool.isRequired,
        tags: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
};
