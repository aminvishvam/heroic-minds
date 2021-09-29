
import { CREATE_TEAM } from "../actions/types";

const teamAccessReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TEAM:
      return { ...state, [action.payload._id]: action.payload };

    default:
      return state;
  }
};

export default teamAccessReducer;
