import produce from 'immer';
import actionTypes from './actionTypes';

const initialState = {
  data: [],
};

export default function provider(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.PROVIDE_SUCCESS:
        draft.data = action.payload.data;
        break;

      default:
        break;
    }
  });
}
