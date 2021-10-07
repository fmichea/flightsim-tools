import React, { useEffect, useMemo, useState } from 'react';
import {
    Button, Col, Form, Input, List, Row, Typography, Alert, notification,
} from 'antd';
import { styled, useStyletron, withStyle } from 'styletron-react';
import { parseMETAR } from 'lib/metar/parser';
import { Monospaced } from 'components/lib/Monospaced';
import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';
import { pick } from 'lib/pick';
import { objectMap } from 'lib/objectMap';
import { ExternalLink } from 'components/lib/ExternalLink';
import PropTypes from 'prop-types';
import { TokenRenderers } from 'components/metar/renderers/mapping';
import { CenteredContentContainer } from 'components/lib/CenteredContentContainer';
import { useMetarURLConfig } from 'lib/metar/hooks/useMetarURLConfig';
import { VerticalSpace, VWSpace } from 'components/lib/spaces';
import { getFullBaseURL } from 'lib/getFullBaseURL';

const { Title } = Typography;

const METARDataValueContainer = styled('div', {
    display: 'flex',
    alignItems: 'center', /* Vertical center alignment */
    justifyContent: 'center', /* Horizontal center alignment */
    height: '100%',
    padding: '4px',
});

const METARColumnContainer = styled('div', {
    padding: '12px 0px',
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

const ContextColors = [
    'rgba(0,116,255,0.1)',
    'rgba(255,135,0,0.15)',
    'rgba(4,255,0,0.15)',
];

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

    let containerStyle = { width: '100%' };
    let contentStyle = { padding: '0px 18px' };

    if (isNotNullOrUndefined(data.context)) {
        containerStyle = {
            ...containerStyle,
            backgroundColor: ContextColors[data.contextCounter % ContextColors.length],
        };

        if (!data.isFirstInContext) {
            contentStyle = {
                ...contentStyle,
                backgroundColor: 'white',
            };
        }
    }

    return (
        <div className={css(containerStyle)}>
            <Row>
                <Col span={6}>
                    <METARColumnContainer>
                        <METARDataValueContainer>
                            <METARDataValue className="metar-data">
                                {renderedValue}
                            </METARDataValue>
                        </METARDataValueContainer>
                    </METARColumnContainer>
                </Col>

                <Col span={18} className={css(contentStyle)}>
                    <METARColumnContainer>
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
                    </METARColumnContainer>
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
    const [form] = Form.useForm();

    // This is the data that was actually explained. Textarea content may be different if user changed it.
    const [metarData, setMetarData] = useState('');

    // This tracks whether there is data in the textarea, which enables the explain button.
    const [explainButtonEnabled, setExplainButtonEnabled] = useState(false);

    const updateExplainedButtonEnabledState = useMemo(
        () => (value) => { setExplainButtonEnabled(value.replace(/\s/g, '') !== ''); },
        [setExplainButtonEnabled],
    );

    const { initialValue, metarURLManager } = useMetarURLConfig();

    // Every time the state from the URL changes to a new value, we update current data. This is cleared
    // automatically so this only happens when a shareable link is pasted.
    useEffect(
        () => {
            form.setFieldsValue({ metarFieldData: initialValue });
            setMetarData(initialValue);
            updateExplainedButtonEnabledState(initialValue);
        },
        [initialValue],
    );

    // This helps track if the data in the textarea has changed, which disables the shareable link button
    // until the metar is explained.
    const [metarDataChanged, setMetarDataChanged] = useState(false);

    // Whenever textarea data is changed, this event handler is called.
    const onChangeMETAR = useMemo(
        () => (event) => {
            const metarFieldData = event.target.value;

            setMetarDataChanged(metarData !== metarFieldData);
            updateExplainedButtonEnabledState(metarFieldData);
        },
        [metarData, setMetarDataChanged],
    );

    // When Explain button is pressed, this event handler is called.
    const onFinish = useMemo(() => ({ metarFieldData }) => {
        setMetarData(metarFieldData);
        setMetarDataChanged(false);
    }, [setMetarData]);

    // Data gets parsed every time it changes.
    const parsedData = useMemo(() => {
        const result = [];
        const tokens = parseMETAR(metarData);

        let currentContext = null;
        let contextCounter = -1;

        for (let idx = 0; idx < tokens.length; idx += 1) {
            let isFirstInContext = false;
            const token = tokens[idx];

            if (currentContext !== token.context) {
                currentContext = token.context;

                contextCounter += 1;
                isFirstInContext = true;
            }

            result.push({
                ...token,

                contextCounter,
                isFirstInContext,
            });
        }

        return result;
    }, [metarData]);

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
                        This is a new feature currently in testing stage (beta). It is based on the
                        {' '}
                        <ExternalLink href="https://library.wmo.int/doc_num.php?explnum_id=10474">
                            World Meteorogical Organization&apos;s METAR reference
                        </ExternalLink>
                        {' '}
                        (
                        <ExternalLink href="https://library.wmo.int/doc_num.php?explnum_id=10235">
                            Code Tables
                        </ExternalLink>
                        )
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
                form={form}
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 22 }}
            >
                <Form.Item label="METAR" name="metarFieldData">
                    <Input.TextArea onChange={onChangeMETAR} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 2, span: 22 }}>
                    <Button type="primary" htmlType="submit" disabled={!explainButtonEnabled}>
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
                    <List.Item style={{ padding: '0' }}>
                        <DisplayInfo data={item} />
                    </List.Item>
                )}
            />
        </CenteredContentContainer>
    );
};
