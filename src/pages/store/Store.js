import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View} from 'react-native';

import StoreHeader from './StoreHeader';
import StoreServices from './StoreServices';
import {getServices} from './StoreActions';

export default ({route, navigation}) => {
  const dispatch = useDispatch();
  const {services, loading} = useSelector(state => state.StoreReducer);
  const {store} = route.params;

  useEffect(init, []);

  function init() {
    dispatch(getServices(store.id));
  }

  return (
    <View style={styles.content}>
      <StoreHeader store={store} />
      <StoreServices services={services} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
});
