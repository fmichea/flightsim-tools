import React from 'react';
import { RemarksPropTypes } from 'components/metar/renderers/remarks/propTypes';

export const RemarksValue = ({ prettyArgs: { rmk, remarks } }) => (
    <>
        {rmk}
        {' '}
        {remarks}
    </>
);

RemarksValue.propTypes = RemarksPropTypes;
