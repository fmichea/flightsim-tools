import React from 'react';
import { ThickSpace } from 'components/lib/spaces';
import { WindShearPropTypes } from 'components/metar/renderers/windShear/propTypes';

export const WindShearValue = ({ prettyArgs: { runway } }) => (
    <>
        WS
        <ThickSpace />
        {runway}
    </>
);

WindShearValue.propTypes = WindShearPropTypes;
