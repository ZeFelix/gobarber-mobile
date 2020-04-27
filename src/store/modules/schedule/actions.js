import scheduleActions from './actionsType';

export function scheduleRequest(date) {
  return {
    type: scheduleActions.SCHEDULES_REQUET,
    payload: {
      date,
    },
  };
}

export function scheduleSuccess(data) {
  return {
    type: scheduleActions.SCHEDULES_SUCCESS,
    payload: {
      data,
    },
  };
}
