import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background } from '~/components/shared';
import Appointment from '~/components/Appoitments';

import * as S from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      tabBarLabel: 'Agendamentos',
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ color }) => <Icon name="event" size={20} color={color} />,
    });
  }, [navigation]);

  return (
    <Background>
      <S.Container>
        <S.Title>Agendamentos</S.Title>
        <S.List
          data={data}
          renderItem={({ item }) => <Appointment data={item} />}
          keyExtractor={(item) => String(item)}
        />
      </S.Container>
    </Background>
  );
}
