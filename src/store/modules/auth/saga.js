import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';
import actionType from './actionsType';

// import history from '~/services/history';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { user, token } = response.data;

    if (user.provider) {
      Alert.alert('Login', 'Usuário não é prestador');
    } else {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      yield put(signInSuccess(token, user));
      // history.push('/dashboard');
    }
  } catch (error) {
    const { message } = error.response.data;
    Alert.alert('Login', message);
    yield put(signFailure());
  }
}

function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    // history.push('/');
  } catch (error) {
    const { message } = error.response.data;
    Alert.alert('Cadastro', message);
    yield put(signFailure());
  }
}

// eslint-disable-next-line require-yield
function* setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
}

function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(actionType.SIGN_IN_REQUEST, signIn),
  takeLatest(actionType.SIGN_UP_SUCCESS, signUp),
  takeLatest(actionType.SIGN_OUT_REQUEST, signOut),
]);
