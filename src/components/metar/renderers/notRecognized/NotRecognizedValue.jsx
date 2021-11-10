import React from 'react';

import { NotRecognizedPropTypes } from 'components/metar/renderers/notRecognized/propTypes';

export const NotRecognizedValue = ({ data: { value } }) => <>{value}</>;

NotRecognizedValue.propTypes = NotRecognizedPropTypes;
