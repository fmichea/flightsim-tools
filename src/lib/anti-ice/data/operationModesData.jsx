import React from 'react';

import { AntiIceOperationModes } from 'lib/anti-ice/data/operationModes';
import { createTransformedMapping } from 'lib/checklist/data/transforms';

const baseOperationModes = createTransformedMapping()([
    {
        uid: AntiIceOperationModes.GROUND_OPERATION,
        title: 'Ground Operation',
        description: (
            <>
                The following rules should be followed while taxiing after a landing, or before going into takeoff
                mode. Switch to in-flight rules once preparing for take-off.
            </>
        ),
    },
    {
        uid: AntiIceOperationModes.IN_FLIGHT_OPERATION,
        title: 'In-Flight Operation',
        description: (
            <>
                The following rules should be followed while taking-off, in flight and landing. Switch to ground
                operation once clear of runway and taxiing back to parking.
            </>
        ),
    },
]);

export const AntiIceOperationModesData = Object.freeze({
    ...baseOperationModes,
});
