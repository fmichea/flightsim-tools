import PropTypes from 'prop-types';

export const RunwayVisualRangePropTypes = {
    data: PropTypes.shape({
        runway: PropTypes.string.isRequired,
        qualifier: PropTypes.string,

        distance: PropTypes.string.isRequired,
        distanceP: PropTypes.number.isRequired,
    }).isRequired,

    prettyArgs: PropTypes.shape({
        runway: PropTypes.node,
        qualifier: PropTypes.node,
        distance: PropTypes.node,
    }).isRequired,
};
