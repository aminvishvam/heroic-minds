import { AUTH_USER, AUTH_VERIFY_EMAIL, AUTH_ERROR } from "./types";
import authapi from "../api/heroicmindsapi";
// import history from "../history";

export const personalRegister = (formValues) => async (dispatch) => {
  try {
    const response = await authapi.post("/api/v1/register", {
      ...formValues,
      accountType: "Personal",
    });
    dispatch({ type: AUTH_VERIFY_EMAIL, payload: response.data.message });
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: e.response.data.message });
  }
};

export const orgRegister = (formValues) => async (dispatch) => {
  try {
    const response = await authapi.post("/api/v1/register", {
      ...formValues,
      accountType: "Organization",
    });
    dispatch({ type: AUTH_VERIFY_EMAIL, payload: response.data.message });
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: e.response.data.message });
  }
};
export const login = (formProps, callback) => async (dispatch) => {
  try {
    const response = await authapi.post("/api/v1/login", formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid : Email or Password" });
  }
};

export const logout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: "",
  };
};
