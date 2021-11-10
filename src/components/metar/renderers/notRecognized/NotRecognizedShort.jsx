import React from 'react';

import { NotRecognizedPropTypes } from 'components/metar/renderers/notRecognized/propTypes';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';

export const NotRecognizedShort = ({ data: { message } }) => (
    isNullOrUndefined(message) ? null : <>{message}</>);

NotRecognizedShort.propTypes = NotRecognizedPropTypes;
