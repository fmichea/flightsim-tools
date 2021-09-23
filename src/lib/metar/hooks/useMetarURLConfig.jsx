import { useEffect, useMemo, useState } from 'react';
import { useQueryParams } from 'lib/hooks/useQueryParams';
import { useHistory } from 'react-router';
import { MetarExplainerRoute } from 'lib/routes';
import { pick } from 'lib/pick';

export class MetarURLManager {
    // eslint-disable-next-line class-methods-use-this
    buildURL(metarData) {
        const queryParams = new URLSearchParams();
        queryParams.set('value', metarData);
        return `${MetarExplainerRoute}?${queryParams.toString()}`;
    }
}

export const useMetarURLConfig = () => {
    const queryParams = useQueryParams();
    const history = useHistory();

    const [initialValue, setInitialValue] = useState('');

    const lastValue = useMemo(
        () => pick(queryParams.get('value'), ''),
        [queryParams],
    );

    useEffect(() => {
        if (lastValue !== '') {
            setInitialValue(lastValue);
            history.replace(MetarExplainerRoute);
        }
    }, [lastValue]);

    const metarURLManager = useMemo(() => new MetarURLManager(), []);

    return { initialValue, metarURLManager };
};
