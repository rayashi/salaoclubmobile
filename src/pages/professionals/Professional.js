import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Icon} from 'native-base';

import Colors from '../../styles/Colors';
import Shadow from '../../styles/Shadow';

export default ({professional, onPress}) => {
  function onSelfPress() {
    onPress(professional);
  }

  return (
    <TouchableOpacity
      key={professional.id}
      style={styles.content}
      onPress={onSelfPress}>
      {professional.avatar ? (
        <Image source={{uri: professional.avatar}} style={styles.avatar} />
      ) : (
        <Icon
          name="user-circle"
          type="FontAwesome5"
          style={styles.avatarIcon}
        />
      )}

      <Text style={styles.professionalName}>{professional.nome}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    margin: 3,
    borderRadius: 10,
    ...Shadow,
  },
  professionalName: {
    fontWeight: 'bold',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  avatarIcon: {
    marginRight: 10,
    fontSize: 28,
    width: 30,
    height: 30,
    color: Colors.primary,
  },
});
