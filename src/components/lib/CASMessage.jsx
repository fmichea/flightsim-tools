import React from 'react';

import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

import { pick } from 'lib/pick';

const levelToColorsMapping = {
    critical: '#ff3e3e',
    warning: '#f5cd37',
    success: '#2bc52d',
    info: '#fff',
    data: '#98f0ff',
};

const CASMessageContainer = styled('span', (props) => ({
    backgroundColor: '#1f1f1f',
    fontFamily: 'Monaco',
    color: pick(levelToColorsMapping[props.$level], levelToColorsMapping.info),
    padding: '2px 5px',
    fontSize: '.9em',
    whiteSpace: 'nowrap',
    borderRadius: '2px',
}));

export const CASMessage = ({ children, level }) => (
    <CASMessageContainer $level={level}>
        {children}
    </CASMessageContainer>
);

CASMessage.propTypes = {
    level: PropTypes.oneOf(Object.keys(levelToColorsMapping)),
    children: PropTypes.node.isRequired,
};

CASMessage.defaultProps = {
    level: null,
};
