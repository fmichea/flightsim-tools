import { RecentWeatherValue } from 'components/metar/renderers/recentWeather/RecentWeatherValue';
import {
    TestDataRecentWeather_RERASN_Data,
    TestDataRecentWeather_RERASN_Text,
} from 'tests/data/metar/recentWeather';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(RecentWeatherValue, {
    props: { data, prettyArgs: data },
});

describe('RecentWeatherValue', () => {
    test('recent rain and snow', () => {
        const { compWrapper } = setup(TestDataRecentWeather_RERASN_Data);
        expect(compWrapper().text()).toEqual(TestDataRecentWeather_RERASN_Text);
    });
});
