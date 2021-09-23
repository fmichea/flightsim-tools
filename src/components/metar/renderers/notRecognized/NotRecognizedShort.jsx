import React from 'react';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { NotRecognizedPropTypes } from 'components/metar/renderers/notRecognized/propTypes';

export const NotRecognizedShort = ({ data: { message } }) => (
    isNullOrUndefined(message) ? null : <>{message}</>);

NotRecognizedShort.propTypes = NotRecognizedPropTypes;
