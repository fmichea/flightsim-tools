import React from 'react';

import { Empty } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ChecklistNotFound = ({ checklistName }) => {
    const description = (
        <>
            Unknown checklist
            {' '}
            <em>{checklistName}</em>
            .
            {' '}
            <Link to="/">Go Back</Link>
            .
        </>
    );

    return (
        <>
            <Empty description={description} />
        </>
    );
};

ChecklistNotFound.propTypes = {
    checklistName: PropTypes.string.isRequired,
};
