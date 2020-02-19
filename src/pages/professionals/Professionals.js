import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, View, FlatList} from 'react-native';

import Header from '../../shared/Header';
import Professional from './Professional';
import Colors from '../../styles/Colors';
import {setCheckoutItem} from '../checkout/CheckoutActions';
import redirect from '../../shared/Redirect';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const {professionals, loading} = useSelector(state => state.StoreReducer);
  const {item} = useSelector(state => state.CheckoutReducer);
  const {user} = useSelector(state => state.AuthReducer);
  
  let valid_professionals = [];

  if (professionals && item.service) {
    valid_professionals = professionals.filter(professional =>
      professional.servicos.includes(item.service.id),
    );
  } else {
    valid_professionals = professionals;
  }

  function onBackwardPress() {
    navigation.goBack();
  }

  function onProfessionalPress(professional) {
    dispatch(setCheckoutItem({...item, professional}));
    const destination = redirect({user, checkoutItem: {...item, professional}});
    navigation.navigate(destination.route, destination.param);
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
