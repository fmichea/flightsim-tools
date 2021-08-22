import { mountWithStore } from 'tests/lib/mountWithStore';
import { AntiIce } from 'components/anti-ice/AntiIce';
import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';
import { AntiIceWithNameRoute } from 'lib/routes';

const setup = ({ initialRoute, routePath } = {}) => mountWithStore(AntiIce, { initialRoute, routePath });

describe('AntiIce', () => {
    test('render the whole thing and check a few components are found', () => {
        const { compWrapper } = setup({
            initialRoute: `/anti-ice/${AntiIceAircrafts.WT_CJ4}`,
            routePath: AntiIceWithNameRoute,
        });

        expect(compWrapper().find('AntiIceDisplay')).toHaveLength(1);
        expect(compWrapper().find('AntiIceAircraftNotFound')).toHaveLength(0);
    });

    test('unknown aircraft', () => {
        const { compWrapper } = setup({
            initialRoute: '/anti-ice/wedwedewd',
            routePath: AntiIceWithNameRoute,
        });

        expect(compWrapper().find('AntiIceDisplay')).toHaveLength(0);
        expect(compWrapper().find('AntiIceAircraftNotFound')).toHaveLength(1);
    });
});
