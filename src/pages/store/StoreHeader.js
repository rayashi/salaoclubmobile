import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';
import {Icon} from 'native-base';

export default ({store}) => {
  return (
    <View style={styles.content}>
      <Image source={{uri: store.avatar}} style={styles.avatar} />
      <View>
        <Text style={styles.storeName}>{store.nome}</Text>
        {store.rate > 0 ? (
          <View style={styles.rate}>
            <Icon type="AntDesign" name="star" style={styles.star} />
            <Text style={styles.rateText}>
              {((store.rate * 5) / 100).toFixed(1)}
            </Text>
          </View>
        ) : (
          <Icon type="AntDesign" name="staro" style={styles.star} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  storeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  star: {
    fontSize: 16,
    color: 'gold',
    marginRight: 2,
  },
  rate: {
    flexDirection: 'row',
  },
});
