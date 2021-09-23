import PropTypes from 'prop-types';

export const TemperaturesPropTypes = {
    data: PropTypes.shape({
        oatP: PropTypes.number.isRequired,
        dewPointP: PropTypes.number.isRequired,
    }).isRequired,

    prettyArgs: PropTypes.shape({
        oat: PropTypes.node,
        dewPoint: PropTypes.node,
    }).isRequired,
};
