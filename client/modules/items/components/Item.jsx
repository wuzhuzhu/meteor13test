import React from 'react';
import { Row, Col, Panel, Glyphicon, Input } from 'react-bootstrap'

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Toggle from 'material-ui/lib/toggle';

import moment from 'moment';



class Item extends React.Component {
    render() {
        const {item, currentDate} = this.props;
        const style = item.due < currentDate ? {'border': 'solid 1px red'}
                                             : {'border': 'solid 1px #e3e3e3'};
        const completedStyle = item.complete ? {'color': '#eee', 'text-decoration': 'line-through'}
            : {'color': '#333'};
        const compactstyle = Object.assign(style, completedStyle);
        const toggleStyles = {
            block: {
                maxWidth: 100,
            },
            toggle: {
                marginBottom: 16,
            }
        };
        const categoryDisplayText = item.get_category_name() ? item.get_category_name() : "其他"
        const dueDisplayText = item.due ? ' - ' + moment(Number(item.due)).format('MM/DD/YYYY') : ""
        return (
            <Col xs={12} sm={6} md={4}>
                <Card  style={compactstyle}>
                    <CardTitle title={item.name} subtitle={categoryDisplayText+dueDisplayText} />
                    <CardText>{item.description}</CardText>
                    <CardActions>
                        <div style={toggleStyles.block}>
                            <Toggle
                                    label="已完成"
                                    style={toggleStyles.toggle}
                                    toggled={item.complete}
                                    ref="complete"
                                    defaultToggled={item.complete}
                                    onToggle = {this.markComplete.bind(this)} />
                        </div>
                        <FlatButton linkButton={true} href={`/edit/${item._id}`} secondary={true} label="编辑" />
                        <FlatButton onClick={this.removeItem.bind(this)} primary={true} label="删除" />
                    </CardActions>
                </Card>
            </Col>
        )
    }

    markComplete() {
        const complete = !this.props.item.complete;
        const itemId = this.props.item._id;
        Meteor.call('items.markComplete', complete, itemId);
    }

    removeItem(e) {
        e.preventDefault();
        const itemId = this.props.item._id;
        Meteor.call('items.softRemove', itemId);
    }
}

export default Item;