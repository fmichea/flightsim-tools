import { styled } from 'styletron-react';

export const MonospacedFonts = 'Monaco, "DejaVu Sans Mono", "Courier New", monospace';

export const Monospaced = styled('span', {
    fontFamily: MonospacedFonts,
});
