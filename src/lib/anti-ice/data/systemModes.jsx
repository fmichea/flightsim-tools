const cj4IceProtectionSystemsModes = Object.freeze({
    CJ4_WING_ENG_ANTI_ICE_MODE: 'cj4-wing-eng-anti-ice-mode',
    CJ4_ENG_ONLY_ANTI_ICE_MODE: 'cj4-eng-only-anti-ice-mode',
    CJ4_TAIL_DEICE_ANTI_ICE_MODE: 'cj4-tail-deice-anti-ice-mode',
    CJ4_PITOT_STATIC_HEAT_ICE_MODE: 'cj4-pitot-static-heat-anti-ice-mode',
});

export const AntiIceSystemModes = Object.freeze({
    ...cj4IceProtectionSystemsModes,
});
