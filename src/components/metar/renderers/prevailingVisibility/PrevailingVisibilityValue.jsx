import React from 'react';

import { ThinSpace } from 'components/lib/spaces';
import { PrevailingVisibilityPropTypes } from 'components/metar/renderers/prevailingVisibility/propTypes';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { PrevailingVisibilityUnit } from 'lib/metar/enums';

export const PrevailingVisibilityValue = ({
    data: { unitP },
    prettyArgs: { value, direction },
}) => (
    <>
        {value}
        {isNullOrUndefined(direction) ? null : (
            <>
                <ThinSpace />
                {direction}
            </>
        )}
        {unitP === PrevailingVisibilityUnit.MILES ? (
            <>
                <ThinSpace />
                SM
            </>
        ) : null}
        {unitP === PrevailingVisibilityUnit.KILOMETERS ? (
            <>
                <ThinSpace />
                KM
            </>
        ) : null}
    </>
);

PrevailingVisibilityValue.propTypes = PrevailingVisibilityPropTypes;
