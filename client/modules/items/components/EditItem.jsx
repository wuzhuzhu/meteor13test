import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import DatePicker from 'material-ui/lib/date-picker/date-picker'

// todo: 处理editItem的报错.

class EditItem extends React.Component {

    constructor(props) {
        super(props);
        const {item} = props;
        this.state = {
            due: item && item.due ? item.due : new Date()
        };
    }

    handleChangeDue(e) {
        console.log(e.target)
        this.setState({due: e.target.value});
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
                        <DatePicker ref="due111" forceParse="false" hintText="截止日期" value={this.state.due} defaultValue={this.state.due.toDateString()} onChange={this.handleChangeDue.bind(this)} />
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
        console.log(this.refs);
        if (item && item._id) {
            edit(item._id, name.getValue(), description.getValue(), due.getDate(), category.getValue());
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