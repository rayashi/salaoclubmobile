import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { FlatList, StyleSheet } from 'react-native';

import { getStores } from './SearchActions';
import SearchItem from './SearchItem';

export default () => {
  const dispatch = useDispatch();
  const { stores, loading } = useSelector(state => state.SearchReducer);

  useEffect(init, []);

  function init(){
    dispatch(getStores());
  }

  return(
    <FlatList
      style={styles.content}
      data={stores}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <SearchItem store={item}/>}
      onRefresh={() => init()}
      refreshing={loading}
    />
  )  
}


const styles = StyleSheet.create({
  content: {
    margin: 5
  }
});