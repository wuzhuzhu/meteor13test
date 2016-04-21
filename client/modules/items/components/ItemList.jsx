import React from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';

import Item from './Item.jsx'
import SimpleCategoryList from '../containers/SimpleCategoryList.js'
import TodoProgress from '../../items/components/TodoProgress.jsx'

const ItemList = ({items, categories, percentage, selected_category}) => (
    <Row>
        <Row>
            <Col xs={12}>
                <TodoProgress percentage={percentage} />
            </Col>
            <Col xs={12}>
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