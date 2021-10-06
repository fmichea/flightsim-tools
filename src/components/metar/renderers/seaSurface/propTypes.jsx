import PropTypes from 'prop-types';

export const SeaSurfacePropTypes = {
    data: PropTypes.shape({
        infoType: PropTypes.string,

        temperatureP: PropTypes.number.isRequired,
        seaStateCodeP: PropTypes.string,
        waveHeightP: PropTypes.number,
    }).isRequired,

    prettyArgs: PropTypes.shape({
        temperature: PropTypes.node,
        seaStateCode: PropTypes.node,
        waveHeight: PropTypes.node,
    }).isRequired,
};
