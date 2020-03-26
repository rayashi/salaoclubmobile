import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import Moment from 'moment';
import {Icon, Toast} from 'native-base';

import Header from '../../shared/Header';
import Shadow from '../../styles/Shadow';
import Button from '../../shared/Button';
import Colors from '../../styles/Colors';
import {book} from './CheckoutActions';

export default ({route, navigation}) => {
  const dispatch = useDispatch();
  const {item, booking} = useSelector(state => state.CheckoutReducer);
  const {user} = useSelector(state => state.AuthReducer);

  useEffect(init, []);

  useEffect(() => {
    if (item.booked && !booking) {
      Toast.show({
        text: 'Obrigado, seu agendamento foi enviado! O profissional logo irá confirmar 👍',
        type: 'success',
        duration: 4000,
      });
      navigation.reset();
    }
  }, [booking, item]);

  function init() {}

  function onBackwardPress() {
    navigation.goBack();
  }

  function onConfirm() {
    if(booking) return;
    dispatch(book({item, user}));
  }

  return (
    <View style={styles.content}>
      <Header
        onLeftButtonPress={onBackwardPress}
        leftIcon={{name: 'ios-arrow-back', type: 'Ionicons'}}
        onRightButtonPress={onConfirm}
        rightIcon={{name: 'ios-checkmark-circle-outline', type: 'Ionicons'}}
        title={'Confirme seu agendamento'}
      />
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.item}>
            <View style={styles.itemDetail}>
              <View style={styles.titleLine}>
                <Icon name="scissors" type="Feather" style={styles.titleIcon} />
                <Text style={styles.titleText}>Serviço</Text>
              </View>
              <Text>{item.service.nome}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.itemDetail}>
              <View style={styles.titleLine}>
                <Icon
                  name="user-circle"
                  type="FontAwesome5"
                  style={styles.titleIcon}
                />
                <Text style={styles.titleText}>Profissional</Text>
              </View>
              <Text>{item.professional.nome}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.itemDetail}>
              <View style={styles.titleLine}>
                <Icon
                  name="calendar"
                  type="AntDesign"
                  style={styles.titleIcon}
                />
                <Text style={styles.titleText}>Date e Horário</Text>
              </View>
              <Text>{Moment(item.time.dateTime).format('dddd')}</Text>
              <Text>
                {item.time.dateTime.toLocaleDateString()} ás{' '}
                {item.time.formattedTime}
              </Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.itemDetail}>
              <View style={styles.titleLine}>
                <Icon name="map-pin" type="Feather" style={styles.titleIcon} />
                <Text style={styles.titleText}>Local</Text>
              </View>
              <Text style={styles.titleText}>{item.store.nome}</Text>
              <Text>{item.store.location}</Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <Button
              disabled={booking || item.booked}
              onPress={onConfirm}
              text={booking || item.booked ? "Salvando seu pedido..." : "Confirmar" }
              color={Colors.primary}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  item: {
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    ...Shadow,
  },
  itemDetail: {
    marginHorizontal: 10,
    marginVertical: 16,
  },
  bottom: {
    marginHorizontal: 12,
  },
  titleLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleText: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  titleIcon: {
    color: Colors.primary,
    fontSize: 20,
    marginRight: 4,
  },
});
