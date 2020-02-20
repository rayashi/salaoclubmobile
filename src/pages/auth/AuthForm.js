import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {Icon} from 'native-base';

import Colors from '../../styles/Colors';
import Button from '../../shared/Button';

export default props => {

  return (
    <View style={styles.content}>
      <View style={styles.inputRow}>
        <Icon name="mail" type="Feather" style={styles.inputIcon} />
        <TextInput
          value={props.email}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={text => props.setEmail(text)}
          placeholder={'Email'}
          placeholderTextColor={Colors.lightAlpha}
          underlineColorAndroid={Colors.lightAlpha}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon name="lock" type="Feather" style={styles.inputIcon} />
        <TextInput
          value={props.password}
          secureTextEntry
          style={styles.input}
          autoCapitalize="none"
          onChangeText={text => props.setPassword(text)}
          placeholder={'Senha'}
          placeholderTextColor={Colors.lightAlpha}
          underlineColorAndroid={Colors.lightAlpha}
        />
      </View>

      <Button color={Colors.tertiary} text="ENTRAR" onPress={props.onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  inputRow: {
    alignSelf: 'stretch',
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
