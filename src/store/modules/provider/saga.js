import { Alert } from 'react-native';
import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '~/services/api';

import actionTypes from './actionTypes';
import { providerSuccess, providerDateTimeSuccess } from './actions';

function* providerRequest() {
  try {
    const response = yield call(api.get, '/providers');

    yield put(providerSuccess(response.data));
  } catch (error) {
    const { message } = error.response.data;

    if (message) {
      Alert.alert('Provider', message);
    } else {
      Alert.alert('Provider', 'Deu merda');
    }
  }
}

function* providerDateTimeRequest({ payload }) {
  try {
    const { provider, date } = payload;
    const response = yield call(
      api.get,
      `/providers/${provider.id}/available`,
      { params: { date } }
    );

    yield put(providerDateTimeSuccess(response.data));
  } catch (error) {
    const { message } = error.response.data;

    if (message) {
      Alert.alert('Provider', message);
    } else {
      Alert.alert('Provider', 'Deu merda');
    }
  }
}

export default all([
  takeLatest(actionTypes.PROVIDE_REQUEST, providerRequest),
  takeLatest(actionTypes.PROVIDE_DATETIME_REQUEST, providerDateTimeRequest),
]);
