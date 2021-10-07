import { useEffect, useMemo, useState } from 'react';
import { useQueryParams } from 'lib/hooks/useQueryParams';
import { useHistory } from 'react-router';
import { MetarExplainerRoute } from 'lib/routes';
import { pick } from 'lib/pick';
import { isLocalServer } from 'lib/isLocalServer';

export class MetarURLManager {
    // eslint-disable-next-line class-methods-use-this
    buildURL(metarData) {
        const queryParams = new URLSearchParams();
        queryParams.set('value', metarData);
        return `${MetarExplainerRoute}?${queryParams.toString()}`;
    }
}

const defaultMETARData = () => {
    if (isLocalServer()) {
        return 'SPECI LUDO 211025Z 31015G27KT 280V350 '
            + '4000 1400SW R24/P2000 +SHRA FEW005 '
            + 'FEW010CB SCT018 BKN025 10/03 Q0995 '
            + 'RERA WS R24 W19/S4 R24/451293 BECMG '
            + 'FM1100 25035G50KT TEMPO AT1100 NSW '
            + 'BLU YLO+ RMK A02 STUFF $';
    }
    return '';
};

export const useMetarURLConfig = () => {
    const queryParams = useQueryParams();
    const history = useHistory();

    const [initialValue, setInitialValue] = useState('');

    const lastValue = useMemo(
        () => pick(queryParams.get('value'), defaultMETARData()),
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
