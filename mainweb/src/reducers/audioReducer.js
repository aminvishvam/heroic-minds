
import {
    SELETED_AUDIO
} from "../actions/types";

const audioReducer = (state = {}, action) => {
  switch (action.type) {
    case SELETED_AUDIO:
        return action.payload;
    default:
      return state;
  }
};

export default audioReducer;
