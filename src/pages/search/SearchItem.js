import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import StoreHeader from '../store/StoreHeader';

export default ({store, onPress}) => {
  function onStorePress() {
    onPress(store);
  }
  return (
    <TouchableOpacity style={styles.content} onPress={onStorePress}>
      <StoreHeader store={store} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    margin: 3,
    borderRadius: 10,
  },
});
