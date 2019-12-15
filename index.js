/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from 'src/pages/App';
import {name as appName} from './app.json';
import {dvaCreateApp} from 'src/utils/dva';
import {Provider} from 'react-redux';

const dvaApp = dvaCreateApp();

AppRegistry.registerComponent(appName, () => () => (
  <Provider store={dvaApp.getStore()}>
    <App />
  </Provider>
));
