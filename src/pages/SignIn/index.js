import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assests/img/logo.png';

import { Background } from '~/components/shared';

import * as S from './styles';

export default function SignIn({ navigation }) {
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [email, onChangeEmailText] = useState();
  const [password, onChangePasswordText] = useState();

  const loading = useSelector((state) => state.auth.loading);

  function clearForm() {
    onChangeEmailText('');
    onChangePasswordText('');
  }

  function handleSubmit() {
    dispatch(signInRequest(email, password));
    clearForm();
  }

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
            value={email}
            onChangeText={(text) => onChangeEmailText(text)}
          />

          <S.FormInput
            icon="lock-outline"
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="next"
            secureTextEntry
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={(text) => onChangePasswordText(text)}
          />
          <S.SubmmitButton onPress={handleSubmit} loading={loading}>
            Acessar
          </S.SubmmitButton>
        </S.Form>
        <S.SignLink onPress={() => navigation.navigate('SignUp')}>
          <S.SignLinkText>Criar conta gratuita</S.SignLinkText>
        </S.SignLink>
      </S.Container>
    </Background>
  );
}
