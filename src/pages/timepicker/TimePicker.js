import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';

import {setCheckoutItem} from '../checkout/CheckoutActions';
import {getAvailableTimes, resetAvailableTimes} from './TimePickerActions';
import Day from './Day';
import Header from '../../shared/Header';

export default ({route, navigation}) => {
  const dispatch = useDispatch();
  const {item} = useSelector(state => state.CheckoutReducer);
  const {times, loading} = useSelector(state => state.TimePickerReducer);

  useEffect(init, []);

  function init() {
    dispatch(getAvailableTimes({item, first: true}));
  }

  function onBackwardPress() {
    navigation.goBack();
  }

  function onTimePress(time) {
    dispatch(setCheckoutItem({...item, time}));
    navigation.navigate('Checkout');
  }

  return (
    <View style={styles.content}>

      <Header
        onLeftButtonPress={onBackwardPress}
        leftIcon={{name: 'ios-arrow-back', type: 'Ionicons'}}
        title={'Qual horário?'}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          horizontal
          data={times}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Day day={item} onPress={onTimePress} />}
          showsHorizontalScrollIndicator={false}
          refreshing={loading}
          onRefresh={() => dispatch(getAvailableTimes({item, first: true}))}
          onEndReached={() => dispatch(getAvailableTimes({item}))}
          onEndReachedThreshold={0.8}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
  }
});
