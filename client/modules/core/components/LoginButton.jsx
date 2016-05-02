import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default React.createClass ({
  handleLogout (e) {
    e.preventDefault;
    console.log(e, Meteor)
    Meteor.logout();
  },

  render() {
    return (
      <DropDownMenu value={1}>
        <MenuItem value={1} primaryText={this.props.label} />
        <MenuItem linkButton={true} href="/logout" primaryText="登出" onclick={this.handleLogout} />
        <MenuItem linkButton={true} href="/users/profile" primaryText="个人面板"/>
      </DropDownMenu>
    );
  }
})