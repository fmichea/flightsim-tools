import { TrendPropTypes } from 'components/metar/renderers/trend/propTypes';
import React from 'react';

export const TrendValue = ({ prettyArgs: { value } }) => <>{value}</>;

TrendValue.propTypes = TrendPropTypes;
