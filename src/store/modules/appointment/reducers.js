import produce from 'immer';
import actionTypes from './actionTypes';

const initialState = {
  data: [],
};

export default function appointment(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.APPOINTMENT_SUCCESS:
        draft.data = action.payload.data;
        break;

      case actionTypes.APPOINTMENT_DELETE_SUCCESS: {
        const { data } = state;
        const appointmentCanceled = action.payload.data;

        draft.data = data.map((item) =>
          item.id === appointmentCanceled.id
            ? { ...item, canceled_at: appointmentCanceled.canceled_at }
            : item
        );
        break;
      }

      default:
        break;
    }
  });
}
