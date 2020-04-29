import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background } from '~/components/shared';

export default function Profile() {
  return <Background />;
}

export const profileOptions = {
  tabBarLabel: 'Meu perfil',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ color }) => <Icon name="person" size={20} color={color} />,
};
