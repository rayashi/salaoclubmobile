import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import { Root } from "native-base";
import {
  StatusBar
} from 'react-native';

import store from './redux/Store';
import Routes from './Routes';

export default App = () => {
  
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