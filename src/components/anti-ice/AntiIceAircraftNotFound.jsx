import React from 'react';

import { Empty } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
