import { AUTH_USER, AUTH_VERIFY_EMAIL, AUTH_ERROR } from "../actions/types";

const INITIAL_STATE = {
  authenticated: null,
  errorMessage: null,
  emailVerifyError: null,
};

const userAuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_VERIFY_EMAIL:
      return { ...state, errorMessage: '', emailVerifyError: action.payload };
    case AUTH_ERROR:
      return { ...state, emailVerifyError: '', errorMessage: action.payload };
    default:
      return state;
  }
};

export default userAuthReducer;
