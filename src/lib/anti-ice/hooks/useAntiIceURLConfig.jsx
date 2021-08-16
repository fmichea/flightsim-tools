import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { generatePath, useHistory, useParams } from 'react-router';
import { AntiIceWithNameAndOperationModeNameRoute, AntiIceWithNameRoute } from 'lib/routes';
import { useQueryParams } from 'lib/hooks/useQueryParams';
import { useMemo } from 'react';
import { pick } from 'lib/pick';

export class AntiIceURLManager {
    constructor({
        history, aircraftName, operationModeName, moisture, temperature,
    }) {
        this.history = history;
        this.aircraftName = aircraftName;
        this.operationModeName = operationModeName;
        this.moisture = moisture;
        this.temperature = temperature;
    }

    changeOperationMode(operationModeName) {
        this.pushURL(operationModeName, this.moisture, this.temperature);
    }

    changeTemperature(temperature) {
        this.pushURL(this.operationModeName, this.moisture, temperature);
    }

    changeMoisture(moisture) {
        this.pushURL(this.operationModeName, moisture, this.temperature);
    }

    pushURL(operationModeName, moisture, temperature) {
        const baseURL = this.buildURL(operationModeName);
        const urlParams = this.buildURLParams(moisture, temperature);

        const fn = this.operationModeName === operationModeName
            ? this.history.replace
            : this.history.push;

        if (urlParams !== '') {
            fn(`${baseURL}?${urlParams}`);
        } else {
            fn(baseURL);
        }
    }

    buildURL(operationModeName) {
        if (isNotNullOrUndefined(operationModeName)) {
            return generatePath(
                AntiIceWithNameAndOperationModeNameRoute,
                {
                    aircraftName: this.aircraftName,
                    operationModeName,
                },
            );
        }

        return generatePath(
            AntiIceWithNameRoute,
            {
                aircraftName: this.aircraftName,
            },
        );
    }

    // eslint-disable-next-line class-methods-use-this
    buildURLParams(moisture, temperature) {
        const queryParams = new URLSearchParams();

        if (isNotNullOrUndefined(moisture) && moisture) {
            queryParams.set('moisture', '1');
        }
        if (isNotNullOrUndefined(temperature) && temperature !== 0) {
            queryParams.set('temperature', temperature);
        }
        return queryParams.toString();
    }
}

export const useAntiIceURLConfig = () => {
    const history = useHistory();
    const queryParams = useQueryParams();
    const { aircraftName, operationModeName } = useParams();

    const [moisture, temperature] = useMemo(() => [
        queryParams.get('moisture') === '1',
        pick(queryParams.get('temperature'), 0),
    ], [queryParams]);

    const result = {
        aircraftName: pick(aircraftName),
        operationModeName: pick(operationModeName),
        moisture,
        temperature,
    };

    const antiIceURLManager = useMemo(
        () => new AntiIceURLManager({ history, ...result }),
        [history, result],
    );

    return { antiIceURLManager, ...result };
};
