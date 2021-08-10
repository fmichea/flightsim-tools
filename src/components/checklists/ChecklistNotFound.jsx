import React from 'react';
import { Empty } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
