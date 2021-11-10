import React from 'react';

import { CloudCoverageShort } from 'components/metar/renderers/cloudCoverage/CloudCoverageShort';
import { CloudCoverageValue } from 'components/metar/renderers/cloudCoverage/CloudCoverageValue';

export const CloudCoverageRenderers = {
    renderValue: CloudCoverageValue,
    renderTitle: () => <>Cloud Coverage</>,
    renderShort: CloudCoverageShort,
};
