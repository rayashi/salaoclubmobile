import React from 'react';
import {StyleSheet, ActivityIndicator, Platform} from 'react-native';
import Colors from '../styles/Colors';

let default_size = 40;
if (Platform.OS === 'ios') {
  default_size = 1;
}

export default props => {
  if (props.hide) return null;

  return (
    <ActivityIndicator
      color={Colors.primary}
      style={props.absolut && styles.absolut}
      size={props.size && Platform.OS === 'android' ? props.size : default_size}
      color={props.color}
    />
  );
};

const styles = StyleSheet.create({
  absolut: {
    zIndex: 1000,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
