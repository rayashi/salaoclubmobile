import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { 
  tabBarOptions ,
  screenOptions
} from './TabBarConfigs';
import Search from './pages/search/Search';
import Profile from './pages/profile/Profile';
import Schedule from './pages/schedule/Schedule';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Schedule" component={Schedule} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
