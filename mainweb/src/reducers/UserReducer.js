import { USER, FETCH_USER } from "../actions/types";

const INITIAL_STATE = {
    userid: ''
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        userid: action.payload,
      };
    case FETCH_USER:
      return { ...state, [action.payload._id]: action.payload };
    default:

      return state;
  }
};

export default userReducer;
