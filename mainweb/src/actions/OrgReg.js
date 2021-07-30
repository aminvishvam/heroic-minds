import org from "../api/heroicmindsapi";
// import history from "../history";
import { FETCH_ORGS, FETCH_ORG } from "./types";

export const fetchOrgs = () => async (dispatch) => {
  const response = await org.get("/api/v1/org");

  dispatch({ type: FETCH_ORGS, payload: response.data });
};

export const fetchOrg = (_id) => async (dispatch) => {
  const response = await org.get(`/api/v1/Org/${_id}`);

  dispatch({ type: FETCH_ORG, payload: response.data });
};
