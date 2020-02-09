import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default ({services, onPress}) => {
  return (
    <View>
      {services.map(service => (
        <TouchableOpacity key={service.id} style={styles.content}>
          <Text>{service.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    margin: 3,
    borderRadius: 10,
  },
});
