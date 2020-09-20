import {
  SECURITY_RENEW_TOKEN,
  SECURITY_SET_TOKEN,
  SECURITY_UNSET_TOKEN,
} from './profile.types';

const INITIAL_STATE = {
  profile: null,
  token: null,
  refreshToken: null,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SECURITY_SET_TOKEN:
      return {
        ...state,
        profile: action.payload.profile,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };

    case SECURITY_RENEW_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };

    case SECURITY_UNSET_TOKEN:
      return {
        ...state,
        profile: null,
        token: null,
        refreshToken: null,
      };

    default:
      return state;
  }
};
