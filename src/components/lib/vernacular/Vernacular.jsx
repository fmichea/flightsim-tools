import { withStyle } from 'styletron-react';

import { DarkRed } from 'components/lib/colors';
import { Monospaced } from 'components/lib/Monospaced';

export const Vernacular = withStyle(Monospaced, {
    color: DarkRed,
    cursor: 'help',
    borderBottom: `1px dotted ${DarkRed}`,
});
