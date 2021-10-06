import PropTypes from 'prop-types';

export const WindShearPropTypes = {
    data: PropTypes.shape({
        runwayP: PropTypes.string.isRequired,
    }).isRequired,

    prettyArgs: PropTypes.shape({
        runway: PropTypes.node,
    }).isRequired,
};
