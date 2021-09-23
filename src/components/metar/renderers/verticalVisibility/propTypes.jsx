import PropTypes from 'prop-types';

export const VerticalVisibilityPropTypes = {
    data: PropTypes.shape({
        altitudeP: PropTypes.number,
    }).isRequired,

    prettyArgs: PropTypes.shape({
        altitude: PropTypes.node,
    }).isRequired,
};
