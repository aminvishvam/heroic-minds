import { TOGGLE_PERSONAL, TOGGLE_ORGANIZATION } from "../actions/types";

const initialState = {
  isPersonalOpen: true,
  isOrganizationOpen: false,
};

const toggleRegReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case TOGGLE_PERSONAL:
      return {
        ...state,
        isPersonalOpen: true,
        isOrganizationOpen: false,
      };
    case TOGGLE_ORGANIZATION:
      return {
        ...state,
        isOrganizationOpen: true,
        isPersonalOpen: false,
      };
    default:
      return state;
  }
};

export default toggleRegReducer;
