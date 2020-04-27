import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Routes;
