import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

import Colors from '../../styles/Colors';

export default ({service, onPress}) => {
  function onSelfPress(){
    onPress(service);
  }

  return (
    <TouchableOpacity key={service.id} style={styles.service} onPress={onSelfPress}>
      <Text style={styles.serviceName}>{service.nome}</Text>
      <View style={styles.detail}>
        {service.preco > 0 && (
          <Text style={styles.servicePrice}>{service.formattedPrice}</Text>
        )}
        <Text style={styles.servicePrice}>{service.duracao}minutos</Text>
      </View>
      {service.descricao && (
        <Text style={styles.serviceDescription}>{service.descricao}</Text>
      )}
      {service.rewardMsg && (
        <Text style={styles.rewardMsg}>{service.rewardMsg}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  service: {
    padding: 10,
    marginHorizontal: 10,
  },
  serviceName: {
    fontWeight: 'bold',
  },
  detail: {
    flexDirection: 'row',
  },
  servicePrice: {
    marginHorizontal: 5,
    color: 'gray',
  },
  serviceDescription: {
    marginTop: 5,
    marginHorizontal: 5,
    color: 'gray',
    fontSize: 12,
  },
  rewardMsg: {
    marginHorizontal: 5,
    color: Colors.tertiary,
    fontSize: 12,
  },
});
