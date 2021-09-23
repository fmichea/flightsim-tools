import { ThinSpace } from 'components/lib/spaces';
import React from 'react';
import { AltimeterPropTypes } from 'components/metar/renderers/altimeter/propTypes';

export const AltimeterValue = ({ prettyArgs: { altimeterUnit, value } }) => (
    <>
        {altimeterUnit}
        <ThinSpace />
        {value}
    </>
);

AltimeterValue.propTypes = AltimeterPropTypes;
