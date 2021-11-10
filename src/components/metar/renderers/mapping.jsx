import { AirportIdentifierRenderers } from 'components/metar/renderers/airportIdentifier/renderers';
import { AltimeterRenderers } from 'components/metar/renderers/altimeter/renderers';
import { CloudCoverageRenderers } from 'components/metar/renderers/cloudCoverage/renderers';
import { ColorSystemsRenderers } from 'components/metar/renderers/colorSystems/renderers';
import { METARTimeRenderers } from 'components/metar/renderers/metarTime/renderers';
import { MissingDataRenderers } from 'components/metar/renderers/missingData/renderers';
import { NotRecognizedRenderers } from 'components/metar/renderers/notRecognized/renderers';
import { PrefixRenderers } from 'components/metar/renderers/prefix/renderers';
import { PresentWeatherRenderers } from 'components/metar/renderers/presentWeather/renderers';
import { PrevailingVisibilityRenderers } from 'components/metar/renderers/prevailingVisibility/renderers';
import { RecentWeatherRenderers } from 'components/metar/renderers/recentWeather/renderers';
import { RemarksRenderers } from 'components/metar/renderers/remarks/renderers';
import { RunwayStateRenderers } from 'components/metar/renderers/runwayState/renderers';
import { RunwayVisualRangeRenderers } from 'components/metar/renderers/runwayVisualRange/renderers';
import { SeaSurfaceRenderers } from 'components/metar/renderers/seaSurface/renderers';
import { TemperaturesRenderers } from 'components/metar/renderers/temperatures/renderers';
import { TrendRenderers } from 'components/metar/renderers/trend/renderers';
import { VerticalVisibilityRenderers } from 'components/metar/renderers/verticalVisibility/renderers';
import { WindRenderers } from 'components/metar/renderers/wind/renderers';
import { WindShearRenderers } from 'components/metar/renderers/windShear/renderers';
import { TokenTypes } from 'lib/metar/enums';

export const TokenRenderers = {
    [TokenTypes.AIRPORT_IDENTIFIER]: AirportIdentifierRenderers,
    [TokenTypes.ALTIMETER_SETTING]: AltimeterRenderers,
    [TokenTypes.CLOUD_COVERAGE]: CloudCoverageRenderers,
    [TokenTypes.COLOR_SYSTEMS]: ColorSystemsRenderers,
    [TokenTypes.METAR_PREFIX]: PrefixRenderers,
    [TokenTypes.METAR_PREFIX_OTHER]: PrefixRenderers,
    [TokenTypes.METAR_TIME]: METARTimeRenderers,
    [TokenTypes.MISSING_DATA]: MissingDataRenderers,
    [TokenTypes.NOT_RECOGNIZED]: NotRecognizedRenderers,
    [TokenTypes.PRESENT_WEATHER]: PresentWeatherRenderers,
    [TokenTypes.PREVAILING_VISIBILITY]: PrevailingVisibilityRenderers,
    [TokenTypes.RECENT_WEATHER]: RecentWeatherRenderers,
    [TokenTypes.REMARKS]: RemarksRenderers,
    [TokenTypes.RUNWAY_STATE]: RunwayStateRenderers,
    [TokenTypes.RUNWAY_VISUAL_RANGE]: RunwayVisualRangeRenderers,
    [TokenTypes.SEA_SURFACE]: SeaSurfaceRenderers,
    [TokenTypes.TEMPERATURES]: TemperaturesRenderers,
    [TokenTypes.TREND]: TrendRenderers,
    [TokenTypes.VERTICAL_VISIBILITY]: VerticalVisibilityRenderers,
    [TokenTypes.WIND]: WindRenderers,
    [TokenTypes.WIND_SHEAR]: WindShearRenderers,
};
