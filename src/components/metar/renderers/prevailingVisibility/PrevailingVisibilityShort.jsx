import React from 'react';

import { PrevailingVisibilityPropTypes } from 'components/metar/renderers/prevailingVisibility/propTypes';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { Directions, PrevailingVisibility } from 'lib/metar/enums';

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

    if (value === PrevailingVisibility.LESS_THAN_QUARTER_MILE) {
        return (
            <>less than a quarter of a mile</>
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
