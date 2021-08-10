import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useStyletron } from 'styletron-react';

export const ChecklistNextListButton = ({ title, isEmergency, onClick }) => {
    const [css] = useStyletron();

    const classNames = css({
        fontWeight: 'bold',
        marginTop: '15px',
    });

    const buttonType = isEmergency ? 'danger' : 'primary';

    return (
        <Button
            className={classNames}
            size="large"
            type={buttonType}
            onClick={onClick}
            block
        >
            Next:
            {' '}
            {title}
        </Button>
    );
};

ChecklistNextListButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isEmergency: PropTypes.bool,
};

ChecklistNextListButton.defaultProps = {
    isEmergency: false,
};
