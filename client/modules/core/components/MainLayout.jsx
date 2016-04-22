import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap'

import FlatButton from 'material-ui/lib/flat-button'
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';

import AppBar from '../containers/AppBar';


const Layout = ({content}) => (
    <div>
        <AppBar
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={<FlatButton label="Save" />}
        />
        <Grid fluid={true}>
            {content()}
        </Grid>
    </div>

);

export default Layout