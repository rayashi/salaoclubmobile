import React from 'react';
import {TouchableOpacity, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base';

export default props => (
  <TouchableOpacity
    style={[styles.content, {backgroundColor: props.disabled ? 'gray' : props.color}]}
    onPress={props.onPress}>
    {props.iconName && props.iconType && (
      <Icon name={props.iconName} type={props.iconType} style={styles.icon} />
    )}
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  content: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 20,
  },
  text: {
    color: 'white',
  },
});
