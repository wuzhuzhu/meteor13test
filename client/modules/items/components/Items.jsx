import React from 'react';
import { Row, Col, Panel, Glyphicon, Input } from 'react-bootstrap'

const Item = ({content}) => (
    <Col xs={4}>
        <Panel>
            <Row>
                <Col xs={10}>
                    <h2>待办事项</h2>
                </Col>
                <Col xs={2}>
                    <a href="/edit"><Glyphicon glyph="pencil"></Glyphicon></a>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <p>一些待办事项的细节</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Input type="checkbox" label="完成?"/>
                </Col>
            </Row>
        </Panel>
    </Col>
);

export default Item;