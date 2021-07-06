import { AUTH_USER, AUTH_ERROR } from "./types";
import authapi from "../api/heroicmindsapi";

export const personalRegister = (formValues) => async (dispatch) => {
  try {
    const response = await authapi.post("/api/v1/register", {
      ...formValues,
      accountType: "Personal",
    });

   
  } catch (e) {
    console.log(e.message)
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
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
