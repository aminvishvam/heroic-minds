import {CREATE_SUBSCRIPTION, OPEN_BILLING, ERROR_MESSAGE} from "./types";
import paymentapi from "../api/heroicmindsapi";

export const create_Subscription = (formValues) => async (dispatch) => {
    try {
      const response = await paymentapi.post("/create-checkout-session", {
        ...formValues,
      });
      dispatch({ type: CREATE_SUBSCRIPTION, payload: response });
    } catch (e) {
      dispatch({ type: ERROR_MESSAGE, payload: 'Failed with server error' });
    }
  };