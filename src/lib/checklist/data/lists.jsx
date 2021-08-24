const commonLists = Object.freeze({
    PRE_FLIGHT: 'pre-flight',
    BEFORE_ENGINE_START: 'before-engine-start',
    ENGINE_START: 'engine-start',
    AFTER_ENGINE_START: 'after-engine-start',
    BEFORE_TAXI: 'before-taxi',
    TAXI: 'taxi',
    RUN_UP: 'run-up',
    BEFORE_TAKEOFF: 'before-takeoff',
    TAKEOFF: 'takeoff',
    AFTER_TAKEOFF_CLIMB: 'after-takeoff-climb',
    CLIMB: 'climb',
    CRUISE: 'cruise',
    DESCENT: 'descent',
    APPROACH: 'approach',
    BEFORE_LANDING: 'before-landing',
    LANDING: 'landing',
    AFTER_LANDING: 'after-landing',
    ALL_ENGINES_GO_AROUND: 'all-engines-go-around',
    PARKING: 'parking',
    SECURING: 'securing',
    SHUTDOWN: 'shutdown',
    POST_FLIGHT: 'post-flight',
});

export const ChecklistLists = Object.freeze({
    ...commonLists,
});
