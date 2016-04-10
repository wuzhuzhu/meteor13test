import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';

const NewUser = ({content}) => (
    <Col xs={12} sm={6} smOffset={3}>
        <Panel>
            <h1>注册</h1>
            <form>
                <Input type="email" placeholder="电子邮箱"/>
                <Input type="password" placeholder="密码"/>
            </form>
        </Panel>
    </Col>
)