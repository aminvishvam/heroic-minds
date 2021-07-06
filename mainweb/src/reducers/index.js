import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import orgReducer from "./OrgReducer";
import teamAccessReducer from "./teamAccessReducer";
import toggleRegReducer from "./toggleRegReducer";
import userAuthReducer from "./userAuthReducer";

export default combineReducers({
  form: formReducer,
  teamAcess: teamAccessReducer,
  auth: userAuthReducer,
  toggle: toggleRegReducer,
  org: orgReducer,
});
