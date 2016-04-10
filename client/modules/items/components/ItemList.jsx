import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ItemProgress from '../../items/components/ItemProgress.jsx';

import Item from './Items.jsx'

const ItemList = ({content}) => (
    <div>
        <Row>
            <Col xs={12} sm={6}>
                <ItemProgress />
            </Col>
        </Row>
        <Row className="show-grid">
            <Col xs={12}>
                <Item />
            </Col>
        </Row>
    </div>
);


export default ItemList;