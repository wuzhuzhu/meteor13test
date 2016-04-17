import React from 'react';
import { Row, Col, Panel, Glyphicon, Input } from 'react-bootstrap'
import moment from 'moment';

class Item extends React.Component {
    render() {
        const {item, currentDate} = this.props;
        const style = item.due < currentDate ? {'border': 'solid 1px red'}
                                             : {'border': 'solid 1px #e3e3e3'};
        const completedStyle = item.complete ? {'color': '#eee', 'text-decoration': 'line-through'}
            : {'color': '#333'};
        const compactstyle = Object.assign(style, completedStyle);
        return (
            <Col xs={4}>
                <Panel style={compactstyle}>
                    <Row>
                        <Col xs={10}>
                            <h2 style={completedStyle}>{item.name}<small> - {item.get_category_name()}</small></h2>

                        </Col>
                        <Col xs={1}>
                            <a href={`/edit/${item._id}`}><Glyphicon glyph="pencil"></Glyphicon></a>
                        </Col>
                        <Col xs={1}>
                            <a href="#" onClick={this.removeItem.bind(this)}><Glyphicon glyph="remove"></Glyphicon></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <p>{item.description} {item.due ? '- ' + moment(Number(item.due)).format('MM/DD/YYYY') : ""}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Input key={item._id} checked={item.complete} ref="complete" onChange={this.markComplete.bind(this)} type="checkbox" label="完成?"/>
                        </Col>
                    </Row>
                </Panel>
            </Col>
        )
    }

    markComplete() {
        const complete = this.refs.complete.getChecked();
        const itemId = this.props.item._id;
        Meteor.call('items.markComplete', complete, itemId);
    }

    removeItem(e) {
        e.preventDefault()
        const itemId = this.props.item._id;
        Meteor.call('items.softRemove', itemId);
    }
}

export default Item;