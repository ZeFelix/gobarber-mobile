import actionTypes from './actionTypes';

export function providerRequest() {
  return {
    type: actionTypes.PROVIDE_REQUEST,
  };
}

export function providerDateTimeRequest(provider, date) {
  return {
    type: actionTypes.PROVIDE_DATETIME_REQUEST,
    payload: {
      provider,
      date,
    },
  };
}

export function providerDateTimeSuccess(data) {
  return {
    type: actionTypes.PROVIDE_DATETIME_SUCCESS,
    payload: {
      data,
    },
  };
}

export function providerSuccess(data) {
  return {
    type: actionTypes.PROVIDE_SUCCESS,
    payload: {
      data,
    },
  };
}
