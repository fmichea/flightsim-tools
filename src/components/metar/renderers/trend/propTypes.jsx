/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

export const TrendPropTypes = {
    data: PropTypes.shape({
        trendTypeP: PropTypes.string.isRequired,
        args: PropTypes.array.isRequired,
        timeParts: PropTypes.array.isRequired,
    }).isRequired,

    prettyArgs: PropTypes.any.isRequired,
};
