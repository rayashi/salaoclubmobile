import React from 'react';
import {Provider} from 'react-redux';
import {Root} from 'native-base';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';

import store from './redux/Store';
import Routes from './Routes';

export default () => (
  <Provider store={store}>
    <StatusBar barStyle="dark-content" backgroundColor="white" />
    <Root>
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
    </Root>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
