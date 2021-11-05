import PropTypes from 'prop-types';

export const AltimeterPropTypes = {
    data: PropTypes.shape({
        altimeterUnitP: PropTypes.string,
        valueP: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }).isRequired,

    prettyArgs: PropTypes.shape({
        altimeterUnit: PropTypes.node,
        value: PropTypes.node,
    }).isRequired,
};
