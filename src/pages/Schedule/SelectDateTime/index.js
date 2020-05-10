import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { providerDateTimeRequest } from '~/store/modules/provider/actions';

import { Background, DateInput } from '~/components/shared';

import * as S from './styles';

export function SelectDateTime({ route, navigation }) {
  const dispacth = useDispatch();
  const { hoursData } = useSelector((state) => state.provider);
  const [date, setDate] = useState(new Date());
  const { provider } = route.params;

  useEffect(() => {
    dispacth(providerDateTimeRequest(provider, date.getTime()));
  }, [dispacth, provider, date]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', { provider, time });
  }

  return (
    <Background>
      <S.Container>
        <DateInput date={date} onChange={setDate} />
        <S.HoursList
          data={hoursData}
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <S.Hour
              onPress={() => handleSelectHour(item.value)}
              enabled={item.isAvailable}
            >
              <S.Title>{item.time}</S.Title>
            </S.Hour>
          )}
        />
      </S.Container>
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
