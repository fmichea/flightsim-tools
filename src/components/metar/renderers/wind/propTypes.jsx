import PropTypes from 'prop-types';

export const WindPropTypes = {
    data: PropTypes.shape({
        isCalm: PropTypes.bool.isRequired,
        directionP: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        fromDirectionP: PropTypes.number,
        toDirectionP: PropTypes.number,
        forceP: PropTypes.number.isRequired,
        gustsForceP: PropTypes.number,
        unitP: PropTypes.string.isRequired,
    }).isRequired,

    prettyArgs: PropTypes.shape({
        direction: PropTypes.node,
        force: PropTypes.node,
        gustsForce: PropTypes.node,
        unit: PropTypes.node,
        fromDirection: PropTypes.node,
        toDirection: PropTypes.node,
    }).isRequired,
};
