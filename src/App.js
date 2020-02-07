import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import { Root } from "native-base";
import {
  StatusBar
} from 'react-native';

import Colors from './styles/Colors';
import store from './redux/Store';
import Routes from './Routes';
import setupAxios from './shared/AxiosSetup';
import NavigationService from './NavigationService';


export default App = () => {
  useEffect(setup, []);

  function setup(){
    setupAxios();
  }
  
  return(
    <Provider store={store}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='white'
      />
      <Root>
        <Routes/>
      </Root>
    </Provider>
  )
}