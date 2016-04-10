import React from 'react';
import { Col, Panel, Input, ButtonInput } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';

const EditItem = ({content}) => (
    <Col xs={12} sm={6} smOffset={3}>
        <Panel>
            <h1>编辑事项</h1>
            <form>
                <Input type="text" placeholder="名字"/>
                <Input type="textarea" placeholder="描述"/>
                <DateTimeField />
                <ButtonInput bsStyle="primary" type="submit" value="保存事项" />
            </form>
        </Panel>
    </Col>
);

export default EditItem;