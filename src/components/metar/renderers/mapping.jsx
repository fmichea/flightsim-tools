import { TokenTypes } from 'lib/metar/enums';
import { NotRecognizedRenderers } from 'components/metar/renderers/notRecognized/renderers';
import { PrefixRenderers } from 'components/metar/renderers/prefix/renderers';
import { Renderers } from 'components/metar/renderers/airportIdentifier/renderers';
import { METARTimeRenderers } from 'components/metar/renderers/metarTime/renderers';
import { TemperaturesRenderers } from 'components/metar/renderers/temperatures/renderers';
import { WindRenderers } from 'components/metar/renderers/wind/renderers';
import { PrevailingVisibilityRenderers } from 'components/metar/renderers/prevailingVisibility/renderers';
import { CloudCoverageRenderers } from 'components/metar/renderers/cloudCoverage/renderers';
import { AltimeterRenderers } from 'components/metar/renderers/altimeter/renderers';
import { TrendRenderers } from 'components/metar/renderers/trend/renderers';
import { PresentWeatherRenderers } from 'components/metar/renderers/presentWeather/renderers';
import { RemarksRenderers } from 'components/metar/renderers/remarks/renderers';
import { RunwayVisualRangeRenderers } from 'components/metar/renderers/runwayVisualRange/renderers';
import { MissingDataRenderers } from 'components/metar/renderers/missingData/renderers';

export const TokenRenderers = {
    [TokenTypes.NOT_RECOGNIZED]: NotRecognizedRenderers,
    [TokenTypes.METAR_PREFIX]: PrefixRenderers,
    [TokenTypes.METAR_PREFIX_OTHER]: PrefixRenderers,
    [TokenTypes.AIRPORT_IDENTIFIER]: Renderers,
    [TokenTypes.METAR_TIME]: METARTimeRenderers,
    [TokenTypes.TEMPERATURES]: TemperaturesRenderers,
    [TokenTypes.WIND]: WindRenderers,
    [TokenTypes.PREVAILING_VISIBILITY]: PrevailingVisibilityRenderers,
    [TokenTypes.CLOUD_COVERAGE]: CloudCoverageRenderers,
    [TokenTypes.ALTIMETER_SETTING]: AltimeterRenderers,
    [TokenTypes.TREND]: TrendRenderers,
    [TokenTypes.PRESENT_WEATHER]: PresentWeatherRenderers,
    [TokenTypes.REMARKS]: RemarksRenderers,
    [TokenTypes.RUNWAY_VISUAL_RANGE]: RunwayVisualRangeRenderers,
    [TokenTypes.MISSING_DATA]: MissingDataRenderers,
};
