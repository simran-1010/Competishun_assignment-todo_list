/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native'
import App from './App';
import {name as appName} from './app.json';
const setup = () => {
  return (
   <App/>
  );
};
AppRegistry.registerComponent(appName, () => setup);
