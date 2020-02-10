import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import Colors from '../../styles/Colors';
import Separator from '../../shared/Separator';
import Service from './Service';

export default ({services, navigation}) => {
  const {loading} = useSelector(state => state.SearchReducer);

  function onServicePress(service) {
    navigation.navigate('Professionals', {service});
  }

  return (
    <View style={styles.content}>
      <FlatList
        style={styles.content}
        data={services}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Service service={item} onPress={onServicePress}/>}
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
    margin: 3,
  }
});
