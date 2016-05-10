import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import LoginButton from '../LoginButton.jsx'


storiesOf('LoginButton', module)
  .add('没有登录', () => (
    <LoginButton label="test@email.com" />
  ))
