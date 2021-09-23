import PropTypes from 'prop-types';

export const PrevailingVisibilityPropTypes = {
    data: PropTypes.shape({
        valueP: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        directionP: PropTypes.string,
        unitP: PropTypes.string,
    }).isRequired,

    prettyArgs: PropTypes.shape({
        value: PropTypes.node.isRequired,
        direction: PropTypes.node,
    }).isRequired,
};
