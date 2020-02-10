import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, TouchableOpacity, Text, View, FlatList} from 'react-native';

import Separator from '../../shared/Separator';

export default ({route, navigation}) => {
  const dispatch = useDispatch();
  const {professionals, loading} = useSelector(state => state.StoreReducer);
  const {service} = route.params;
  let valid_professionals = [];

  if (professionals && service) {
    valid_professionals = professionals.filter(professional =>
      professional.servicos.includes(service.id),
    );
  } else {
    valid_professionals = professionals;
  }

  function onProfessionalPress(professional) {
    alert(professional.nome);
  }

  return (
    <View style={styles.content}>
      <FlatList
        style={styles.content}
        data={valid_professionals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.id}
            style={styles.service}
            onPress={onProfessionalPress.bind(this, item)}>
            <Text style={styles.name}>{item.nome}</Text>
          </TouchableOpacity>
        )}
        refreshing={loading}
        ItemSeparatorComponent={() => <Separator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
});
