import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ICHome, ICOrder, ICProfile} from '../assets/img';
import {Home, Order, Profile} from '../pages';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarIcon: ({focused}: any) => {
          let iconName: any;
          if (route.name === 'Home') {
            iconName = focused ? (
              <ICHome color="#FFC700" />
            ) : (
              <ICHome color="#E2E2E2" />
            );
          } else if (route.name === 'Order') {
            iconName = focused ? (
              <ICOrder color="#FFC700" />
            ) : (
              <ICOrder color="#E2E2E2" />
            );
          } else if (route.name === 'Profile') {
            iconName = focused ? (
              <ICProfile color="#FFC700" />
            ) : (
              <ICProfile color="#E2E2E2" />
            );
          }
          return iconName;
        },
        headerShown: false,
        tabBarLabel: '',
        tabBarStyle: {paddingVertical: 16},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
