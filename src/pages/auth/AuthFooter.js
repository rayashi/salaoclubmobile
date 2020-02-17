import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

import Colors from '../../styles/Colors';

export default props => {
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Não tenho uma conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  buttonText: {
    color: 'white'
  },
});
