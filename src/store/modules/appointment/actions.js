import actionTypes from './actionTypes';

export function appointmentRequest() {
  return {
    type: actionTypes.APPOINTMENT_REQUEST,
  };
}

export function appointmentSuccess(data) {
  return {
    type: actionTypes.APPOINTMENT_SUCCESS,
    payload: {
      data,
    },
  };
}
export function appoitementDeleteRequest(id) {
  return {
    type: actionTypes.APPOINTMENT_DELETE_REQUEST,
    payload: { id },
  };
}

export function appoitementDeleteSuccess(data) {
  return {
    type: actionTypes.APPOINTMENT_DELETE_SUCCESS,
    payload: {
      data,
    },
  };
}
