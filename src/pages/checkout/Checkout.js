import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

import Header from '../../shared/Header';

export default ({route, navigation}) => {
  const dispatch = useDispatch();
  const {item} = useSelector(state => state.CheckoutReducer);

  useEffect(init, []);

  function init() {}

  function onBackwardPress() {
    navigation.goBack();
  }

  return (
    <View style={styles.content}>
      <Header
        onLeftButtonPress={onBackwardPress}
        leftIcon={{name: 'ios-arrow-back', type: 'Ionicons'}}
        title={'Confime seu agendamento'}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>{item.service.nome}</Text>
        <Text>{item.professional.nome}</Text>
        <Text>
          {item.time.dateTime.toLocaleDateString()} - {item.time.formattedTime}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
});
