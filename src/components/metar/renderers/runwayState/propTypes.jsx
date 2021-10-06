import PropTypes from 'prop-types';

export const RunwayStatePropTypes = {
    data: PropTypes.shape({
        runwayP: PropTypes.number,
        depositP: PropTypes.string,
        extentP: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        depthP: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        frictionP: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,

    prettyArgs: PropTypes.shape({
        runway: PropTypes.node,
        deposit: PropTypes.node,
        extent: PropTypes.node,
        depth: PropTypes.node,
        friction: PropTypes.node,
    }).isRequired,
};
