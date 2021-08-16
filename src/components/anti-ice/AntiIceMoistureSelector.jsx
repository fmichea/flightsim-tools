import { Radio } from 'antd';
import { CenteringContainer } from 'components/lib/CenteringContainer';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

export const AntiIceMoistureSelector = ({ moisture, setMoisture }) => {
    const [value, onChange] = useMemo(
        () => [
            moisture ? 'yes' : 'no',
            (event) => setMoisture(event.target.value === 'yes'),
        ],
        [moisture, setMoisture],
    );

    return (
        <CenteringContainer>
            <Radio.Group value={value} onChange={onChange}>
                <Radio.Button value="yes">Yes</Radio.Button>
                <Radio.Button value="no" danger>No</Radio.Button>
            </Radio.Group>
        </CenteringContainer>
    );
};

AntiIceMoistureSelector.propTypes = {
    moisture: PropTypes.bool.isRequired,
    setMoisture: PropTypes.func.isRequired,
};
