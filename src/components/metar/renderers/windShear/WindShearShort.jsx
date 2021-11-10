import React from 'react';

import { WindShearPropTypes } from 'components/metar/renderers/windShear/propTypes';
import { WindShearRunway } from 'lib/metar/enums';

export const renderRunway = ({ runwayP, runway }) => {
    if (runwayP === WindShearRunway.ALL_RUNWAYS) {
        return (
            <>
                all runways (
                {runway}
                )
            </>
        );
    }

    return (
        <>
            runway
            {' '}
            {runwayP}
            {' '}
            (
            {runway}
            )
        </>
    );
};

export const WindShearShort = ({ data: { runwayP }, prettyArgs: { runway } }) => (
    <>
        Wind shear reported for
        {' '}
        {renderRunway({ runwayP, runway })}
        .
    </>
);

WindShearShort.propTypes = WindShearPropTypes;
