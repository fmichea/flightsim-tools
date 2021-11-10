import React from 'react';

import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import { useStyletron } from 'styletron-react';

export const AntiIceTableFootnote = ({ footnoteID, footnote }) => {
    const [css] = useStyletron();

    return (
        <Row>
            <Col span={1} className={css({ textAlign: 'right', paddingRight: '5px' })}>
                <sup>{footnoteID}</sup>
            </Col>
            <Col span={23}>
                {footnote}
            </Col>
        </Row>
    );
};

AntiIceTableFootnote.propTypes = {
    footnoteID: PropTypes.node.isRequired,
    footnote: PropTypes.node.isRequired,
};
