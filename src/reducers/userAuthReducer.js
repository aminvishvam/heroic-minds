import { AUTH_USER, AUTH_VERIFY_EMAIL, AUTH_ERROR, RESET_ERROR } from "../actions/types";

const INITIAL_STATE = {
  authenticated: null,
  errorMessage: null,
  emailVerifyError: null,
};

const userAuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        errorMessage: "",
        emailVerifyError: " ",
        authenticated: action.payload,
      };
    case AUTH_VERIFY_EMAIL:
      return { ...state, errorMessage: "", emailVerifyError: action.payload };
    case AUTH_ERROR:
      return { ...state, emailVerifyError: "", errorMessage: action.payload };
      case RESET_ERROR:
      return { ...state, emailVerifyError: "", errorMessage: '' };
    default:
      return state;
  }
};

export default userAuthReducer;
