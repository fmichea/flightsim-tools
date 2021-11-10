import React from 'react';

import { TrendPropTypes } from 'components/metar/renderers/trend/propTypes';
import { TrendType } from 'lib/metar/enums';

const renderTimeParts = ({ timeParts, prettyArgs }) => {
    const parts = timeParts.map(({ argID, timeP: { trendTimeType, hour, minutes } }, idx) => (
        <React.Fragment key={argID}>
            {idx === 0 ? null : ', '}
            {trendTimeType}
            {' '}
            {hour}
            :
            {minutes}
            {' '}
            (
            {prettyArgs[argID]}
            )
        </React.Fragment>
    ));

    return <>{parts}</>;
};

export const TrendShort = ({ data: { trendTypeP, timeParts }, prettyArgs }) => {
    if (trendTypeP === TrendType.NOSIG) {
        return (
            <>
                No Significant Change is expected to occur. (
                {prettyArgs.trendType}
                )
            </>
        );
    }

    return (
        <>
            Weather conditions are expected to
            {' '}
            {trendTypeP === TrendType.BECOMING ? null : (
                <>
                    temporarily
                    {' '}
                </>
            )}
            change (
            {prettyArgs.trendType}
            ). Change is expected
            {' '}
            {renderTimeParts({ timeParts, prettyArgs })}
            . All the following items with the same background are part of this trend change.
        </>
    );
};

TrendShort.propTypes = TrendPropTypes;
