import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, FlatList} from 'react-native';

import Header from '../../shared/Header';
import Professional from './Professional';
import Colors from '../../styles/Colors';
import { setCheckoutItem } from '../checkout/CheckoutActions';

export default ({route, navigation}) => {
  const dispatch = useDispatch();
  const {professionals, loading} = useSelector(state => state.StoreReducer);
  const {service} = route.params;
  let valid_professionals = [];

  if (professionals && service) {
    valid_professionals = professionals.filter(professional =>
      professional.servicos.includes(service.id),
    );
  } else {
    valid_professionals = professionals;
  }

  function onBackwardPress() {
    navigation.goBack();
  }

  function onProfessionalPress(professional) {
    dispatch(setCheckoutItem({service, professional}));
    navigation.navigate('TimePicker');
  }

  return (
    <View style={styles.content}>
      
      <Header
        onLeftButtonPress={onBackwardPress}
        leftIcon={{name: 'ios-arrow-back', type: 'Ionicons'}}
        title={'Escolha um Profissional'}
      />

      <FlatList
        style={styles.list}
        data={valid_professionals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Professional professional={item} onPress={onProfessionalPress} />
        )}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.separator,
  },
  list: {
    margin: 5,
  },
});
