const commonLists = Object.freeze({
    PRE_FLIGHT: 'pre-flight',
    BEFORE_ENGINE_START: 'before-engine-start',
    ENGINE_START: 'engine-start',
    BEFORE_TAXI: 'before-taxi',
    TAXI: 'taxi',
    BEFORE_TAKEOFF: 'before-takeoff',
    TAKEOFF: 'takeoff',
    AFTER_TAKEOFF: 'after-takeoff',
    CRUISE: 'cruise',
    DESCENT: 'descent',
    APPROACH: 'approach',
    BEFORE_LANDING: 'before-landing',
    LANDING: 'landing',
    AFTER_LANDING: 'after-landing',
    ALL_ENGINES_GO_AROUND: 'all-engines-go-around',
    SHUTDOWN: 'shutdown',
    POST_FLIGHT: 'post-flight',
});

export const ChecklistLists = Object.freeze({
    ...commonLists,
});
