import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';


class EditItem extends React.Component {
    componentWillMount() {
        this.runLog();
    }

    componentWillUnmount() {

    }

    render() {
        const {item, categories, error} = this.props;
        return (
            <Col xs={12} sm={6} smOffset={3}>
                <Panel>
                    <a href="/">
                        <Glyphicon glyph="chevron-left"></Glyphicon> 返回到列表
                    </a>
                    <h1>{item ? '编辑事项' : '添加事项'}</h1>
                    {error ? <p style={{color: 'red'}}>{error}</p> : null}
                    <form>
                        <Input ref="name" type="text" placeholder="名称" defaultValue={item ? item.name : ''} />
                        <Input ref="description" type="text" placeholder="描述" defaultValue={item ? item.description : ''} />
                        <Input ref="category" type="select" label="分类" placeholder="select" value={item ? item.category : null}>
                            {categories.map(category => <option value={category._id}>{category.name}</option>)}
                        </Input>
                        <DateTimeField language="zh-cn" ref="due" forceParse="false" inputFormat="MM/DD/Y" defaultText="" />
                        <ButtonInput onClick={this.createItem.bind(this)} bsStyle="primary" type="submit" value="保存事项" />
                    </form>
                </Panel>
            </Col>
        )
    }

    runLog() {
        trackerId = Tracker.autorun(function() {
            var routeName = FlowRouter.getRouteName();
            console.log("Current route name is: ", routeName);
        });
        console.log(trackerId)
    }

    createItem(e) {
        e.preventDefault();
        const { item, create, edit } = this.props;
        const {name, description, due, category} = this.refs;
        if (item && item._id) {
            edit(item._id, name.getValue(), description.getValue(), due.getValue(), category.getValue());
            name.getInputDOMNode().value ='';
            description.getInputDOMNode().value ='';
            category.getInputDOMNode().value ='';
        } else {
            create(name.getValue(), description.getValue(), due.getValue(), category.getValue());
            name.getInputDOMNode().value ='';
            description.getInputDOMNode().value ='';
            category.getInputDOMNode().value ='';
        }
    }
}


export default EditItem;