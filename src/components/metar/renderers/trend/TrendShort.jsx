import { TrendPropTypes } from 'components/metar/renderers/trend/propTypes';
import React from 'react';

export const TrendShort = ({ data: { value: valueP }, prettyArgs: { value } }) => {
    if (valueP === 'NOSIG') {
        return (
            <>
                No Significant Change is expected to occur. (
                {value}
                )
            </>
        );
    }
    return 'FIXME';
};

TrendShort.propTypes = TrendPropTypes;
