import React from 'react';

import { AltimeterPropTypes } from 'components/metar/renderers/altimeter/propTypes';
import { AltimeterSetting, AltimeterUnit } from 'lib/metar/enums';

const renderAltimeterUnit = (unit) => (unit === AltimeterUnit.HPA ? 'hectopascals' : 'inches of mercury');

const renderAltimeterValue = ({ valueP, value, altimeterUnitP }) => {
    if (valueP === AltimeterSetting.NOT_REPORTED) {
        return (
            <>
                but value could not be reported (
                {value}
                )
            </>
        );
    }

    return (
        <>
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
};

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
        {' '}
        {renderAltimeterValue({ valueP, value, altimeterUnitP })}
    </>
);

AltimeterShort.propTypes = AltimeterPropTypes;
