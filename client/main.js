/**
 * Created by walter on 16/4/7.
 */
import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import userModule from './modules/users';
import itemsModule from './modules/items';

// 初始化context
const context  = initContext();

// 创建app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(userModule);
app.loadModule(itemsModule);
app.init();