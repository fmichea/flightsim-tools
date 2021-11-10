import React from 'react';

import { PrefixPropTypes } from 'components/metar/renderers/prefix/propTypes';

export const PrefixValue = ({ prettyArgs: { value } }) => <>{value}</>;

PrefixValue.propTypes = PrefixPropTypes;
