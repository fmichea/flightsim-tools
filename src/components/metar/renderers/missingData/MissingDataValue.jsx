import React from 'react';

import { MissingDataPropTypes } from 'components/metar/renderers/missingData/propTypes';

export const MissingDataValue = ({ prettyArgs: { value } }) => <>{value}</>;

MissingDataValue.propTypes = MissingDataPropTypes;
