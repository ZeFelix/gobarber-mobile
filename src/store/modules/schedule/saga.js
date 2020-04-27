import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import scheduleActionsType from './actionsType';
import { scheduleSuccess } from './actions';

function* scheduleRequest({ payload }) {
  try {
    const { date } = payload;

    const response = yield call(api.get, 'schedules', { params: { date } });
    yield put(scheduleSuccess(response.data));
  } catch (error) {
    const { message } = error.response.data;

    if (message) {
      Alert.alert('Agendamento', message);
      return;
    }

    Alert.alert('Agendamento', 'Aconteceu algum erro');
  }
}

export default all([
  takeLatest(scheduleActionsType.SCHEDULES_REQUET, scheduleRequest),
]);
