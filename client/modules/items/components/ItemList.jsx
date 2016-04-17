import React from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';

import ItemProgress from '../../items/components/ItemProgress.jsx';
import Item from './Item.jsx'
import SimpleCategoryList from '../containers/SimpleCategoryList.js'

const ItemList = ({items, categories, percentage, selected_category}) => (
    <Row>
        <Row>
            <Col xs={12} sm={6}>
                <ItemProgress percentage={percentage} />
            </Col>
            <Col xs={12} sm={6}>
                <SimpleCategoryList categories={categories} />
            </Col>
        </Row>
        <Row className="show-grid">
            <Col xs={12}>
                <a href="/edit">
                    <Glyphicon glyph="plus"></Glyphicon> 新项目
                </a>
            </Col>
            {selected_category ? items.filter(item => item.category == selected_category)
                .map(item => (
                    <Item key={item._id} item={item} currentDate={new Date()}/>
                ))
                : items.map(item => (
                    <Item key={item._id} item={item} currentDate={new Date()}/>
            ))}
        </Row>
    </Row>
);


export default ItemList;