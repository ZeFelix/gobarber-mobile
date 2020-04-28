import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background } from '~/components/shared';

// import { Container } from './styles';

export default function Dashboard() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      tabBarLabel: 'Agendamentos',
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ color }) => <Icon name="event" size={20} color={color} />,
    });
  }, [navigation]);

  return <Background />;
}
