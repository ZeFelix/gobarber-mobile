import produce from 'immer';

import authActionType from '~/store/modules/auth/actionsType';
import userActionType from './actionsType';

const initialState = {
  profile: {},
};

export default function user(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case authActionType.SIGN_IN_SUCCESS:
        draft.profile = action.payload.user;
        break;

      case userActionType.UPDATE_PROFILE_SUCCESS:
        draft.profile = action.payload.profile;
        break;

      case authActionType.SIGN_OUT_REQUEST:
        draft.profile = {};
        break;

      default:
    }
  });
}
