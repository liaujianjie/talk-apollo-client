import { AUTH_LOGIN, AUTH_LOGOUT } from "../actions/auth";

export const INITIAL_STATE = { token: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      const access = action.payload;
      return { ...state, token: access.id };
    case AUTH_LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
};
