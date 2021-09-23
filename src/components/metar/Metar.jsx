import React, { useEffect, useMemo, useState } from 'react';
import {
    Button, Col, Form, Input, List, Row, Typography, Alert, notification,
} from 'antd';
import { styled, useStyletron, withStyle } from 'styletron-react';
import { parseMETAR } from 'lib/metar/parser';
import { Monospaced } from 'components/lib/Monospaced';
import { isNullOrUndefined } from 'lib/isNullOrUndefined';
import { pick } from 'lib/pick';
import { objectMap } from 'lib/objectMap';
import { ExternalLink } from 'components/lib/ExternalLink';
import PropTypes from 'prop-types';
import { TokenRenderers } from 'components/metar/renderers/mapping';
import { CenteredContentContainer } from 'components/lib/CenteredContentContainer';
import { useMetarURLConfig } from 'lib/metar/hooks/useMetarURLConfig';
import { VerticalSpace, VWSpace } from 'components/lib/spaces';
import { useLocation } from 'react-router';
import { getFullBaseURL } from 'lib/getFullBaseURL';

const { Title } = Typography;

const METARDataValueContainer = styled('div', {
    display: 'flex',
    alignItems: 'center', /* Vertical center alignment */
    justifyContent: 'center', /* Horizontal center alignment */
    height: '100%',
    padding: '4px',
});

const METARDataValue = withStyle(Monospaced, {
    fontSize: '1.2em',
    fontWeight: 'bold',
});

const Arg = withStyle(Monospaced, {
    fontWeight: 'bold',
});

const argWithColor = (color) => withStyle(Arg, (props) => ({
    color,
    textDecoration: props.$isEven ? undefined : 'underline',
}));

const ArgComponents = [
    '#2f66a9',
    '#a9502f',
    '#35771a',
    '#a12fa9',
    '#a9912f',
    '#2fa98d',
].map(argWithColor);

const getArgumentComp = (idx) => ArgComponents[idx % ArgComponents.length];

const buildPrettyArgs = (data) => {
    let counter = 0;
    const result = {};

    pick(data.args, []).forEach((argName) => {
        const arg = data[argName];

        if (isNullOrUndefined(arg)) {
            return;
        }

        const Comp = getArgumentComp(counter);
        result[argName] = <Comp $isEven={counter % 2 === 0}>{arg}</Comp>;
        counter += 1;
    });

    return result;
};

const DisplayInfo = ({ data }) => {
    const [css] = useStyletron();

    const prettyArgs = buildPrettyArgs(data);

    const tokenTypeRenderers = pick(TokenRenderers[data.tokenType], {});

    const result = {
        renderValue: ({ data: { value } }) => <>{value}</>,
        renderTitle: null,
        renderShort: null,
        renderDescription: null,
        ...tokenTypeRenderers,
    };

    const {
        renderedValue,
        renderedTitle,
        renderedShort,
        renderedDescription,
    } = objectMap(
        {
            renderedValue: result.renderValue,
            renderedTitle: result.renderTitle,
            renderedShort: result.renderShort,
            renderedDescription: result.renderDescription,
        },
        (fn) => (isNullOrUndefined(fn) ? null : fn({ data, prettyArgs })),
    );

    return (
        <div className={css({ width: '100%' })}>
            <Row>
                <Col span={6}>
                    <METARDataValueContainer>
                        <METARDataValue className="metar-data">
                            {renderedValue}
                        </METARDataValue>
                    </METARDataValueContainer>
                </Col>
                <Col span={18}>
                    {isNullOrUndefined(renderedTitle) ? null : (
                        <Title level={5}>{renderedTitle}</Title>
                    )}
                    {isNullOrUndefined(renderedShort) ? null : (
                        <>
                            <strong>Short:</strong>
                            {' '}
                            {renderedShort}
                        </>
                    )}
                </Col>
            </Row>
            {isNullOrUndefined(renderedDescription) ? null : (
                <Row>
                    <Col offset={6} span={18}>
                        {renderedDescription}
                    </Col>
                </Row>
            )}
        </div>
    );
};

DisplayInfo.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.any.isRequired,
};

const useShareableLinkHandler = ({ metarData, metarURLManager }) => useMemo(() => () => {
    const url = `${getFullBaseURL()}${metarURLManager.buildURL(metarData)}`;

    navigator.clipboard.writeText(url).then(() => {
        notification.success({
            message: 'Copy Successful',
            description: 'A shareable link was successfully copied into your clipboard!',
        });
    });
}, [metarURLManager, metarData]);

export const Metar = () => {
    const [metarData, setMetarData] = useState('');

    const { initialValue, metarURLManager } = useMetarURLConfig();

    // Every time the state from the URL changes to a new value, we update current data. This is cleared
    // automatically so this only happens when a shareable link is pasted.
    useEffect(() => { setMetarData(initialValue); }, [initialValue]);

    // This helps track if the data in the textarea has changed, which disables the shareable link button
    // until the metar is explained.
    const [metarDataChanged, setMetarDataChanged] = useState(false);

    // Whenever textarea data is changed, this event handler is called.
    const onChangeMETAR = useMemo(
        () => (event) => setMetarDataChanged(metarData !== event.target.value),
        [metarData, setMetarDataChanged],
    );

    // When Explain button is pressed, this event handler is called.
    const onFinish = useMemo(() => ({ metarFieldData }) => {
        setMetarData(metarFieldData);
        setMetarDataChanged(false);
    }, [setMetarData]);

    // Data gets parsed every time it changes.
    const parsedData = useMemo(() => parseMETAR(metarData), [metarData]);

    // Handler for shareable button.
    const onClickShareableLink = useShareableLinkHandler({ metarData, metarURLManager });

    const shareableButtonDisabled = useMemo(
        () => metarDataChanged || metarData === '',
        [metarDataChanged, metarData],
    );

    return (
        <CenteredContentContainer>
            <Alert
                message={(
                    <>
                        This is a new feature currently in testing stage (alpha). It is based on the
                        {' '}
                        <ExternalLink href="https://library.wmo.int/doc_num.php?explnum_id=10474">
                            World Meteorogical Organization&apos;s METAR reference
                        </ExternalLink>
                        . Please feel free to leave feedback on the
                        {' '}
                        <ExternalLink href="https://github.com/fmichea/flightsim-tools/issues">
                            issue tracker
                        </ExternalLink>
                        {' '}
                        with improvement ideas or sample METAR that cannot be parsed, as this gets improved.
                    </>
                )}
                type="warning"
            />

            <VerticalSpace />

            <Form
                onFinish={onFinish}
                autoComplete="off"
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 22 }}
            >
                <Form.Item label="METAR" name="metarFieldData">
                    <Input.TextArea defaultValue={initialValue} onChange={onChangeMETAR} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 2, span: 22 }}>
                    <Button type="primary" htmlType="submit">
                        Explain
                    </Button>

                    <VWSpace />

                    <Button
                        type="default"
                        htmlType="button"
                        onClick={onClickShareableLink}
                        disabled={shareableButtonDisabled}
                    >
                        Copy Shareable Link
                    </Button>
                </Form.Item>
            </Form>

            <List
                dataSource={parsedData}
                renderItem={(item) => (
                    <List.Item>
                        <DisplayInfo data={item} />
                    </List.Item>
                )}
            />
        </CenteredContentContainer>
    );
};
