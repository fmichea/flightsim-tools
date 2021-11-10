import { PrefixShort } from 'components/metar/renderers/prefix/PrefixShort';
import { PrefixTitle } from 'components/metar/renderers/prefix/PrefixTitle';
import { PrefixValue } from 'components/metar/renderers/prefix/PrefixValue';

export const PrefixRenderers = {
    renderValue: PrefixValue,
    renderTitle: PrefixTitle,
    renderShort: PrefixShort,
};
