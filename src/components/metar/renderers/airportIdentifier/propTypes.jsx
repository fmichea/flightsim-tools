import PropTypes from 'prop-types';

export const AirportIdentifierPropTypes = {
    prettyArgs: PropTypes.shape({
        airportCode: PropTypes.node.isRequired,
    }).isRequired,
};
