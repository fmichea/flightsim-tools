import React from 'react';
import { VerticalVisibilityPropTypes } from 'components/metar/renderers/verticalVisibility/propTypes';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';

export const VerticalVisibilityShort = ({
    data: { altitudeP },
    prettyArgs: { altitude },
}) => {
    if (isNullOrUndefined(altitudeP)) {
        return (
            <>
                Vertical visibility could not be assessed (
                {altitude}
                ).
            </>
        );
    }

    return (
        <>
            Vertical visibility is estimated to be
            {' '}
            {altitudeP}
            {' '}
            ft (
            {altitude}
            ).
        </>
    );
};

VerticalVisibilityShort.propTypes = VerticalVisibilityPropTypes;
