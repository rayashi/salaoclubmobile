import React, {Component, useEffect} from 'react';
import {Provider} from 'react-redux';
import {Root} from 'native-base';
import {StatusBar} from 'react-native';

import setupAxios from './shared/Api';
import store from './redux/Store';
import Routes from './Routes';

export default class App extends Component {
  componentDidMount() {
    setupAxios();
  }

  render = () => (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Root>
        <Routes />
      </Root>
    </Provider>
  );
}
