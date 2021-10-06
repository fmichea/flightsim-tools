import PropTypes from 'prop-types';

export const RecentWeatherPropTypes = {
    data: PropTypes.shape({
        // eslint-disable-next-line react/forbid-prop-types
        args: PropTypes.array.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        phenomenaParts: PropTypes.array.isRequired,
    }).isRequired,

    // eslint-disable-next-line react/forbid-prop-types
    prettyArgs: PropTypes.any.isRequired,
};
