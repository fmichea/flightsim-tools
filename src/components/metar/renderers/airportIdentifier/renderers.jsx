import React from 'react';
import { AirportIdentifierValue } from 'components/metar/renderers/airportIdentifier/AirportIdenfitierValue';
import { AirportIdentifierShort } from 'components/metar/renderers/airportIdentifier/AirportIdentifierShort';

export const AirportIdentifierRenderers = {
    renderValue: AirportIdentifierValue,
    renderTitle: () => <>Airport ICAO Code</>,
    renderShort: AirportIdentifierShort,
};
