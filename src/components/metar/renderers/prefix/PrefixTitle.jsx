import React from 'react';

import { PrefixPropTypes } from 'components/metar/renderers/prefix/propTypes';

export const PrefixTitle = ({ data: { value } }) => {
    if (value === 'SPECI' || value === 'METAR') {
        return <>METAR Prefix</>;
    }

    if (value === 'AUTO') {
        return <>Automated Weather Report</>;
    }

    if (value === 'COR') {
        return <>Correction</>;
    }

    return null;
};

PrefixTitle.propTypes = PrefixPropTypes;
