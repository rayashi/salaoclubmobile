import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import Colors from '../../styles/Colors';

export default ({services, onPress}) => {
  const {loading} = useSelector(state => state.SearchReducer);

  return (
    <View style={styles.content}>
      <FlatList
        style={styles.content}
        data={services}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity key={item.id} style={styles.service}>
            <Text style={styles.serviceName}>{item.nome}</Text>
            <View style={styles.detail}>
              {item.preco > 0 && (
                <Text style={styles.servicePrice}>{item.formattedPrice}</Text>
              )}
              <Text style={styles.servicePrice}>{item.duracao}minutos</Text>
            </View>
            {item.descricao && (
              <Text style={styles.serviceDescription}>{item.descricao}</Text>
            )}
            {item.rewardMsg && (
              <Text style={styles.rewardMsg}>{item.rewardMsg}</Text>
            )}
          </TouchableOpacity>
        )}
        refreshing={loading}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
    margin: 3,
  },
  service: {
    padding: 10,
    marginHorizontal: 10,
  },
  serviceName: {
    fontWeight: 'bold',
  },
  separator: {
    borderTopColor: Colors.separator,
    borderTopWidth: 0.2,
    marginHorizontal: 10,
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
  }
});
