import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {tabBarOptions, screenOptions} from './TabBarConfigs';
import Search from './pages/search/Search';
import Profile from './pages/profile/Profile';
import Schedule from './pages/schedule/Schedule';
import Auth from './pages/auth/Auth';
import Store from './pages/store/Store';
import Professionals from './pages/professionals/Professionals';
import TimePicker from './pages/timepicker/TimePicker';
import Checkout from './pages/checkout/Checkout';
import Loading from './pages/loading/Loading';

const OrderStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="Professionals" component={Professionals} />
    </Stack.Navigator>
  );
};

const HomeTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Order" component={OrderStack} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" headerMode="none">
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="TimePicker" component={TimePicker} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
