import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOutRequest } from '~/store/modules/auth/actions';

import { Background } from '~/components/shared';

import * as S from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.user);

  const emailRef = useRef(null);
  const oldPasswordRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [name, onChangeNameText] = useState(profile.name);
  const [email, onChangeEmailText] = useState(profile.email);
  const [oldPassword, onChangeOldPasswordText] = useState('');
  const [password, onChangePasswordText] = useState('');
  const [confirmPassword, onChangeConfirmPasswordText] = useState('');

  useEffect(() => {
    onChangePasswordText('');
    onChangeConfirmPasswordText('');
    onChangeOldPasswordText('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        id: profile.id,
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleLogout() {
    dispatch(signOutRequest());
  }

  return (
    <Background>
      <S.Container>
        <S.Title>Meu Perfil</S.Title>
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
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            placeholder="Digite seu email"
            ref={emailRef}
            returnKeyType="next"
            value={email}
            onChangeText={(text) => onChangeEmailText(text)}
          />

          <S.Separator />

          <S.FormInput
            onSubmitEditing={() => {
              passwordRef.current.focus();
            }}
            blurOnSubmit={false}
            icon="lock-outline"
            placeholder="Digite sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="next"
            secureTextEntry
            value={oldPassword}
            onChangeText={(text) => onChangeOldPasswordText(text)}
          />
          <S.FormInput
            onSubmitEditing={() => {
              confirmPasswordRef.current.focus();
            }}
            blurOnSubmit={false}
            icon="lock-outline"
            placeholder="Digite sua nova senha"
            ref={passwordRef}
            returnKeyType="next"
            secureTextEntry
            value={password}
            onChangeText={(text) => onChangePasswordText(text)}
          />
          <S.FormInput
            onSubmitEditing={handleSubmit}
            icon="lock-outline"
            placeholder="Confirme a senha"
            ref={confirmPasswordRef}
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => onChangeConfirmPasswordText(text)}
          />
          <S.SubmitButton onPress={handleSubmit} loading={loading}>
            Atualizar Perfil
          </S.SubmitButton>
          <S.LogoutButton onPress={handleLogout}>
            Sair do Gorbarber
          </S.LogoutButton>
        </S.Form>
      </S.Container>
    </Background>
  );
}

export const profileOptions = {
  tabBarLabel: 'Meu perfil',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ color }) => <Icon name="person" size={20} color={color} />,
};
