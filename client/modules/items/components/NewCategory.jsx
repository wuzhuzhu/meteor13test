import React from 'react';
import {Col, Panel, Input, ButtonInput, Glyphicon} from 'react-bootstrap';

class NewCategory extends React.Component {
    render() {
        const {error} = this.props;
        return (
            <Col xs={12} sm={6} smOffset={3}>
                <Panel>
                    <h1>添加分类</h1>
                    {error ? <p style={{color:'red'}}>{error}</p> : null}
                    <form>
                        <Input ref="name" type="text" placeholder="名称"/>
                        <ButtonInput onClick={this.createCategory.bind(this)} bsStyle="primary" type="submit" value="添加分类" />
                    </form>
                </Panel>
            </Col>
        )
    }

    createCategory(e) {
        e.preventDefault();
        const {create} = this.props;
        const {name} = this.refs;
        create(name.getValue());
        name.getInputDOMNode().value = '';
    }
}

export default NewCategory;