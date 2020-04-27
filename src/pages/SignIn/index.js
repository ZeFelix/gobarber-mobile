import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '~/assests/img/logo.png';

import { Background } from '~/components/shared';

import * as S from './styles';

export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit() { }

  return (
    <Background>
      <S.Container>
        <Image source={logo} />
        <S.Form>
          <S.FormInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="mail-outline"
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            keyboardType="email-address"
          />

          <S.FormInput
            icon="lock-outline"
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="next"
            secureTextEntry
            onSubmitEditing={handleSubmit}
          />
          <S.SubmmitButton onPress={handleSubmit}>Acessar</S.SubmmitButton>
        </S.Form>
        <S.SignLink onPress={() => navigation.navigate('SignUp')}>
          <S.SignLinkText>Criar conta gratuita</S.SignLinkText>
        </S.SignLink>
      </S.Container>
    </Background>
  );
}
