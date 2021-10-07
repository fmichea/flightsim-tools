/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

export const ColorSystemsPropTypes = {
    data: PropTypes.shape({
        args: PropTypes.array.isRequired,
    }).isRequired,

    prettyArgs: PropTypes.any.isRequired,
};
