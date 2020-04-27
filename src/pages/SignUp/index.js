import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '~/assests/img/logo.png';

import { Background } from '~/components/shared';

import * as S from './styles';

export default function SignUp({ navigation }) {
  const passwordRef = useRef();
  const emailRef = useRef();

  function handleSubmit() { }

  return (
    <Background>
      <S.Container>
        <Image source={logo} />
        <S.Form>
          <S.FormInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="person-outline"
            onSubmitEditing={() => emailRef.current.focus()}
            placeholder="Digite Nome completo"
            returnKeyType="next"
          />
          <S.FormInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            icon="mail-outline"
            onSubmitEditing={() => passwordRef.current.focus()}
            placeholder="Digite seu email"
            ref={emailRef}
            returnKeyType="next"
          />
          <S.FormInput
            onSubmitEditing={handleSubmit}
            icon="lock-outline"
            placeholder="Digite sua senha"
            ref={passwordRef}
            secureTextEntry
          />
          <S.SubmmitButton onPress={handleSubmit}>Criar</S.SubmmitButton>
        </S.Form>
        <S.SignLink onPress={() => navigation.navigate('SignIn')}>
          <S.SignLinkText>Ja tenho uma conta</S.SignLinkText>
        </S.SignLink>
      </S.Container>
    </Background>
  );
}
