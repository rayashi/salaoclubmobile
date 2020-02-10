import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../styles/Colors';

export default () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    borderTopColor: Colors.separator,
    borderTopWidth: 0.2,
    marginHorizontal: 10,
  },
});
