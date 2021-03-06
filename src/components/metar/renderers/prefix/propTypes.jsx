import PropTypes from 'prop-types';

export const PrefixPropTypes = {
    data: PropTypes.shape({
        value: PropTypes.string.isRequired,
    }).isRequired,

    prettyArgs: PropTypes.shape({
        value: PropTypes.node.isRequired,
    }).isRequired,
};
