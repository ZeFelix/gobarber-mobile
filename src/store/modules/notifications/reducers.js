import produce from 'immer';

import actionType from './actionsType';

const initialState = {
  data: [],
  newData: {},
};

export default function notifications(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionType.NOTIFICATION_SUCCESS: {
        draft.data = action.payload.data;
        break;
      }

      case actionType.NOTIFICATION_SUCCESS_UPDATE: {
        const { id, newData } = action.payload;
        const { data } = state;
        draft.data = data.map((item) => (item._id === id ? newData : item));
        break;
      }

      default:
    }
  });
}
