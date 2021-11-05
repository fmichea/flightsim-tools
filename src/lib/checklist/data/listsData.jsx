import { ChecklistLists } from 'lib/checklist/data/lists';
import { createMappingFunction } from 'lib/checklist/data/transforms';

const commonListsData = createMappingFunction()([
    {
        uid: ChecklistLists.PRE_FLIGHT,
        title: 'Pre-Flight',
    },
    {
        uid: ChecklistLists.CABIN_INSPECTION,
        title: 'Cabin Inspection',
    },
    {
        uid: ChecklistLists.SAFETY,
        title: 'Safety',
    },
    {
        uid: ChecklistLists.ORIGINATING,
        title: 'Originating',
    },
    {
        uid: ChecklistLists.BEFORE_ENGINE_START,
        title: 'Before Engine Start',
    },
    {
        uid: ChecklistLists.ENGINE_START,
        title: 'Engine Start',
    },
    {
        uid: ChecklistLists.AFTER_ENGINE_START,
        title: 'After Engine Start',
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
        uid: ChecklistLists.RUN_UP,
        title: 'Run-Up',
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
        uid: ChecklistLists.AFTER_TAKEOFF_CLIMB,
        title: 'After Takeoff / Climb',
    },
    {
        uid: ChecklistLists.CLIMB,
        title: 'Climb',
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
        uid: ChecklistLists.PARKING,
        title: 'Parking',
    },
    {
        uid: ChecklistLists.SECURING,
        title: 'Securing',
    },
    {
        uid: ChecklistLists.SHUTDOWN,
        title: 'Shutdown',
    },
    {
        uid: ChecklistLists.POST_FLIGHT,
        title: 'Post-Flight',
    },
    {
        uid: ChecklistLists.TERMINATING,
        title: 'Terminating',
    },
]);

export const ChecklistListsData = Object.freeze({
    ...commonListsData,
});
