import PropTypes from 'prop-types';

export const METARTimePropTypes = {
    data: PropTypes.shape({
        dayOfMonthP: PropTypes.number.isRequired,
        hour: PropTypes.string.isRequired,
        minutes: PropTypes.string.isRequired,
    }).isRequired,

    prettyArgs: PropTypes.shape({
        dayOfMonth: PropTypes.node.isRequired,
        hour: PropTypes.node.isRequired,
        minutes: PropTypes.node.isRequired,
    }).isRequired,
};
