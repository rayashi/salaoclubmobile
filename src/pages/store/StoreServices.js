import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Separator from '../../shared/Separator';
import Service from './Service';
import {setCheckoutItem} from '../checkout/CheckoutActions';
import redirect from '../../shared/Redirect';

export default ({store, services, navigation}) => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.StoreReducer);
  const {user} = useSelector(state => state.AuthReducer);

  function onServicePress(service) {
    dispatch(setCheckoutItem({store, service}));
    const destination = redirect({user, checkoutItem: {store, service}});
    navigation.navigate(destination.route, destination.param);
  }

  return (
    <View style={styles.content}>
      <FlatList
        style={styles.content}
        data={services}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Service service={item} onPress={onServicePress}/>}
        refreshing={loading}
        ItemSeparatorComponent={() => <Separator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
    margin: 3,
  }
});
