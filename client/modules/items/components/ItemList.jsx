import React from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import ItemProgress from '../../items/components/ItemProgress.jsx';
import Item from './Item.jsx'

const ItemList = ({items, percentage}) => (
    <Row>
        <Row>
            <Col xs={12} sm={6}>
                <ItemProgress percentage={percentage} />
            </Col>
        </Row>
        <Row className="show-grid">
            <Col xs={12}>
                <a href="/edit">
                    <Glyphicon glyph="plus"></Glyphicon> 新项目
                </a>
            </Col>
            {items.map(item => (
                <Item key={item._id} item={item} currentDate={new Date()}/>
            ))}
        </Row>
    </Row>
);


export default ItemList;