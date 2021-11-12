import { AntiIceURLManager, useAntiIceURLConfig } from 'lib/anti-ice/hooks/useAntiIceURLConfig';
import { AntiIceWithNameAndOperationModeNameRoute, AntiIceWithNameRoute } from 'lib/routes';
import { mountHookWithStore } from 'tests/lib/mountHookWithStore';

const setup = (routePath, route) => mountHookWithStore(
    useAntiIceURLConfig,
    {
        initialRoute: route,
        routePath,
    },
);

describe('useAntiIceURLConfig', () => {
    test('aicraftName only is provided', () => {
        const { getCurrentHookResult } = setup(
            AntiIceWithNameRoute,
            '/anti-ice/foo',
        );

        const hookResult = getCurrentHookResult();

        expect(hookResult).toEqual({
            aircraftName: 'foo',
            operationModeName: null,
            moisture: false,
            temperature: 0,
            antiIceURLManager: expect.any(AntiIceURLManager),
        });
    });

    test('aircraftName and operationModeName provided, plus params', () => {
        const { getCurrentHookResult } = setup(
            AntiIceWithNameAndOperationModeNameRoute,
            '/anti-ice/foo/bar?temperature=-12&moisture=1',
        );

        const hookResult = getCurrentHookResult();

        expect(hookResult).toEqual({
            aircraftName: 'foo',
            operationModeName: 'bar',
            moisture: true,
            temperature: '-12',
            antiIceURLManager: expect.any(AntiIceURLManager),
        });
    });
});

describe('AntiIceURLManager', () => {
    test('history gets changed depending on function used', () => {
        const mockHistory = {
            push: jest.fn(),
            replace: jest.fn(),
        };

        const antiIceURLManager1 = new AntiIceURLManager({
            history: mockHistory,
            aircraftName: 'foo',
            operationModeName: null,
            moisture: false,
            temperature: '10',
        });

        antiIceURLManager1.changeOperationMode('wedwed');
        antiIceURLManager1.changeMoisture(true);
        antiIceURLManager1.changeTemperature(-32);

        const antiIceURLManager2 = new AntiIceURLManager({
            history: mockHistory,
            aircraftName: 'foo',
            operationModeName: 'blah',
            moisture: true,
            temperature: 0,
        });

        antiIceURLManager2.changeMoisture(false);
        antiIceURLManager2.changeOperationMode('op2');

        const [pushCalls, replaceCalls] = [
            mockHistory.push.mock.calls,
            mockHistory.replace.mock.calls,
        ];

        expect(pushCalls).toHaveLength(2);
        expect(pushCalls[0][0]).toEqual('/anti-ice/foo/wedwed?temperature=10');
        expect(pushCalls[1][0]).toEqual('/anti-ice/foo/op2?moisture=1');

        expect(replaceCalls).toHaveLength(3);
        expect(replaceCalls[0][0]).toEqual('/anti-ice/foo?moisture=1&temperature=10');
        expect(replaceCalls[1][0]).toEqual('/anti-ice/foo?temperature=-32');
        expect(replaceCalls[2][0]).toEqual('/anti-ice/foo/blah');
    });
});
