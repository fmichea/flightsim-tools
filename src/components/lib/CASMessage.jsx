import React from 'react';
import { styled } from 'styletron-react';
import { pick } from 'lib/pick';

const levelToColorsMapping = {
    critical: '#ff0000',
    warning: '#f5cd37',
    info: '#2bc52d',
};

const CASMessageContainer = styled('span', (props) => ({
    backgroundColor: '#1f1f1f',
    fontFamily: 'Monaco',
    color: pick(levelToColorsMapping[props.$level], '#fff'),
    padding: '2px 5px',
    fontSize: '.9em',
    whiteSpace: 'nowrap',
    borderRadius: '2px',
}));

export const CASMessage = ({ children, level }) => <CASMessageContainer $level={level}>{children}</CASMessageContainer>;
