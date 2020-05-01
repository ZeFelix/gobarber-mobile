import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import user from './user/saga';
import notifications from './notifications/saga';
import schedules from './schedule/saga';
import appointment from './appointment/saga';
import provider from './provider/saga';

export default function* rootSaga() {
  return yield all([
    auth,
    user,
    notifications,
    schedules,
    appointment,
    provider,
  ]);
}
