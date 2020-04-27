import produce from 'immer';

import actionType from './actionsType';

const initialState = {
  data: [],
};

export default function schedule(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionType.SCHEDULES_SUCCESS:
        draft.data = action.payload.data;
        break;

      default:
    }
  });
}
