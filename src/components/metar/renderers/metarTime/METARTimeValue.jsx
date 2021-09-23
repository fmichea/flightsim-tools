import React from 'react';
import { ThinSpace } from 'components/lib/spaces';
import { METARTimePropTypes } from 'components/metar/renderers/metarTime/propTypes';

export const METARTimeValue = ({ prettyArgs: { dayOfMonth, hour, minutes } }) => (
    <>
        {dayOfMonth}
        <ThinSpace />
        {hour}
        <ThinSpace />
        {minutes}
        <ThinSpace />
        Z
    </>
);

METARTimeValue.propTypes = METARTimePropTypes;
