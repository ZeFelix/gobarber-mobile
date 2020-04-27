import React from 'react';
import { Image } from 'react-native';

import logo from '~/assests/img/logo.png';

import { Background } from '~/components/shared';

import * as S from './styles';

export default function SignIn() {
  return (
    <Background>
      <S.Container>
        <Image source={logo} />
        <S.Form>
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
          <S.SubmmitButton>Acessar</S.SubmmitButton>
        </S.Form>
        <S.SignLink>
          <S.SignLinkText>Criar conta gratuita</S.SignLinkText>
        </S.SignLink>
      </S.Container>
    </Background>
  );
}
