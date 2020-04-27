import produce from 'immer';

import actionType from './actionsType';

const initialState = {
  token: {},
  signed: false,
  loading: false,
};

export default function auth(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionType.SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }

      case actionType.SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case actionType.SIGN_OUT_REQUEST: {
        draft.token = null;
        draft.signed = false;
        break;
      }

      case actionType.SIGN_FAILURE: {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
