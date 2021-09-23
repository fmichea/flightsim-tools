import PropTypes from 'prop-types';

export const MissingDataPropTypes = {
    data: PropTypes.shape({
        value: PropTypes.string,
    }).isRequired,

    prettyArgs: PropTypes.shape({
        value: PropTypes.node,
    }).isRequired,
};
