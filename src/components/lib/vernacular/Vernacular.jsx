import { withStyle } from 'styletron-react';
import { Monospaced } from 'components/lib/Monospaced';
import { DarkRed } from 'components/lib/colors';

export const Vernacular = withStyle(Monospaced, {
    color: DarkRed,
    cursor: 'help',
    borderBottom: `1px dotted ${DarkRed}`,
});
