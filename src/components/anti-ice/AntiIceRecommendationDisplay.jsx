import React, { useMemo } from 'react';

import { Table, Tag, Typography } from 'antd';
import PropTypes from 'prop-types';
import { styled, useStyletron } from 'styletron-react';

import { AntiIceTableFootnotes } from 'components/anti-ice/AntiIceTableFootnotes';
import { CenteringContainer } from 'components/lib/CenteringContainer';
import { NotImplementedContainer } from 'components/lib/NotImplementedContainer';
import { AntiIceModeStates } from 'lib/anti-ice/data/modeStates';
import { AntiIceModeStatesData } from 'lib/anti-ice/data/modeStatesData';
import { AntiIceTags } from 'lib/anti-ice/data/tags';
import { pick } from 'lib/pick';

const { Title } = Typography;

const ImageContainer = styled('div', {
    width: '800px',
    height: '320px',
    backgroundSize: '100%',
});

const IPSColumn = ({ title, isNotImplemented }) => {
    let result = title;
    if (isNotImplemented) {
        result = (
            <NotImplementedContainer>
                {result}
                {' '}
                <sup>3</sup>
            </NotImplementedContainer>
        );
    }
    return result;
};

IPSColumn.propTypes = {
    title: PropTypes.string.isRequired,
    isNotImplemented: PropTypes.bool.isRequired,
};

const StateColumn = ({ state, isNotImplemented, isNonDefault }) => {
    let result = (
        <Tag color={state.color}>
            {state.label}
            {state.isOptional !== true ? null : (
                <>
                    {' '}
                    <sup>1</sup>
                </>
            )}
            {isNonDefault !== true ? null : (
                <>
                    {' '}
                    <sup>2</sup>
                </>
            )}
        </Tag>
    );
    if (isNotImplemented) {
        result = (
            <NotImplementedContainer>
                {result}
            </NotImplementedContainer>
        );
    }
    return <CenteringContainer>{result}</CenteringContainer>;
};

StateColumn.propTypes = {
    state: PropTypes.shape({
        color: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        isOptional: PropTypes.bool,
    }).isRequired,
    isNotImplemented: PropTypes.bool.isRequired,
    isNonDefault: PropTypes.bool.isRequired,
};

const columns = [
    {
        title: 'Ice Protection System',
        width: '90%',
        render: IPSColumn,
    },
    {
        title: 'State',
        width: '10%',
        render: StateColumn,
    },
];

export const AntiIceRecommendationDisplay = ({
    currentConfiguration,
    antiIceAircraftData,
    recommendations,
}) => {
    const [css] = useStyletron();

    const { states: defaultStates, optionalModesMapping } = recommendations;

    const { states, image } = useMemo(
        () => {
            if (currentConfiguration === 'default') {
                return {
                    states: recommendations.states,
                    image: recommendations.image,
                };
            }

            const recs = pick(optionalModesMapping[currentConfiguration], {
                states: {},
                image: { path: '' },
            });
            return { states: recs.states, image: recs.image };
        },
        [currentConfiguration, recommendations],
    );

    const data = antiIceAircraftData.modesOrderData.map(
        (value) => {
            const state = pick(states[value.uid], AntiIceModeStates.OFF);
            const defaultState = pick(defaultStates[value.uid], AntiIceModeStates.OFF);

            return {
                key: value.title,
                title: value.title,
                isNotImplemented: value.tagsSet.has(AntiIceTags.NOT_IMPLEMENTED),
                isNonDefault: state !== defaultState,
                state: AntiIceModeStatesData[state],
            };
        },
    );

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                size="small"
                pagination={{ position: ['none', 'none'] }}
            />

            <AntiIceTableFootnotes />

            <Title level={5}>
                Actual configuration as shown on tilt panel in MSFS:
            </Title>

            <CenteringContainer>
                <ImageContainer
                    className={css({
                        backgroundImage: `url(${process.env.PUBLIC_URL}/${image.path})`,
                    })}
                />
            </CenteringContainer>
        </>
    );
};

AntiIceRecommendationDisplay.propTypes = {
    currentConfiguration: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    antiIceAircraftData: PropTypes.any.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    recommendations: PropTypes.any.isRequired,
};
