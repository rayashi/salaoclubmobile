import React from 'react';
import {Text} from 'react-native';

export default ({route, navigation}) => {
  return <Text>{route.params.store.nome}</Text>;
};
