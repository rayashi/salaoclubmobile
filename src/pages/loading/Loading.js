import React, {useEffect} from 'react';
import {StyleSheet, Image, View, StatusBar, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import logo from '../../images/logo.png';
import Colors from '../../styles/Colors';
import {startInitialLoad} from '../auth/AuthActions';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const {initialLoading} = useSelector(state => state.AuthReducer);

  useEffect(init, []);
  useEffect(checkForFinishedLoading, [initialLoading]);

  function init() {
    dispatch(startInitialLoad());
  }

  function checkForFinishedLoading() {
    if(!initialLoading){
      navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.content}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>loading ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 20,
  },
  logo: {
    resizeMode: 'contain',
    width: 130,
    height: 130,
  },
  text: {
    color: Colors.separator,
  }
});
