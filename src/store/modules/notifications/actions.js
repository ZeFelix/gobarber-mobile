import notification from './actionsType';

export function notificationRequest() {
  return {
    type: notification.NOTIFICATION_REQUEST,
  };
}

export function notificationUpdate(id, data) {
  return {
    type: notification.NOTIFICATION_REQUEST_UPDATE,
    payload: {
      id,
      data,
    },
  };
}

export function notificationSuccessUpdate(id, newData) {
  return {
    type: notification.NOTIFICATION_SUCCESS_UPDATE,
    payload: {
      id,
      newData,
    },
  };
}

export function notificationSuccess(data) {
  return {
    type: notification.NOTIFICATION_SUCCESS,
    payload: {
      data,
    },
  };
}
