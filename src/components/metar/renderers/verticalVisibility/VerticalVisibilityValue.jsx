import { VerticalVisibilityPropTypes } from 'components/metar/renderers/verticalVisibility/propTypes';
import React from 'react';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { ThinSpace } from 'components/lib/spaces';

export const VerticalVisibilityValue = ({
    prettyArgs: { altitude },
}) => (
    <>
        VV
        <ThinSpace />
        {altitude}
    </>
);
VerticalVisibilityValue.propTypes = VerticalVisibilityPropTypes;
