import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from './styles/Colors';
import {Icon} from 'native-base';

export const tabBarOptions = {
  showLabel: false,
};

export const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName, iconType;

    if (route.name === 'Search') {
      iconName = 'ios-search';
      iconType = 'Ionicons';
    } else if (route.name === 'Schedule') {
      iconName = 'calendar';
      iconType = 'AntDesign';
    } else if (route.name === 'Profile') {
      iconName = 'user';
      iconType = 'AntDesign';
    }

    return (
      <Icon
        name={iconName}
        type={iconType}
        style={focused ? styles.activeIcon : styles.inactiveIcon}
      />
    );
  },
});

const styles = StyleSheet.create({
  activeIcon: {
    color: Colors.secondary,
    fontSize: 24,
  },
  inactiveIcon: {
    color: 'gray',
    fontSize: 20,
  },
});
