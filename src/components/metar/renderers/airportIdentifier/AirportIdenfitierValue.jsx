import React from 'react';

import { AirportIdentifierPropTypes } from 'components/metar/renderers/airportIdentifier/propTypes';

export const AirportIdentifierValue = ({ prettyArgs: { airportCode } }) => <>{airportCode}</>;

AirportIdentifierValue.propTypes = AirportIdentifierPropTypes;
