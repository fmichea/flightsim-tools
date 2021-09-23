import React from 'react';
import { CloudCoverageValue } from 'components/metar/renderers/cloudCoverage/CloudCoverageValue';
import { CloudCoverageShort } from 'components/metar/renderers/cloudCoverage/CloudCoverageShort';

export const CloudCoverageRenderers = {
    renderValue: CloudCoverageValue,
    renderTitle: () => <>Cloud Coverage</>,
    renderShort: CloudCoverageShort,
};
