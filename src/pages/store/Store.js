import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, SafeAreaView, TouchableOpacity} from 'react-native';

import StoreHeader from './StoreHeader';
import StoreServices from './StoreServices';
import {getStoreInfo} from './StoreActions';
import {Icon} from 'native-base';

export default ({route, navigation}) => {
  const dispatch = useDispatch();
  const {services, loading} = useSelector(state => state.StoreReducer);
  const {store} = route.params;

  useEffect(init, []);

  function init() {
    dispatch(getStoreInfo(store.id));
  }

  function onBackwardPress() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBackwardPress}>
          <Icon name="ios-arrow-back" type="Ionicons" />
        </TouchableOpacity>
        <StoreHeader store={store} />
      </View>

      <StoreServices
        store={store}
        services={services}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
    marginLeft: 10,
  },
});
