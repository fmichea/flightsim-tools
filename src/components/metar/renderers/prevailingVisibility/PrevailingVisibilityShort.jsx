import React from 'react';
import { Directions, PrevailingVisibility } from 'lib/metar/enums';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { PrevailingVisibilityPropTypes } from 'components/metar/renderers/prevailingVisibility/propTypes';

const renderVisibilityValue = (value, unitP) => {
    if (value === PrevailingVisibility.CAVOK) {
        return (
            <>
                at least 10 kilometers, with no clouds below 1500 meters and no significant
                weather phenomena
            </>
        );
    }

    if (value === PrevailingVisibility.TEN_K) {
        return (
            <>10 kilometers</>
        );
    }

    if (value === PrevailingVisibility.MISSING) {
        return (
            <>missing or cannot be assessed</>
        );
    }

    return (
        <>
            {value}
            {' '}
            {unitP}
        </>
    );
};

const renderDirection = ({ directionP, direction }) => {
    if (isNullOrUndefined(directionP)) {
        return null;
    }

    if (directionP === Directions.NDV) {
        return null;
    }

    return (
        <>
            {' '}
            coming from the
            {' '}
            {directionP}
            {' '}
            (
            {direction}
            )
        </>
    );
};

const renderNDV = ({ directionP, direction }) => {
    if (directionP !== Directions.NDV) {
        return null;
    }

    return (
        <>
            {' '}
            No directional information could be reported. (
            {direction}
            ).
        </>
    );
};

export const PrevailingVisibilityShort = ({
    data: { unitP, valueP, directionP },
    prettyArgs: { value, direction },
}) => (
    <>
        Horizontal visibility
        {renderDirection({ directionP, direction })}
        {' '}
        is
        {' '}
        {renderVisibilityValue(valueP, unitP)}
        {' '}
        (
        {value}
        ).
        {renderNDV({ directionP, direction })}
    </>
);

PrevailingVisibilityShort.propTypes = PrevailingVisibilityPropTypes;
