import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StatusBar, FlatList, StyleSheet, View} from 'react-native';

import {getStores} from './SearchActions';
import SearchItem from './SearchItem';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const {stores, loading} = useSelector(state => state.SearchReducer);

  useEffect(init, []);

  function init() {
    dispatch(getStores());
  }

  function onStorePress(store) {
    navigation.navigate('Store', {store});
  }

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor='white' />

      <FlatList
        style={styles.content}
        data={stores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <SearchItem store={item} onPress={onStorePress} />
        )}
        onRefresh={() => init()}
        refreshing={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    margin: 5,
  },
});
