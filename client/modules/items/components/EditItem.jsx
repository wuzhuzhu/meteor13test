import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';


class EditItem extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <Col xs={12} sm={6} smOffset={3}>
                <Panel>
                    <a href="/">
                        <Glyphicon glyph="chevron-left"></Glyphicon> 返回到列表
                    </a>
                    <h1>{item ? '编辑事项' : '添加事项'}</h1>
                    <form>
                        <Input ref="name" type="text" placeholder="名称" defaultValue={item ? item.name : ''} />
                        <Input ref="description" type="text" placeholder="描述" defaultValue={item ? item.description : ''} />
                        <DateTimeField />
                        <ButtonInput onClick={this.createItem.bind(this)} bsStyle="primary" type="submit" value="保存事项" />
                    </form>
                </Panel>
            </Col>
        )
    }

    createItem(e) {
        e.preventDefault();
        const {create} = this.props;
        const {name, description} = this.refs;
        create(name.getValue(), description.getValue());
        name.getInputDOMNode().value ='';
        description.getInputDOMNode().value ='';
    }
}


export default EditItem;