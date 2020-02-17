import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {Icon} from 'native-base';

import Colors from '../../styles/Colors';

export default props => {
  return (
    <View style={styles.content}>
      <View style={styles.inputRow}>
        <Icon name="mail" type="Feather" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={text => null}
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
          onChangeText={text => null}
          placeholder={'Senha'}
          placeholderTextColor={Colors.lightAlpha}
          underlineColorAndroid={Colors.lightAlpha}
        />
      </View>
      
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
    alignItems: 'center'
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
