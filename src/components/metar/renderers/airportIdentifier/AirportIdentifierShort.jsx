import React from 'react';
import { AirportIdentifierPropTypes } from 'components/metar/renderers/airportIdentifier/propTypes';

export const AirportIdentifierShort = ({ prettyArgs: { airportCode } }) => (
    <>
        {airportCode}
        {' '}
        is the ICAO code of the airport for which this METAR was generated.
    </>
);

AirportIdentifierShort.propTypes = AirportIdentifierPropTypes;
