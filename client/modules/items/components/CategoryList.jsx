import React from 'react';
import {Row, Col, Panel, Glyphicon} from 'react-bootstrap';

const CategoryList = ({categories}) => (
    <div>
        <Row>
            <Col xs={12}>
                <a href="/categories/new">添加新分类 <Glyphicon glyph="plus"></Glyphicon></a>
            </Col>
        </Row>
        {categories.map(category => (
            <Col xs={3} key={category.id}>
                <Panel>
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>

                    {category.related_items().map(item => {
                        <p key={item._id}>{item._id}</p>
                    })}
                </Panel>
            </Col>
        ))}
    </div>
);

export default CategoryList;