import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export default () => {
  const {user} = useSelector(state => state.AuthReducer);

  return(
    <View>
      {user && <Text>{user.user.first_name}</Text>}
    </View>
  )
};