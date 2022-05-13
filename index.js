/**
 * @format
 */
import React from 'react';
import {View, Text} from 'react-native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NewNote from './pages/NewNote';

AppRegistry.registerComponent(appName, () => App);
