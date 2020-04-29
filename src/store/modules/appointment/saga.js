import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { appointmentSuccess, appoitementDeleteSuccess } from './actions';
import actionTypes from './actionTypes';

function* appointmentsRequest() {
  try {
    const response = yield call(api.get, '/appointments');

    const { appointments } = response.data;

    yield put(appointmentSuccess(appointments));
    if (!appointments.length) {
      Alert.alert('Agendamentos', 'Não há agendamentos!');
    }
  } catch (error) {
    const { message } = error.response.data;
    Alert.alert('Agendamentos', message || 'Deu merda');
  }
}

function* appointmentsDelete({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/appointments/${id}`);

    yield put(appoitementDeleteSuccess(response.data));
  } catch (error) {
    const { message } = error.ersponse.data;

    Alert.alert('Agendamentos', message || 'Deu merda');
  }
}

export default all([
  takeLatest(actionTypes.APPOINTMENT_REQUEST, appointmentsRequest),
  takeLatest(actionTypes.APPOINTMENT_DELETE_REQUEST, appointmentsDelete),
]);
