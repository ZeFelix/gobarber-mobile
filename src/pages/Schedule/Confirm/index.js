import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Background } from '~/components/shared';

import { providerSendSchedule } from '~/store/modules/provider/actions';

import * as S from './styles';

export function Confirm({ route, navigation }) {
  const { provider, time } = route.params;
  const dispatch = useDispatch();

  const dateFormated = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  function sourceImage() {
    return provider.avatar
      ? { uri: provider.avatar.url }
      : require('~/assests/img/logo.png');
  }

  function handleSubmit() {
    dispatch(providerSendSchedule(provider, time, navigation));
  }

  return (
    <Background>
      <S.Container>
        <S.Avatar source={sourceImage()} />
        <S.Name>{provider.name}</S.Name>
        <S.Time>{dateFormated}</S.Time>
        <S.SubmitButton onPress={handleSubmit} type="button">
          Confirmar agendamento
        </S.SubmitButton>
      </S.Container>
    </Background>
  );
}

export const confirmOptions = ({ navigation }) => ({
  title: 'Confirmar agendamento',
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
