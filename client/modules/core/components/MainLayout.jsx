import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap'
import RaisedButton from 'material-ui/lib/raised-button'
import ItemProgress from '../../items/components/ItemProgress.jsx';

const Layout = ({content}) => (
   <Grid>
       <Row>
           <Col xs={10}>
               <PageHeader>
                   不可能的列表
               </PageHeader>
           </Col>
           <Col xs={2}>
                <RaisedButton label="登陆" primary={true} />
           </Col>
       </Row>
       {content()}
   </Grid>
);

export default Layout