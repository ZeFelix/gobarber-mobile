import React from 'react';
import { Image } from 'react-native';

import logo from '~/assests/img/logo.png';

import { Background } from '~/components/shared';

import * as S from './styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <S.Container>
        <Image source={logo} />
        <S.Form>
          <S.FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite Nome completo"
          />
          <S.FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
          />
          <S.FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
          />
          <S.SubmmitButton>Criar</S.SubmmitButton>
        </S.Form>
        <S.SignLink onPress={() => navigation.navigate('SignIn')}>
          <S.SignLinkText>Ja tenho uma conta</S.SignLinkText>
        </S.SignLink>
      </S.Container>
    </Background>
  );
}
