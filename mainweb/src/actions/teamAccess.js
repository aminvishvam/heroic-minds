import teamAccess from "../api/heroicmindsapi";
import history from "../history";
import { CREATE_TEAM } from "./types";

export const createTeamAccess = (formValues) => async (dispatch) => {
  
  const response = await teamAccess.post("/api/v1/teamaccess", {
    ...formValues,
  })  
  dispatch({ type: CREATE_TEAM, payload: response.data });
  history.push("/");
};
