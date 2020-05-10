import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { providerRequest } from '~/store/modules/provider/actions';

import { Background } from '~/components/shared';

import * as S from './styles';

export function SelectProvider({ navigation }) {
  const dispatch = useDispatch();
  const { data: providers } = useSelector((state) => state.provider);

  useEffect(() => {
    dispatch(providerRequest());
  }, [dispatch]);

  function sourceImage(provider) {
    return provider.avatar
      ? { uri: provider.avatar.url }
      : require('~/assests/img/logo.png');
  }

  return (
    <Background>
      <S.Container>
        <S.ProviderList
          data={providers}
          keyExtractor={(provider) => String(provider.id)}
          renderItem={({ item }) => (
            <S.Provider
              onPress={() =>
                navigation.navigate('SelectDateTime', { provider: item })
              }
            >
              <S.Avatar source={sourceImage(item)} />
              <S.Name>{item.name}</S.Name>
            </S.Provider>
          )}
        />
      </S.Container>
    </Background>
  );
}

export const selectProviderOptions = ({ navigation }) => ({
  title: 'Selecione o Prestador',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
