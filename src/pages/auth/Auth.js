import React from 'react';
import {StyleSheet, Image, View, StatusBar} from 'react-native';

import logo from '../../images/logo.png';
import Colors from '../../styles/Colors';
import AuthForm from './AuthForm';
import AuthFooter from './AuthFooter';

export default ({navigation}) => {
  return (
    <View style={styles.content}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />

      <Image source={logo} style={styles.logo} />
      <AuthForm />
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
  },
  logo: {
    resizeMode: 'contain',
    width: 130,
    height: 130,
  },
});
