import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button'

import LoginButton from './LoginButton.jsx'

const AppBarExampleIcon = ({ItemsCount, User}) => (
    <AppBar
        title={`不可能的列表(${ItemsCount})`}
        iconElementRight={User ?
         <LoginButton label={User.emails[0].address} /> :
         <FlatButton linkButton={true} href="/login" label="注册/登陆"></FlatButton>
        }
    />
);

export default AppBarExampleIcon;