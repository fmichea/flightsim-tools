import React from 'react';

import { MissingDataPropTypes } from 'components/metar/renderers/missingData/propTypes';

export const MissingDataShort = ({ prettyArgs: { value } }) => (
    <>
        Information was missing or could not be reported by automated system. (
        {value}
        ).
    </>
);

MissingDataShort.propTypes = MissingDataPropTypes;
