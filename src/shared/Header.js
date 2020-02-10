import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import {Icon} from 'native-base';

import Colors from '../styles/Colors';

export default ({
  leftIcon,
  title,
  rightIcon,
  onLeftButtonPress,
  onRightButtonPress,
}) => (
  <SafeAreaView style={styles.main}>
    <View style={styles.container}>
      <View style={styles.left}>
        {leftIcon && (
          <TouchableOpacity style={styles.button} onPress={onLeftButtonPress}>
            <Icon
              style={styles.iconLeft}
              name={leftIcon.name}
              type={leftIcon.type}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.middle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        {rightIcon && (
          <TouchableOpacity style={styles.button} onPress={onRightButtonPress}>
            <Icon
              style={styles.iconRight}
              name={rightIcon.name}
              type={rightIcon.type}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
  container: {
    height: 50,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: Colors.primary,
  },
  button: {
    padding: 10,
  },
  left: {
    width: 40,
  },
  middle: {
    flex: 3,
    alignItems: 'center',
  },
  right: {
    justifyContent: 'flex-end',
    width: 40,
  },
  iconLeft: {
    fontSize: 22,
    color: Colors.primary,
  },
  iconRight: {
    fontSize: 22,
    backgroundColor: 'red',
    color: Colors.primary,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
  },
});
