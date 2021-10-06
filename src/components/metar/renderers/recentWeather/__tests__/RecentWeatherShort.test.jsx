import { mountWithStore } from 'tests/lib/mountWithStore';
import { RecentWeatherShort } from 'components/metar/renderers/recentWeather/RecentWeatherShort';
import { TestDataRecentWeather_RERASN_Data } from 'tests/data/metar/recentWeather';

const setup = (data) => mountWithStore(RecentWeatherShort, {
    props: { data, prettyArgs: data },
});

describe('RecentWeatherShort', () => {
    test('recent rain and snow', () => {
        const { compWrapper } = setup(TestDataRecentWeather_RERASN_Data);
        expect(compWrapper().text()).toEqual(
            'Weather observed recently includes rain (RA) mainly, with bouts of snow (SN). '
            + 'This weather was not present at the time of observation, but is still relevant '
            + 'operationally (eg. potential for wet runway).',
        );
    });
});
