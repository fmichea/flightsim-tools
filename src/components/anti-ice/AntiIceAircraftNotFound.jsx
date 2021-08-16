import React from 'react';
import { Alert } from 'antd';

export const AntiIceAircraftNotFound = () => (
    <>
        <Alert
            type="error"
            message={(
                <>
                    <strong>ERROR:</strong>
                    {' '}
                    Unknown aircraft.
                </>
            )}
        />
    </>
);
