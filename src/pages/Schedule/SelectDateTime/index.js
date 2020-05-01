import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background, DateInput } from '~/components/shared';

// import { Container } from './styles';

export function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <DateInput date={date} onChange={setDate} />
    </Background>
  );
}

export const SelectDateTimeOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
