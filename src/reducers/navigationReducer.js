import { TOGGLE_MENU} from "../actions/types";

const InitialState = {
  isMenuOpen: false,
};

const navigationReducer = (state = InitialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    default:
      return state;
  }
};

export default navigationReducer;