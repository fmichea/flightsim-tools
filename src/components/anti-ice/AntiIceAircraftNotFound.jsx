import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Empty } from 'antd';

export const AntiIceAircraftNotFound = ({ aircraftName }) => {
    const description = (
        <>
            Unknown aircraft &quot;
            {aircraftName}
            &quot;.
            {' '}
            <Link to="/">Go Back</Link>
            .
        </>
    );

    return <Empty description={description} />;
};

AntiIceAircraftNotFound.propTypes = {
    aircraftName: PropTypes.string.isRequired,
};
