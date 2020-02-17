import React, {useState, useEffect} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {Icon} from 'native-base';
import {useDispatch} from 'react-redux';

import Colors from '../../styles/Colors';
import Button from '../../shared/Button';
import {login} from './AuthActions';

export default props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  function onSubmit() {
    dispatch(login({email, password}));
  }

  return (
    <View style={styles.content}>
      <View style={styles.inputRow}>
        <Icon name="mail" type="Feather" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          placeholder={'Email'}
          placeholderTextColor={Colors.lightAlpha}
          underlineColorAndroid={Colors.lightAlpha}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon name="lock" type="Feather" style={styles.inputIcon} />
        <TextInput
          secureTextEntry
          style={styles.input}
          autoCapitalize="none"
          onChangeText={text => setPassword(text)}
          placeholder={'Senha'}
          placeholderTextColor={Colors.lightAlpha}
          underlineColorAndroid={Colors.lightAlpha}
        />
      </View>

      <Button color={Colors.tertiary} text="ENTRAR" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    paddingHorizontal: 12,
    marginVertical: 5,
    color: 'white',
  },
  inputIcon: {
    fontSize: 16,
    color: Colors.lightAlpha,
  },
});
