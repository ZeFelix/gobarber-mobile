import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assests/img/logo.png';

import { Background } from '~/components/shared';

import * as S from './styles';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const emailRef = useRef();
  const [name, onChangeNameText] = useState('');
  const [email, onChangeEmailText] = useState('');
  const [password, onChangePasswordText] = useState('');
  const loading = useSelector((state) => state.auth.loading);

  function clearForm() {
    onChangeNameText('');
    onChangeEmailText('');
    onChangePasswordText('');
  }

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
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
            blurOnSubmit={false}
            icon="person-outline"
            onSubmitEditing={() => emailRef.current.focus()}
            placeholder="Digite Nome completo"
            returnKeyType="next"
            value={name}
            onChangeText={(text) => onChangeNameText(text)}
          />
          <S.FormInput
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit={false}
            keyboardType="email-address"
            icon="mail-outline"
            onSubmitEditing={() => passwordRef.current.focus()}
            placeholder="Digite seu email"
            ref={emailRef}
            returnKeyType="next"
            value={email}
            onChangeText={(text) => onChangeEmailText(text)}
          />
          <S.FormInput
            onSubmitEditing={handleSubmit}
            icon="lock-outline"
            placeholder="Digite sua senha"
            ref={passwordRef}
            secureTextEntry
            value={password}
            onChangeText={(text) => onChangePasswordText(text)}
          />
          <S.SubmmitButton onPress={handleSubmit} loading={loading}>
            Criar
          </S.SubmmitButton>
        </S.Form>
        <S.SignLink onPress={() => navigation.navigate('SignIn')}>
          <S.SignLinkText>Ja tenho uma conta</S.SignLinkText>
        </S.SignLink>
      </S.Container>
    </Background>
  );
}
