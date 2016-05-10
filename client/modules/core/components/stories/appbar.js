import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AppBar from '../AppBar.jsx'

import {UserStub} from '../../../../constants/storyConstants'

storiesOf('AppBar', module)
  .add('没有item', () => (
    <AppBar ItemsCount={0} />
  ))
  .add('3个item登陆状态', () => (
    <AppBar ItemsCount={3} User={UserStub} />
  ))