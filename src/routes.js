import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';

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
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}

function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return signed ? routesSigned() : routesUnSigned();
}

export default Routes;
