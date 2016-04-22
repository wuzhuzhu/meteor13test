import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

const AppBarExampleIcon = ({ItemsCount}) => (
    <AppBar
        title={`不可能的列表(${ItemsCount})`}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
);

export default AppBarExampleIcon;