import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

import userAction from './actionsType';

function checkPassword(rest) {
  let data = {};

  if (rest.password) {
    if (rest.password === rest.confirmPassword) {
      if (rest.oldPassword) {
        data = rest;
      } else {
        // eslint-disable-next-line no-throw-literal
        throw {
          localError: true,
          message:
            'Campo de senha não pode ficar em branco, preencha todos os campos!',
        };
      }
    } else {
      // eslint-disable-next-line no-throw-literal
      throw {
        localError: true,
        message: 'Campos de senha em brancos ou não iguais!',
      };
    }
  }

  return data;
}

function* updateProfile({ payload }) {
  try {
    const { id, name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...checkPassword(rest),
    };

    const response = yield call(api.put, `users/${id}`, profile);

    Alert.alert('Perfil', 'Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    const { message } = error.localError ? error : error.response.data;
    if (message) {
      Alert.alert('Perfil', message);
      return;
    }

    Alert.alert('Perfil', 'Ocorreu um erro');
    yield put(updateProfileFailure());
  }
}

function* updateAvatar({ payload }) {
  try {
    const { file, profile } = payload;

    const response = yield call(api.post, 'files', file);

    const { id, path, url } = response.data;

    const newProfile = { ...profile, avatar: { id, path, url } };

    Alert.alert('Perfil', 'Imagem salva com sucesso');

    yield put(updateProfileSuccess(newProfile));
  } catch (error) {
    const { message } = error.response.data;
    if (message) {
      Alert.alert('Perfil', message);
      return;
    }

    Alert.alert('Perfil', 'Ocorreu um erro');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest(userAction.UPDATE_PROFILE_REQUEST, updateProfile),
  takeLatest(userAction.UPDATE_AVATAR_REQUEST, updateAvatar),
]);
