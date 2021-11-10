import React from 'react';

import { ThickSpace } from 'components/lib/spaces';
import { ColorSystemsPropTypes } from 'components/metar/renderers/colorSystems/propTypes';

export const ColorSystemsValue = ({ data: { args }, prettyArgs }) => {
    const prettyArgsOrdered = args.map((value, idx) => (
        <React.Fragment key={value}>
            {idx === 0 ? null : <ThickSpace />}
            {prettyArgs[value]}
        </React.Fragment>
    ));

    return <>{prettyArgsOrdered}</>;
};

ColorSystemsValue.propTypes = ColorSystemsPropTypes;
