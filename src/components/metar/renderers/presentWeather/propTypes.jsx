import PropTypes from 'prop-types';

export const PresentWeatherPropTypes = {
    data: PropTypes.shape({
        // eslint-disable-next-line react/forbid-prop-types
        args: PropTypes.array.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        intensityParts: PropTypes.array.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        descriptorParts: PropTypes.array.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        phenomenaParts: PropTypes.array.isRequired,
    }).isRequired,

    // eslint-disable-next-line react/forbid-prop-types
    prettyArgs: PropTypes.any.isRequired,
};
