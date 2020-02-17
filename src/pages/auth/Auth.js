import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';

import logo from '../../images/logo.png';
import Colors from '../../styles/Colors';
import AuthForm from './AuthForm';
import AuthFooter from './AuthFooter';
import {login} from './AuthActions';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit() {
    dispatch(login({email, password}));
    navigation.navigate('Profile', {});
  }

  return (
    <View style={styles.content}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />

      <Image source={logo} style={styles.logo} />
      <AuthForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmit={onSubmit}
      />
      <AuthFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 20,
  },
  logo: {
    resizeMode: 'contain',
    width: 130,
    height: 130,
  },
});
