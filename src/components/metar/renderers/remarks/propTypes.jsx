import PropTypes from 'prop-types';

export const RemarksPropTypes = {
    prettyArgs: PropTypes.shape({
        rmk: PropTypes.node,
        remarks: PropTypes.node,
    }).isRequired,
};
