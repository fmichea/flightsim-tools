import React from 'react';

import { ThinSpace } from 'components/lib/spaces';
import { AltimeterPropTypes } from 'components/metar/renderers/altimeter/propTypes';

export const AltimeterValue = ({ prettyArgs: { altimeterUnit, value } }) => (
    <>
        {altimeterUnit}
        <ThinSpace />
        {value}
    </>
);

AltimeterValue.propTypes = AltimeterPropTypes;
