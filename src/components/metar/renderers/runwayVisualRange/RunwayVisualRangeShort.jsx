import React from 'react';
import { RunwayVisualRangePropTypes } from 'components/metar/renderers/runwayVisualRange/propTypes';
import { RunwayVisualRangeQualifier } from 'lib/metar/enums';

const renderQualifier = ({ qualifierP, qualifier }) => {
    if (qualifierP === RunwayVisualRangeQualifier.NONE) {
        return null;
    }

    return (
        <>
            {' '}
            {qualifierP === RunwayVisualRangeQualifier.AT_LEAST ? 'at least' : 'at most'}
            {' '}
            (
            {qualifier}
            )
        </>
    );
};

export const RunwayVisualRangeShort = ({
    data: { runway: runwayP, qualifierP, distanceP },
    prettyArgs: { runway, qualifier, distance },
}) => (
    <>
        Visual range for runway
        {' '}
        {runwayP}
        {' '}
        (
        {runway}
        ) is
        {renderQualifier({ qualifierP, qualifier })}
        {' '}
        {distanceP}
        {' '}
        meters (
        {distance}
        ).
    </>
);

RunwayVisualRangeShort.propTypes = RunwayVisualRangePropTypes;
