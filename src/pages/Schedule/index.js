import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export * from './Confirm';
export * from './SelectDateTime';
export * from './SelectProvider';

export const scheduleOptions = {
  tabBarVisible: false,
  tabBarLabel: 'Agendar',
  tabBarIcon: () => (
    <Icon
      name="add-circle-outline"
      size={20}
      color="rgba(255, 255, 255, 0.6)"
    />
  ),
};

export const scheduleScreenOptions = () => ({
  headerTransparent: true,
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    marginLeft: 20,
  },
});
