import React from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';

import Colors from '../../styles/Colors';

const {width, height} = Dimensions.get('window');
const DAY_WIDTH = width / 3.5;

export default ({day, onPress}) => {
  function onTimePress() {
    onPress();
  }

  return (
    <View style={styles.dayColumn}>
      <View style={styles.dayHeader}>
        <Text style={styles.dayText}>{day.weekDay}</Text>
        <Text style={styles.dayText}>{day.shortDate}</Text>
      </View>

      <View style={styles.dayBody}>
        {!day.hrs && (
          <Icon name="ios-close-circle-outline" type="Ionicons" size={30} />
        )}
        {day.hrs.map(time => (
          <TouchableOpacity
            key={time}
            style={styles.timeButton}
            onPress={onTimePress}>
            <Text style={styles.timeText}>{time.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dayColumn: {
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: Colors.separator,
    width: DAY_WIDTH
  },
  dayHeader: {
    width: '100%',
    padding: 5,
    alignItems: 'center',
    borderBottomColor: Colors.separator,
    borderBottomWidth: 1
  },
  timeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dayBody: {
    padding: 4
  },
  timeButton: {
    padding: 8,
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    margin: 4,
  },
});
