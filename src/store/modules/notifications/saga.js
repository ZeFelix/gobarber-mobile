import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import actionType from './actionsType';
import { notificationSuccess, notificationSuccessUpdate } from './actions';

import api from '~/services/api';

function* notifiticationRequest() {
  try {
    const response = yield call(api.get, 'notifications');

    yield put(notificationSuccess(response.data));
  } catch (error) {
    const { message } = error.response.data;
    Alert.alert('Notificações', message);
  }
}

function* notifiticationUpdate({ payload }) {
  try {
    const { id, data } = payload;

    yield call(api.put, `notifications/${id}`, data);

    yield put(notificationSuccessUpdate(id, data));
  } catch (error) {
    const { message } = error.response.data;
    Alert.alert('Notificações', message);
  }
}

export default all([
  takeLatest(actionType.NOTIFICATION_REQUEST, notifiticationRequest),
  takeLatest(actionType.NOTIFICATION_REQUEST_UPDATE, notifiticationUpdate),
]);
