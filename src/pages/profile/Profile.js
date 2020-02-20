import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Colors from '../../styles/Colors';
import Button from '../../shared/Button';
import {logout} from '../auth/AuthActions';
import {Icon} from 'native-base';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.AuthReducer);

  useEffect(() => {
    !user && navigation.navigate('Auth');
  });

  function onLogoutPress() {
    dispatch(logout());
  }

  if (!user) return null;

  return (
    <ScrollView style={styles.scrow}>
      <View style={styles.content}>
        <Icon
          name="user-circle"
          type="FontAwesome5"
          style={styles.avatarIcon}
        />
        <View style={styles.userData}>
          <Text>{user.user.first_name}</Text>
          <Text>{user.user.email}</Text>
          <Text>{user.cliente.cel}</Text>
        </View>
        <Button color={Colors.tertiary} text="SAIR" onPress={onLogoutPress} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrow: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  userData: {
    alignItems: 'center',
    marginBottom: 10,
  }
});
