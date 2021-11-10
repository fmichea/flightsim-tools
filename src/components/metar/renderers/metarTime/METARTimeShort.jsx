import React from 'react';

import { METARTimePropTypes } from 'components/metar/renderers/metarTime/propTypes';
import { getOrdinalNumber } from 'lib/numbers';

export const METARTimeShort = ({
    data: { dayOfMonthP, hour: hourP, minutes: minutesP },
    prettyArgs: { dayOfMonth, hour, minutes },
}) => (
    <>
        METAR was generated on the
        {' '}
        {getOrdinalNumber(dayOfMonthP)}
        {' '}
        day of the month
        (
        {dayOfMonth}
        ) at
        {' '}
        {hourP}
        :
        {minutesP}
        {' '}
        UTC time
        (
        {hour}
        {' '}
        {minutes}
        ).
    </>
);

METARTimeShort.propTypes = METARTimePropTypes;
