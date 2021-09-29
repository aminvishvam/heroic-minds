import _ from "lodash";
import { FETCH_ORGS, FETCH_ORG, RESET_ERROR } from "../actions/types";

const orgReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ORGS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_ORG:
      return { ...state, [action.payload._id]: action.payload };
    case RESET_ERROR:
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

export default orgReducer;
