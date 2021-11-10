import React from 'react';

import { ThinSpace } from 'components/lib/spaces';
import { VerticalVisibilityPropTypes } from 'components/metar/renderers/verticalVisibility/propTypes';

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
