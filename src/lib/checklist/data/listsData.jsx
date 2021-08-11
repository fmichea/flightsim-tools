import React from 'react';
import { ChecklistLists } from 'lib/checklist/data/lists';
import { createMappingFunction } from 'lib/checklist/data/transforms';
import { ExternalLink } from 'components/lib/ExternalLink';

const commonListsData = createMappingFunction()([
    {
        uid: ChecklistLists.PRE_FLIGHT,
        title: 'Pre-Flight',
    },
    {
        uid: ChecklistLists.BEFORE_ENGINE_START,
        title: 'Before Engine Start',
    },
    {
        uid: ChecklistLists.ENGINE_START,
        title: 'Engine Start',
        description: (
            <>
                Engine Start procedure is described in detail in the
                {' '}
                {/* eslint-disable-next-line max-len */}
                <ExternalLink href="https://docs.google.com/document/d/1qzxPMTSQRkvau8QOi7xUqNvjx9rbww_qHlso5AT5OnI/edit#heading=h.180d15le0pjm">WorkingTitle CJ4 Guide</ExternalLink>
                {' '}
                under NORMAL PROCEDURES &gt; ENGINE START.
            </>
        ),
    },
    {
        uid: ChecklistLists.BEFORE_TAXI,
        title: 'Before Taxi',
    },
    {
        uid: ChecklistLists.TAXI,
        title: 'Taxi',
    },
    {
        uid: ChecklistLists.BEFORE_TAKEOFF,
        title: 'Before Takeoff',
    },
    {
        uid: ChecklistLists.TAKEOFF,
        title: 'Takeoff',
    },
    {
        uid: ChecklistLists.AFTER_TAKEOFF,
        title: 'After Takeoff / Climb',
    },
    {
        uid: ChecklistLists.CRUISE,
        title: 'Cruise',
    },
    {
        uid: ChecklistLists.DESCENT,
        title: 'Descent',
    },
    {
        uid: ChecklistLists.APPROACH,
        title: 'Approach',
    },
    {
        uid: ChecklistLists.BEFORE_LANDING,
        title: 'Before Landing',
    },
    {
        uid: ChecklistLists.LANDING,
        title: 'Landing',
    },
    {
        uid: ChecklistLists.ALL_ENGINES_GO_AROUND,
        title: 'All Engines Go Around',
        isEmergency: true,
    },
    {
        uid: ChecklistLists.AFTER_LANDING,
        title: 'After Landing',
    },
    {
        uid: ChecklistLists.SHUTDOWN,
        title: 'Shutdown',
    },
    {
        uid: ChecklistLists.POST_FLIGHT,
        title: 'Post-Flight',
    },
]);

export const ChecklistListsData = Object.freeze({
    ...commonListsData,
});
