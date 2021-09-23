import PropTypes from 'prop-types';

export const NotRecognizedPropTypes = {
    data: PropTypes.shape({
        value: PropTypes.string,
        message: PropTypes.string,
    }).isRequired,
};
