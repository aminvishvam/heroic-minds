import { USER, FETCH_USER } from "../actions/types";

const INITIAL_STATE = {
userId: null,
user: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        userId: action.payload,
      };
    case FETCH_USER:{
      return {
        ...state,
        user: action.payload,
      };
    }
    default:

      return state;
  }
};

export default userReducer;
