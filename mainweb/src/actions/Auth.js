import { AUTH_USER, AUTH_VERIFY_EMAIL, AUTH_ERROR, RESET_ERROR } from "./types";
import authapi from "../api/heroicmindsapi";
import history from "../history";

export const personalRegister = (formValues) => async (dispatch) => {
  try {
    const response = await authapi.post("/api/v1/register", {
      ...formValues,
      accountType: "Personal",
    });
    dispatch({ type: AUTH_VERIFY_EMAIL, payload: response?.data.message });
    history.push("/confirm-register");
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Failed with server error' });
  }
};

export const resetPreviousError = () => (dispatch) => {
  dispatch({ type: RESET_ERROR })
}

export const orgRegister = (formValues) => async (dispatch) => {
  try {
    const response = await authapi.post("/api/v1/register", {
      ...formValues,
      accountType: "Organization",
    });
    dispatch({ type: AUTH_VERIFY_EMAIL, payload: response?.data.message });
    history.push("/confirm-register");
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: e?.response?.data.message });
  }
};

export const login = (formValues) => async (dispatch) => {
  try {
    const response = await authapi.post("/api/v1/login", formValues);

    console.log(response);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    history.push("/library");
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: e?.response?.data?.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await localStorage.removeItem("token");

    dispatch({ type: AUTH_USER, payload: "" });
  } catch (e) {}
  history.push("/login");
};

export const EditProfile = (formValues) => async (dispatch) => {
  // API binding is remaining
  history.push("/");
};
