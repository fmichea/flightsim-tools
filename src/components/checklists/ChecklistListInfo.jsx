import { styled, useStyletron } from 'styletron-react';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { Button, Empty, Typography } from 'antd';
import { Clearfix } from 'components/lib/Clearfix';
import React from 'react';
import PropTypes from 'prop-types';

const { Title } = Typography;

const ChecklistListInfoDescription = styled('div', {
    padding: '0px 20px 10px 20px',
});

export const ChecklistListInfo = ({ checklistListData, onClick }) => {
    const [css] = useStyletron();

    if (isNullOrUndefined(checklistListData)) {
        const description = (
            <>
                Unknown checklist list with selected filters. Clear filters or select another list from menu.
            </>
        );
        return <Empty description={description} />;
    }

    return (
        <>
            <div>
                <Button
                    type="danger"
                    onClick={onClick}
                    className={css({ float: 'right' })}
                >
                    Reset
                </Button>
                <Title level={3} className={css({ marginBottom: '0px !important' })}>
                    {checklistListData.title}
                </Title>
                <Clearfix />
            </div>

            {isNullOrUndefined(checklistListData.description) ? null : (
                <ChecklistListInfoDescription>
                    {checklistListData.description}
                </ChecklistListInfoDescription>
            )}
        </>

    );
};

ChecklistListInfo.propTypes = {
    onClick: PropTypes.func.isRequired,
    checklistListData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.node,
    }),
};

ChecklistListInfo.defaultProps = {
    checklistListData: null,
};
