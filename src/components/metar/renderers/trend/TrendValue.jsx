import React from 'react';

import { ThickSpace } from 'components/lib/spaces';
import { TrendPropTypes } from 'components/metar/renderers/trend/propTypes';

export const TrendValue = ({ data: { args }, prettyArgs }) => {
    const prettyArgsOrdered = args.map((value, idx) => (
        <span key={`arg-${value}`}>
            {idx === 0 ? null : <ThickSpace />}
            {prettyArgs[value]}
        </span>
    ));

    return <>{prettyArgsOrdered}</>;
};

TrendValue.propTypes = TrendPropTypes;
