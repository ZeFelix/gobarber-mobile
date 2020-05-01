import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background } from '~/components/shared';

// import { Container } from './styles';

export function SelectDateTime() {
  return <Background />;
}

export const SelectDateTimeOptions = ({ navigation }) => ({
  title: 'Selecione a Agenda',
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
