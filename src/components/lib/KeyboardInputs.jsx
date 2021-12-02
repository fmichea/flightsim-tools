import React from 'react';

import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

import { LightGrey } from 'components/lib/colors';

const KeyboardInputSep = styled('span', {
    fontSize: '.8em',
    fontWeight: 'bold',
});

const KeyboardInput = styled('span', {
    backgroundColor: LightGrey,
    fontFamily: 'Monaco',
    color: '#000',
    padding: '2px 5px',
    fontSize: '.9em',
    whiteSpace: 'nowrap',
    borderRadius: '2px',
});

export const KeyboardInputs = ({ inputs }) => inputs.map((inp, idx) => (
    <React.Fragment key={inp}>
        {idx === 0 ? null : (
            <KeyboardInputSep>
                {' '}
                &gt;
                {' '}
            </KeyboardInputSep>
        )}
        <KeyboardInput>{inp}</KeyboardInput>
    </React.Fragment>
));

KeyboardInputs.propTypes = {
    inputs: PropTypes.arrayOf(PropTypes.node).isRequired,
};
