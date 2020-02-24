import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Image, View, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import logo from '../../images/logo.png';
import Colors from '../../styles/Colors';
import AuthForm from './AuthForm';
import AuthFooter from './AuthFooter';
import {login} from './AuthActions';
import redirect from '../../shared/Redirect';
import {Icon} from 'native-base';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.AuthReducer);
  const {item} = useSelector(state => state.CheckoutReducer);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const destination = redirect({user, checkoutItem: item});
    navigation.navigate(destination.route, destination.param);
  }, [user]);

  function onSubmit() {
    dispatch(login({email, password}));
  }

  function onBackwardPress() {
    navigation.navigate('Search');
  }

  return (
    <SafeAreaView style={styles.content}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />

      <Icon
        type="Ionicons"
        name="close"
        style={styles.closeButton}
        onPress={onBackwardPress}
      />

      <View style={styles.container}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    resizeMode: 'contain',
    width: 130,
    height: 130,
  },
  closeButton: {
    color: Colors.separator,
    marginHorizontal: 20,
    alignSelf: 'flex-end',
  },
});
