import React from 'react';
import { AltimeterUnit } from 'lib/metar/enums';
import { AltimeterPropTypes } from 'components/metar/renderers/altimeter/propTypes';

const renderAltimeterUnit = (unit) => (unit === AltimeterUnit.HPA ? 'hectopascals' : 'inches of mercury');

export const AltimeterShort = ({
    data: { altimeterUnitP, valueP },
    prettyArgs: { altimeterUnit, value },
}) => (
    <>
        Altimeter setting for airport is expressed in
        {' '}
        {renderAltimeterUnit(altimeterUnitP)}
        {' '}
        (
        {altimeterUnit}
        )
        and should be set to
        {' '}
        {valueP}
        {' '}
        {altimeterUnitP}
        {' '}
        (
        {value}
        )
    </>
);

AltimeterShort.propTypes = AltimeterPropTypes;
