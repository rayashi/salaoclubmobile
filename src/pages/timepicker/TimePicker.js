import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';

import {setCheckoutItem} from '../checkout/CheckoutActions';
import {getAvailableTimes} from './TimePickerActions';
import Day from './Day';

export default ({route, navigation}) => {
  const dispatch = useDispatch();
  const {item} = useSelector(state => state.CheckoutReducer);
  const {times, loading} = useSelector(state => state.TimePickerReducer);

  useEffect(init, []);

  function init() {
    dispatch(getAvailableTimes(item));
  }

  function onTimePress(time) {}

  return (
    <View style={styles.content}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          horizontal
          data={times}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Day day={item} onPress={onTimePress} />}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white'
  },
});
