import { WindDirections } from 'lib/metar/enums';
import React from 'react';
import { ThinSpace } from 'components/lib/spaces';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { WindPropTypes } from 'components/metar/renderers/wind/propTypes';

const renderDirection = ({ directionP, direction }) => {
    if (directionP === WindDirections.VRB) {
        return (
            <>
                Wind is not coming from any particular direction (
                {direction}
                )
            </>
        );
    }

    return (
        <>
            Wind is mainly coming from
            {' '}
            {directionP}
            &deg; (
            {direction}
            )
        </>
    );
};
export const WindShort = ({
    data: {
        isCalm, directionP, fromDirectionP, toDirectionP, forceP, gustsForceP, unitP,
    },
    prettyArgs: {
        direction, force, gustsForce, unit, fromDirection, toDirection,
    },
}) => {
    if (isCalm) {
        return (
            <>
                Wind is noted as calm, with no particular direction or speed. (
                {direction}
                <ThinSpace />
                {force}
                <ThinSpace />
                {unit}
                )
            </>
        );
    }

    return (
        <>
            {renderDirection({ directionP, direction })}
            {isNullOrUndefined(fromDirection) ? null : (
                <>
                    , with variations from
                    {' '}
                    {fromDirectionP}
                    &deg; to
                    {' '}
                    {toDirectionP}
                    &deg;
                    {' '}
                    (
                    {fromDirection}
                    {' '}
                    and
                    {' '}
                    {toDirection}
                    )
                </>
            )}
            .
            It has an average speed of
            {' '}
            {forceP}
            {' '}
            {unitP}
            {' '}
            (
            {force}
            {' '}
            {unit}
            )
            {isNullOrUndefined(gustsForce) ? null : (
                <>
                    , with gusts of
                    {' '}
                    {gustsForceP}
                    {' '}
                    {unitP}
                    {' '}
                    (
                    {gustsForce}
                    {' '}
                    {unit}
                    )
                </>
            )}
            .
        </>
    );
};

WindShort.propTypes = WindPropTypes;
