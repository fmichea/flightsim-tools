import PropTypes from 'prop-types';

export const CloudCoveragePropTypes = {
    data: PropTypes.shape({
        altitudeP: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        amountP: PropTypes.string.isRequired,
        cloudTypeP: PropTypes.string,
    }).isRequired,

    prettyArgs: PropTypes.shape({
        amount: PropTypes.node,
        altitude: PropTypes.node,
        cloudType: PropTypes.node,
    }).isRequired,
};
