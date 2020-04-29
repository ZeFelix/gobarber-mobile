import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';

import Dashboard, { dashboardOptions } from '~/pages/Dashboard';
import Profile, { profileOptions } from '~/pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function routesUnSigned() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function routesSigned() {
  const tabBarOptions = {
    activeTintColor: '#fff',
    inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
    style: {
      backgroundColor: '#8d41e8',
    },
    keyboardHidesTabBar: true,
  };

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={dashboardOptions}
      />
      <Tab.Screen name="Profile" component={Profile} options={profileOptions} />
    </Tab.Navigator>
  );
}

function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return signed ? routesSigned() : routesUnSigned();
}

export default Routes;
