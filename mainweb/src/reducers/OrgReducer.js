import _ from "lodash";
import { FETCH_ORGS, FETCH_ORG } from "../actions/types";

const orgReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ORGS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_ORG:
      return { ...state, [action.payload._id]: action.payload };
    default:
      return state;
  }
};

export default orgReducer;
