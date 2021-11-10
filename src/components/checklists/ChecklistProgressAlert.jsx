import React from 'react';

import { Alert } from 'antd';
import PropTypes from 'prop-types';
import { useStyletron } from 'styletron-react';

export const ChecklistProgressAlert = ({ progressPercent }) => {
    const [css] = useStyletron();

    const classNames = css({
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '1px',
        paddingBottom: '1px',
    });

    const data = progressPercent === '100'
        ? { alertType: 'success', title: 'Checklist finished.' }
        : { alertType: 'warning', title: 'Checklist not finished.' };

    return <Alert type={data.alertType} message={data.title} showIcon className={classNames} />;
};

ChecklistProgressAlert.propTypes = {
    progressPercent: PropTypes.string.isRequired,
};
