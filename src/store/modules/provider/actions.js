import actionTypes from './actionTypes';

export function providerRequest() {
  return {
    type: actionTypes.PROVIDE_REQUEST,
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
